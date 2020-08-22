// routes/menu-routes.js

const express = require('express');
const menuController = require('../controllers/menu-controller');
const menuRouter = express.Router();

menuRouter.get('/', menuController.index)

module.exports = menuRouter;
