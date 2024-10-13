const Router = require('@koa/router');
const user = require('@/controller/user');

const router = new Router();

// 用户相关
router.post('/wxlogin',user.wxLogin);

module.exports = router;