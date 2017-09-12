'use strict';

let express = require('express');
let controller = require('./date.controller.js');
let router = express.Router();

router.get('/', controller.getAllDates);
router.get('/load/mc', controller.loadMC);
router.get('/images/update', controller.updateAllImages);
// router.get('/load/rb', controller.loadRB);
router.delete('/', controller.deleteAll);

module.exports = router;
