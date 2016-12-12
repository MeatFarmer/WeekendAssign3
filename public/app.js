// --** node/express variables **--//
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.listen(port, function(req, res){
  console.log('server listening on', port);
}); // end spin up server

// base url
app.get ('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
}); // end base url

// testPost
app.post( '/math', function( req, res ){
  console.log( 'testPost url hit. req.body:', req.body );
  // *** //
  // assemble object to return
  var maths = req.body;

    var results = '';
    var x = parseInt(maths.x);
    console.log('var x : ', x);
    var y = parseInt(maths.y);
    console.log('var y: ', y);

    if(maths.type === '+'){
      results = Number(x) + Number(y);
      console.log(results);
    } else if(maths.type === '-'){
      results = x-y;
    } else if(maths.type === '*'){
      results = x*y;
    } else if(maths.type === '/'){
      results = x / y;
    }

  answer.push(results);
  res.send({answer: results});
  console.log('answer array: ', answer);
});

var answer = [];

app.use (express.static('public'));
