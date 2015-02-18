var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

//*****Create and export the Comment Schema
var CommentSchema = new Schema({
	commment: { type: String },
	timestamp: { type: Date, 'default': Date.now }
});

CommentSchema.virtual('commentID')
	.get(function() {
		return this._id;
	});

module.exports = mongoose.model('Comment', CommentSchema);