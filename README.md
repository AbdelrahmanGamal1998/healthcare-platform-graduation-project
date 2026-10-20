# Healthcare Platform (Graduation Project)

[![CI](https://github.com/AbdelrahmanGamal1998/healthcare-platform-graduation-project/actions/workflows/ci.yml/badge.svg)](https://github.com/AbdelrahmanGamal1998/healthcare-platform-graduation-project/actions/workflows/ci.yml)

A web platform that connects patients and doctors, built as a university graduation project in 2021 during the
COVID-19 pandemic. The idea was to reduce crowded clinics by making consultations remote: patients find a doctor,
book an online or clinic appointment, keep their medical history in one place, talk to the doctor over video, and
send vital signs measured by a small Arduino device.

## Features

| Area                    | What it does                                                                                                   |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- |
| Accounts                | Patient and doctor registration and login (hashed passwords, JWT), profiles with a photo                         |
| Find a doctor           | A list of doctors with their details, so a patient can compare them and pick one                                |
| Appointments            | A patient books an online or clinic appointment, and the doctor sees their appointments                         |
| Medical history         | The patient keeps age, weight, height, blood type, diagnosis, medicine, tests and an attachment, and edits them |
| Pre-examination form    | The patient's form and vital signs are e-mailed to the doctor before the appointment                            |
| Vital signs             | An Arduino with a MAX30100 pulse oximeter and a temperature sensor sends SpO2 and temperature to the platform   |
| Video consultation      | A peer-to-peer video call (WebRTC with `simple-peer`, signaling over Socket.IO)                                  |
| Chatbot                 | A symptom chatbot trained with `node-nlp` on a table of diseases and symptoms                                   |
| Generated report        | The doctor fills in a report after the examination and the patient receives it by e-mail                        |
| Payment                 | Paying for a consultation with Stripe (test mode)                                                               |

## Architecture

```
client/    React 17 app (React Router, Redux, Bootstrap, Framer Motion), port 3001
server/    Node.js and Express back end
             Server.js         REST API with MongoDB (Mongoose), port 3000
             index.js          Socket.IO signaling server for the video call, port 3002
             chatBotServer.js  NLP chatbot, port 3003
             PaymentServer.js  Stripe payment pages, port 3004
arduino/   sketch for the pulse oximeter and temperature sensor
docs/      UML and architecture diagrams
```

## Run it

You need Node.js 18 or newer and a MongoDB database (a free MongoDB Atlas cluster works).

```bash
git clone https://github.com/AbdelrahmanGamal1998/healthcare-platform-graduation-project.git
cd healthcare-platform-graduation-project/server
cp .env.example .env          # then fill in your own values, see the table below
npm install
npm start                     # API on http://localhost:3000
npm run start:signaling       # in other terminals: video call signaling (3002)
npm run start:payment         #                     payments (3004)
npm run start:chatbot         #                     chatbot (3003)
```

```bash
cd ../client
npm install
npm start                     # http://localhost:3001 (set to use port 3001 in .env.development)
```

On Node 17 or newer the client needs `NODE_OPTIONS=--openssl-legacy-provider` for `npm start` and `npm run build`,
because it uses an old version of Create React App.

### Settings (`server/.env`)

| Variable                                        | What it is                                                              |
| ----------------------------------------------- | ----------------------------------------------------------------------- |
| `MONGODB_URI`                                   | MongoDB connection string                                               |
| `JWT_SECRET`, `SESSION_SECRET`                  | Long random strings that sign login tokens and session cookies          |
| `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`   | Your Stripe **test** keys                                               |
| `SMTP_USER`, `SMTP_PASS`                        | The Gmail address that sends e-mails, and an app password for it        |
| `ARDUINO_PORT`                                  | Serial port of the Arduino (default `COM3`)                             |

A server stops at start-up with a clear message if a setting it needs is missing.

## Tests

```bash
cd server
npm test
```

The tests start the API, signaling, payment and chatbot servers with dummy settings (no database or account
needed) and check that they answer, that the chatbot server does not expose its source files, and that a missing
setting is reported. GitHub Actions also builds the client on every push.

## Notes

- The project is a student graduation project and keeps its original style. The end-to-end flows need MongoDB and,
  for e-mail and payments, real Gmail and Stripe test accounts, so they were not run when the repository was
  cleaned up.
- Changes made when it was cleaned up:
  - Credentials that were written in the code (database, e-mail, Stripe and token secrets) are now environment
    variables. **If you ever used the original repository, treat those old credentials as public and replace
    them.**
  - The chatbot server no longer serves its whole folder as static files.
  - The serial port is configurable and a missing Arduino returns an error message instead of crashing the server.
  - Uploaded photos from testing, demo videos and bundled Arduino library archives are not included.
  - The repository was reorganised into `client/`, `server/`, `arduino/` and `docs/`, with tests and CI.
- The written graduation report and the presentation are not included, because they contain personal details of
  the team and supervisors.
- This is a team project. No license is attached, so please ask before reusing the code.
