(function() {
	'use strict';
	angular.module('ShoppingListCheckOff', []).controller('ToBuyController',
			ToBuyController).controller('AlreadyBoughtController',
			AlreadyBoughtController).service('ShoppingListCheckOffService',
			ShoppingListCheckOffService);

	ToBuyController.$inject = [ 'ShoppingListCheckOffService' ];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuyController = this;
		toBuyController.items = ShoppingListCheckOffService.getToBuyItems();
		toBuyController.checkOff = function(itemIndex) {
			ShoppingListCheckOffService.removeToBuyItem(itemIndex)
		};
	}

	AlreadyBoughtController.$inject = [ 'ShoppingListCheckOffService' ];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var alreadyBoughtController = this;
		alreadyBoughtController.items = ShoppingListCheckOffService
				.getAlreadyBoughtItems();
	}

	function ShoppingListCheckOffService() {
		var service = this;

		var toBuyItems = [ {
			name : "arroz",
			quantity : "2 kilos"
		}, {
			name : "azucar",
			quantity : "3 kilos"
		}, {
			name : "leche",
			quantity : "1 litro"
		}, {
			name : "fideos",
			quantity : "1 kilo"
		}, {
			name : "manzanas",
			quantity : "0.5kilos"
		} ];
		var alreadyBoughtItems = [];

		service.removeToBuyItem = function(itemIdex) {
			alreadyBoughtItems.push(toBuyItems[itemIdex])
			toBuyItems.splice(itemIdex, 1);
		};

		service.getToBuyItems = function() {
			return toBuyItems;
		};

		service.getAlreadyBoughtItems = function() {
			return alreadyBoughtItems;
		};
	}

})();
