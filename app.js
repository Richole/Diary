var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var ejs = require('./modals/ejs');
var log = require('./modals/log');
var domain = require('./modals/domain');

var routes = require('./routes/routes');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); // 请求cookie处理插件
app.use(express.static(path.join(__dirname, 'public'))); // 静态文件处理
ejs.use(app, path.join(__dirname, 'views')); // 引用esj模板插件
log.use(app); // 引用日志插件
domain.use(app, log); // 异常抛出处理，日志记录
app.use('/', routes); // 请求路由分配

module.exports = app;
