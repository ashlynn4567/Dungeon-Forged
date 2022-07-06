const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Character {
        characterId: ID
        characterSheet: {
            characterName: String
            class: String
            level: Int
            background: String
            playerName: User
            race: String
            alignment: String
            experiencePoints: Int
            statistics: {
                abilityScores: {
                    strength: Int
                    dexterity: Int
                    constitution: Int
                    intelligence: Int
                    wisdom: Int
                    charisma: Int
                }
                inspiration: Int
                proficiencyBonus: Int
                savingThrows: {
                    strength: {
                        proficient: Boolean
                        value: Int
                    }
                    dexterity: {
                        proficient: Boolean
                        value: Int
                    }
                    constitution: {
                        proficient: Boolean
                        value: Int
                    }
                    intelligence: {
                        proficient: Boolean
                        value: Int
                    }
                    wisdom: {
                        proficient: Boolean
                        value: Int
                    }
                    charisma: {
                        proficient: Boolean
                        value: Int
                    }
                }
                armorClass: Int
                ini
            }
        }

    }

    type Auth {
        token: ID!
        user: User
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