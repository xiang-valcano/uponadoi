'use strict';

var express, app, path, port;

express = require('express');
path = require('path');
port = process.env.PORT || 7777;
app = express();


app.use(express.static(__dirname + '/'))
    .get('/', function (request, response) {
        response.sendFile((path.join(__dirname + '/index.html')));
    })
    .get('/*', function (request, response) {
        response.sendFile((path.join(__dirname + '/pages/main.html')));
    });


app.listen(port);
console.log('UPONADOI Server is ready!! (http://localhost:' + port + ')');
