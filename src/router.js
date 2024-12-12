const Router = require('@koa/router');
const user = require('@/controller/user');
const zhipu = require('@/controller/zhipuai');

const router = new Router();

// 登录接口
router.post('/wxlogin',user.wxLogin);
// 文生文
router.post('/create-completions',zhipu.createCompletions);

module.exports = router;