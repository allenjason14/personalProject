angular.module("nameMaker").controller("genCtrl", function($scope, randomService, passService){

  $scope.randomName = function(letter, iter, nameList){
    $scope.nameList = randomService.randomName(letter, iter, nameList);
  }

  $scope.clearList = function(){
    $scope.nameList = [];
  }

  $scope.moveName = passService.moveName();

})
