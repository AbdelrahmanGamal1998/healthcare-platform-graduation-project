const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const medicalHistorySchema = new Schema({
    patientID :{
        type : String
    },
    patientUname :{
        type : String
    },
    patientAge :{
        type : String
    },
    patientWeight :{
        type : String
    },
    patientHeight :{
        type : String
    },
    bloodType :{
        type : String
    },
    diagnosis :{
        type : String
    },
    medicine :{
        type : String
    },
    tests :{
        type : String
    },
    allergies :{
        type : String
    },
    healthIssues :{
        type : String
    },
    attachment :{
        type : String
    }
})

const MedicalHistory = mongoose.model('Medicalhistory',medicalHistorySchema)
module.exports = MedicalHistory