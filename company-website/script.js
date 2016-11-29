var app = angular.module("computer", ['ngRoute'])

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

.controller('ContactCtrl', ['$scope', function($scope){
  $http.get('locations.json').then(function(response){
    $scope.locationsList = response.data;
  });
}])

.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('services.json').then(function(response){
    $scope.servicesList = response.data;
  });
}]);


