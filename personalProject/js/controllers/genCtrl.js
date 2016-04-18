angular.module("nameMaker").controller("genCtrl", function($scope, randomService){

  $scope.randomName = function(letter, iter, nameList){
    $scope.nameList = randomService.randomName(letter, iter, nameList);
  }

  $scope.clearList = function(){
    $scope.$parent.nameList = [];
  }

  $scope.moveNames = function(num) {
    $scope.$parent.savedNames.push($scope.$parent.nameList[num]);
  }

});
