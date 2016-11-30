var express = require('express');
var router = express.Router();

// Require Article Model
var Article = require('../models/article');

/* GET ALL Articles. */
router.get('/', function(req, res, next) {
	Article.getArticles(function(err, articles){
		if(err){
			console.log(err);
		}
		res.json(articles);
	});
});

// (module.exports) getArticleById = function(id, callback)
router.get('/:id', function(req, res, next) {
	Article.getArticleById(req.params.id, function(err, article){
		if(err){
			console.log(err);
		}
		res.json(article);
	});
});

// (module.exports) getArticlesByCategory - CASE SENSITIVE :category
router.get('/category/:category', function(req, res, next) {
	Article.getArticlesByCategory(req.params.category, function(err, article){
		if(err){
			console.log(err);	
		}
		res.json(article);
	});
});


module.exports = router;
