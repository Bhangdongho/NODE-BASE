const express = require('express');
const app = express();

// GET + "/"
app.get('/', function (req, res) {
  res.send('Hello World');
});

// API : GET + "http://localhost:3000/test"
// "TEST SUCCESS"
app.get('/test', function (req, res) {
  res.send('Test');
});

// API : GET + "http://localhost:3000/test/1"
// "One!!"
app.get('/test/1', function (req, res) {
  res.send('One!!');
});

app.listen(3000);
