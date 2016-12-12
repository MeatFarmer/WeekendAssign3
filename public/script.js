console.log('js sourced');
$( document ).ready(function() {
  console.log( "jq sourced" );

  // getting information from index.html inputs
  var postPlusData = function(){
    console.log( 'in postPlusData' );
    // input fields from html
    var input1 = $('.num1').val();
    var input2 = $('.num2').val();
      console.log(input1, input2);
      var objectToSendPlus = {
        input1: input1,
        input2: input2,
        type: plus
      }; // end objectToSendPlus
      
      $.ajax({
        type: 'POST',
        url: '/',
        data: objectToSendPlus,
        success: function( response ){
          console.log( 'back from post call:', response );
        },
        error: function(){
          console.log( 'error with ajax call...');
        }
      });
        console.log(objectToSendPlus);
        $('.plus').on('click', function(){
          // button click operation
            console.log('in plus button click');
          postPlusData();
        });
  }; // end postPlusData function
}); // end document.ready

  // assemble object to send
  // var objectToSend={
  //   eventName: eventDOM,
  //   athleteName: athleteDOM,
  //   award: awardDOM
  // }; end object to send
  // console.log(objectToSend);
