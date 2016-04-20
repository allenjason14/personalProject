angular.module('nameMaker').controller("mainCtrl", function($scope, randomService){
  $scope.nameList = [];
  $scope.advancedList = [];
  $scope.savedNames = [];
  $scope.newCategory = [];
  $scope.optionList = [];
  $scope.usedNames = [];
  $scope.nameData = [];
  $scope.chooseFrom = [];
  $scope.minionNames = [];
  $scope.favoriteNames = [];
  $scope.villainNames = [];
  $scope.heroNames = [];
  $scope.maleNames = [];
  $scope.femaleNames = [];
  $scope.inUseNames = [];

  $(document).on("dblclick", ".chosen-names" ,function(){
    if($(this).children().children(".notes-visible").css("visibility") === "hidden") {
    $(this).children().children(".notes-visible").css({visibility: 'visible'});
  }
  else{
    $(this).children().children(".notes-visible").css({visibility: 'hidden'})
    }
  })

});
