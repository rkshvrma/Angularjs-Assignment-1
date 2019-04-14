(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.dishes = "";
    $scope.input = "";

    $scope.countDishes = function () {

      var dishList = $scope.dishes.split(',');
      var countDishes = 0;
      dishList.forEach(function(dish) {

        if (dish.trim()!=="") {
          countDishes++;
        }
      });

      if (countDishes == 0) {
        $scope.input = "Please enter data first";
      } else if (countDishes <= 3) {
        $scope.input = "Enjoy!";
      } else {
        $scope.input = "Too much!";
      }

    };

  }

})();
