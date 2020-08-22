// controllers/menu-controller.js

module.exports = {
  index: (req, res) => {
    res.render('menu/index')
  }
};

const Menu = require('../models/menu');

const menuController = {};

menuController.index = (req, res) => {
  Menu.findAll()
    .then(menu => {
      res.render('menu/index', { menu: menu });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
module.exports = menuController;
