var express = require('express');
var router = express.Router();

// Require Category Model
var Category = require('../models/category');

/* GET ALL Categories. */
router.get('/', function(req, res, next) {
	Category.getCategories(function(err, categories){
		if(err){
			console.log(err);
		}
		res.json(categories);
	});
});

// (module.exports) getCategoryById = function(id, callback)
router.get('/:id', function(req, res, next) {
	Category.getCategoryById(req.params.id, function(err, category){
		if(err){
			console.log(err);
		}
		res.json(category);
	});
});

// POST new Category to Database
router.post('/', function(req, res, next){
	var name = req.body.name;
	var description = req.body.description;

	var newCategory = new Category({
		name: name,
		description: description
	});

	Category.createCategory(newCategory, function(err, category){
		if(!category){
			console.log(err);
		}

		res.location('/categories');
		res.redirect('/categories');
	});
});

// PUT updates for specific Category in Database
router.put('/:id', function(req, res, next){
	var id = req.params.id;

	var data = {
		name: req.body.name,
		desription: req.body.description
	};

	Category.updateCategory(id, data, function(err, category){
		if(err){
			console.log(err);
		}

		res.location('/category');
		res.redirect('/category');
	});
})

// DELETE a Category from the Database
router.delete('/:id', function(req, res, next){
	var id = req.params.id;

	Category.removeCategory(id, function(err, category){
			if(err){
				console.log(err);
			}

			res.location('/category');
			res.redirect('/category');
		}
	);
});

module.exports = router;