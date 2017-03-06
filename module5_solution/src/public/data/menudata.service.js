(function() {
	'use strict';
	angular.module('public').service('MenuDataService', MenuDataService)
			.constant('ApiBasePath', "https://jacruzadoc.herokuapp.com");

	MenuDataService.$inject = [ '$http', 'ApiBasePath' ];
	function MenuDataService($http, ApiBasePath) {
		var menuDataService = this;

		menuDataService.getItemsForCategory = function(categoryShortName) {
			console.log("search by category short name:", categoryShortName);
			var response = $http({
				method : "GET",
				url : (ApiBasePath + "/menu_items/" + categoryShortName + ".json")
			});
			return response;
		};
		menuDataService.saveUserData = function(user, item) {
			menuDataService.user = user;
			menuDataService.item = item;
			console.log("user:", menuDataService.user);
			console.log("item:", menuDataService.item);
		}
		
		menuDataService.getItem = function() {
			return menuDataService.item;
		}
		
		menuDataService.getUser = function() {
			return menuDataService.user;
		}

	}
})();
