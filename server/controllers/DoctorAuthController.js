const config = require('../config')
const Doctor = require('../models/Doctor')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = (req, res, next) => {
    var rate = Math.random() * (5 - 4.5) + 4.5;
    bcrypt.hash(req.body.doctorPassword, 10, function (err, hashedpass) {
        if (err) {
            res.json({
                error: err
            })
        }
        let doctor = new Doctor({
            firstName: req.body.doctorFname,
            lastName: req.body.doctorLname,
            userName: req.body.doctorUname,
            password: hashedpass,
            email: req.body.doctorEmail,
            phoneNumber: req.body.doctorPhone,
            dob: req.body.doctorDOB,
            age: req.body.doctorAge,
            gender: req.body.doctorGender,
            doctorSpecialty: req.body.doctorSpecialization,
            DateI: req.body.doctorAvailabilityDate1,
            FromI: req.body.doctorAvailabilityFrom1,
            ToI: req.body.doctorAvailabilityTo1,
            DateII: req.body.doctorAvailabilityDate2,
            FromII: req.body.doctorAvailabilityFrom2,
            ToII: req.body.doctorAvailabilityTo2,
            DateIII: req.body.doctorAvailabilityDate3,
            FromIII: req.body.doctorAvailabilityFrom3,
            ToIII: req.body.doctorAvailabilityTo3,
            clinicAddress: req.body.doctorClinic,
            qualifications: req.body.doctorQualifications,
            experience: req.body.doctorExperience,
            rating: rate
        })
        if (req.file) {
            doctor.doctorImage = req.file.filename;
        }
        checkDuplicate(req, res);
        doctor.save()
            .then(doctor => {
                req.session.doctor = doctor;
                res.redirect("http://localhost:3001/docProfile");
            })
            .catch(error => {
                res.json({
                    error: error,
                    message: 'An Error Ocured !!'
                })
            })
    })
}



const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    Doctor.findOne({ $or: [{ email: username }, { phoneNumber: username }, { userName: username }] })
        .then(doctor => {
            if (doctor) {
                bcrypt.compare(password, doctor.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ name: doctor.name }, config.get('JWT_SECRET'), { expiresIn: '1h' })
                        req.session.doctor = doctor;
                        res.redirect("http://localhost:3001/docProfile");
                    } else {
                        res.json({
                            message: 'Password Does Not Matched !!'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'No User Found!!'
                })
            }
        })
}



const checkDuplicate = (req, res, next) => {
    Doctor.findOne({
        userName: req.body.doctorUname
    }).exec((err, doctor) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (doctor) {
            res.status(400).send({ message: "Failed! Username is already in use!" });
            return;
        }
    });
}

const showDoctor = (req, res, next) => {
    Doctor.findById(req.session.doctor._id, function (err, doctorprofile) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(doctorprofile);

        }
    });

}

module.exports = {
    register, login, showDoctor
}