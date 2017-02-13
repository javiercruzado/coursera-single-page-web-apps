(function() {
	'use strict';
	angular.module('NarrowItDownApp', []).controller('NarrowItDownController',
			NarrowItDownController).service('MenuSearchService',
			MenuSearchService).constant('ApiBasePath',
			"http://davids-restaurant.herokuapp.com").directive('foundItems',
			FoundItems);

// function FoundItems() {
// var ddo = {
// template : '<li> {{ item.name }} , description: {{ item.description }} </li>'
// };
//
// return ddo;
// }
//	
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

// function FoundItems() {
// var ddo = {
// templateUrl: 'menuItems.html',
// scope: {
// list: '<'
// }
// };
//
// return ddo;
// }
	
	NarrowItDownController.$inject = [ 'MenuSearchService' ];
	
	function NarrowItDownController(MenuSearchService) {

		var searchListCtrl = this;
		
		searchListCtrl.getMatchedMenuItems = function(searchTerm) {
			// searchListCtrl.menuItems = MenuSearchService
			// .getMatchedMenuItems(searchTerm);
			// searchListCtrl.menuItems = promise.foundItems;

			var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
			
			 promise.then(function (response) {
				 console.log("response: ",response);
			 var fullMenu = response;
			 searchListCtrl.found = response;
			 // searchListCtrl.menuItems = response.data.menu_items;
			 console.log("menuItems: ",searchListCtrl.found);
			 })
			 .catch(function (error) {
			 console.log("Something went terribly wrong.");
			 });
		};

		searchListCtrl.messageToConsole = function() {
			console.log("from method messageToConsole ", "jjojo");
		};
		
		searchListCtrl.removeItem = function (itemIndex) {		    
		    searchListCtrl.found.splice(itemIndex, 1);
		    console.log(searchListCtrl.found.length);
		  };
		
		// var promise = MenuSearchService.getMenuItemsFromServer();
		//
		// promise.then(function (response) {
		// searchListCtrl.menuItems = response.data.menu_items;
		// })
		// .catch(function (error) {
		// console.log("Something went terribly wrong.");
		// });

		// searchListCtrl.getMatchedMenuItems = function(searchTerm) {
		//
		// var promise = MenuSearchService.getMenuItemsFromServer();
		//
		// promise.then(function (response) {
		// var fullMenu = response.data.menu_items;
		// searchListCtrl.menuItems = fullMenu.filter( function( element ) {
		// return element.name.indexOf(searchTerm)>1;
		// });
		// // searchListCtrl.menuItems = response.data.menu_items;
		// })
		// .catch(function (error) {
		// console.log("Something went terribly wrong.");
		// });
		//
		// console.log("getMatchedMenuItems called with parameter: ",
		// searchTerm);
		// // this.found = MenuSearchService.getMenuItems();
		// console.log("result: ", this.menuItems);
		// // return searchListCtrl.found;
		// };


	}

	MenuSearchService.$inject = [ '$http', 'ApiBasePath' ];
	function MenuSearchService($http, ApiBasePath) {

		var menuService = this;		

		menuService.getMatchedMenuItems = function(searchTerm) {

			// var promise = this.getMenuItemsFromServer();
			// promise.then(function (response) {
			// var fullMenu = response.data.menu_items;
			// console.log("date returned by Server: ",
			// fullMenu);re
			// var foundItems = fullMenu.filter( function( element ) {
			// return element.name.indexOf(searchTerm)>1;
			// });
			//				
			// console.log("date returned Matched: ",
			// foundItems);
			//				
			// return foundItems;
			// })
			// .catch(function (error) {
			// console.log("Something went terribly wrong.");
			// });

			return $http({
				method : "GET",
				url : (ApiBasePath + "/menu_items.json")
			})
					.then(
							function(result) {
								// process result and only keep items that match
								
								console.log("date returned by Server: ",result.data.menu_items);
								
								var foundItems = result.data.menu_items
										.filter(function(element) {
											return element.name
													.indexOf(searchTerm) !=-1;
										});

								// return processed items
								console.log("foundItems: ",foundItems);
								return foundItems;
							});

		};
		
		// https://davids-restaurant.herokuapp.com/menu_items.json.

		// menuService.getMenuItems = function () {
		// var promise = menuService.getMenuItemsFromServer();
		//			
		// promise.then(function (response) {
		// console.log("date returned by Server: ",
		// response.data);
		// return response.data;
		// })
		// .catch(function (error) {
		// console.log(error);
		// })
		//			
		// };

// menuService.getMenuItemsFromServer = function() {
// var response = $http({
// method : "GET",
// url : (ApiBasePath + "/menu_items.json")
// });
//
// return response;
// };
	}

})();