'use strict';

let express = require('express');
let controller = require('./date.controller.js');
let router = express.Router();

router.get('/', controller.getAllDates);
router.get('/groups', controller.getAllGroups);
router.get('/groups/:id', controller.getDate);
router.get('/:id', controller.getDate);
router.get('/load/mc', controller.loadMC);
router.get('/images/update', controller.updateAllImages);
router.put('/group/update/:id', controller.updateGroup);
// router.get('/load/rb', controller.loadRB);
router.delete('/', controller.deleteAll);

module.exports = router;
