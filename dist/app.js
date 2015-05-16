var app = angular.module('saythisApp', ['ngRoute']);
app.controller('HomeCtrl', ['$scope', function($scope) {

	init();

	function init() {
		var splashContent = document.getElementsByClassName("splash-content")[0];
		TweenLite.to(splashContent, 2, {
			opacity: 1,
			ease: Power2.easeInOut
		});
	}

}]);
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