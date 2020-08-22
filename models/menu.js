const db = require('../db/config');

const Menu = {};

Menu.findAll = () => {
  return db.query('SELECT * FROM menu ORDER BY id ASC');
};

module.exports = Menu;
