var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));

app.get('/', function(req, res) {
  res.status(200).sendfile('www/index.html');
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
