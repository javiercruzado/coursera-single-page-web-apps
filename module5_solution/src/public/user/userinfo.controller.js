(function() {
	"use strict";

	angular.module('public').controller('UserInfoController', UserInfoController);

	UserInfoController.$inject = [ 'MenuDataService' ];
	function UserInfoController(MenuDataService) {
		var userInfoController = this;
		
		userInfoController.getUser = function() {
			return MenuDataService.getUser();
		};
		
		userInfoController.getItem = function() {
			return MenuDataService.getItem();			
		}
		
	}

})();
