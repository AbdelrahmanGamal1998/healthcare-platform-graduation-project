const Appointment = require('../models/Appointment')
const Doctor = require('../models/Doctor')


const reserveOnline = (req, res, next) => {
    let appointment = new Appointment({
        doctorUserName: req.body.doctorUserName,
        patientUserName: req.session.patient.userName,
        patientEmail: req.body.patientEmail,
        doctorEmail: req.body.doctorEmail,
        appointmentDate: req.body.appointmentDate
    })
    appointment.save()
        .then(appointment => {
            Doctor.findOne({ userName: req.body.doctorUserName }, function (err, doctorprofile) {
                if (err) {
                    console.log(err);
                }
                else {
                    if (doctorprofile.DateI == req.body.appointmentDate) {
                        let updatedData = {
                            DateI: `Reserved ${doctorprofile.DateI}`,
                            FromI: `Reserved ${doctorprofile.DateI}`,
                            ToI: `Reserved ${doctorprofile.DateI}`
                        }
                        update(req, updatedData);
                    }
                    else if (doctorprofile.DateII == req.body.appointmentDate) {
                        let updatedData = {
                            DateII: `Reserved ${doctorprofile.DateII}`,
                            FromII: `Reserved ${doctorprofile.DateII}`,
                            ToII: `Reserved ${doctorprofile.DateII}`
                        }
                        update(req, updatedData);
                    }
                    else if (doctorprofile.DateIII == req.body.appointmentDate) {
                        let updatedData = {
                            DateIII: `Reserved ${doctorprofile.DateIII}`,
                            FromIII: `Reserved ${doctorprofile.DateIII}`,
                            ToIII: `Reserved ${doctorprofile.DateIII}`
                        }
                        update(req, updatedData);
                    }
                }
            });
            res.redirect('http://localhost:3004/pay')
        })
        .catch(error => {
            res.json({
                error: error,
                message: 'An Error Ocured !!'
            })
        })

}


const showAppointments = (req, res, next) => {
    Appointment.findOne({ doctorUserName: req.session.doctor.userName }, function (err, reservedAppointments) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(reservedAppointments);
        }
    });
}


async function update(req, updatedData) {
    await Doctor.findOneAndUpdate({ userName: req.body.doctorUserName }, { $set: updatedData }, { useFindAndModify: false })
}


module.exports = {
    reserveOnline, showAppointments
}