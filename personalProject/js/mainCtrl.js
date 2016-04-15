angular.module('nameMaker').controller("mainCtrl", function($scope, randomService){
  $scope.name = "Jason";

  $scope.newName = randomService.newName;
  $scope.nameList = randomService.nameList;
  $scope.logTrack = randomService.logTrack;
  $scope.randomName = function(letter, iter){
    console.log("hit")
    $scope.result = randomService.randomName(letter, iter);
  }

});
