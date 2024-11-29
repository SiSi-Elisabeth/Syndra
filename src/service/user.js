const {appid, secret, code2session} = require('@/config/default');
const qs = require('querystring');
const axios = require('axios').default;
class UserService {
  // 获取openid
  async getOpenid( code ) {
    const query = qs.stringify({
      appid,
      secret,
      js_code: code,
      grant_type: 'authorization_code'
    })
    const res = await axios.get(`${code2session}?${query}`)
    console.log(res)
  }
}
module.exports = UserService; // 导出不能new，因为不是直接挂载到路由上的