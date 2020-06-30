const express = require('express');
const app = express();
const listOfPeople = require('./people');

app.get('/', (req, res) => {
  res.send('meow!');
});

app.get('/dog', (req, res) => {
  res.send('woof');
});

app.get('/list', (req, res) => {
  console.log(listOfPeople[0]);
  res.send(listOfPeople);
});

app.listen(5001, () => {
  console.log('Server up and running');
});
