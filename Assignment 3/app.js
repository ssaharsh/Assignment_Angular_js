(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller("NarrowItDownController",NarrowItDownController)
.service("MenuSearchService",MenuSearchService)
.directive("foundItems",FoundItemsDirective);

  function FoundItemsDirective() {
    var  ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      }
    };
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.items = [];
    menu.searchTerm="";

    menu.searchMenu = function (searchTerm) {
        menu.items =  MenuSearchService.getMatchedMenuItems(searchTerm);

    }


    menu.removeItem = function (index) {
    menu.items.$$state.value.splice(index,1);
    }
  };

  MenuSearchService.$inject = ['$http','$filter'];
  function MenuSearchService($http , $filter) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method:"GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (response) {
        var list = []
        var foundItem = response.data.menu_items;
        for (var i = 0; i < foundItem.length; i++) {
        if((foundItem[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) & (searchTerm.length>0)){
              list.push(foundItem[i]);

        }
        }
        return list
      });
    }
  }


})();
