const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    doctorUserName: {
        type: String
    },
    patientUserName: {
        type: String
    },
    patientEmail: {
        type: String
    },
    doctorEmail: {
        type: String
    },
    appointmentDate: {
        type: String
    }
}, { timestamps: true })

const Appointment = mongoose.model('Appointment', appointmentSchema)
module.exports = Appointment