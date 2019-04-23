var static = require('node-static');
var http = require('http');

var file = new(static.Server)();

const args = require('minimist')(process.argv.slice(2))
const port = args['port'] || 3000
http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(port);
console.log('Server started on port : '+ port);

//node server.js --port=3000