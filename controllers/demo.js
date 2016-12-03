exports.react = (request, response, next) => {
    response.render('demo', { title: 'React' });
};
