# Arduino pulse oximeter

`Final_Code.ino` reads a MAX30100 pulse oximeter and a temperature sensor, shows the values on an LCD, and prints
one JSON line per second on the serial port at 115200 baud, for example `{"spo": 97, "temp": 36.8}`. The API
server (`server/controllers/ArduinoController.js`) reads those lines when a doctor asks for the patient's readings.

Install these libraries from the Arduino IDE Library Manager before uploading the sketch:

- MAX30100lib (the pulse oximeter driver)
- Arduino Serial Data Exporter
- LiquidCrystal (included with the IDE)

Set the serial port the server should read with the `ARDUINO_PORT` environment variable (see
`server/.env.example`). The sketch computes the heart rate as the SpO2 reading minus 10, the same way the server
does. That is a simplification from the student project, not a medical formula.