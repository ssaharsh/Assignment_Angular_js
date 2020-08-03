(function () {
  'use strict';

  angular.module('data')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

  function RoutesConfig($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'src/menu/templates/home.template.html'
    })

    .state('categories', {
      url:'/categories',
      templateUrl: 'src/menu/templates/category-home.template.html',
      controller: 'MenuCategoriesController as menuCategory',
      resolve:{
        items: ['MenuDataService', function (MenuDataService) {
          //console.log(MenuDataService.getAllCategories());
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('categories.items',{
      url:'/items/{shortName}',
      templateUrl: 'src/menu/templates/item-home.template.html',
      controller: 'ItemDetailController as itemDetail',
      resolve: {
        item:['$stateParams' , 'MenuDataService' , function ($stateParams,MenuDataService) {
          //console.log(MenuDataService.getItemsForCategory($stateParams.short_name));
          return MenuDataService.getItemsForCategory($stateParams.shortName);
        }],
      }
    })
  };
})();
