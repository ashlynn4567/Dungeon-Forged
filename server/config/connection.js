// imports
const mongoose = require("mongoose");

// use mongoose to connect mongodb database with server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/dungeon-forged", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

// exports
module.exports = mongoose.connection;