const express = require('express');
const router = express.Router();
const myPublicController = require('../controllers/mypublicController');

router.get('/', myPublicController.myPublicFn);
router.get('/1', myPublicController.myPublicFn2);

module.exports = router;
