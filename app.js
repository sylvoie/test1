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

app.listen(process.env.HELLOWORLD_PORT_8080_TCP_ADDR_PORT, function(){
   console.log("Listening on port : " + process.env.HELLOWORLD_PORT_8080_TCP_ADDR);
});