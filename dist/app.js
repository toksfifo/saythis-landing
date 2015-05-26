var app = angular.module('saythisApp', ['ngRoute', 'ngAnimate']);
app.directive('scroll', ['$window', function($window) {
	
	return {
		link: link
	};

	function link(scope, elem, attrs) {

		angular.element($window).on('scroll', function() {

			var break1 = Math.max(this.innerHeight, 480);

			if (this.pageYOffset <= break1) {
				scope.fixed = false;
				scope.bottom = false;
			} else if (this.pageYOffset > break1 && this.pageYOffset < break1 + 960) {
				scope.fixed = true;
				scope.bottom = false;
			} else {
				scope.fixed = false;
				scope.bottom = true
			}

			scope.$apply();

		});

	}

}]);
app.controller('HomeCtrl', ['$scope', function($scope) {

	init();

	function init() {
		$scope.showHomeContent = true;
	}

}]);
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