angular.module("nameMaker").controller("genCtrl", function($scope, randomService){

  $scope.randomName = function(letter, iter, nameList){
    $scope.nameList = randomService.randomName(letter, iter, nameList);
  }

  $scope.clearList = function(){
    $scope.$parent.nameList = [];
    $scope.nameList = [];
  }

  $scope.moveNames = function(num) {
    if($scope.$parent.savedNames.indexOf($scope.$parent.nameList[num]) === -1){
    $scope.$parent.savedNames.push($scope.$parent.nameList[num]);
    $scope.$parent.nameList.splice(num, 1);
    setTimeout(function(){
      $(".chosen-names").draggable();
    },300);
  }
  else {
    alert("Duplicates Are Not Allowed");
    $scope.$parent.nameList.splice(num, 1);
    }
  }

  $scope.removeName = function(num) {
    $scope.$parent.nameList.splice(num, 1);
  }
});
