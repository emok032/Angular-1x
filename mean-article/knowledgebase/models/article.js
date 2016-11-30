var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
	title: {
		type: String,
		index: true,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	category: {
		type: String,
		index: true,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

var Article = module.exports = mongoose.model('Article', articleSchema);

// Allowing below functions to be called externally

// Get ALL Articles
module.exports.getArticles = function(callback){
	Article.find(callback);
}
// Get SINGLE Article
module.exports.getArticleById = function(id, callback){
	Article.findById(id, callback);
}
// Get ALL CATEGORY'S Articles
module.exports.getArticlesByCategory = function(category, callback){
	var query = {category: category}
	Article.find(query, callback);
}
