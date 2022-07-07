// imports
const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "mysecret";
const expiration = "1h";

// exports
module.exports = {
    // function for authenticated routes
    auth: function ({ req }) {
        // allows token to be sent via req.body, req.query or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // separate "Bearer" from "<tokenvalue>" ["Bearer", "<tokenvalue>"]
        if (req.headers.authorization) {
            token = token.split(" ").pop().trim();
        };

        // if no token, return object as is
        if (!token) {
            return req;
        };

        try {
            // decode and attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log("Invalid token.");
        };

        // return updated request object
        return req;
    }, 

    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};