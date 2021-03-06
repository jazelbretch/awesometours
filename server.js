// server.js
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 8080;
app.listen(port);
console.log('server started '+ port);