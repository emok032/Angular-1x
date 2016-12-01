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

// Get ALL Categories
module.exports.getCategories = function(callback){
	Category.find(callback);
}
// Get SINGLE Category
module.exports.getCategoryById = function(id, callback){
	Category.findById(id, callback);
}

// Get ALL CATEGORY'S Articles
module.exports.getArticlesByCategory = function(category, callback){
	var query = {category: category}
	Category.find(query, callback);
}
// Add new SINGLE Category
module.exports.createCategory = function(newCategory, callback){
	newCategory.save(callback);
}
// Update existing SINGLE Category
module.exports.updateCategory = function(id, data, callback){
	var name = data.name;
	var description = data.description;

	var query = {_id: id};
	Category.findById(id, function(err, category){
			if(!category){
				return next(new Error('Could not load a category'));
			} else {
				category.name	= name;
				category.description = category;

				article.save(callback);
			}
		}
	);
}

// Remove Category
module.exports.removeCategory = function(id, callback){
	Category.find({_id: id}).remove(callback);
}