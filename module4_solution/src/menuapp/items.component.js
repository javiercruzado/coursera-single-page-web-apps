(function() {
	'use strict';
	angular.module('MenuApp').component('itemList', {
		templateUrl : 'src/menuapp/templates/items.html',
		bindings : {
			items : '<',
			title : '@title'
		}
	});

})();