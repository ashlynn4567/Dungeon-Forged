// imports 
const { Schema, model } = require("mongoose");

// import schemas
// const raceSchema = require("./Race");

// TO-DO: Potentially break into smaller collections and link tables together
// TO-DO: Implement helper functions to calculate and autopopulate numbers
// ex: Stealth = Dex + PB
// TO-DO: Add a "homebrew" checkbox option that lets users override default
// and type in their own homebrew rules or values
// character Schema
const characterSchema = new Schema(
    {
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
            playerName: {
                type: Schema.Types.ObjectId, 
                ref: "User",
                required: true,
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
                        additionalModifiers: {
                            type: [
                                {
                                    source: String,
                                    value: Number,
                                }
                            ], 
                            default: [],
                        },
                    },  
                    dexterity: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                        additionalModifiers: {
                            type: [
                                {
                                    source: String,
                                    value: Number,
                                }
                            ], 
                            default: [],
                        },
                    },
                    constitution: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                        additionalModifiers: {
                            type: [
                                {
                                    source: String,
                                    value: Number,
                                }
                            ], 
                            default: [],
                        },
                    },
                    intelligence: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                        additionalModifiers: {
                            type: [
                                {
                                    source: String,
                                    value: Number,
                                }
                            ], 
                            default: [],
                        },
                    }, 
                    wisdom: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                        additionalModifiers: {
                            type: [
                                {
                                    source: String,
                                    value: Number,
                                }
                            ], 
                            default: [],
                        },
                    }, 
                    charisma: {
                        proficient: {
                            type: Boolean,
                            default: false,
                        },
                        value: Number,
                        additionalModifiers: {
                            type: [
                                {
                                    source: String,
                                    value: Number,
                                }
                            ], 
                            default: [],
                        },
                    },
                }, 
                armorClass: {
                    type: Number, 
                    required: true,
                    trim: true,
                    min: [1, "Armor class must not be 0!"],
                    max: 30, 
                }, 
                intiative: {
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
                skills: [
                    {
                        acrobatics: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number,
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        animalHandling: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        arcana: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        athletics: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        deception: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number,
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        history: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        insight: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        intimidation: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        investigation: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        medicine: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        nature: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        perception: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        performance: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        persuasion: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        religion: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        sleightOfHand: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number,
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        stealth: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                        survival: {
                            proficient: {
                                type: Boolean,
                                default: false,
                            },
                            value: Number, 
                            additionalModifiers: {
                                type: [
                                    {
                                        source: String,
                                        value: Number,
                                    }
                                ], 
                                default: [],
                            },
                        },
                    },
                ],
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
            // get: (createdAtVal = dateFormat(createdAtVal))
        },
        updatedAt: {
            type: Date,
            // date formatter
            // get: (updatedAtVal = dateFormat(updatedAtVal))
        },
    },
    {
        toJSON: {
            virtuals: true,
        }
    },
);

// TO-DO: minlength and maxlength function for String variables
// TO-DO: date formatter

// Character.pre("save", function (next, docs) {
// 	// Loop through skills
// 	Object.keys(this.stats.skills).forEach((key) => {
// 		let skill = this.stats.skills[key];
// 		skill.skill.value = Math.floor(
// 			// Calculate modifier
// 			(this.stats.abilities[skill.ability] - 10) / 2
// 		);
// 	});

// 	let Race = this.model("Race");

// 	// Get the characters speed from their race.
// 	// This will likely be changed because the
// 	// character speed may change.
// 	Race.findOne({ _id: this.race })
// 		.then((characterRace) => {
// 			if (characterRace) {
// 				this.stats.speed = characterRace.stats.speed;
// 			}
// 		})
// 		.then(() => {
// 			next();
// 		});
// });

// Character.pre("save", function (next, docs) {
// 	this.updatedAt = new Date();
// 	next();
// });

const Character = model("Character", characterSchema);

// exports
module.exports = characterSchema;