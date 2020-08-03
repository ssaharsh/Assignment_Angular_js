(function () {
  'use strict';

  angular.module('data')
  .component('categoriesList', {
    templateUrl: 'src/menu/templates/categories.template.html',
    bindings: {
      items: '<'
    }
  });
})();
