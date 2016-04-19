angular.module('nameMaker').controller("mainCtrl", function($scope, randomService){
  $scope.nameList = [];
  $scope.advancedList = [];
  $scope.savedNames = [];
  $scope.newCategory = [];
  $scope.optionList = [];
  $scope.usedNames = [];
});
