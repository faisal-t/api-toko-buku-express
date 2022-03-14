const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const controller = require('./controller');

/* GET home page. */
router.get('/books', auth, controller.getAllBooks);



module.exports = router;
