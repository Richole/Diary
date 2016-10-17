var log = require('../modals/log');
module.exports = function (request, response, next) {
  var error_text = 'NOT FOUND: ' + request.path;
  console.error(error_text);
  log.logger.error(error_text);
  response.status(404);
  response.render('error');
};
