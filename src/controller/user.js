const User = require('@/model/user');
const dayjs = require('dayjs');
const UserService = require('@/service/user');
class UserController {
  //用户登录
  async wxLogin(ctx) {
    const { nickname, avatar, code } = ctx.request.body;
    console.log('zheli',nickname, avatar, code)
    // 获取openid
    const openid = await new UserService().getOpenid(code);
    // 查询数据库是否已存在用户信息，存在就返回用户数据，不存在就存储
    const userInfo = await User.findOne({where: {openid}});
    console.log('userInfo',userInfo);
    if(!userInfo) {
      await User.create({nickname, avatar, openid, createTime: dayjs().format('YYYY-MM-DD HH:mm:ss')});
    }
  }
}
module.exports = new UserController();