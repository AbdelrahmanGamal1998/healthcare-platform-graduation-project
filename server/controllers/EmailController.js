const config = require('../config')
const MedicalHistory = require('../models/MedicalHistory')
const Appointment = require('../models/Appointment')
const SerialPort = require('serialport');
const nodemailer = require('nodemailer');


const createPF = (req, res, next) => {
    Appointment.findOne({
        patientUserName: req.session.patient.userName
    }).exec((err, appointments) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        else {
            MedicalHistory.findOne({
                patientUname: req.session.patient.userName
            }).exec((err, medicalHistory) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                else {
                   // let sensorReadings = sensor();
                    //console.log("aaaaaa");
                    //console.log(sensorReadings);
                    sendEmail(req, appointments, medicalHistory);
                    res.redirect("http://localhost:3001/patientProfile");
                }

            });
        }
    });
}

const sensor = () => {
    var readings = [];
    var BPM = [];
    var SPO2 = [];
    var Temp = [];
    var i = 0;
    const port = new SerialPort('COM3', {
        baudRate: 115200,
        parser: new SerialPort.parsers.Readline('\n')
    });


    function tryParseJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return JSON.parse(str);
    }

    port.on('open', function () {
        console.log('Opened port...');
        port.on('data', function (data) {
            const sensorData = tryParseJson(data);
            if (sensorData && sensorData.spo != 0) {
                BPM[i] = sensorData.spo - 10;
                SPO2[i] = sensorData.spo;
                Temp[i] = sensorData.temp;
                console.log('BPM :', BPM[i]);
                console.log('SPO2 :', SPO2[i]);
                console.log('Temp :', Temp[i]);
                if (SPO2[i] == SPO2[i - 1]) {
                    readings[0] = BPM[i];
                    readings[1] = SPO2[i];
                    readings[2] = Temp[i];
                    port.close(function () {
                        console.log('Closed Port');
                        console.log(readings);
                        var json = JSON.stringify(readings);
                        BPM = [];
                        SPO2 = [];
                        Temp = [];
                        readings = [];
                        return json;
                        //res.json(json);
                    });
                }
                i++;
            }
        });
    });
}


async function sendEmail(req, appointments, medicalHistory) {
    var json;
    var readings = [];
    var BPM = [];
    var SPO2 = [];
    var Temp = [];
    var i = 0;
    const port = new SerialPort('COM3', {
        baudRate: 115200,
        parser: new SerialPort.parsers.Readline('\n')
    });


    function tryParseJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return JSON.parse(str);
    }

    port.on('open', function () {
        console.log('Opened port...');
        port.on('data', function (data) {
            const sensorData = tryParseJson(data);
            if (sensorData && sensorData.spo != 0) {
                BPM[i] = sensorData.spo - 10;
                SPO2[i] = sensorData.spo;
                Temp[i] = sensorData.temp;
                console.log('BPM :', BPM[i]);
                console.log('SPO2 :', SPO2[i]);
                console.log('Temp :', Temp[i]);
                if (SPO2[i] == SPO2[i - 1]) {
                    readings[0] = BPM[i];
                    readings[1] = SPO2[i];
                    readings[2] = Temp[i];
                    port.close(function () {
                        console.log('Closed Port');
                        console.log(readings);
                        json = JSON.stringify(readings);
                        BPM = [];
                        SPO2 = [];
                        Temp = [];
                        readings = [];
                        let transporter = nodemailer.createTransport({
                            service: 'gmail',
                            secure: false,
                            auth: {
                                user: config.get('SMTP_USER'),
                                pass: config.get('SMTP_PASS'),
                            },
                            tls: {
                                rejectUnauthorized: false
                            }
                        });
                        console.log("aaaaaaaaaaa");
                        console.log(json);
                        transporter.sendMail({
                            from: config.get('SMTP_USER'),
                            to: appointments.doctorEmail,
                            subject: "Health Care Self Declaration Form",
                            text: " This an E-mail from the Health Care Online System , We Would Like To Inform You That the patient "
                                + appointments.patientUserName + " has Reserverd an Online Appointment at Date: " + appointments.appointmentDate 
                                + "and Sensors Reading are BPM, SPO2, Temp  Respectivly"+json +" , and According To The Medical history of this Patient,the Patients' Previous Surgeries are  "
                                + medicalHistory.diagnosis + " and  Patients' Long-Term Medicines are "
                                + medicalHistory.medicine + " and Patients' Previous Tests are  "
                                + medicalHistory.tests + " and Patients' Allergies are "
                                + medicalHistory.allergies + " and Patients' Health Issues are "
                                + medicalHistory.healthIssues + " Answers to your Questions in The Form are:" +
                                "Question 1: Reason for examination?" +
                                "Answer: " + req.body.question1 +
                                "Question 2: Have you received any treatment?" +
                                "Answer: " + req.body.question2 +
                                "Question 3: What Prescription and Non-prescription Medications Do You Take?" +
                                "Answer: " + req.body.question3 +
                                "Question 4: What Is Your Smoking, Alcohol and Illicit Drug Use History?" +
                                "Answer: " + req.body.question4 +
                                "Question 5: What Is Your Smoking, Alcohol and Illicit Drug Use History?" +
                                "Answer: " + req.body.question5 +
                                "and please after you finish your consulation you have to submit the genrated report form with this email address : " + appointments.patientEmail +
                                " Attached Pictures are Below ",
                    
                            attachments: [
                                {
                                    filename: medicalHistory.attachment,
                                    path: `../client/public/uploads/${medicalHistory.attachment}`
                                }
                            ]
                    
                        }).then(info => {
                            console.log({ info });
                        }).catch(console.error);
                        //return json;
                        //res.json(json);
                    });
                }
                i++;
            }
        });
    });
   
}







module.exports = {
    createPF
}