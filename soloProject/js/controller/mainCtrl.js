angular.module('wattReads').controller('mainCtrl', function($scope){

  $scope.storiesArr = [];
  $scope.blankArr = [];

  $scope.selectName = function(num) {
    $scope.storiesArr.push($scope.blankArr[num]);
  }


  $scope.pig = {
    name: "oink",
    body: {
      going: "markert",
      doing: "short-lived",
      feeling: "too full",
      running: "to the store",
    }
  }

  var cow = {
    name: "moo",
    body: {
      going: "fresh",
      doing: "cattle",
      feeling: "livestock",
      running: "beef",
    }
  }

  $scope.saveData = function(named, cow, pig, frog, dog){
    var named = {
      name: named,
      body: {
        going:cow,
        doing:pig,
        feeling:frog,
        running:dog,
      }
    }
  $scope.blankArr.push(named);
}
  //
  //   $scope.blankArr.push(named);
  //   $scope.infoName = '';
  //   $scope.hello = '';
  //   $scope.yo = '';
  //   $scope.hey = '';
  //   $scope.whassup = '';
  //   $scope.peace = '';


});
