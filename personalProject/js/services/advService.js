angular.module("nameMaker").service("advService", function(){

  // this.hideInputBox = $("#lettersChoice").hide();
  //
  // this.inputDropDown = $("#schoolContainer").change(function(){
  //   var val = $(this).val;
  //   if (val == "3"){
  //     $("#lettersChoice").show();
  //   }
  //   else{
  //     $("#lettersChoice").hide();
  //   }
  // }).change();



     this.advancedName = function(num, iter, choiceList, nameList, input){
        if(!isNaN(num) && !isNaN(iter)) {
          this.newName = [];
          this.logTrack = [];
          for(var j = 0; j < iter; j++){
            for(var i = 0; i < num; i++) {
              var aNum;
              var selector;
              if(choiceList[i] === 0){
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
              else if (choiceList[i] === 1) {
                aNum = Math.floor(Math.random() * alphabet[1].length);
                this.newName.push(alphabet[1][aNum]);
                this.logTrack.push(1);
                if(this.logTrack.length > 2){
                  this.logTrack.shift();
                }
              }

              else if (choiceList[i] === 2){
                aNum = Math.floor(Math.random() * alphabet[0].length);
                this.newName.push(alphabet[0][aNum]);
                this.logTrack.push(0);
                if(this.logTrack.length > 2){
                  this.logTrack.shift();
              }
            }
          }
              var rawName = this.newName.join('');
              var finalName = rawName.charAt(0).toUpperCase() + rawName.substring(1);
              finalName.charAt(0).toUpperCase();
              nameList.push(finalName);
              this.newName = [];
            }
      return nameList;
    }
    else {
      alert("Please enter valid numbers.");
      return nameList;
    }
  }
});
