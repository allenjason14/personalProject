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

  $scope.advancedName = function(iter, nameData, nameList, input){
    $scope.advancedList = advService.advancedName(iter, nameData, nameList, input);
  }

  $scope.clearAdvList = function(){
    $scope.$parent.advancedList = [];
    $scope.advancedList = [];
  }

  $scope.clearChoice = function(){
    $scope.$parent.nameData = [];
    $scope.$parent.chooseFrom = [];
    $scope.$parent.optionList = [];


  }

  $scope.moveAdvNames = function(num) {
    if($scope.$parent.savedNames.indexOf($scope.$parent.advancedList[num]) === -1){
    $scope.$parent.savedNames.push($scope.$parent.advancedList[num]);
    $scope.$parent.advancedList.splice(num, 1);
    setTimeout(function(){
      $(".chosen-names").draggable();
    },300);
  }
  else {
    alert("Duplicates Are Not Allowed");
    $scope.$parent.advancedList.splice(num, 1);
    }
  }

  $scope.removeAdvName = function(num) {
    $scope.$parent.advancedList.splice(num, 1);
  }

});
