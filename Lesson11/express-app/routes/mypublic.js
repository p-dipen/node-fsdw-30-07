const express = require('express');
const router = express.Router();
const myPublicController = require('../controllers/mypublicController');

router.get('/', myPublicController.myPublicFn);

module.exports = router;
