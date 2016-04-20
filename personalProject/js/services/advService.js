angular.module("nameMaker").service("advService", function(){



     this.advancedName = function(iter, nameData, advancedList, input){
          if(!isNaN(iter)) {
             this.newName = [];
             this.logTrack = [];
             for(var j = 0; j < iter; j++){
               for(var i = 0; i < nameData.length; i++) {
                 var alphabet = [["b", "c", "d", "f", "g", "h", "j", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"],
                    ["a", "e", "i", "o", "u", "y"]];
                 var aNum;
                 var selector;
                  if(nameData[i] === "choseDefault"){
                    if(this.logTrack[0] === 0 && this.logTrack[1] === 0){
                      aNum = Math.floor(Math.random() * alphabet[1].length);
                      this.newName.push(alphabet[1][aNum]);
                      this.logTrack.push(1);
                      if(this.logTrack.length > 2){
                        this.logTrack.shift();
                      }
                    }
                    else if(this.logTrack[0] === 1 && this.logTrack[1] === 1){
                      aNum = Math.floor(Math.random() * alphabet[0].length);
                      this.newName.push(alphabet[0][aNum]);
                      this.logTrack.push(0);
                        if(this.logTrack.length > 2){
                          this.logTrack.shift();
                        }
                      }
                    else {
                      selector = Math.floor(Math.random() * 2);
                      aNum = Math.floor(Math.random() * alphabet[selector].length);
                      this.newName.push(alphabet[selector][aNum]);
                      this.logTrack.push(selector);
                        if(this.logTrack.length > 2){
                          this.logTrack.shift();
                        }
                      }
                    }
                else if (nameData[i] === "choseCon") {
                  aNum = Math.floor(Math.random() * alphabet[0].length);
                  this.newName.push(alphabet[0][aNum]);
                  this.logTrack.push(1);
                  if(this.logTrack.length > 2){
                    this.logTrack.shift();
                  }
                }

              else if (nameData[i] === "choseVow"){
                aNum = Math.floor(Math.random() * alphabet[1].length);
                this.newName.push(alphabet[1][aNum]);
                this.logTrack.push(0);
                if(this.logTrack.length > 2){
                  this.logTrack.shift();
                }
              }
            else if (nameData[i] === "choseChoose"){
              var splitInput = input[i].split("");
              for( var prop in splitInput) {
                if(splitInput[prop] == "," || splitInput[prop] === " "){
                  splitInput.splice(prop, 1);
                }
              }
              aNum = Math.floor(Math.random() * splitInput.length);
              this.newName.push(splitInput[aNum]);
            }
            else if (nameData[i] === "choseExclude"){
              var splitInput = input[i].split("");

              for (var l = 0; l < 1; l++){
                selector = Math.floor(Math.random() * 2);
                aNum = Math.floor(Math.random() * alphabet[selector].length);
                newNum = alphabet[selector][aNum];


                  if(splitInput.indexOf(newNum) === -1){
                    this.newName.push(newNum);
                    this.logTrack.push(selector);
                  }
                  else {
                    l--;
                  }
                }
              }

            }
              var rawName = this.newName.join('');
              var finalName = rawName.charAt(0).toUpperCase() + rawName.substring(1);
              finalName.charAt(0).toUpperCase();
              advancedList.push(finalName);
              this.newName = [];
            }
      return advancedList;
    }
    else {
      alert("Please fill all fields.");
      return advancedList;
    }
  }
});
