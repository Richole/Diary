var domain = require('domain');
exports.use = function (app, log) {
    app.use(function (req, res, next) {
        var reqDomain = domain.create();
        console.log(`${req.method}: ${req.path}`);
        reqDomain.on('error', function (err) {
            // 下面抛出的异常在这里被捕获
            var errorType = 500;
            console.error(err.stack);
            log.logger.error(err.stack);
            res.send(errorType, err.stack); // 成功给用户返回了 500
        });
        reqDomain.run(next);
    });
};
