class UserController {
  //用户登录
  async wxLogin(ctx) {
    
    const { name, age } = ctx.request.body;
    console.log(name, age);
    ctx.body = '登录成功'
  }
}
module.exports = new UserController();