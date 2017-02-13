(function() {
	'use strict';
	angular.module('NarrowItDownApp', []).controller('NarrowItDownController',
			NarrowItDownController).service('MenuSearchService',
			MenuSearchService).constant('ApiBasePath',
			"http://davids-restaurant.herokuapp.com").directive('foundItems',
			FoundItems);

	 function FoundItems() {
	 var ddo = {
	 templateUrl: 'menuItems.html',
	 scope: {
		 found: '<',
		 onRemove: '&'
	 },
	 controller: NarrowItDownController,
	 controllerAs: 'list',
	 bindToController: true
	 };
	
	 return ddo;
	 }

	
	NarrowItDownController.$inject = [ 'MenuSearchService' ];
	
	function NarrowItDownController(MenuSearchService) {

		var searchListCtrl = this;
		
		searchListCtrl.getMatchedMenuItems = function(searchTerm) {	

			var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
			promise.then(function (response) {
				searchListCtrl.found = response;
			})
			.catch(function (error) {
				console.log("Something went terribly wrong.");
			});
		};

		searchListCtrl.removeItem = function (itemIndex) {
			console.log("index", itemIndex);
			searchListCtrl.found.splice(itemIndex, 1);
			console.log("size", searchListCtrl.found.length);
			console.log("found", searchListCtrl.found);
		};		
	}

	MenuSearchService.$inject = [ '$http', 'ApiBasePath' ];
	function MenuSearchService($http, ApiBasePath) {

		var menuService = this;		

		menuService.getMatchedMenuItems = function(searchTerm) {
			return $http({
				method : "GET",
				url : (ApiBasePath + "/menu_items.json")
			})
					.then(
							function(result) {								
								var foundItems = result.data.menu_items
										.filter(function(element) {
											return element.description.toUpperCase()
													.indexOf(searchTerm.toUpperCase()) !=-1;
										});
								console.log("foundItems", foundItems);
								return foundItems;
							});
		};
		
	}

})();