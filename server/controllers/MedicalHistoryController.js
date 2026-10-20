const MedicalHistory = require('../models/MedicalHistory')

const createMH = (req, res, next) => {
    let medicalHistory = new MedicalHistory({
        patientID: req.session.patient._id,
        patientUname: req.session.patient.userName,
        patientAge: req.session.patient.age,
        patientWeight: req.body.patientWeight,
        patientHeight: req.body.patientHeight,
        bloodType: req.body.bloodType,
        diagnosis: req.body.diagnosis,
        medicine: req.body.medicine,
        tests: req.body.tests,
        allergies: req.body.allergies,
        healthIssues: req.body.healthIssues,
    })
    if (req.file) {
        medicalHistory.attachment = req.file.filename;
    }
    medicalHistory.save()
        .then(medicalHistory => {
            res.redirect("http://localhost:3001/docList");
        })
        .catch(error => {
            res.json({
                message: 'An Error Ocured !!'
            })
        })
}


const showMedical = (req, res, next) => {

    console.log(req.session.patient);
    MedicalHistory.findOne({ patientUname: req.session.patient.userName }, function (err, medical) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(medical);

        }
    });
}

const updateMH = (req, res, next) => {
    MedicalHistory.findOne({ patientUname: req.body.patientUname }, function (err, medicalhistory) {
        if (err) {
            console.log(err);
        }
        else {
            let updatedData = {
                medicine: req.body.medicine,
                tests: req.body.tests,
                healthIssues: req.body.healthIssues,
                allergies: req.body.allergies
            }
            update(req, updatedData);
            res.redirect("http://localhost:3001/report");
        }
    });

}


async function update(req, updatedData) {
    await MedicalHistory.findOneAndUpdate({ patientUname: req.body.patientUname }, { $set: updatedData }, { useFindAndModify: false })

}


module.exports = {
    createMH, showMedical, updateMH
}