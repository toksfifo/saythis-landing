app.controller('HomeCtrl', ['$scope', function($scope) {

	init();

	function init() {
		var splashContent = document.getElementsByClassName("splash-content")[0];
		TweenLite.to(splashContent, 2, {
			opacity: 1,
			ease: Power2.easeOut
		});
	}

}]);