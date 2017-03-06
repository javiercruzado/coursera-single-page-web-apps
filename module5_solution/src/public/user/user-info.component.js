(function () {
"use strict";

angular.module('public')
.component('userInfo', {
  templateUrl: 'src/public/user/user-info.html',
  bindings: {
    user: '<',
    item: '<'
  },
  controller: UIController

});

UIController.$inject = ['ApiPath'];
function UIController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
