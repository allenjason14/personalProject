angular.module('nameMaker').directive('secDir', function(){

  return{
    restrict: "AE",
    template: "<div class='a'>Hello</div>",
    controller: function() {

    $(document).ready(function(){

      $('.a').hover(
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

// $( "p" ).on( "mouseover", function() {
//   $( this ).css( "color", "red" );
// });
