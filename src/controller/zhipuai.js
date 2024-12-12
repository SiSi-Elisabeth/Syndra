const { ZhipuAI } = require('zhipuai-sdk-nodejs-v4');
const { apiKey } = require('@/config/default').zhipu;
const Validate  = require('@/validate/index');
const ai = new ZhipuAI({apiKey});
class ZhipuaiController {
  async createCompletions(ctx) { 
    const { messages } = ctx.request.body;
    await Validate.isArrayCheck(messages, '缺少对话信息','messages')
    const data = await ai.createCompletions({
      model: "glm-4-plus",
      messages: [
        {"role": "user", "content": "最近举行的奥运会情况如何"},
      ],
      stream: true, 
      tools: [
        {
          type:'web_search',
          web_search: {
            "enable": true,
            search_result: true 
          }
        }
      ]
    });
    ctx.status = 200;
    // ctx.send(data);
    // 遍历异步可迭代对象
    // @ts-ignore
    for await(const chunk of data) {
      // console.log('chunk', chunk.toString());
      // 将数据逐个写入到http响应中
      ctx.res.write(chunk);
    }
    
    // console.log('data', data);
  }
}

module.exports = new ZhipuaiController();