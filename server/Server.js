const config = require('./config')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
var cors = require('cors')
const bodyParser = require('body-parser')
const { Console } = require('console')
const session = require('express-session');
const patientAuthRoute = require('./routes/Patientauth')
const doctorAuthRoute = require('./routes/Doctorauth')
const medicalHistoryAuthRoute = require('./routes/MedicalHistoryauth')
const DoctorListAuthRoute = require('./routes/DoctorsListauth')
const AppointmentAuthRoute = require('./routes/Appointmentauth')
const EmailAuthRoute = require('./routes/Emailauth')
const ArduinoAuthRoute = require('./routes/Arduinoauth')
const GenratedReportAuthRoute = require('./routes/GenratedReportauth')

mongoose.connect(config.get("MONGODB_URI"), { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => {
  console.log(err);
})
db.once('open', () => {
  console.log('DataBase Connection is Established !')
})
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003', 'http://localhost:3004'],
  credentials: true,
}));
app.set("view engine", "ejs");
app.use('/uploads', express.static('uploads'))
app.use(session({
  secret: config.get('SESSION_SECRET'),
  saveUninitialized: false,
  resave: false
}))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`)
});

////////////////////////// Doctor's Side ///////////////////////////////////

//Doctor Register & Login & Show Doctor Profile
app.use('/Doctor', doctorAuthRoute)

////////////////////////// Patients's Side ///////////////////////////////////

//Patient Register & Login & Show Patient Profile
app.use('/Patient', patientAuthRoute)

//Patients Medical History
app.use('/MedicalHistory', medicalHistoryAuthRoute)

//List Of Doctors
app.use('/DoctorList', DoctorListAuthRoute)



////////////////////////// Both Sides ///////////////////////////////////

//Reserve Online (Patient) & Show My Appointments (Doctor)
app.use('/Appointment', AppointmentAuthRoute)

//Sending Form To Doctor before Examination, getting Arduino Reading and sending them to doctor
app.use('/Email', EmailAuthRoute)



//Doctor Filling Generated Report form and Patient recieving it
app.use('/GenratedReport', GenratedReportAuthRoute)