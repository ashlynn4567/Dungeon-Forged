// imports
const express = require("express");
const path = require("path");
const db = require("./config/connection");
const { auth } = require("./utils/auth");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("schemas");

// instantiate app
const app = express();
const PORT = process.env.PORT || 3001;

// apollo server initiation
const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context: auth
});

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve client/build as static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
};

// send static HTML if wildcard field searched
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// create instance of Apollo server
const startApolloServer = async(typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once("open", () => {
        app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
        console.log(`Use GraphQL at https://localhost:${PORT}${server.graphqlPath}`);
    });    
};

startApolloServer(typeDefs, resolvers);