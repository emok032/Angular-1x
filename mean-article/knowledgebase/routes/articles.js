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

router.post('/', function(req, res, next){
	// GET form values
	var title		= req.body.title;
	var category 	= req.body.category;
	var body		= req.body.body;
	var debit		= req.body.debit;

	// Article Object
	var newArticle = new Article({
		title: title,
		category: category,
		body: body,
		debit: req.body.debit
	});

	// Create Article
	Article.createArticle(newArticle, function(err, article){
		if(err){
			console.log(err);
		}
		res.location('/articles');
		res.redirect('/articles');
	});
});

router.put('/', function(req, res, next){
	var id = req.body.id;
	var data = {
		title: req.body.title,
		category: req.body.category,
		body: req.body.body,
		debit: req.body.debit
	};

	Article.updateArticle(id, data, function(err, article){
		if(err){
			console.log(err);
		}

		res.location('/articles');
		res.redirect('/articles');
	});
});

router.delete('/:id', function(req, res, next){
	var id = req.params.id;

	//  Create Article
	Article.removeArticle(id, function(err, article){
		if(err){
			console.log(err);
		}

		res.location('/articles');
		res.redirect('/articles');
	});
});


module.exports = router;
