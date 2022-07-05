// imports 
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const { dateFormat } = require("../utils/dateFormat");

// import schema from Character
const characterSchema = require("./Character");

// create user schema
const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true, 
            unique: true,
        }, 
        email: {
            type: String, 
            required: true, 
            unique: true, 
            match: [/.+@.+\..+/, "You must enter a valid email address!"],
        }, 
        password: {
            type: String, 
            required: true,
            hide: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // date formatter
            get: (createdAtVal => dateFormat(createdAtVal))
        },
        updatedAt: {
            type: Date,
            // date formatter
            get: (updatedAtVal => dateFormat(updatedAtVal))
        },
        // set savedCharacters as an array of data that follows characterSchema rules
        // savedCharacters: [characterSchema], 
    }, 
    // use virtuals
    {
        toJSON: {
            virtuals: true, 
        },
    },
);

// hash user password before it is saved to mongoDB
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    };

    next();
});

// method to compare and validate password 
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

// create a virtual to return number of saved characters when querying a user
userSchema.virtual("characterCount").get(function () {
    return this.savedCharacters.length;
});

// instruct User to follow the userSchema, and prep it for export
const User = model("User", userSchema);

// exports
module.exports = User;