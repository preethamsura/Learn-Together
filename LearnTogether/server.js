const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {ApolloServer } = require('apollo-server-express')
const typeDefs = require("./typedefs")
const resolvers = require('./resolvers')

require('dotenv').config();
const uri = process.env.ATLAS_URI;
var port = process.env.PORT || 5000;
const usersRouter = require('./backend/routes/user');
const skillsRouter = require('./backend/routes/skill')

// Initialize http server
const startServer = async() => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  //server.use('/user', usersRouter);
  //server.use('/skill', skillsRouter);
  // server.get('/', (req, res) => {
  //   res.send('<h1>Hello World!</h1>');
  // })

  await mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
  const connection = mongoose.connection;
  connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
  })

  app.listen(port, () => {
    console.log(`Server is running on port: ${port}${server.graphqlPath}`); 
  }); 
}

startServer();






/*
app.use(cors())
app.use(express.json());
// Handle / route
app.get('/', (req, res) =>
  
)
*/





