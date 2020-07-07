const {gql} = require("apollo-boost");
const User = require('./backend/models/user.model.js');

const typeDefs = gql`
    type User {
        id: ID!
        email: String!
        name: String!
        skills_completed: [ID!]
        skills_interested: [ID!]
        friends: [ID!]
        pfp: String!
    }
    type Query {
        users: [User]
        user(id: String!): User!
        userByEmail(email:String!): User!
    }

    type Mutation {
        createUser(email: String!, name: String!, pfp: String!,friends: [ID!], skills_completed: [ID!], skills_interested:[ID!]): User!
    }
`;

module.exports = typeDefs;
