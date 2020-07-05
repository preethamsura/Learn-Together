const {gql} = require("apollo-boost");
const User = require('./backend/models/user.model.js');

const typeDefs = gql`
    type User {
        id: ID!
        email: String!
        name: String!
        pfp: String!
    }
    type Query {
        users: User
    }

    type Mutation {
        createUser(email: String!, name: String!, pfp: String!): User!
    }
`;

module.exports = typeDefs;
