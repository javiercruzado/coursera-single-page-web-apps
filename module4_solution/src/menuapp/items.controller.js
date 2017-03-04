(function() {
	'use strict';
	angular.module('MenuApp').controller('ItemsController', ItemsController);

	ItemsController.$inject = [ 'items', '$stateParams'];
	function ItemsController(items, $stateParams) {
		var itemsController = this;
		itemsController.items = items.data.menu_items;
		itemsController.title = "Items - Category selected:"
				+ $stateParams.ItemId;
		// console.log("data items: ", items);
		// console.log("data items count: ", itemsController.items.length)
	}
	// MenuAppController.$inject = [ 'categories' ];
	// function MenuAppController(categories) {
	// var appController = this;
	// appController.categories = categories;
	// }
	// MenuAppController.$inject = [ 'MenuDataService' ];
	// function MenuAppController(MenuDataService) {
	// var appController = this;
	// console.log("appController:", appController);
	// appController.title = "Categories";
	// appController.getCategories = function() {
	// console.log("function:", "categories");
	// var promise = MenuDataService.getAllCategories();
	// promise.then(
	// function (response) {
	// console.log("data service response.", response);
	// appController.categories = response.data;
	// console.log("categories:", appController.categories);
	//
	// })
	// .catch(function (error) {
	// console.log("Something went wrong when getting the categories.");
	// });
	//
	// }
	// appController.getCategories();
	// }

})();
