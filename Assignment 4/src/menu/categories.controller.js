(function () {
  'use strict';

  angular.module('data')
  .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ['items'];

  function MenuCategoriesController(items) {
    var menuCategory = this;
    menuCategory.items = items;
  }
})();
