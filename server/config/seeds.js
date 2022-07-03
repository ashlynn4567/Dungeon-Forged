// TO-DO
const faker = require("faker");
const db = require("../config/connection");
const { User, Character } = require("../models");

db.once("open", async () => {
    // clear database of any old data, character first
    // await Character.deleteMany({});
    await User.deleteMany({});

    // create user data
    const userData = [];
    
    for (let i = 0; i < 10; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    };

    const createdUsers = await User.collection.insertMany(userData);

    // // create Character data
    // let createdCharacters = [];
    // for (let i = 0; i < 5; i += 1) {
    //     const 
    // }

    console.log("Data seeded successfully.");
    process.exit(0);
});