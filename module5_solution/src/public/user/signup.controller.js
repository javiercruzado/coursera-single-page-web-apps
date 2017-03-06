(function() {
	"use strict";

	angular.module('public').controller('SignUpController', SignUpController);

	SignUpController.$inject = [ 'MenuDataService' ];
	function SignUpController(MenuDataService) {
		var signUp = this;
		signUp.saved = false;
		signUp.submit = function() {
			console.log("submiting form");
			console.log("user.shortName:"+signUp.user.shortName);
			
			var promise = MenuDataService.getItemsForCategory(signUp.user.shortName);
			promise.then(function (response) {
				signUp.serverError = false;
				console.log("response:", response);
				signUp.items = response;				
				console.log("user:", signUp.user)
				MenuDataService.saveUserData(signUp.user, response.data);
				signUp.saved = true;
			})
			.catch(function (error) {
				signUp.serverError = true;
				console.log("Server error: ", error);
			});	
		};
		
	}

})();
