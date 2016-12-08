angular.module('LoginMod').controller('LoginCtrl', ['$scope', '$http', 'toastr', function($scope, $http, $toastr){
	console.log('Login Controller initialized');

	$scope.runLogin = function(){
		console.log('Login Submitted');
		$http.put('/login', {
			email: $scope.email,
			password: $scope.password
		}).then(function onSuccess(){
			console.log('Login Passed!');
			window.location = '/dashboard';
		}).catch(function onError(err){
			if(err.status == 400 || 404){
				toastr.error('Invalid Login', 'Error', {
					closeButton: true
				});
				return;
			}
			toastr.error('Error, try again', 'Error', {
					closeButton: true
				});
			return;
		})
	}
}]);