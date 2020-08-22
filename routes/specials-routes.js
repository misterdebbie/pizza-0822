// routes/specials-routes.js

const express = require('express');
const specialsController = require('../controllers/specials-controller');
const specialsRouter = express.Router();

specialsRouter.get('/', specialsController.index)

module.exports = specialsRouter;
