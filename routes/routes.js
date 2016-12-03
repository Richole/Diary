var express = require('express'),
    router = express.Router(),

    index = require('../controllers/index'),
    demo = require('../controllers/demo'),
    notFoundHandler = require('../controllers/notFoundHandler'),
    crossDomain = require('../controllers/crossDomain');

//跨域请求支持情况
router.all('*', crossDomain);

//请求处理
router.get('/', index.index);

//react demo
router.get('/demo', demo.react);

//跳转到404页面
router.get('*', notFoundHandler);

module.exports = router;
