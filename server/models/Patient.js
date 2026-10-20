const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const patientSchema    = new Schema({
    firstName :{
        type : String
    },
    lastName :{
        type : String
    },
    userName :{
        type : String
    },
    password :{
        type : String
    },
    email :{
        type : String
    },
    phoneNumber :{
        type : String
    },
    dob :{
        type : String
    },
    age :{
        type : String
    },
    gender :{
        type : String
    },
    country :{
        type : String
    },
    city :{
        type : String
    },
    street :{
        type : String
    },
    Image :{
        type : String
    }
} ,{timestamps : true})

const Patient = mongoose.model('Patient',patientSchema)
module.exports = Patient
