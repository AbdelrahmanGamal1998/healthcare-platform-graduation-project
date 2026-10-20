
#include <SerialDataExporter.h>

#include <Wire.h>
#include "MAX30100_PulseOximeter.h"
#include <LiquidCrystal.h>

/*
  The circuit:
   LCD RS pin to digital pin 9
   LCD Enable pin to digital pin 8
   LCD D4 pin to digital pin 7
   LCD D5 pin to digital pin 6
   LCD D6 pin to digital pin 4
   LCD D7 pin to digital pin 5
   LCD R/W pin to ground
   LCD VSS pin to ground
   LCD VCC pin to 5V
   Variable resistor to change contrast:
   ends to +5V and ground
   wiper to LCD VO pin (pin 3)
   MaX30100 SCL to Analog pin A5
   MaX30100 SDA to Analog pin A4
*/

#define REPORTING_PERIOD_MS     1000

//Create an object from PulseOximeter To control the MAX30100
PulseOximeter pox;

// initialize the library by associating any needed LCD interface pin
// with the arduino pin number it is connected to
const int rs = 9, en = 8, d4 = 7, d5 = 6, d6 = 5, d7 = 4;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);


const int sensor = A0; // Assigning analog pin A5 to variable 'sensor'
float tempc; //variable to store temperature in degree Celsius
float vout; //temporary variable to hold sensor reading

String message = "";

uint32_t tsLastReport = 0;

// Callback (registered below) fired when a pulse is detected
void onBeatDetected()
{
  // Serial.println("Beat!");
}

int bufferSizes[] = {255, 3 , 3};
SerialDataExporter exporter = SerialDataExporter(Serial, bufferSizes);

void setup()
{
  
  Serial.begin(115200);

  // Serial.print("Initializing pulse oximeter..");

  // Initialize the PulseOximeter instance
  // Failures are generally due to an improper I2C wiring, missing power supply
  // or wrong target chip
  if (!pox.begin()) {
    //Serial.println("FAILED");
    for (;;);
  } else {
    //Serial.println("SUCCESS");
  }

  // Register a callback for the beat detection
  pox.setOnBeatDetectedCallback(onBeatDetected);

  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  // Print a message to the LCD.
  lcd.print("Starting....!");

  //For Temp Sensor
  pinMode(sensor, INPUT); // Configuring sensor pin as input
  tempc = 0;

}

void loop()
{
    // Make sure to call update as fast as possible
    pox.update();

    vout = analogRead(sensor); //Reading the value from sensor
    vout = ((vout / 1024.0) * 5000) / 10;
    float tempc_temp = vout; // Storing value in Degree Celsius

    if (tempc_temp < 38.5 && tempc_temp > 36) {
      tempc = tempc_temp;
    }
    // Asynchronously dump heart rate and oxidation levels to the serial
    // For both, a value of 0 means "invalid"
    if (millis() - tsLastReport > REPORTING_PERIOD_MS) {
      String message = "";
      /* Serial.print("Heart rate:");
        Serial.print(pox.getHeartRate());
        Serial.print("bpm / SpO2:");
        Serial.print(pox.getSpO2());
        Serial.println("%");
      */
      //Write the data on the LCD
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("SpO2:");
      lcd.print(pox.getSpO2());
      double spo2 = pox.getSpO2();
      lcd.print("%");
      lcd.print("Tem:");
      lcd.print(tempc);




      lcd.setCursor(0, 1);
      lcd.print("BPM:");
      //double bpm = pox.getHeartRate();

      double bpm = spo2 - 10;
      if (bpm < 0) {
        bpm = 0;
      }

      lcd.print(bpm);






      /*
        message = message + "{\"humidity\": ";
        message = message + bpm;
        message = message + ", \"spo\": ";
        message = message + spo2;
        message = message + ", \"temp\": ";
        message = message + tempc;
        message = message + "}";
        Serial.println(message);
      */



      //exporter.add("bpm", bpm);
      exporter.add("spo", spo2);
      exporter.add("temp", tempc);
      exporter.exportJSON();

      tsLastReport = millis();
    }
}

