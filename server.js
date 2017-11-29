var express = require('express');
var server = express();
server.use('/', express.static(process.argv[2] || __dirname + '/'));

const port = 8080;
console.log(`Listening on port ${port}.`)
server.listen(port);
