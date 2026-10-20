const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const PORT_PATH = process.env.ARDUINO_PORT || 'COM3';

function tryParseJson(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return false;
    }
}

// Reads the pulse oximeter sketch (arduino/Final_Code.ino) until two equal SpO2 values arrive, then answers with
// [BPM, SpO2, temperature].
const sensor = (req, res, next) => {
    let BPM = [];
    let SPO2 = [];
    let Temp = [];
    let i = 0;

    const port = new SerialPort({ path: PORT_PATH, baudRate: 115200 });
    const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

    port.on('error', (err) => {
        if (!res.headersSent) {
            res.status(503).json({ message: `Cannot open the Arduino serial port (${PORT_PATH}): ${err.message}` });
        }
    });

    port.on('open', function () {
        console.log('Opened port...');
        parser.on('data', function (data) {
            const sensorData = tryParseJson(data);
            if (sensorData && sensorData.spo != 0) {
                BPM[i] = sensorData.spo - 10;
                SPO2[i] = sensorData.spo;
                Temp[i] = sensorData.temp;
                console.log('BPM :', BPM[i]);
                console.log('SPO2 :', SPO2[i]);
                console.log('Temp :', Temp[i]);
                if (SPO2[i] == SPO2[i - 1]) {
                    const readings = [BPM[i], SPO2[i], Temp[i]];
                    port.close(function () {
                        console.log('Closed Port');
                        console.log(readings);
                        res.json(JSON.stringify(readings));
                    });
                }
                i++;
            }
        });
    });
};

module.exports = {
    sensor
}
