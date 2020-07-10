(function () {
  'use strict'

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController)

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.list = "";
    $scope.totalItems = 0;

    function splitItems() {

      var newlist = $scope.list;
      var len = newlist.split(",")
      return len.length

    };

    function check(total) {

      if (total==1 && $scope.list.length==0) {
        return "Please enter data first"
      }

      else if (total>0 && total<4 && $scope.list.length>0) {
        return "Enjoy!!"
      }

      else {
        return "Too Much!!"
      }

    };

      $scope.numberOfItems = function () {

        $scope.totalItems = splitItems();
        //$scope.show = true;
        $scope.answer = check($scope.totalItems);

      };



  }


})();
