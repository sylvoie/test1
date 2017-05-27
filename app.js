// ======================================================
// SETUP
// ======================================================

const express = require('express');
const app = express();

var server_port = process.env.HELLOWORLD_PORT_8080_TCP_PORT || 8080;
var server_ip_address = process.env.HELLOWORLD_PORT_8080_TCP_ADDR || '127.0.0.1';

// ======================================================
// ROUTES
// ======================================================

app.get('/', function(req, res) {
   res.send('Hello world!!!');
});

server.listen(server_port, function () {
  console.log( "Listening on port " + server_port )
});
