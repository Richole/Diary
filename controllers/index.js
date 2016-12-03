exports.index = function (request, response, next) {
    response.render('layout', { title: 'Express' });
};