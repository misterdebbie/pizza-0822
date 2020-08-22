// routes/pizzaclub-routes.js

const express = require('express');
const pizzaclubController = require('../controllers/pizzaclub-controller');
const pizzaclubRouter = express.Router();

pizzaclubRouter.get('/', pizzaclubController.index)

module.exports = pizzaclubRouter;
