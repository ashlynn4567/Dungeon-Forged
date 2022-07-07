// imports 
const { Schema, model } = require("mongoose");
const { dateFormat } = require("../utils/dateFormat");

// import schemas
// const raceSchema = require("./Race");

// TO-DO: Potentially break into smaller model collections and link tables together
// TO-DO: Implement helper functions to calculate and autopopulate numbers
// ex: Stealth = Dex + PB
// TO-DO: Add a "homebrew" checkbox option that lets users override default
// and type in their own homebrew rules or values

// character Schema
const characterSchema = new Schema(
    {
        playerId: {
            // TO-DO: Make this username instead of userID (in typedefs too)
            type: Schema.Types.ObjectId, 
            ref: "User",
        },
        characterSheet: {
            characterName: {
                type: String, 
                required: true,
                trim: true,
                minLength: 1,
                maxLength: 40,
            },
            class: {
                type: String,
                required: true,
                trim: true,
                minLength: 1,
                maxLength: 30,
            }, 
            level: {
                type: Number, 
                required: true,
                trim: true,
                min: [1, "Level must not be 0!"],
                max: [20, "Highest allowed level for this tool is 20!"], 
            }, 
            background: {
                type: String, 
                trim: true,
                minLength: 1,
                maxLength: 40,
            }, 
            race: {
                type: String, 
                required: true,
                trim: true,
                minLength: 1,
                maxLength: 30,
            }, 
            alignment: {
                type: String, 
                trim: true,
                minLength: 1,
                maxLength: 40,
            },
            experiencePoints: {
                type: Number, 
                trim: true,
                min: 1,
                max: 400000,
            },
            statistics: {
                abilityScores: {
                    strength: {
                        type: Number,
                        required: true,
                        trim: true,
                        min: [1, "Ability score must not be 0!"],
                        max: 30, 
                    },  
                    dexterity: {
                        type: Number, 
                        required: true,
                        trim: true,
                        min: [1, "Ability score must not be 0!"],
                        max: 30, 
                    },
                    constitution: {
                        type: Number, 
                        required: true,
                        trim: true,
                        min: [1, "Ability score must not be 0!"],
                        max: 30, 
                    },
                    intelligence: {
                        type: Number, 
                        required: true,
                        trim: true,
                        min: [1, "Ability score must not be 0!"],
                        max: 30, 
                    }, 
                    wisdom: {
                        type: Number, 
                        required: true,
                        trim: true,
                        min: [1, "Ability score must not be 0!"],
                        max: 30, 
                    }, 
                    charisma: {
                        type: Number, 
                        required: true,
                        trim: true,
                        min: [1, "Ability score must not be 0!"],
                        max: 30, 
                    },
                }, 
                inspiration: {
                    type: Number,
                    default: 0,
                }, 
                proficiencyBonus: Number, 
                savingThrows: {
                    strength: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },  
                    dexterity: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },
                    constitution: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },
                    intelligence: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    }, 
                    wisdom: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    }, 
                    charisma: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },
                }, 
                armorClass: {
                    type: Number, 
                    required: true,
                    trim: true,
                    min: [1, "Armor class must not be 0!"],
                    max: 30, 
                }, 
                initiative: {
                    type: Number, 
                    required: true,
                    trim: true,
                    min: [-5, "Initiave cannot go any lower!"],
                    max: 20, 
                }, 
                speed: {
                    type: Number, 
                    required: true,
                    trim: true,
                    min: [0, "Speed must not be 0!"],
                    max: 120, 
                }, 
                hitPoints: [
                    {
                        maximum: {
                            type: Number, 
                            required: true,
                            trim: true,
                            min: [0, "Max HP must not be 0!"],
                            max: 600,
                        }, 
                        current: {
                            type: Number, 
                            trim: true,
                            min: -600,
                            max: 600,
                        },
                        temporary: {
                            type: Number, 
                            trim: true,
                            min: [0, "Temporary HP cannot be negative!"],
                            max: 1000,
                            default: 0,
                        },
                        hitDice: {
                            total: {
                                // TO-DO
                                type: String,
                            }, 
                            current: {
                                // TO-DO
                                type: String,
                            },
                        }
                    } 
                ], 
                skills: {
                    acrobatics: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },
                    animalHandling: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },
                    arcana: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },
                    athletics: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },
                    deception: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },
                    history: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number, 
                    },
                    insight: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number, 
                    },
                    intimidation: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },
                    investigation: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },
                    medicine: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number, 
                    },
                    nature: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number, 
                    },
                    perception: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },
                    performance: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number, 
                    },
                    persuasion: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number, 
                    },
                    religion: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number, 
                    },
                    sleightOfHand: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                    },
                    stealth: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number, 
                    },
                    survival: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number, 
                    },
                },
                passivePerception: Number,
            }, 
            // TO-DO: change to attacks + spellcasting?
            weapons: [
                {
                    weaponName: {
                        type: String, 
                        trim: true, 
                    }, 
                    weaponType: [
                        {
                            type: String, 
                            trim: true,
                            default: "",
                        },
                    ],
                    proficient: Boolean,
                    attackBonus: Number, 
                    damage: {
                        damageType: String, 
                        damageValue: String,
                    },
                    properties: [
                        {
                            type: String, 
                            trim: true,
                            default: "",
                        },
                    ],
                }
            ], 
            proficiencies: {
                // TO-DO
                tools: [String],
                // TO-DO
                languages: [String], 
                // TO-DO
                armor: [String], 
                // TO-DO
                weapons: [String], 
            },
            equipment: {
                items: [
                    {
                        itemName: { type: String, trim: true },
                        itemType: { 
                            type: String, 
                            trim: true,
                            default: "",
                        },
                        itemQuantity: Number,
                        itemWeight: Number,
                        itemRarity: { type: String, trim: true },
                        itemDescription: { type: String, trim: true },
                    },
                ],
                currency: {
                    copperPieces: { type: Number, trim: true, default: 0 },
                    silverPieces: { type: Number, trim: true, default: 0 }, 
                    electrum: { type: Number, trim: true, default: 0 },
                    goldPieces: { type: Number, trim: true, default: 0 }, 
                    platinumPieces: { type: Number, trim: true, default: 0 },
                },
            },
            featuresAndTraits: [
                {
                    name: {
                        type: String,
                        default: "",
                    },
                    origin: {
                        type: String,
                        default: "",
                    },
                    description: {
                        type: String,
                        default: "",
                    }, 
                    default: {},
                }
            ],
        },
        backstoryAndPersonality: {
            age: {
                type: Number, 
                trim: true,
                min: [1, "Age must not be 0!"], 
            },
            height: {
                type: String, 
                trim: true,
                minLength: 1,
                maxLength: 30,
            },
            weight: {
                type: String, 
                trim: true,
                minLength: 1,
                maxLength: 30,
            },
            eyes: {
                type: String, 
                trim: true,
                minLength: 1,
                maxLength: 30,
            },
            skin: {
                type: String, 
                trim: true,
                minLength: 1,
                maxLength: 30,
            },
            hair: {
                type: String, 
                trim: true,
                minLength: 1,
                maxLength: 30,
            },
            personalityTraits: [
                {
                    type: String,
                    default: "",
                },
            ], 
            ideals: [
                {
                    type: String,
                    default: "",
                },
            ],
            bonds: [
                {
                    type: String,
                    default: "",
                },
            ], 
            flaws: [
                {
                    type: String,
                    default: "",
                },
            ],
            backstory: String,
            alliesAndOrganizations: String,
            treasure: String,
        }, 
        spells: {
            spellcastingClass: {
                type: String,
                required: true,
                trim: true,
                minLength: 1,
                maxLength: 30,
            },
            spellcastingAbility: {
                type: String,
                required: true,
                trim: true,
                minLength: 1,
                maxLength: 30,
            }, 
            spellSaveDC: {
                type: Number, 
                required: true,
                trim: true,
                min: [8, "Lowest possible DC is 8."],
                max: [30, "Highest possible spell save DC is 30."], 
            },
            spellAttackBonus: {
                type: Number, 
                required: true,
                trim: true,
                min: [2, "Lowest possible spell attack bonus is 8."],
                max: [20, "Highest possible spell attack bonus is 20."], 
            },
            spellSlotsTotal: {
                level1: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of spell slots is 10."], 
                },
                level2: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of spell slots is 10."], 
                },
                level3: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of spell slots is 10."], 
                },
                level4: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of spell slots is 10."], 
                },
                level5: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of spell slots is 10."], 
                },
                level6: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of spell slots is 10."], 
                },
                level7: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of spell slots is 10."], 
                },
                level8: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of spell slots is 10."], 
                },
                level9: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of spell slots is 10."], 
                },
            },
            spellSlotsExpended: {
                level1: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of expended spell slots is 10."], 
                },
                level2: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of expended spell slots is 10."], 
                },
                level3: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of expended spell slots is 10."], 
                },
                level4: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of expended spell slots is 10."], 
                },
                level5: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of expended spell slots is 10."], 
                },
                level6: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of expended spell slots is 10."], 
                },
                level7: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of expended spell slots is 10."], 
                },
                level8: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of expended spell slots is 10."], 
                },
                level9: {
                    type: Number, 
                    trim: true,
                    min: [0, "Cannot have less than 0 spell slots."],
                    max: [20, "Highest allowed number of expended spell slots is 10."], 
                },
            },
            spellList: [
                {
                    name: {
                        type: String,
                        default: "",
                    },
                    level: Number,
                    type: String,
                    castingTime: String,
                    range: String,
                    target: { type: String, default: "" },
                    components: [
                        { type: String }
                    ],
                    duration: String,
                    prepared: { type: Boolean, default: false, },
                    description: {
                        type: String,
                        default: "",
                    },
                },
            ],
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
    },
    {
        toJSON: {
            virtuals: true,
        }
    },
);

const Character = model("Character", characterSchema);

// exports
module.exports = Character, characterSchema;