(function() {
	'use strict';
	angular.module('LunchCheck', []).controller('LunchCheckCtrl',
			LunchCheckCtrl);
	LunchCheckCtrl.$inject = [ '$scope' ];

	function LunchCheckCtrl($scope) {

		$scope.lunchMenuText = "";
		$scope.lunchMenuTextMessage = "";

		$scope.checkIfTooMuch = function() {
			var arrayOfStrings = $scope.lunchMenuText.split(',');
			if (arrayOfStrings.length > 3) {
				$scope.lunchMenuTextMessage = "Too much!";
			} else {
				if (arrayOfStrings.length == 1 && arrayOfStrings[0] == '') {
					$scope.lunchMenuTextMessage = "Please enter data first";
				} else {
					$scope.lunchMenuTextMessage = "Enjoy!";
				}
			}
		}
	}

})();
