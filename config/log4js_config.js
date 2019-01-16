/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

module.exports = {
  appenders: {
    default: {
      type: 'console',
      category: 'default'
    },
    info: {
      type: 'dateFile',
      filename: 'logs/info',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      category: 'http'
    },
    error: {
      type: 'dateFile',
      filename: 'logs/error',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      category: 'http'
    },
    access: {
      type: 'dateFile',
      filename: 'logs/access',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      category: 'http'
    }
  },
  categories: {
    default: {
      appenders: [
        'default'
      ],
      level: 'DEBUG'
    },
    access: {
      appenders: [
        'default',
        'access'
      ],
      level: 'INFO'
    },
    error: {
      appenders: [
        'default',
        'error'
      ],
      level: 'INFO'
    },
    info: {
      appenders: [
        'default',
        'info'
      ],
      level: 'INFO'
    }
  }
};
