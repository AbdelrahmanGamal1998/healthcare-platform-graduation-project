const config = require('../config')
const Patient = require('../models/Patient')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedpass) {
        if (err) {
            res.json({
                error: err
            })
        }
        let patient = new Patient({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: hashedpass,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            dob: req.body.dob,
            age: req.body.age,
            gender: req.body.gender,
            country: req.body.country,
            city: req.body.city,
            street: req.body.street
        })
        if (req.file) {
            patient.Image = req.file.filename;
        }
        checkDuplicate(req, res);
        patient.save()
            .then(patient => {
                req.session.patient = patient;
                res.redirect("http://localhost:3001/medicalHistory");
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

    Patient.findOne({ $or: [{ email: username }, { phoneNumber: username }, { userName: username }] })
        .then(patient => {
            if (patient) {
                bcrypt.compare(password, patient.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ name: patient.name }, config.get('JWT_SECRET'), { expiresIn: '1h' })
                        req.session.patient = patient;
                        res.redirect("http://localhost:3001/patientProfile");
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
    Patient.findOne({
        userName: req.body.userName
    }).exec((err, patient) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (patient) {
            res.status(400).send({ message: "Failed! Username is already in use!" });
            return;
        }
    });
}

const showPatient = (req, res, next) => {
    Patient.findById(req.session.patient._id, function (err, patientProfile) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(patientProfile);
        }
    });
}


module.exports = {
    register, login, showPatient
}