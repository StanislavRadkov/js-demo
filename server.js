var express = require('express');
var server = express();
server.use('/', express.static(process.argv[2] || __dirname + '/'));

server.listen(8080);