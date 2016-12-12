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
app.post( '/', function( req, res ){
  console.log( 'testPost url hit. req.body:', req.body );
  // *** //
  // assemble object to return
  var objectToReturn = {
    field0: 'I came from testPost on server'
  }; // end object to return
  // return objectToReturn
  res.send( objectToReturn );
});

app.use (express.static('public'));
