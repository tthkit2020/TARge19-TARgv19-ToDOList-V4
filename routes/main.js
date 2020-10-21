const express = require('express');
const itemsController = require('../controllers/items');
const router = express.Router();

router.get('/', itemsController.getMainPage);
router.post('/', itemsController.postNewItem);

module.exports = router;