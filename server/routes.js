//pull in our controllers
var home = require('../controllers/home');
var comment = require('../controllers/comment');

module.exports.initialize = function(app, router) {
	//****handle browser requests for content (index and comment page)
	//*****handle post routes (like the form submission)
	app.get('/', home.index);
	app.get('/comments', comment.index);
	app.post('/comments', comment.create);

	app.use('/', router);
};