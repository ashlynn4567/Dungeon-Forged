const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }
`;

//  TO-DO: type User needs the following:
//  characterCount: Int
//  savedCharacters: [Character]

// const typeDefs = gql`
//     type Query {
//         _id: ID
//         username: String
//         email: String
//         savedCharacters: Array?
//         characterCount: Int
//     }
// `;

module.exports = typeDefs;