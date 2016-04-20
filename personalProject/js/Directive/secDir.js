angular.module('nameMaker').directive('secDir', function(){
  return{
    $('button').on('hover', function(){
      $('this').addClass("active");
    })  }
})
