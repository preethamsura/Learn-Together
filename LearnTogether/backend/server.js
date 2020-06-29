const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize http server
const app = express();
const port = process.env.Port || 80;
app.use(cors())
app.use(express.json());
// Handle / route
app.get('/', (req, res) =>
  res.send('<h1>Hello Bryan!</h1>')
)

// Launch the server on port 3000
const server = app.listen(port, () => {
  const { address, port_ } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});