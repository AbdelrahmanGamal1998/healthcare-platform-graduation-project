const mongoose = require('mongoose')
const Schema = mongoose.Schema

const doctorSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    dob: {
        type: String
    },
    age: {
        type: String
    },
    gender: {
        type: String
    },
    doctorSpecialty: {
        type: String
    },
    DateI: {
        type: String
    },
    FromI: {
        type: String
    },
    ToI: {
        type: String
    },
    DateII: {
        type: String
    },
    FromII: {
        type: String
    },
    ToII: {
        type: String
    },
    DateIII: {
        type: String
    },
    FromIII: {
        type: String
    },
    ToIII: {
        type: String
    },
    doctorImage: {
        type: String
    },
    clinicAddress: {
        type: String
    },
    qualifications: {
        type: String
    },
    experience: {
        type: String
    },
    rating: {
        type: String
    }
}, { timestamps: true })

const Doctor = mongoose.model('Doctor', doctorSchema)
module.exports = Doctor