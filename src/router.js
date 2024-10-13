import Router from '@koa/router';
import user from './controller/user.js';

const router = new Router();

// 用户相关
router.post('/wxlogin',user.wxLogin);

export default router;