const express = require('express');
const loggedinController = require('../controllers/loggedin-controller');
const loggedinRouter = express.Router();

loggedinRouter.get('/', loggedinController.index)

module.exports = loggedinRouter;
