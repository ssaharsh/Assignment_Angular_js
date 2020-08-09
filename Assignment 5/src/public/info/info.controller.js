(function () {
  'use strict';

  angular.module('public')
  .controller('InfoController' , InfoController);

  InfoController.$inject = ['DataService','items'];

  function InfoController(DataService,items) {
    var infoCtrl = this;
    infoCtrl.name = DataService.getName();
    infoCtrl.email = DataService.getEmail();
    infoCtrl.phone = DataService.getPhone();
    
    infoCtrl.shortname = DataService.getShortName();
    infoCtrl.desc = DataService.getDescription();
    infoCtrl.dishname =DataService.getTitle();

  };
})();
