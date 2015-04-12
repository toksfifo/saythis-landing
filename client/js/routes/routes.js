app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'client/templates/home.html',
			controller: 'HomeCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);