/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

const fs = require('fs');
const path = require('path');

const read = (root, file) => {
  return new Promise((resolve, reject) => {
    const jsonPath = path.resolve(root, file);
    fs.readFile(jsonPath, (err, resp) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(resp);
    });
  });
};

const parse = (promise, type, defaultReturn) => {
  return new Promise((resolve) => {
    function fallback() {
      resolve(defaultReturn);
    }
    promise
      .then((data) => {
        switch (type) {
        case 'string':
          resolve(data.toString());
          break;
        case 'json':
          try {
            resolve(JSON.parse(data.toString()));
          } catch (e) {
            fallback();
          }
          break;
        default:
          resolve(data);
        }
      })
      .catch(() => {
        fallback();
      });
  });
};

const readFile = (dir, file, opt) => {
  const readFilePromise = read(dir, file);
  if (typeof opt === 'undefined') {
    opt = {};
  }
  return parse(readFilePromise, opt.type, opt.return);
};

module.exports = {
  test: () => {
    const dir = path.resolve(__dirname, '../');
    const file = 'package.json';
    return readFile(dir, file, {
      type: 'json',
      return: {}
    });
  }
};
