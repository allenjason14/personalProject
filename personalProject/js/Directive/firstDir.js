angular.module("nameMaker")
  .directive('firstDir', function(){


return{
  restrict: "AE",
  templateUrl: "js/Directive/firstDirTemp.html",
  controller: function(){

    $(document).ready(function(){

      $('.header-link').hover(
        function(){
          console.log('onhover');
        $(this).addClass('active');
      },
      function() {
        $(this).removeClass('active');
      })

    });
  }
}

});
