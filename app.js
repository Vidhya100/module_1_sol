(function(){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    //$scope.item = "";

    $scope.changeMessage = function() {
    $scope.message = calculateStringLength($scope.item);
      };
      function calculateStringLength(item) {
        var cnt=0;
        if(item){
        var arr = item.split(',');
        var i;

        for(i in arr){
          if (arr[i].trim().length != 0) {
            cnt=cnt+1;
          }
        }
      }
        if(cnt == 0)
        {
           return "Please enter data first!";
        }
        else if (cnt <= 3) {
          return "Enjoy!";
        }
        else {
          return "Too much!";
      }
    }
  }
})();
