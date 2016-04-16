angular.module("nameMaker").service("passService", function(){

  var nameList = [];
  var savedNames = [];
  this.moveName = function($index){
    savedNames.push(nameList[$index]);
    nameList.splice([$index], 1);
  }
});
