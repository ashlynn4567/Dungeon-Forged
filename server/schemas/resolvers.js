const { User, Character } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

// TO-DO: Create resolvers for User and Character Data

const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            if (context.user) {
                const userData = await User
                    .findOne({ _id: context.user._id})
                    .select("-__v");

                return userData;
            };
        }, 

        // get all users
        users: async () => {
            return User
                .find()
                .select("-__v")
        }, 

        // get one user by username
        user: async (parent, { username }) => {
            return User
                .findOne({ username })
                .select("-__v")
        },
    },
};

module.exports = resolvers;