const db = require('../db/config');

const Userdata = {};

Userdata.findAll = () => {
  return db.query('SELECT * FROM users ORDER BY id ASC');
};

module.exports = Userdata;
