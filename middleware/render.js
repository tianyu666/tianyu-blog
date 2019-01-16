/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

const Promise = require('bluebird');
const path = require('path');
const ejs = require('ejs');

const ext = '.html';
const dir = path.resolve(__dirname, '../views/');

function render(filename, data, options) {
  return new Promise((resolve, reject) => {
    ejs.renderFile(filename, data, options, (err, str) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(str);
    });
  });
}

module.exports = async (ctx, next) => {
  ctx.render = (filename, data) => {
    filename = path.resolve(dir, filename, filename + ext);
    return render(filename, data || {}, {});
  };
  await next();
};
