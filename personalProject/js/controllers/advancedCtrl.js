angular.module("nameMaker").controller("advancedCtrl", function($scope, advService){

  $scope.createOptionList = function(num){
    if(!isNaN(num)){
      $scope.$parent.optionList = [];
      for(var i = 0; i < num; i++)
      $scope.$parent.optionList.push(i);
    }
    else{
      alert("Please Enter a Valid Number");
    }
  }

  $scope.nameFunc = function(a){
    console.log(a);
  }

  $scope.advancedName = function(iter, nameData, nameList, input){
    $scope.advancedList = advService.advancedName(iter, nameData, nameList, input);
  }

$scope.nameData = [];
$scope.chooseFrom = [];
  setInterval(function(){
    console.log($scope.nameData);
    console.log($scope.chooseFrom);
  }, 500);
});
