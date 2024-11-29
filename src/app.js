const Koa = require('koa');
const json = require('koa-json'); // 将 http 响应的数据转化为json格式
const bodyParser = require('koa-bodyparser'); // 解析 http 请求的消息体
const cors = require('@koa/cors'); //跨域
const  { addAlias } = require('module-alias'); // 这里使用的单数别名
addAlias('@', __dirname); // 注意单数和复数使用方法的区别，去npm查看
const router = require('@/router');
// 统一接口响应数据格式：中间件
const responseHandler = require('@/config/result');
//捕获错误中间件
const errorHandler = require('@/config/error');

const app = new Koa();

app.use(json());
app.use(bodyParser());
app.use(cors());
app.use(responseHandler);
app.use(errorHandler);
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, ()=>{
  console.log('server success, http://127.0.0.1:3001');
})