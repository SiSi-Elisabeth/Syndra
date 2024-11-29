const User = require('@/model/user');
const dayjs = require('dayjs');
const { v4: uuidv4 } = require('uuid');
const UserService = require('@/service/user');
class UserController {
  //用户登录
  async wxLogin(ctx) {
    const { nickname, avatar, code } = ctx.request.body;
    // await User.create({nickname, avatar, openid: uuidv4(), createTime: dayjs().format('YYYY-MM-DD HH:mm:ss')})
    // 获取openid
    await new UserService().getOpenid(code);
    console.log(await new UserService().getOpenid(code))
    // await User.create()
  }
}
module.exports = new UserController();