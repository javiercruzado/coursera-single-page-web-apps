(function() {
"use strict";

angular.module('common', [])
			.constant(
					'ApiPath',
					'https://javiercruzado.github.io/coursera-single-page-web-apps/module5_solution')
//.constant('ApiPath', 'http://localhost:3000')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
