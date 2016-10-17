var domain = require('domain');
exports.use = function (app, log) {
  app.use(function (req, res, next) {
    console.log(`${req.method}: ${req.path}`);
    var reqDomain = domain.create();
    reqDomain.on('error', function (err) { // 下面抛出的异常在这里被捕获
      console.error(err.stack);
      log.logger.error(err.stack);
      res.send(500, err.stack); // 成功给用户返回了 500
    });
    reqDomain.run(next);
  });
}
