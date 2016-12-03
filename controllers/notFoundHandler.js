var log = require('../modals/log');
module.exports = function (request, response, next) {
    var error_text = 'NOT FOUND: ' + request.path,
        error_status = 404;
    console.error(error_text);
    log.logger.error(error_text);
    response.status(error_status);
    response.render('error');
};
