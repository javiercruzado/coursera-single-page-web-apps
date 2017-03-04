(function() {
	'use strict';
	angular.module('MenuApp').component('categoriesList', {
		templateUrl : 'src/menuapp/templates/categories.html',
		controller : CategoriesController,
		bindings : {
			items : '<',
			title : '@title'
		}
	});

	function CategoriesController() {
		var $ctrl = this;		
	}

})();