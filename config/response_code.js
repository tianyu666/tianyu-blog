/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

module.exports = {
  SUCCESS: {
    errno: 0,
    errmsg: ''
  },
  REFER_ERROR: {
    errno: 199,
    errmsg: 'refer invalid'
  },
  USER_NOT_LOGIN: {
    errno: 200,
    errmsg: 'user not login'
  },
  TOKEN_ERROR: {
    errno: 201,
    errmsg: 'token error'
  },
  PARAM_ERROR: {
    errno: 202,
    errmsg: 'parameter error'
  },
  MYSQL_ERROR: {
    errno: 203,
    errmsg: 'system error'
  },
  REDIS_ERROR: {
    errno: 203,
    errmsg: 'system error'
  },
  DB_ERROR: {
    errno: 203,
    errmsg: 'system error'
  },
  COMMON_ERROR: {
    errno: 205,
    errmsg: ''
  },
  USER_NOT_EXIST: {
    errno: 206,
    errmsg: '用户不存在'
  },
  GET_SMS_ERROR: {
    errno: 207,
    errmsg: '验证码出错'
  },
  SMS_CODE_OUTDATED: {
    errno: 208,
    errmsg: '验证码过期'
  },
  SMS_CODE_ERROR: {
    errno: 209,
    errmsg: '验证码错误'
  },
  NO_CALLER: {
    errno: 210,
    errmsg: '参数不包含 caller'
  },
  TIMEOUT: {
    errno: 211,
    errmsg: 'response 超时'
  },
  STOP: {
    errno: 212,
    errmsg: '接口停用'
  }
};
