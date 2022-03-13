const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');
const controller = require('./controller');

/* GET home page. */
router.get('/categories', auth, controller.getAllCategories);
router.post('/categories', auth, controller.createCategories);
router.put('/categories/:id', auth, controller.updateCategory);
router.delete('/categories/:id', auth, controller.deleteCategory);


module.exports = router;
