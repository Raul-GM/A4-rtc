'use strict';

import express from 'express';
const app = express();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!!!!!");
});

app.use(router);

mongoose.createConnection('mongodb://localhost/rtc-dev', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    require('./routes').default(app);

    console.log("Node server running on http://localhost:3000");
  });
});
