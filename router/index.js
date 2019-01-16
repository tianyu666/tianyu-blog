/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

const Router = require('koa-66');
const Service = require('../service/index');

const router = new Router();

router.mount('/api', require('./api/index.js'));

router.get('/', async (ctx, next) => {
  const date = await Service.getData();

  ctx.body = await ctx.render('index', {
    path: ctx.path,
    query: ctx.query,
    data: date
  });
  await next();
});

module.exports = router.routes();
