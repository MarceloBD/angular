var express = require('express');
var fs = require('fs');
var app = express();

var bodyParser = require('body-parser');



app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

app.use(bodyParser.urlencoded({extended : true}));

app.post('/', function(req, res){
    console.log('POST /');
    console.log(req.body.description);
    res.writeHead(200, {'Content-Type': "application/x-www-form-urlencoded"});
    res.end('Adicionado');
});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port)