const config = require('../config')
const nodemailer = require('nodemailer');


const Genrate = (req, res, next) => {
    let genrate = {
        doctorusername: req.body.doctorusername,
        patientemail: req.body.patientemail,
        patientusername: req.body.patientusername,
        question1: req.body.question1,
        question2: req.body.question2,
        question3: req.body.question3,
        question4: req.body.question4,
        question5: req.body.question5,
        question6: req.body.question6,
        question7: req.body.question7,

    }
    sendEmail(genrate);
    res.redirect("http://localhost:3001/docProfile");
}


async function sendEmail(genrate) {
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
    transporter.sendMail({
        from: config.get('SMTP_USER'), 
        to: genrate.patientemail,  
        subject: "Health Care Genrated Report  ",                                              
        text: " Dear " + genrate.patientusername + " This an E-mail from the Health Care Online System , Here is your Your Online consultation Genrated Report By your Doctor :  " +
            genrate.doctorusername + " the patient Medical Diagnosis & Description of injury  : " + genrate.question1 +
            " and The History of the Affections and Treatments Applied : " + genrate.question2 +
            " and the Clinical Findings (Symptoms , Results of any investigations )  : " + genrate.question3 +
            " and the Vital Signs of the patients is :" + genrate.question4 +
            " and the Prescriptions that the patient should take is :" + genrate.question5 +
            " please Examine the next the following Medical Condations " + genrate.question6 +
            " the next consultaion and the instructions for the patient is :" + genrate.question7
    }).then(info => {
        console.log({ info });
    }).catch(console.error);
}


module.exports = {
    Genrate
}