const { User, Character } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

// TO-DO: Create resolvers for User and Character Data

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User
                    .findOne({ _id: context.user._id})
                    .select("-__v -password")
                    .populate("characters");

                return userData;
            };

            throw new AuthenticationError("Not logged in!");
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
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        }, 

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Incorrect credentials! Try again.");
            };

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials! Try again.");
            };

            const token = signToken(user);
            return { token, user };
        }, 

        addCharacter: async (parent, args, context) => {
            if (context.user) {
                const character = await Character.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedCharacters: character._id } },
                    { new: true }
                );

                return character;
            };

            throw new AuthenticationError("You need to be logged in to create a character!");
        },
    },
};

module.exports = resolvers;