const express = require('express');

// Initialize http server
const app = express();

// Handle / route
app.get('/', (req, res) =>
  res.send('<h1>Hello Bryan!</h1>')
)

// Launch the server on port 3000
const server = app.listen(80, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});