angular.module('nameMaker').controller("mainCtrl", function($scope, randomService){
  $scope.nameList = [];
  $scope.savedNames = [];
  $scope.newCategory = [];
  $scope.optionList = [];
  $scope.usedNames = [];
});
