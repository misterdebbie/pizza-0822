module.exports = {
  index: (req, res) => {
    res.render('loggedin/index')
  }
};

const Userdata = require('../models/userdata');

const userdataController = {};

userdataController.index = (req, res) => {
  Userdata.findAll()
    .then(userdata => {
      console.log(`got this back:`, userdata)
      res.render('loggedin/index',
        { userdata: userdata });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
module.exports = userdataController;
