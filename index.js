'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';
var counter = 0

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
  counter = counter + 1; 	 
  console.log(`counter is ${counter}`);	 
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
