/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

const moment = require('moment');

module.exports = async (ctx, next) => {
  const now = Date.now();
  const logger = [];
  await next();
  const date = new Date();
  const time = `[${moment(date).format('YYYY-MM-DD hh:mm:ss')}]`;
  logger.push(time, 'PM2', `[${ctx.header.host}]`, `[${process.pid}]`, `[HTTP/${ctx.req.httpVersion}]`);
  logger.push(ctx.method, ctx.url, ctx.status, date - now, 'ms');
  logger.push(ctx.ip, ctx.referrer || '-', '-');
  logger.push(ctx.query._caller || ctx.request.body._caller || '-');
  // logger.push(ctx.header['X-Request-Id'] || ctx.query.requestid || '-');
  console.log(logger.join(' '));
};
