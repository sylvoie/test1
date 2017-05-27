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
   var environnement = process.pid;
   var plateforme = process.platform;
   res.send('Hello world sur PID ' + environnement + ' plateforme ' + plateforme);
});

app.listen(server_port, function () {
  console.log( "Listening on port " + server_port )
});
