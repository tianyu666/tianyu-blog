/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

const server = require('koa-static');
const path = require('path');

const dir = path.resolve(__dirname, '../views/');

module.exports = server(dir, {
  index: false
});
