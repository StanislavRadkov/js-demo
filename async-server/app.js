let express = require('express');
let request = require('request-promise');

var server = express();
const port = 8080;
console.log(`Listening on port ${port}.`)


server.get('/api/hello', async function(req, res) {
  var data = await request('http://www.googleqweqwee.com/');
  res.send(data);
});

server.listen(port);
