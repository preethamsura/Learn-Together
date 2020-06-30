const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const uri = process.env.ATLAS_URI;

// Initialize http server
const app = express();
const port = process.env.Port || 80;
app.use(cors())
app.use(express.json());
// Handle / route
app.get('/', (req, res) =>
  res.send('<h1>Hello World!</h1>')
)

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/user');
const skillsRouter = require('./routes/skill')

app.use('/user', usersRouter);
app.use('/skill', skillsRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 
