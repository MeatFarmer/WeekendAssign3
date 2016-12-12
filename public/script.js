console.log('js sourced');
$( document ).ready(function() {
  console.log( "jq sourced" );

    $('#totalButton').on('click', clickedTotal);


    function clickedTotal() {
      var objectToSend = {
          x: $('.num1').val(),
          y: $('.num2').val(),
          type: $('.operations').val()
        };
      console.log('object to send', objectToSend);

      $.ajax({
        type: 'POST',
        url: '/math',
        data: objectToSend,
        success: function( response ){
          console.log( 'back from post call:', response );

          $('.output').html("The output of the equation equals " + response.answer);
        },
        error: function(){
          console.log( 'error with ajax call...');
        } // end function error ajax call
      }); // end ajax

    } // end clickedTotal
}); // end document.ready
