angular.module("nameMaker").service('randomService', function(){

var alphabet = [["b", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"],
   ["a", "e", "i", "o", "u", "y"]];

this.selector = Math.floor(Math.random() * 2);

var newName = [];
var nameList = [];

  this.randomName = function(arr, num, iterate){
        for(var j = 0; j < iterate; j++){
          if(num !== NaN && iterate !== NaN) {
            for(var i = 0; i < num; i++)
            newName.push(arr[Math.floor(Math.random() * 26)]);
            var finalName = newName.join('');
            nameList.push(finalName);
            newName = [];
          }
          return nameList;
        }
      }
    });


//array length. That's what I need to remember.
