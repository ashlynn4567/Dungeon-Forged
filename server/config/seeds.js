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
    
    for (let i = 0; i < 3; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    };

    const createdUsers = await User.collection.insertMany(userData);

    // // create Character data
    // let createdCharacters = [];
    // let characterData = [];
    // for (let i = 0; i < 5; i += 1) {
    //     const characterName = (faker.name.firstName() + " " + faker.name.lastName());
        
    //     const randomUserIndex = Math.floor(Math.random() * )
    // }

    const createdCharacters = [
        {
            characterID: 1,
            characterSheet: {
                characterName: "Frug Kovocun",
                class: "Druid",
                level: 1,
                background: "Entertainer",
                playerName: "[insert later]",
                race: "Rock Gnome",
                alignment: "True Neutral",
                experiencePoints: 0,
                statistics: {
                    abilityScores: {
                        strength: 9, 
                        dexterity: 15, 
                        constitution: 19, 
                        intelligence: 13, 
                        wisdom: 18, 
                        charisma: 11, 
                    },
                    inspiration: 0, 
                    proficiencyBonus: 2, 
                    savingThrows: {
                        strength: {
                            proficient: false, 
                            value: -1, 
                            additionalModifiers: [],
                        },
                        dexterity: {
                            proficient: false, 
                            value: 2, 
                            additionalModifiers: [], 
                        },
                        constitution: {
                            proficient: false, 
                            value: 4, 
                            additionalModifiers: [], 
                        },
                        intelligence: {
                            proficient: true, 
                            value: 3, 
                            additionalModifiers: [],
                        }, 
                        wisdom: {
                            proficient: true, 
                            value: 6, 
                            additionalModifiers: [], 
                        },
                        charisma: {
                            proficient: false, 
                            value: 0, 
                            additionalModifiers: [],
                        }, 
                    },
                    armorClass: 13,
                    initiative: 2,
                    speed: 25,
                    hitPoints: {
                        maximum: 12,
                        current: 12,
                        temporary: 0,
                        hitDice: {
                            total: "1d8 + con",
                            current: "1d8",
                        },
                    },
                    skills: {
                        acrobatics: {
                            proficient: true,
                            value: 4,
                            additionalModifiers: [],
                        },
                        animalHandling: {
                            proficient: false,
                            value: 4,
                            additionalModifiers: [],
                        },
                        arcana: {
                            proficient: false,
                            value: 1,
                            additionalModifiers: [],
                        },
                        athletics: {
                            proficient: false,
                            value: -1,
                            additionalModifiers: [],
                        },
                        deception: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                        history: {
                            proficient: false,
                            value: 1,
                            additionalModifiers: [],
                        },
                        insight: {
                            proficient: false,
                            value: 4,
                            additionalModifiers: [],
                        },
                        intimidation: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                        investigation: {
                            proficient: false,
                            value: 1,
                            additionalModifiers: [],
                        },
                        medicine: {
                            proficient: false,
                            value: 4,
                            additionalModifiers: [],
                        },
                        nature: {
                            proficient: true,
                            value: 3,
                            additionalModifiers: [],
                        },
                        perception: {
                            proficient: true,
                            value: 6,
                            additionalModifiers: [],
                        },
                        performance: {
                            proficient: true,
                            value: 2,
                            additionalModifiers: [],
                        },
                        persuasion: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                        religion: {
                            proficient: false,
                            value: 1,
                            additionalModifiers: [],
                        },
                        sleightOfHand: {
                            proficient: false,
                            value: 2,
                            additionalModifiers: [],
                        },
                        stealth: {
                            proficient: false,
                            value: 2,
                            additionalModifiers: [],
                        },
                        survival: {
                            proficient: false,
                            value: 4,
                            additionalModifiers: [],
                        },
                    },
                    passivePerception: 16,
                },
                weapons: [
                    {
                        weaponName: "Scimitar",
                        weaponType: [
                            "Martial", 
                            "Melee",
                            "Sword",
                        ],
                        proficient: true,
                        attackBonus: 4,
                        damage: {
                            damageType: "Slashing",
                            damageValue: "1d6 + 2",
                        },
                        properties: [
                            "Finesse", "Light"
                        ],
                    },
                    {
                        weaponName: "Shortbow",
                        weaponType: [
                            "Simple", 
                            "Ranged",
                            "Bow",
                        ],
                        proficient: false,
                        attackBonus: 2,
                        damage: {
                            damageType: "Piercing",
                            damageValue: "1d6 + 2",
                        },
                        properties: [
                            "Ammunition", "Range (80/320)", "Two-Handed"
                        ],
                    },
                ],
                proficiencies: {
                    tools: [
                        "Tinker's Tools", 
                        "Flute", 
                        "Disguise Kit",
                        "Herbalism Kit",
                    ],
                    languages: [
                        "Common", 
                        "Gnomish", 
                        "Druidic"
                    ],
                    armor: [
                        "Light Armor", 
                        "Medium Armor", 
                        "Shield"
                    ],
                    weapons: [
                        "Club", 
                        "Dagger", 
                        "Dart", 
                        "Javelin", 
                        "Mace", 
                        "Quarterstaff", 
                        "Scimitar", 
                        "Sickle", 
                        "Sling", 
                        "Spear",
                    ],
                },
                equipment: {
                    items: [
                        {
                            itemName: "Flute",
                            itemType: "Wondrous Item",
                            itemWeight: 1,
                            itemRarity: "Common",
                            itemDescription: "If you have proficiency with a musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus, substituting it for any material component that does not list a cost. Each type of musical instrumet requires a separate proficiency.",
                        },
                        {
                            itemName: "Costume",
                            itemType: "Wondrous Item",
                            itemWeight: 4,
                            itemRarity: "Common",
                            itemDescription: "This set of clothes is fashioned after a particular costume, typically meant for entertaining.",
                        },
                        {
                            itemName: "Belt Pouch",
                            itemType: "Wondrous Item",
                            itemWeight: 1,
                            itemRarity: "Common",
                            itemDescription: "A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell componenets is called a component pouch. A pouch can hold up to 1/5 a cubic foot or 6lbs of gear.",
                        },
                        {
                            itemName: "Leather Armor",
                            itemType: "Armor",
                            itemWeight: 10,
                            itemRarity: "Common",
                            itemDescription: "The breastplate and shoulder protectors of this armor are made of leather that has been stifened by being boiled in oil. The rest of the armor is made of softer and more flexible materials. This armor grants the wearer an armor class of 11 + their dex modifier.",
                        },
                        {
                            itemName: "Explorer's Pack",
                            itemType: "Wondrous Item",
                            itemWeight: 59,
                            itemRarity: "Common",
                            itemDescription: "Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 ft of hempen rope strapped to the side of it.",
                        },
                        {
                            itemName: "Shortbow",
                            itemType: "Weapon",
                            itemWeight: 2,
                            itemRarity: "Common",
                            itemDescription: "Proficiency with a shortbow allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
                        },
                        {
                            itemName: "Scimitar",
                            itemType: "Weapon",
                            itemWeight: 3,
                            itemRarity: "Common",
                            itemDescription: "Proficiency with a scimitar allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
                        },
                        {
                            itemName: "Druidic Focus - Dreamcatcher Willow Totem",
                            itemType: "Wondrous Item",
                            itemWeight: 0,
                            itemRarity: "Wondrous Item",
                            itemDescription: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus, substituting it for any material component that does not list a cost.",
                        },
                    ],
                    currency: {
                        copperPieces: 0,
                        silverPieces: 0, 
                        electrum: 0,
                        goldPieces: 15, 
                        platinumPieces: 0,
                    }
                },
                featuresandTraits: [
                    {
                        name: "Darkvision",
                        origin: "Race - Gnome",
                        description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                    },
                    {
                        name: "Gnome Cunning",
                        origin: "Race - Gnome",
                        description: "You have advantage on all Intelligence, Wisdom, and Charisma saves against magic.",
                    },
                    {
                        name: "Artificer's Lore",
                        origin: "Subrace - Rock Gnome",
                        description: "Whenever you make an Intelligence (History) check related to magical, alchemical, or technological items, you can add twice your proficiency bonus instead of any other proficiency bonus that may apply.",
                    },
                    {
                        name: "Tinker",
                        origin: "Subrace - Rock Gnome",
                        description: "You have proficiency with artisan tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options: \n Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents. \n Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action. \n Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed. \n At your DM's discretion, you may make other objects with effects similar in power to these. The Prestidigitation cantrip is a good baseline for such effects.",
                    },
                    {
                        name: "Entertainer Routines",
                        origin: "Background - Entertainer",
                        description: "A good entertainer is versatile and spicing up every performance with lots of variety of different routines. You have to chose one to three routines or else role on the table below to explain your experience as an entertainer 5e. \n Options: Actor, Dancer, Fire-eater, Jester, Juggler, Instrumentalist, Poet, Singer, Storyteller, Tumbler.",
                    },
                    {
                        name: "By Popular Demand",
                        origin: "Background - Entertainer",
                        description: "You have a capacity to find a place to perform. Actually, either in an inn or tavern but most possibly with a circus, at a theater or it may be in a noble's court. As long as you perform each night, you can receive free food and also lodging of a modest or else comfortable standard (it depends on the quality of the establishment) it happens at those kinds of places only. Your performance will make you something of the local figure and this is in addition. The strangers typically take a liking to you and this would be happened in a town where strangers recognize you.",
                    },
                    {
                        name: "Druidic",
                        origin: "Class - Druid",
                        description: "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.",
                    },
                    {
                        name: "Spellcasting",
                        origin: "Class - Druid",
                        description: "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. \n Cantrips: At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table. \n Preparing and Casting Spells: The Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your Druid level (minimum of one spell). The spells must be of a level for which you have spell slots. For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells. You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list. \n Spellcasting Ability: Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one. \n Spellcasting Focus: You can use a druidic focus as a spellcasting focus for your druid spells.",
                    },
                ],
            }, 
            backstoryAndPersonality: {
                age: "87",
                height: "3ft, 7inches",
                weight: "46 lbs",
                eyes: "Pale Blue",
                skin: "Light Brown",
                hair: "Dark Blond",
                personalityTraits: [
                    "There's nothing I like more than a good mystery.",
                ],
                ideals: [
                    "Bettering yourself is essential in life.", 
                ],
                bonds: [
                    "I am the last of my tribe, and it si up to me to ensure the name of my tribe goes down in legend.",  
                ],
                flaws: [
                    "I'm a sucker for a pretty face.",
                ],
                backstory: "",
                alliesAndOrganizations: "",
                treasure: "",
            },
            spells: {
                spellcastingClass: "Druid",
                spellcastingAbility: "Wisdom",
                spellSaveDC: 14,
                spellAttackBonus: 6,
                spellList: [
                    {
                        name: "Produce Flame",
                        level: 0,
                        type: "Conjuration", 
                        castingTime: "1 action",
                        range: "Self",
                        target: "",
                        components: ["V", "S"],
                        duration: "10 minutes",
                        prepared: false,
                        description: "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again. \n You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage.",
                    },
                    {
                        name: "Druidcraft",
                        level: 0,
                        type: "Transmutation", 
                        castingTime: "1 action",
                        range: "30 ft",
                        target: "",
                        components: ["V", "S"],
                        duration: "Instantaneous",
                        prepared: false,
                        description: "Whispering to the spirits of nature, you create one of the following effects within range. \n You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round. \n You instantly make a flower blossom, a seed pod open, or a leaf bud bloom. \n You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube. \n You instantly light or snuff out a candle, a torch, or a small campfire.",
                    },
                    {
                        name: "Healing Word",
                        level: 1,
                        type: "Evocation", 
                        castingTime: "1 bonus action",
                        range: "60 ft",
                        target: "",
                        components: ["V"],
                        duration: "Instantaneous",
                        prepared: false,
                        description: "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs. \n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the Healing increases by 1d4 for each slot level above 1st.",
                    },
                    {
                        name: "Thunderwave",
                        level: 1,
                        type: "Evocation", 
                        castingTime: "1 action",
                        range: "Self (15-ft cube)",
                        target: "Self (15-ft cube)",
                        components: ["V", "S"],
                        duration: "Instantaneous",
                        prepared: false,
                        description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn’t pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell’s effect, and the spell emits a thunderous boom audible out to 300 feet. \n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
                    },
                    {
                        name: "Entangle",
                        level: 1,
                        type: "Conjuration", 
                        castingTime: "1 action",
                        range: "90 ft",
                        target: "A point within range",
                        components: ["V", "S"],
                        duration: "Concentration, Up to 1 minute",
                        prepared: false,
                        description: "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain. \n A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself. \n When the spell ends, the conjured plants wilt away.",
                    },
                    {
                        name: "Cure Wounds",
                        level: 1,
                        type: "Evocation", 
                        castingTime: "1 action",
                        range: "Touch",
                        target: "A creature you touch",
                        components: ["V", "S"],
                        duration: "Instantaneous",
                        prepared: false,
                        description: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. \n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the Healing increases by 1d8 for each slot level above 1st.",
                    },
                    {
                        name: "Faerie Fire",
                        level: 1,
                        type: "Evocation", 
                        castingTime: "1 action",
                        range: "60 ft",
                        target: "Each object in a 20 ft cube within range",
                        components: ["V"],
                        duration: "Concentration, Up to 1 minute",
                        prepared: false,
                        description: "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. \n Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can’t benefit from being invisible.",
                    },
                ]
            },
            createdAt: Date.now,
        }, 



        // {
        //     characterID: Number,
        //     characterSheet: {
        //         characterName: "",
        //         class: "",
        //         level: Number,
        //         background: "",
        //         playerName: "[insert later]",
        //         race: "",
        //         alignment: "",
        //         experiencePoints: Number,
        //         statistics: {
        //             abilityScores: {
        //                 strength: Number, 
        //                 dexterity: Number, 
        //                 constitution: Number, 
        //                 intelligence: Number, 
        //                 wisdom: Number, 
        //                 charisma: Number, 
        //             },
        //             inspiration: Number, 
        //             proficiencyBonus: Number, 
        //             savingThrows: {
        //                 strength: {
        //                     proficient: Boolean, 
        //                     value: Number, 
        //                     additionalModifiers: [],
        //                 },
        //                 dexterity: {
        //                     proficient: Boolean, 
        //                     value: Number, 
        //                     additionalModifiers: [], 
        //                 },
        //                 constitution: {
        //                     proficient: Boolean, 
        //                     value: Number, 
        //                     additionalModifiers: [], 
        //                 },
        //                 intelligence: {
        //                     proficient: Boolean, 
        //                     value: Number, 
        //                     additionalModifiers: [],
        //                 }, 
        //                 wisdom: {
        //                     proficient: Boolean, 
        //                     value: Number, 
        //                     additionalModifiers: [], 
        //                 },
        //                 charisma: {
        //                     proficient: Boolean, 
        //                     value: Number, 
        //                     additionalModifiers: [],
        //                 }, 
        //             },
        //             armorClass: Number,
        //             initiative: Number,
        //             speed: Number,
        //             hitPoints: {
        //                 maximum: Number,
        //                 current: Number,
        //                 temporary: Number,
        //                 hitDice: {
        //                     total: "",
        //                     current: "",
        //                 },
        //             },
        //             skills: {
        //                 acrobatics: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 animalHandling: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 arcana: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 athletics: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 deception: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 history: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 insight: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 intimidation: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 investigation: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 medicine: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 nature: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 perception: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 performance: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 persuasion: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 religion: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 sleightOfHand: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 stealth: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //                 survival: {
        //                     proficient: Boolean,
        //                     value: Number,
        //                     additionalModifiers: [],
        //                 },
        //             },
        //             passivePerception: Number,
        //         },
        //         weapons: [
        //             {
        //                 weaponName: "",
        //                 weaponType: [""],
        //                 proficient: Boolean,
        //                 attackBonus: Number,
        //                 damage: {
        //                     damageType: "",
        //                     damageValue: "",
        //                 },
        //                 properties: [""],
        //             },
        //         ],
        //         proficiencies: {
        //             tools: [""],
        //             languages: [""],
        //             armor: [""],
        //             weapons: [""],
        //         },
        //         equipment: {
        //             items: [
        //                 {
        //                     itemName: "",
        //                     itemType: "",
        //                     itemWeight: Number,
        //                     itemRarity: "",
        //                     itemDescription: "",
        //                 },
        //             ],
        //             currency: {
        //                 copperPieces: Number,
        //                 silverPieces: Number, 
        //                 electrum: Number,
        //                 goldPieces: Number, 
        //                 platinumPieces: Number,
        //             }
        //         },
        //         featuresandTraits: [
        //             {
        //                 name: "",
        //                 origin: "",
        //                 description: "",
        //             },
        //         ],
        //     }, 
        //     backstoryAndPersonality: {
        //         age: "",
        //         height: "",
        //         weight: "",
        //         eyes: "",
        //         skin: "",
        //         hair: "",
        //         personalityTraits: [""],
        //         ideals: [""],
        //         bonds: [""],
        //         flaws: [""],
        //         backstory: "",
        //         alliesAndOrganizations: "",
        //         treasure: "",
        //     },
        //     spells: {
        //         spellcastingClass: "",
        //         spellcastingAbility: "",
        //         spellSaveDC: Number,
        //         spellAttackBonus: Number,
        //         spellList: [
        //             {
        //                 name: "",
        //                 level: Number,
        //                 type: "", 
        //                 castingTime: "",
        //                 range: "",
        //                 target: "",
        //                 components: [""],
        //                 duration: "",
        //                 prepared: false,
        //                 description: "",
        //             },
        //         ]
        //     },
        //     createdAt: Date.now,
        // },
    ];

    console.log("Data seeded successfully.");
    process.exit(0);
});