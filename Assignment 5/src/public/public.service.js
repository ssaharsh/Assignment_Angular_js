(function () {
  'use strict';


  angular.module('public')
  .service('DataService' , DataService);

  DataService.$inject = ['$http','ApiPath'];

  function DataService($http , ApiPath) {
    var service = this;
    service.firstname = "";
    service.lastname = "";
    service.phone = "";
    service.email = "";

    service.shortname = "";
    service.description= "";
    service.title= "";

    service.setInfo = function (firstname,lastname,email,phone) {
      service.firstname = firstname;
      service.lastname = lastname;
      service.phone = phone;
      service.email = email;
    };


    service.setDataInfo = function (shortname,description,title) {
      service.shortname = shortname;
      service.description = description;
      service.title = title;
    }


    service.getName = function () {
      return service.firstname + " " + service.lastname;
    };
    service.getEmail = function () {
      return service.email;
    };
    service.getPhone = function () {
      return service.phone;
    };


    service.getShortName = function () {
      return service.shortname;
    };
    service.getDescription = function () {
      return service.description;
    }
    service.getTitle = function () {
      return service.title;
    }


    service.getItems = function () {
      return $http.get(ApiPath + '/menu_items.json').then(function (response) {
        return response.data;
      });
  }

}


})();
