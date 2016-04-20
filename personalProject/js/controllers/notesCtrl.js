angular.module("nameMaker").controller('notesCtrl', function($scope, notesService){

  $scope.addCategory = function(input){
    if($scope.$parent.newCategory.indexOf(input) === -1){
      $scope.$parent.newCategory.push(input);
    setTimeout(function(){
      $(".cat-names").draggable();
    },300);
  }
    else {
      alert("Duplicates Are Not Allowed");
      return $scope.$parent.newCategory;
    }
  }

  $scope.addName = function(input){
    if($scope.$parent.usedNames.indexOf(input) === -1){
      $scope.$parent.usedNames.push(input);
      setTimeout(function(){
      $(".chosen-names").draggable();
    },300);
  }
    else {
      alert("Duplicates Are Not Allowed");
        return $scope.$parent.usedNames;
      }
  }

  $scope.removeSavedName = function(num) {
    $scope.$parent.usedNames.splice(num, 1);
  }

  $scope.editName = function(input, num){
    $scope.$parent.usedNames.splice(num, 1, input);
    setTimeout(function(){
    $(".chosen-names").draggable();
  },300);
  }

  $scope.removeCategory = function(num) {
    $scope.$parent.newCategory.splice(num, 1);
  }

  $scope.activateNames = function(num) {
    $scope.$parent.usedNames.push($scope.$parent.savedNames[num]);
    $scope.$parent.savedNames.splice($scope.$parent.savedNames[num], 1);
    setTimeout(function(){
      $(".chosen-names").draggable();
    },300);
  }

});
