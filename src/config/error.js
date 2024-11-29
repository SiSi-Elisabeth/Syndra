const logger = require('@/logger')
// 捕获错误的中间件
const errorHandler = async(ctx,next)=>{
  try {
    await next();
    logger.info(`输出日志：${ctx.method} ${ctx.url}`)
  } catch(errorData) {
    logger.error(`错误, ${errorData}`);
    const error =  errorData.message || '异常错误，请查看服务器端日志';
    const status = errorData.status || errorData.statusCode || 500;
    ctx.send(null, status, '服务器端异常错误', error);
  }
}
module.exports = errorHandler;