(function () {
  'use strict'

  angular.module("ShoppingListCheckOff",[])
  .controller("ToBuyController",ToBuyController)
  .controller("AlreadyBoughtController",AlreadyBoughtController)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;

    buy.buyitems = ShoppingListCheckOffService.getbuyItems();

    buy.boughtItem = function (index) {
      ShoppingListCheckOffService.boughtItem(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.boughtItem = ShoppingListCheckOffService.getboughtItems();

  }


  function ShoppingListCheckOffService() {
    var service = this;
    var buyitems = [
      {
        name:"Cookies",
        quantity:10
      },
      {
        name:"Drinks",
        quantity:3
      },
      {
        name:"Pasta",
        quantity:2
      },
      {
        name:"Detergent",
        quantity:1
      },
      {
        name:"Chocolates",
        quantity:20
      },
      {
        name:"Tea",
        quantity:4
      },

    ];
    var boughtitems = [];


    service.boughtItem = function (index) {
      boughtitems.push(buyitems[index]);
      buyitems.splice(index,1);
    };

    service.getbuyItems = function () {
      return buyitems;
    };

    service.getboughtItems = function () {
      return boughtitems;
    };

  }


})();
