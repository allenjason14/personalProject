var vowels = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x, 'y', 'z'];

 function randomLetter(arr, num, iterate){
    var newName = [];
    var nameList = [];
   for(var j = 0; j < iterate; j++){
    if(num !== NaN && iterate !== NaN) {
      for(var i = 0; i < num; i++)
      newName.push(arr[Math.floor(Math.random() * 26)]);
    }
    var finalName = newName.join('');
    nameList.push(finalName);
    newName = [];
  }
    return nameList;
}


console.log(randomLetter(vowels, 5, 2));
