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

$scope.nameData = [];
$scope.chooseFrom = [];
  setInterval(function(){
    console.log($scope.nameData);
    console.log($scope.chooseFrom);
  }, 500);
});
