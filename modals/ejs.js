var ejs = require('ejs');
exports.use = function(app, path) {
  app.set('views', path);
  app.engine('.html', ejs.__express);
  app.set('view engine', 'html');
}
