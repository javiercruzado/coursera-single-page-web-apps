(function() {
	'use strict';
	angular.module('Data').service('MenuDataService', MenuDataService)
			.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

	MenuDataService.$inject = [ '$http', 'ApiBasePath' ];
	function MenuDataService($http, ApiBasePath) {
		var menuDataService = this;
		menuDataService.getAllCategories = function() {
			var response = $http({
				method : "GET",
				url : (ApiBasePath + "/categories.json")
			});
			return response;
		};
		menuDataService.getItemsForCategory = function(categoryShortName) {
			console.log("search by category short name:", categoryShortName);
			var response = $http({
				method : "GET",
				url : (ApiBasePath + "/menu_items.json"),
				params : {
					"category" : categoryShortName
				}
			});
			return response;
		};
	}
})();
