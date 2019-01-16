/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

const Koa = require('koa');

const app = new Koa();

// 内容处理
app.use(require('./middleware/format-response.js'));
// 解析 body 数据
app.use(require('./middleware/body.js'));
// 记录请求数据
app.use(require('./middleware/reponse-time.js'));
// 模板渲染中间件
app.use(require('./middleware/render.js'));
// 路由
app.use(require('./middleware/router.js'));
// 静态资源目录
app.use(require('./middleware/static.js'));

module.exports = app;
