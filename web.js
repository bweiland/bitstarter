var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var msgBuffer = fs.readFileSync('index.html');
var msgString = msgBuffer.toString();

app.get('/', function(request, response) {
 response.send(msgString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
