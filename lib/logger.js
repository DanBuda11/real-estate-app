/*eslint strict:0 */
'use strict';
let bunyan = require('bunyan');
let configLoader = require('co-env');
let path = require('path');
let config = configLoader(path.join(__dirname, '../config'));
module.exports = bunyan.createLogger(config.logging);
