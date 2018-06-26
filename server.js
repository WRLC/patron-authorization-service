'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express(),
  router = express.Router(),
  bodyParser = require('body-parser'),
  config = require('./config');

// set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
var routes = require('./routes/routes');
routes(app);

// listen
if (config.empty) {
  console.log('config.js must be set up')
  process.exit()
} else {
  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
}
