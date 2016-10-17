var express = require('express');
var router = express.Router();

var index = require('../controllers/index');
var notFoundHandler = require('../controllers/notFoundHandler');
var crossDomain = require('../controllers/crossDomain');

//跨域请求支持情况
router.all('*', crossDomain);
//

//请求处理
router.get('/', index.index);
router.get('/users', index.users);
router.post('/users', index._users);
//



//跳转到404页面
router.get('*', notFoundHandler);
//

module.exports = router;
