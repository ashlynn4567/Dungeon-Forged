const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }
`;

//  characterCount: Int
//  savedCharacters: [Character]

// const typeDefs = gql`
//     type Query {
//         _id: ID
//         username: String
//         email: String
//         savedCharacters: String
//         characterCount: Int
//     }
// `;

module.exports = typeDefs;

// type Character {
//     characterID: ID
//     characterSheet:
//         characterName: 
//         class: 
//         level:
//         background:
//         playerName:
//         race: 
//         alignment:
//         experiencePoints:
//         statistics:
//             abilityScores:
//                 strength:
//                 dexterity:
//                 constitution:
//                 intelligence:
//                 wisdom:
//                 charisma:
//             inspiration:
//             proficiencyBonus:
//             savingThrows:
//                 strength:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 dexterity:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 constitution:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 intelligence:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 wisdom:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 charisma:
//                     proficient:
//                     value:
//                     additionalModifiers:
//             armorClass:
//             initiative:
//             speed:
//             hitPoints:
//                 maximum:
//                 current:
//                 temporary:
//                 hitDice:
//                     total:
//                     current:
//             skills:
//                 acrobatics:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 animalHandling:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 arcana:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 athletics:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 deception:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 history:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 insight:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 intimidation:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 investigation:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 medicine:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 nature:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 perception:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 performance:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 persuasion:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 religion:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 sleightOfHand:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 stealth:
//                     proficient:
//                     value:
//                     additionalModifiers:
//                 survival:
//                     proficient:
//                     value:
//                     additionalModifiers:
//             passivePerception:
//         weapons:
//             weaponName:
//             proficient:
//             attackBonus:
//             damage:
//         proficiencies:
//             tools:
//             languages:
//             armor:
//             weapons:
//         equipment:
//             itemName:
//             itemWeight:
//             itemDescription:
//         featuresandTraits:
//             feature:
//                 name:
//                 description:
//     backstoryAndPersonality:
//         age:
//         height:
//         weight:
//         eyes:
//         skin:
//         hair:
//         backstory:
//         alliesAndOrganizations:
//         treasure:
//     spells:
//         spellcastingClass:
//         spellcastingAbility:
//         spellSaveDC:
//         spellList:
//             name:
//             level:
//             description:
//     createdAt:
//     updatedAt:
// }