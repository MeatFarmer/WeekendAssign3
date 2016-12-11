console.log('js sourced');
$( document ).ready(function() {
  console.log( "jq sourced" );

  // getting information from index.html inputs
  var postPlusData = function(){
    console.log( 'in postData' );
    var input1 = $('.num1').val();
    var input2 = $('.num2').val();
    $('.plus').on('click', function(){
      console.log('in plus button click');
      console.log(input1, input2);
      var objectToSendPlus = {
        input1: input1,
        input2: input2,
        type: +
      };
    });
    postPlusData();
  };
  }); // end testGetButton

  // assemble object to send
  var objectToSend={
    eventName: eventDOM,
    athleteName: athleteDOM,
    award: awardDOM
  }; // end object to send
    console.log(objectToSend);
  };
}); // end document.ready
