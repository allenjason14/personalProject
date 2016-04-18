angular.module("nameMaker").controller('notesCtrl', function($scope){

  $scope.addCategory = function(input){
    if($scope.$parent.newCategory.indexOf(input) === -1){
      $scope.$parent.newCategory.push(input);
    }
    else {
      alert("Duplicates Are Not Allowed");
      return $scope.$parent.newCategory;
    }
  }

  $scope.addName = function(input){
    if($scope.$parent.savedNames.indexOf(input) === -1){
      $scope.$parent.savedNames.push(input);
    }
    else {
      alert("Duplicates Are Not Allowed");
        return $scope.$parent.savedNames;
      }
  }

  $scope.removeSavedName = function(num) {
    $scope.$parent.savedNames.splice(num, 1);
  }

  $scope.editName = function(input, num){
    $scope.$parent.savedNames.splice(num, 1, input);
  }

  $scope.removeCategory = function(num) {
    $scope.$parent.newCategory.splice(num, 1);
  }
});
