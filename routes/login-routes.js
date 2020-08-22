// routes/login-routes.js

const express = require('express');
const loginController = require('../controllers/login-controller');
const loginRouter = express.Router();

loginRouter.get('/', loginController.index)

module.exports = loginRouter;
