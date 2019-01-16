/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

const config = require('../config/response_code.js');

function fail(errno, errmsg, data) {
  const errnoType = typeof errno;
  errmsg = errmsg || '';
  if (errnoType === 'object') {
    return errno;
  }
  if (errnoType === 'undefined') {
    data = '';
  }
  if (errnoType === 'string') {
    const errData = config[errno] || config.COMMON_ERROR;
    return {
      errno: errData.errno,
      errmsg: errData.errmsg || errmsg,
      data: data
    };
  }
  return {
    errno: errno,
    errmsg: errmsg,
    data: data
  };
}

function success(data) {
  return {
    errno: 0,
    errmsg: '',
    data: data
  };
}

module.exports = {
  fail: fail,
  success: success
};
