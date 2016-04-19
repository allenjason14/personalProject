angular.module('nameMaker').controller("mainCtrl", function($scope, randomService){
  $scope.nameList = [];
  $scope.advancedList = [];
  $scope.savedNames = [];
  $scope.newCategory = [];
  $scope.optionList = [];
  $scope.usedNames = [];

  $(document).on("dblclick", ".chosen-names" ,function(){
    if($(this).children().children(".notes-visible").css("visibility") === "hidden") {
    $(this).children().children(".notes-visible").css({visibility: 'visible'});
  }
  else{
    $(this).children().children(".notes-visible").css({visibility: 'hidden'})
    }
  })
});
