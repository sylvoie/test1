// ======================================================
// SETUP
// ======================================================

const express = require('express');
const app = express();

// ======================================================
// ROUTES
// ======================================================

app.get('/', function(req, res) {
   res.send('Hello world!!!');
});

app.listen(process.env.HELLOWORLD_PORT_8080_TCP_ADDR_PORT, process.env.HELLOWORLD_PORT_8080_TCP_ADDR,function(){
   console.log('Listening on : ' + process.env.HELLOWORLD_PORT_8080_TCP_ADDR + ' pprt : ' + process.env.HELLOWORLD_PORT_8080_TCP_ADDR_PORT);
});