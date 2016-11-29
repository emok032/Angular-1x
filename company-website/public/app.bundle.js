webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var app = angular.module('myApp', ['ngRoute',
	      __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./main.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	      __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./about.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	      __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./contact.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	      __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./services.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	  ])

	.config(['$routeProvider', function($routeProvider){
	  $routeProvider.
	    when('/main', {
	      templateUrl: 'main.html',
	      controller: 'MainCtrl'
	    }).
	    when('/about', {
	      templateUrl: 'about.html',
	      controller: 'AboutCtrl'
	    }).
	    when('/contact', {
	      templateUrl: 'contact.html',
	      controller: 'ContactCtrl'
	    }).
	    when('/services', {
	      templateUrl: 'services.html',
	      controller: 'ServicesCtrl'
	    }).otherwise({redirectTo:'/main'})
	}])

	.controller('MainCtrl', ['$scope', function($scope){
	  
	}])

	.controller('AboutCtrl', ['$scope', function($scope){
	}])

	.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
	  $http.get('locations.json').then(function(response){
	    $scope.locationsList = response.data;
	  });
	}])

	.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
	  $http.get('services.json').then(function(response){
	    $scope.servicesList = response.data;
	  });
	}]);





/***/ }
]);