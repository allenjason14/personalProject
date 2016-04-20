angular.module('nameMaker').directive('secDir', function(){

  return{
    link: function(scope, elem, attrs) {
      $('button').on('hover', function(){
        $('this').addClass("active");
      })
    }
  }
});
