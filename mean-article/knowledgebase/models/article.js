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
	},
	debit: {
		type: String,
		default: 0
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
// Add new SINGLE Article
module.exports.createArticle = function(newArticle, callback){
	newArticle.save(callback);
}
// Update existing SINGLE Article
module.exports.updateArticle = function(id, data, callback){
	var title 		= data.title;
	var body 		= data.body;
	var category 	= data.category;

	var query = {_id: id};
	Article.findById(id, function(err, article){
		if(!article){
			// If no article: return error
			return next(new Error('Could not load article'));
		} else {
			// If article exists: update it
			article.title 		= title;
			article.body 		= body;
			article.category 	= category;

			article.save(callback);
		}
	});
}

// Remove Article
module.exports.removeArticle = function(id, callback){
	Article.find({_id: id}).remove(callback);
}

