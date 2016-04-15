angular.module('nameMaker').controller("mainCtrl", function($scope, randomService){
  $scope.nameList = [];
  $scope.randomName = function(letter, iter, nameList){
    $scope.result = randomService.randomName(letter, iter, nameList);
  }

  $scope.clearList = function(){
    $scope.result = [];
    $scope.nameList = [];
  }
});
