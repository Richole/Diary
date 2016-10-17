module.exports = function (require, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  response.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  response.header("X-Powered-By",' 3.2.1')
  next();
};
