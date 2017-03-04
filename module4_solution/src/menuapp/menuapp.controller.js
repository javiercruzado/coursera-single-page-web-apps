(function() {
	'use strict';
	angular.module('MenuApp')
			.controller('MenuAppController', MenuAppController);

	MenuAppController.$inject = [ 'categories' ];
	function MenuAppController(categories) {
		var appController = this;
		appController.title = "Choose one category to see its items"
		appController.categories = categories.data;
		console.log("data: ", categories)
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
