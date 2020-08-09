(function () {
  'use strict';

  angular.module('public')
  .controller('SignUpController' , SignUpController);

  SignUpController.$inject = ['$rootScope','DataService','items']
  function SignUpController($rootScope,DataService,items) {
    var signUpCtrl = this;
    signUpCtrl.items = items;
    signUpCtrl.index = "";

    signUpCtrl.shortname = "";
    signUpCtrl.description = "";
    signUpCtrl.title="";

    signUpCtrl.submit = function () {
        signUpCtrl.completed = true;

        for (var i = 0; i < signUpCtrl.items.menu_items.length; i++) {
          if (signUpCtrl.items.menu_items[i].short_name === signUpCtrl.user.favdish) {
            signUpCtrl.mes1 = "Success!!!";

            signUpCtrl.shortname = signUpCtrl.items.menu_items[i].short_name;
            signUpCtrl.description = signUpCtrl.items.menu_items[i].description;
            signUpCtrl.title = signUpCtrl.items.menu_items[i].name;

          }
          else {
            signUpCtrl.mes2 = "Invalid Dish number";
          }
        }

        DataService.setInfo(signUpCtrl.user.firstname,signUpCtrl.user.lastname,signUpCtrl.user.email,signUpCtrl.user.phone);
        DataService.setDataInfo(signUpCtrl.shortname,signUpCtrl.description,signUpCtrl.title);

    };






  };



})();
