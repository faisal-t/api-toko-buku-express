const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/category', function(req, res) {
  res.status(200).json({message: 'router category'});
});

module.exports = router;
