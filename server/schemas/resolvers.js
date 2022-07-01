const { User, Character } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        helloWorld: () => {
            return "Hello World!";
        }
    }
};

// const resolvers = {
//     Query: {
        
//     },
// };

module.exports = resolvers;