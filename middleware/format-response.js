/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

const formatResponse = require('../lib/format_response');

module.exports = async (ctx, next) => {
  ctx.formatResFail = (...args) => {
    return formatResponse.fail(...args);
  };
  ctx.formatResSuccess = (...args) => {
    return formatResponse.success(...args);
  };
  await next();
};
