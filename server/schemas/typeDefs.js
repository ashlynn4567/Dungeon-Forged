const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        savedCharacters: [Character]
        characterCount: Int
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
                initiative: Int
                speed: Int
                hitPoints: [
                    {
                        maximum: Int
                        current: Int
                        temporary: Int
                        hitDice: {
                            total: String
                            current: String
                        }
                    }
                ]
                skills: [
                    acrobatics: {
                        proficient: Boolean
                        value: Int
                    }
                    animalHandling: {
                        proficient: Boolean
                        value: Int
                    }
                    arcana: {
                        proficient: Boolean
                        value: Int
                    }
                    athletics: {
                        proficient: Boolean
                        value: Int
                    }
                    deception: {
                        proficient: Boolean
                        value: Int
                    }
                    history: {
                        proficient: Boolean
                        value: Int
                    }
                    insight: {
                        proficient: Boolean
                        value: Int
                    }
                    intimidation: {
                        proficient: Boolean
                        value: Int
                    }
                    investigation: {
                        proficient: Boolean
                        value: Int
                    }
                    medicine: {
                        proficient: Boolean
                        value: Int
                    }
                    nature: {
                        proficient: Boolean
                        value: Int
                    }
                    perception: {
                        proficient: Boolean
                        value: Int
                    }
                    performance: {
                        proficient: Boolean
                        value: Int
                    }
                    persuasion: {
                        proficient: Boolean
                        value: Int
                    }
                    religion: {
                        proficient: Boolean
                        value: Int
                    }
                    sleightOfHand: {
                        proficient: Boolean
                        value: Int
                    }
                    stealth: {
                        proficient: Boolean
                        value: Int
                    }
                    survival: {
                        proficient: Boolean
                        value: Int
                    }
                ]
                passivePerception: Int
            }
            weapons: [
                {
                    weaponName: String
                    weaponType: String
                    proficient: Boolean
                    attackBonus: Int
                    damage: {
                        damageType: String
                        damageValue: String
                    }
                    properties: [String]
                }
            ]
            proficiencies: {
                tools: [String]
                languages: [String]
                armor: [String]
                weapons: [String]
            }
            equipment: {
                items: [
                    {
                        itemName: String
                        itemType: String
                        itemQuantity: Int
                        itemWeight: Int
                        itemRarity: String
                        itemDescription: String
                    }
                ]
                currency: {
                    copperPieces: Int
                    silverPieces: Int
                    electrum: Int
                    goldPieces: Int
                    platinumPieces: Int
                }
            }
            featuresAndTraits: [
                {
                    name: String
                    origin: String
                    description: String
                }
            ]
        }
        backstoryAndPersonality: {
            age: Int
            height: String
            weight: String
            eyes: String
            skin: String
            hair: String
            personalityTraits: [{String}]
            ideals: [{String}]
            bonds: [{String}]
            flaws: [{String}]
            backstory: String
            alliesAndOrganizations: String
            treasure: String
        }
        spells: {
            spellcastingClass: String
            spellcastingAbility: String
            spellSaveDC: Int
            spellAttackBonus: Int
            spellSlotsTotal: {
                level1: Int
                level2: Int
                level3: Int
                level4: Int
                level5: Int
                level6: Int
                level7: Int
                level8: Int
                level9: Int
            }
            spellSlotsExpended: {
                level1: Int
                level2: Int
                level3: Int
                level4: Int
                level5: Int
                level6: Int
                level7: Int
                level8: Int
                level9: Int
            }
            spellList: [
                {
                    name: String
                    level: Int
                    type: String
                    castingTime: String
                    range: String
                    target: String
                    components: [{String}]
                    duration: String
                    prepared: Boolean
                    description: String
                }
            ]
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

module.exports = typeDefs;