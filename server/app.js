'use strict';

import express from 'express';
const app = express();

import mongo from 'mongodb';

import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import config from './config/environment/development';

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(methodOverride());


let router = express.Router();

mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1); // eslint-disable-line no-process-exit
});

router.get('/', function(req, res) {
   res.send("Hello World!!!!!");
});

app.use(router);

app.listen(3000, function() {
  require('./routes').default(app);

  console.log("Node server running on http://localhost:3000");
});
