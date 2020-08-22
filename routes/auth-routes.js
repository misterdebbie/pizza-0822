// routes/auth-routes.js

const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login');
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});

authRouter.get('/error', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/error');
});

authRouter.post('/register', usersController.create);

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/loggedin',
    failureRedirect: '/auth/error',
    failureFlash: true,
  })
);

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;
