const Doctor = require('../models/Doctor')

const getDoctors = (req, res, next) => {
  Doctor.find({}, function (err, doctorprofile) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(doctorprofile);
    }
  });
}


module.exports = {
  getDoctors
}