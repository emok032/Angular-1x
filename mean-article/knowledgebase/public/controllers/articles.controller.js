angular.module("mainApp")

.controller('ArticlesCtrl', ['$scope','$http', function($scope, $http){
	$http.get('/articles').success(function(data){
		$scope.articles = data;
		console.log(data);
	});
}])


.controller('ArticlesCategoryCtrl', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('/articles/category/' + $routeParams.category).success(function(data){
		$scope.cat_doughnuts = data;
		$scope.category = $routeParams.category;
	});
}])

.controller('ArticleDetailsCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	$http.get('/articles/' + $routeParams.id).success(function(data){
		$scope.article = data;
	});

	$scope.removeArticle = function(){
		$http.delete('/articles/' + $routeParams.id).success(function(data){
			console.log("removeArticle data: " + data);
		});

		$location.path('/articles');
	}
}])

.controller('ArticlesCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	$http.get('/categories').success(function(data){
		$scope.categories = data;
	});

	$scope.slider = {
	  value: 150,
	  options: {
	    floor: 0,
	    ceil: 300,
	    enforceStep: false
	  }
	};

	$scope.addArticle = function(){

		var data = {
			title: 		$scope.title,
			category: 	$scope.category,
			body: 		$scope.body,
			debit: 		$scope.slider.value
		}
		console.log("addArticle: " + data.debit);

		$http.post('/articles', data).success(function(data, status){
			console.log("Status: " + status);
			console.log("POST Data: " + data);
		});

		$location.path('/articles');
	}
	
}])

.controller('ArticlesEditCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	$http.get('/categories').success(function(data){
		$scope.categories = data;
	});

	$http.get('/articles/' + $routeParams.id).success(function(data){
		$scope.article = data;
	});

	$scope.updateArticle = function(){
		var data = {
			id: 		$routeParams.id,
			title: 		$scope.article.title,
			category: 	$scope.article.category,
			body: 		$scope.article.body
		}

		$http.put('/articles', data).success(function(data, status){
			console.log(status);
		});

		$location.path('/articles');
	}
}]);