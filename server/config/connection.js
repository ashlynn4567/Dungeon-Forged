// imports
const mongoose = require("mongoose");

// use mongoose to connect mongodb database with server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dungeon-forged", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true, 
    useFindAndModify: false
});

// exports
module.exports = mongoose.connection;