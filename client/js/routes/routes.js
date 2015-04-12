app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'client/templates/home.html',
			controller: 'HomeCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});

	// remove default angular # in URL
	// $locationProvider.html5Mode({
	// 	enabled: true
	// });

}]);