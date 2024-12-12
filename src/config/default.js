const  dotenv = require('dotenv');

dotenv.config();

const config = {
  weixin: {
    appid: process.env.APP_ID, 
    secret: process.env.APP_SECRET,
    code2session: 'https://api.weixin.qq.com/sns/jscode2session',
  },
  zhipu: {
    apiKey: process.env.API_KEY
  }
  
}
module.exports = config