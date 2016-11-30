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

module.exports = router;