import Koa from 'koa';
import json from 'koa-json'; // 将 http 响应的数据转化为json格式
import bodyParser from 'koa-bodyparser'; // 解析 http 请求的消息体
import cors from '@koa/cors'; //跨域
import router from  './router.js';

const app = new Koa();

app.use(json());
app.use(bodyParser());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, ()=>{
  console.log('server success, http://127.0.0.1:3001');
})