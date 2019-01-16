/*
 * @Author: Tianyu
 * @Email: tianyu8125@163.com
 * @Date: 2018/06/27
 * @Last Modified by: Tianyu
 * @Last Modified time: 2018/06/27
 */

'use strict';

const moment = require('moment');
const Logger = require('../lib/log4js');

const log = new Logger('service', 'index');

const getData = async () => {
  log.log('This is an console log.');
  log.info('This is an info log.');
  log.error('This is an err log.');
  const re = moment().format('YYYY-MM-DD');
  return re;
};

module.exports = {
  getData
};
