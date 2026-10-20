const express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var xlsx = require('node-xlsx').default;


async function botstr(findStr) {
  var { NlpManager } = require('node-nlp');       //natural language processing for chatbot
  const manager = new NlpManager({ languages: ['en'], nlu: { useNoneFeature: false } });
  //train the chatbot
  manager.addDocument('en', 'goodbye for now', 'greetings.bye');
  manager.addDocument('en', 'bye bye take care', 'greetings.bye');
  manager.addDocument('en', 'okay see you later', 'greetings.bye');
  manager.addDocument('en', 'bye for now', 'greetings.bye');
  manager.addDocument('en', 'i must go', 'greetings.bye');

  manager.addDocument('en', 'bye bye take care', 'greetings.bye');
  manager.addDocument('en', 'okay see you later', 'greetings.bye');
  manager.addDocument('en', 'bye for now', 'greetings.bye');
  manager.addDocument('en', 'i must go', 'greetings.bye');


  manager.addDocument('en', 'hello', 'greetings.hello');
  manager.addDocument('en', 'hi there', 'greetings.hello');
  manager.addDocument('en', 'hello', 'greetings.hello');
  manager.addDocument('en', 'howdy', 'greetings.hello');
  manager.addDocument('en', 'hiya', 'greetings.hello');
  manager.addDocument('en', 'hi-ya', 'greetings.hello');
  manager.addDocument('en', 'howdy-do', 'greetings.hello');
  manager.addDocument('en', 'aloha', 'greetings.hello');
  manager.addDocument('en', 'hey', 'greetings.hello');

  manager.addDocument('en', 'good day', 'greetings.goodDay');
  manager.addDocument('en', 'good night', 'greetings.goodNight');
  manager.addDocument('en', 'good morning', 'greetings.goodMorning');
  manager.addDocument('en', 'good evening', 'greetings.goodevening');
  manager.addDocument('en', 'good afternoon', 'greetings.goodafternoon');

  manager.addDocument('en', "my name is ", 'user.details');

  manager.addDocument('en', "What is your you name details ?", 'my.name');
  manager.addDocument('en', "How shall I call you ?", 'my.name');
  manager.addDocument('en', "Where do you live ?", 'my.address');
  manager.addDocument('en', "Who are you", 'my.me');

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  /*     Answers    */
  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  manager.addAnswer('en', 'greetings.bye', 'Till next time :)');
  manager.addAnswer('en', 'greetings.bye', 'see you soon!');

  manager.addAnswer('en', 'greetings.hello', 'Hey there!');
  manager.addAnswer('en', 'greetings.hello', 'Greetings!');
  manager.addAnswer('en', 'greetings.hello', 'Hey buddy!');


  manager.addAnswer('en', 'greetings.goodNight', 'Good Night.');
  manager.addAnswer('en', 'greetings.goodDay', 'Good Day!');
  manager.addAnswer('en', 'greetings.goodMorning', 'Have a very happy Morning!');
  manager.addAnswer('en', 'greetings.goodevening', 'Good evening.');
  manager.addAnswer('en', 'greetings.goodafternoon', 'Good afternoon.');

  manager.addAnswer('en', 'user.details', 'Nice to know that!');

  manager.addAnswer('en', 'my.name', 'You can call me Lux');
  manager.addAnswer('en', 'my.name', 'I prefer to be called Caitlyn :)');
  manager.addAnswer('en', 'my.address', 'I live in this beautiful world created by nature');
  manager.addAnswer('en', 'my.me', 'I am a friend of yours.');



  await manager.train();
  manager.save();
  var response = await manager.process('en', findStr);
  console.log(response);
  return response.answer;
}

async function API(msgContent) {
  msgContent.shift();
  var user_Symptoms = msgContent;
  var Diseases = [];
  var Symptoms = [];

  console.log('Entered Symptoms: ' + user_Symptoms);

  const workSheetsFromFile = xlsx.parse('disease_symptoms.xlsx');
  var StringF = JSON.stringify(workSheetsFromFile);
  var parseResponse = JSON.parse(StringF);

  for (var j = 1; j < parseResponse[0].data.length; j++) {
    var Symptom_1 = parseResponse[0].data[j][1];
    var Symptom_2 = parseResponse[0].data[j][2];
    var Symptom_3 = parseResponse[0].data[j][3];
    var Symptom_4 = parseResponse[0].data[j][4];
    var Symptom_5 = parseResponse[0].data[j][5];
    Symptoms[0] = Symptom_1.trim().toLowerCase();
    Symptoms[1] = Symptom_2.trim().toLowerCase();
    Symptoms[2] = Symptom_3.trim().toLowerCase();
    Symptoms[3] = Symptom_4.trim().toLowerCase();
    Symptoms[4] = Symptom_5.trim().toLowerCase();
    if (user_Symptoms.length == 2) {
      if (Symptoms.includes(user_Symptoms[0].trim()) && Symptoms.includes(user_Symptoms[1].trim())) {
        var Dis_name = parseResponse[0].data[j][0];
        console.log(Dis_name);
        Diseases.push(Dis_name);
      }
    }
    else if (user_Symptoms.length == 3) {
      if (Symptoms.includes(user_Symptoms[0].trim()) && Symptoms.includes(user_Symptoms[1].trim()) && Symptoms.includes(user_Symptoms[2].trim())) {
        var Dis_name = parseResponse[0].data[j][0];
        Diseases.push(Dis_name);
      }
    }
    else if (user_Symptoms.length == 4) {
      if (Symptoms.includes(user_Symptoms[0].trim()) && Symptoms.includes(user_Symptoms[1].trim()) && Symptoms.includes(user_Symptoms[2].trim()) && Symptoms.includes(user_Symptoms[3].trim())) {
        var Dis_name = parseResponse[0].data[j][0];
        Diseases.push(Dis_name);
      }
    }
    else {
      if (Symptoms.includes(user_Symptoms[0].trim()) && Symptoms.includes(user_Symptoms[1].trim()) && Symptoms.includes(user_Symptoms[2].trim()) && Symptoms.includes(user_Symptoms[3].trim()) && Symptoms.includes(user_Symptoms[4].trim())) {
        var Dis_name = parseResponse[0].data[j][0];
        Diseases.push(Dis_name);
      }
    }
  }
  console.log('Possible Diseases: ' + Diseases);
  if (Diseases != null) {
    io.emit('chat message', `Posibble Diseases: ${Diseases}` + ', To Try Again Enter word "Diagnosis"')
  }
  else {
    io.emit('chat message', 'No Diagnosis Found, Please make sure you answered the questions correctly, To Try Again Enter word "Diagnosis"');
  }

}

//serve the static html files
app.get('/chatBot', function (req, res) {
  res.sendFile(__dirname + '/chatBot.html');
});

//events emitters
io.on('connection', function (socket) {
  var msgContent = [];
  var i = 1;
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
    var msgg = msg.toLowerCase();
    if (msgg.includes('diagnosis')) {
      msgContent.push('diagnosis');
    }
    if (msgContent.includes('diagnosis')) {
      if (1 <= msgContent.length && msgContent.length < 3) {
        if (msgg.includes('diagnosis')) {
        }
        else {
          msgContent.push(msgg.toLowerCase());
        }
      }
      if (msgContent.length < 3 && msgContent.includes('diagnosis')) {
        io.emit('chat message', `Please Enter Symptom ${i}?`);
        i++;
      }
      if (msgContent.length == 3 && msgg.toLowerCase() == 'yes') {
        io.emit('chat message', `Please Enter Symptom ${i}?`);
        i++;
      }
      else if (msgContent.length == 3 && msgg.toLowerCase() == 'no') {
        API(msgContent);
        msgContent.splice(0, msgContent.length);
        i = 1;
      }
      else if (msgContent.length == 4 && msgg.toLowerCase() == 'yes') {
        io.emit('chat message', `Please Enter Symptom ${i}?`);
        i++;
      }
      else if (msgContent.length == 4 && msgg.toLowerCase() == 'no') {
        API(msgContent);
        msgContent.splice(0, msgContent.length);
        i = 1;
      }
      else if (msgContent.length == 5 && msgg.toLowerCase() == 'yes') {
        io.emit('chat message', `Please Enter Symptom ${i}?`);
        i++;
      }
      else if (msgContent.length == 5 && msgg.toLowerCase() == 'no') {
        API(msgContent);
        msgContent.splice(0, msgContent.length);
        i = 1;
      }
      else if (msgContent.length == 3) {
        if (msgg.toLowerCase() != 'yes' && msgContent[msgContent.length - 1] != msgg) {
          msgContent.push(msgg);
          io.emit('chat message', 'Are there any More Symptoms you are Experincing? (yes/no)');
        }
        else {
          io.emit('chat message', 'Are there any More Symptoms you are Experincing? (yes/no)');
        }
      }
      else if (msgContent.length == 4) {
        if (msgg.toLowerCase() != 'yes' && msgContent[msgContent.length - 1] != msgg) {
          msgContent.push(msgg);
          io.emit('chat message', 'Are there any More Symptoms you are Experincing? (yes/no)');
        }
        else {
          io.emit('chat message', 'Are there any More Symptoms you are Experincing? (yes/no)');
        }
      }
      else if (msgContent.length == 5) {
        if (msgg.toLowerCase() != 'yes' && msgContent[msgContent.length - 1] != msgg) {
          msgContent.push(msgg);
          API(msgContent);
          msgContent.splice(0, msgContent.length);
        }
        else {
          io.emit('chat message', 'Are there any More Symptoms you are Experincing? (yes/no)');
        }
      }
    }
    else if (!msgContent.includes('diagnosis')) {
      botstr(msg)
        .then(result => {
          if (result == null) {
            io.emit('chat message', 'I Did not understand what you said!!!');
          }
          else {
            io.emit('chat message', result);
          }
        });
    }
    console.log('Array: ' + msgContent);

  });
});


http.listen(3003, function () {
  console.log('listening on *:3003');
});