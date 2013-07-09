var express = require('express');

var app = express.createServer(express.logger());

var msgBuffer = fs.readFileSync('index.html');
var msgString = Buffer.toString(msgBuffer);

app.get('/', function(request, response) {
 response.send(msgString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});