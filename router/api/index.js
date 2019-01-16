/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

const Router = require('koa-66');
const cms = require('../../service/cms');

const router = new Router();

router.get('/', async (ctx, next) => {
  const res = await cms.test();
  ctx.body = {
    path: ctx.path,
    query: ctx.query,
    api: true,
    res: res
  };
  await next();
});

module.exports = router;
