angular.module('DashMod').controller('DashCtrl', ['$scope', '$http', 'toastr', function($scope, $http, $toastr){
	console.log('Dashboard Controller initialized');
	$scope.getUser = function() {
		console.log('Getting User...');

		$http.get('/getuser')
			.then(function onSuccess(user){
				$scope.user = user.data;
			})
			.catch(function onError(err){
				console.log(err);
			})
	}
}]);