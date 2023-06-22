const fs = require("fs");
const express = require("express");
const app = express();
const axios = require('axios');
const https = require("https");
const bodyParser = require("body-parser");
const path = require('path');
const port = 5000;

// Serve static files
app.use(express.static('public'));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// Define the route handler for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route to serve the script.js file
app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'script.js'));
});


app.post('/', async (req, res) => {
  const number = req.body.number;

  const options = {
    method: 'GET',
    url: `https://numbersapi.p.rapidapi.com/${number}/trivia`,
    params: {
      fragment: 'true',
      notfound: 'floor',
      json: 'true'
    },
    headers: {
      'X-RapidAPI-Key': '232b08ccbemsh2d35d2be8f36a45p1b7df0jsn53bbb59fd7e2',
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const trivia = response.data.text;

    res.status(200).send({ trivia });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data from the API.');
  }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});