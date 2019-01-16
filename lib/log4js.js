/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

const log4js = require('log4js');
const logconfig = require('../config/log4js_config.js');

log4js.configure(logconfig);

const logConf = { projectName: 'template' };

class Console {
  constructor(logType, logTag) {
    this.type = logType;
    this.tag = logTag;
  }

  log(...msg) {
    const event = `${logConf.projectName}-${this.type}-${this.tag}-log:`;
    msg.unshift(event);
    console.log(...msg);
  }

  info(...msg) {
    const event = `${logConf.projectName}-${this.type}-${this.tag}-info:`;
    msg.unshift(event);
    log4js.getLogger('info').info(...msg);
    console.log(...msg);
  }

  error(...msg) {
    const event = `${logConf.projectName}-${this.type}-${this.tag}-error:`;
    msg.unshift(event);
    log4js.getLogger('error').info(...msg);
    console.log(...msg);
  }
}

function log(logType, logTag) {
  return new Console(logType, logTag);
}

module.exports = log;
