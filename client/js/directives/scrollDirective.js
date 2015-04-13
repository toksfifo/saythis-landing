app.directive('scroll', ['$window', function($window) {
	
	return {
		link: link
	};

	function link(scope, elem, attrs) {

		angular.element($window).on('scroll', function() {

			scope.show = {};

			var break1 = Math.max(this.innerHeight, 480);

			var redDiv = document.getElementsByClassName("phone-image")[0];
			var greenDiv = document.getElementsByClassName("phone-image")[1];
			var yellowDiv = document.getElementsByClassName("phone-image")[2];

			// set stickiness
			if (this.pageYOffset <= break1) {
				scope.fixed = false;
				scope.bottom = false;
			} else if (this.pageYOffset > break1 && this.pageYOffset < break1 + 1120) {
				scope.fixed = true;
				scope.bottom = false;
			} else {
				scope.fixed = false;
				scope.bottom = true
			}

			// set image
			if (this.pageYOffset <= break1 + 280) {
				if (!scope.show.red) {
					scope.show.red = true;
					scope.show.green = false;
					scope.show.yellow = false;
				}
			} else if (this.pageYOffset > break1 + 280 && this.pageYOffset < break1 + 280 + 560) { 
				if (!scope.show.green) {
					scope.show.green = true;
					scope.show.red = false;
					scope.show.yellow = false;
				}
			} else {
				if (!scope.show.yellow) {
					scope.show.yellow = true;
					scope.show.red = false;
					scope.show.green = false;
				}
			}

			scope.$apply();

		});

	}

}]);