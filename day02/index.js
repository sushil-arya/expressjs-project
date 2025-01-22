const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.post('/hello', function (req, res) {
  res.json({
    message: 'Hello, World!'
  });
});

app.post('/hello2', function (req, res) {
  res.json({
    message: 'Hello, World!',
    "status": 200
  });
});

app.post('/hello3', function (req, res) {
  res.status(202).json({
    message: 'Hello, World!',
    "status": 202
  });
});

app.listen(5000);