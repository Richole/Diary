exports.index = function (request, response, next) {
  response.render('layout', { title: 'Express' });
};

exports.users = function (request, response, next) {
  response.send('respond with a resource');
  response.end();
}

exports._users = function (request, response, next) {
  console.log(request);
  response.json({success: true});
}
