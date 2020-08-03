(function () {
  'use strict';

  angular.module('data')
  .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ['$stateParams','item'];

  function ItemDetailController($stateParams,item) {
    var itemDetail = this;
    console.log(item);
    itemDetail.items = item;
    
  }
})();
