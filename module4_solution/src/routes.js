(function() {
	'use strict';
	angular.module('MenuApp').config(RoutesConfig);

	RoutesConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];
	function RoutesConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		// Set up UI states
		$stateProvider.state('home', {
			url : '/',
			templateUrl : 'src/menuapp/templates/home.template.html'
		}).state('home.categories', {
			url : '/categories',
			templateUrl : 'src/menuapp/templates/categories.template.html',
			controller : 'MenuAppController as appController',
			resolve : {
				categories : [ 'MenuDataService', function(MenuDataService) {
					return MenuDataService.getAllCategories();
					   } ]
			},function(err){
			      return err;
		    }
		}).state('home.categories.items', {
			url : '/{ItemId}',
			templateUrl : 'src/menuapp/templates/items.template.html',
			controller: 'ItemsController as itemsController',	
			 resolve : {
			 items: ['$stateParams', 'MenuDataService', function ($stateParams,
			 MenuDataService) {
			 return MenuDataService.getItemsForCategory($stateParams.ItemId);
			 }]
			 },
			function(err){
			      return err;
		    }
		});
	}
})();