var express = require('express');
var fs = require('fs');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser());

app.post('/', function(req, res){
    console.log('POST /');
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');
});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port)