let express = require('express');
let request = require('request-promise');

var server = express();
const port = 8080;
console.log(`Listening on port ${port}.`)

server.get('/api/hello', async function (req, res) {
  var data = await request('http://www.google.com/');
  res.send(data);
});

// Error example
async function throwError() {
  throw new Error('Opps!');
}

server.get('/api/error', async function (req, res) {
  try {
    var data = await throwError();
    res.send(data);
  } catch (err) {
    res.send(err.message);
  }
});

server.listen(port);
