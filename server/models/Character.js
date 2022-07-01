// imports 
const { Schema } = require("mongoose");

// TO-DO: Potentially break into smaller collections and link tables together
// character Schema
const characterSchema = new Schema({
    playerName: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
    },
    characterName: {
        type: String, 
        required: true,
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
    hitPoints: {
        type: Number, 
        required: true,
        trim: true,
        min: [0, "Max HP must not be 0!"],
        max: 600, 
    }, 
    skills: [
        {
            acrobatics: {
                proficient: Boolean,
            },
            animalHandling: {
                proficient: Boolean,
            },
            arcana: {
                proficient: Boolean,
            },
            athletics: {
                proficient: Boolean,
            },
            deception: {
                proficient: Boolean,
            },
            history: {
                proficient: Boolean,
            },
            insight: {
                proficient: Boolean,
            },
            intimidation: {
                proficient: Boolean,
            },
            investigation: {
                proficient: Boolean,
            },
            medicine: {
                proficient: Boolean,
            },
            nature: {
                proficient: Boolean,
            },
            perception: {
                proficient: Boolean,
            },
            performance: {
                proficient: Boolean,
            },
            persuasion: {
                proficient: Boolean,
            },
            religion: {
                proficient: Boolean,
            },
            sleightOfHand: {
                proficient: Boolean,
            },
            stealth: {
                proficient: Boolean,
            },
            survival: {
                proficient: Boolean,
            },
        },
    ],
    proficiencies: [
        {
            tools: String,
            languages: String, 
            armor: String, 
            weapons: String, 
        },
    ],
    weapons: [
        {
            weaponName: {
                type: String, 
                trim: true, 
            }, 
            attackBonus: String, 
            damage: {
                damageType: String, 
                damageValue: String,
            },
        }
    ], 
    equipment: [
        {
            itemName: { type: String, trim: true },
            itemWeight: Number, 
            itemDescription: { type: String, trim: true },
        }
    ], 
    // TO-DO: finish later
    featuresAndTraits: [
        {
            type: String,
        }
    ],
    // TO-DO: finish later
    spells: [
        {
            type: String,
        }
    ],
});

// exports
module.exports = characterSchema;