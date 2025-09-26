const express = require('express');
const router = express.Router();
const myPrivateController = require('../controllers/myprivateController');

router.get('/', myPrivateController.myPrivateFn);

router.get('/submit', myPrivateController.myPrivateSubmit);

module.exports = router;
