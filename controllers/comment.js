var fs = require('fs');
var path = require('path');
var Models = require('../models');

module.exports = {
	index: function(req, res) {
		//find comments and send them as a viewmodel
		var viewModel = Models.Comment.find(function(err, comments) {
			res.render('comments', {"comments": comments});
		});
	},
	create: function(req, res) {
		//save a new comment
		
		var comment = new Models.Comment({
			comment: req.body.comment
		});

		comment.save(function(err, newComment) {
			res.redirect('/comments');
		});
		
	}
};