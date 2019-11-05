// import express from 'express'; // ES Modules
const express = require('express'); // CommonJS modules, and it is equivalent to line above

const server = express(); // creates server

server.use(express.json());

// request/route handlers to / on localhost:8000
server.get('/', (req, res) => {
  res.send('Hello Node Man!');
});

server.post('/echo', (req, res) => {
  const data = req.body;

  res.json(data);
});

// listens for requests in a particular port on localhost
const port = 8000; // localhost:8000
server.listen(port, () => console.log('\n=== API on port 8000 ===\n'));
