var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name: {
		type: String,
		index: true,
		required: true
	},
	description: {
		type: String
	}
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// Allowing below functions to be called externally

// Get ALL Articles
module.exports.getCategories = function(callback){
	Category.find(callback);
}
// Get SINGLE Article
module.exports.getCategoryById = function(id, callback){
	Category.findById(id, callback);
}

// Get ALL CATEGORY'S Articles
module.exports.getArticlesByCategory = function(category, callback){
	var query = {category: category}
	Category.find(query, callback);
}

module.exports.createCategory = function(newCategory, callback){
	newCategory.save(allback);
}

