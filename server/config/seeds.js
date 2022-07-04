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

    // TO-DO: Assign character data to users

    // TO-DO: Create database of possible data for races, classes, and etc for seeded data to pull from

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
                            itemQuantity: 1,
                            itemWeight: 1,
                            itemRarity: "Common",
                            itemDescription: "If you have proficiency with a musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus, substituting it for any material component that does not list a cost. Each type of musical instrumet requires a separate proficiency.",
                        },
                        {
                            itemName: "Costume",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 4,
                            itemRarity: "Common",
                            itemDescription: "This set of clothes is fashioned after a particular costume, typically meant for entertaining.",
                        },
                        {
                            itemName: "Belt Pouch",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 1,
                            itemRarity: "Common",
                            itemDescription: "A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell componenets is called a component pouch. A pouch can hold up to 1/5 a cubic foot or 6lbs of gear.",
                        },
                        {
                            itemName: "Leather Armor",
                            itemType: "Armor",
                            itemQuantity: 1,
                            itemWeight: 10,
                            itemRarity: "Common",
                            itemDescription: "The breastplate and shoulder protectors of this armor are made of leather that has been stifened by being boiled in oil. The rest of the armor is made of softer and more flexible materials. This armor grants the wearer an armor class of 11 + their dex modifier.",
                        },
                        {
                            itemName: "Explorer's Pack",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 59,
                            itemRarity: "Common",
                            itemDescription: "Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 ft of hempen rope strapped to the side of it.",
                        },
                        {
                            itemName: "Shortbow",
                            itemType: "Weapon",
                            itemQuantity: 1,
                            itemWeight: 2,
                            itemRarity: "Common",
                            itemDescription: "Proficiency with a shortbow allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
                        },
                        {
                            itemName: "Arrows",
                            itemType: "Ammunition",
                            itemQuantity: 20,
                            itemWeight: 30,
                            itemRarity: "Common",
                            itemDescription: "Arrows are used with a weapon that has the ammunition property to make a ranged attack. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon). At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield.",
                        },
                        {
                            itemName: "Scimitar",
                            itemType: "Weapon",
                            itemQuantity: 1,
                            itemWeight: 3,
                            itemRarity: "Common",
                            itemDescription: "Proficiency with a scimitar allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
                        },
                        {
                            itemName: "Druidic Focus - Dreamcatcher Willow Totem",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
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
                spellSlotsTotal: {
                    level1: 2,
                    level2: 0,
                    level3: 0,
                    level4: 0,
                    level5: 0,
                    level6: 0,
                    level7: 0,
                    level8: 0,
                    level9: 0,
                },
                spellSlotsExpended: {
                    level1: 0,
                    level2: 0,
                    level3: 0,
                    level4: 0,
                    level5: 0,
                    level6: 0,
                    level7: 0,
                    level8: 0,
                    level9: 0,
                },
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
                        target: "A creature of your choice that you can see within range",
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
                        description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet. \n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
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
                        description: "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. \n Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.",
                    },
                ]
            },
            createdAt: Date.now,
        }, 
        {
            characterID: 2,
            characterSheet: {
                characterName: "Medrash Daardendrian",
                class: "Cleric",
                level: 1,
                background: "Guild Merchant",
                playerName: "[insert later]",
                race: "White Dragonborn",
                alignment: "Lawful Good",
                experiencePoints: 0,
                statistics: {
                    abilityScores: {
                        strength: 13, 
                        dexterity: 14, 
                        constitution: 15, 
                        intelligence: 12, 
                        wisdom: 17, 
                        charisma: 11, 
                    },
                    inspiration: 0, 
                    proficiencyBonus: 2, 
                    savingThrows: {
                        strength: {
                            proficient: false, 
                            value: 1, 
                            additionalModifiers: [],
                        },
                        dexterity: {
                            proficient: false, 
                            value: 2, 
                            additionalModifiers: [], 
                        },
                        constitution: {
                            proficient: false, 
                            value: 2, 
                            additionalModifiers: [], 
                        },
                        intelligence: {
                            proficient: false, 
                            value: 1, 
                            additionalModifiers: [],
                        }, 
                        wisdom: {
                            proficient: true, 
                            value: 5, 
                            additionalModifiers: [], 
                        },
                        charisma: {
                            proficient: true, 
                            value: 2, 
                            additionalModifiers: [],
                        }, 
                    },
                    armorClass: 18,
                    initiative: 2,
                    speed: 30,
                    hitPoints: {
                        maximum: 10,
                        current: 10,
                        temporary: 0,
                        hitDice: {
                            total: "1d8 + con",
                            current: "1d8",
                        },
                    },
                    skills: {
                        acrobatics: {
                            proficient: false,
                            value: 2,
                            additionalModifiers: [],
                        },
                        animalHandling: {
                            proficient: false,
                            value: 3,
                            additionalModifiers: [],
                        },
                        arcana: {
                            proficient: false,
                            value: 1,
                            additionalModifiers: [],
                        },
                        athletics: {
                            proficient: false,
                            value: 1,
                            additionalModifiers: [],
                        },
                        deception: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                        history: {
                            proficient: true,
                            value: 3,
                            additionalModifiers: [],
                        },
                        insight: {
                            proficient: true,
                            value: 5,
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
                            value: 3,
                            additionalModifiers: [],
                        },
                        nature: {
                            proficient: false,
                            value: 1,
                            additionalModifiers: [],
                        },
                        perception: {
                            proficient: false,
                            value: 3,
                            additionalModifiers: [],
                        },
                        performance: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                        persuasion: {
                            proficient: true,
                            value: 2,
                            additionalModifiers: [],
                        },
                        religion: {
                            proficient: true,
                            value: 3,
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
                            value: 3,
                            additionalModifiers: [],
                        },
                    },
                    passivePerception: 13,
                },
                weapons: [
                    {
                        weaponName: "Mace",
                        weaponType: [
                            "Simple", 
                            "Melee", 
                            "Mace"
                        ],
                        proficient: true,
                        attackBonus: 3,
                        damage: {
                            damageType: "Bludgeoning",
                            damageValue: "1d6 + 1",
                        },
                        properties: [""],
                    },
                    {
                        weaponName: "Light Crossbow",
                        weaponType: [
                            "Simple", 
                            "Ranged", 
                            "Crossbow"
                        ],
                        proficient: true,
                        attackBonus: 4,
                        damage: {
                            damageType: "Piercing",
                            damageValue: "1d8 + 2",
                        },
                        properties: [
                            "Ammunition", "Range (80/320)", "Loading", "Two-Handed"
                        ],
                    },
                ],
                proficiencies: {
                    tools: [""],
                    languages: [
                        "Common", 
                        "Draconic", 
                        "Dwarvish", 
                        "Sylvan"
                    ],
                    armor: [
                        "Light Armor", 
                        "Medium Armor", 
                        "Shield"
                    ],
                    weapons: [
                        "Simple Weapons"
                    ],
                },
                equipment: {
                    items: [
                        {
                            itemName: "Guild Introduction Letter",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 0,
                            itemRarity: "Common",
                            itemDescription: "A letter of introduction from your Merchant Guild.",
                        },
                        {
                            itemName: "Set of Traveler's Clothes",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 4,
                            itemRarity: "Common",
                            itemDescription: "This set of clothes could consist of boots, a wool skirt or breeches, a sturdy belt, a shirt (perhaps with a vest or a jacket), and an ample cloak with a hood.",
                        }, 
                        {
                            itemName: "Belt Pouch",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 1,
                            itemRarity: "Common",
                            itemDescription: "A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell componenets is called a component pouch. A pouch can hold up to 1/5 a cubic foot or 6lbs of gear.",
                        },
                        {
                            itemName: "Mule",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 0,
                            itemRarity: "Common",
                            itemDescription: "A good mount can help you move more quickly through the wilderness, but its primary purpose is to carry the gear that would otherwise slow you down. \n An animal pulling a carriage, cart, chariot, sled, or wagon can move weight up to five times its base carrying capacity, including the weight of the vehicle. If multiple animals pull the same vehicle, they can add their carrying capacity together.",
                        },
                        {
                            itemName: "Cart",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 200,
                            itemRarity: "Common",
                            itemDescription: "If you have proficiency with a certain kind of vehicle (land or water), yoou can add your proficiency bonus to any check you make to control that kind of vehicle in difficult circumstances.",
                        },
                        {
                            itemName: "Explorer's Pack",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 59,
                            itemRarity: "Common",
                            itemDescription: "Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 ft of hempen rope strapped to the side of it.",
                        },
                        {
                            itemName: "Shield",
                            itemType: "Armor",
                            itemQuantity: 1,
                            itemWeight: 6,
                            itemRarity: "Common",
                            itemDescription: "A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your armor class by 2. You can benefit from only one shield at a time.",
                        },
                        {
                            itemName: "Scale Mail",
                            itemType: "Armor",
                            itemQuantity: 1,
                            itemWeight: 45,
                            itemRarity: "Common",
                            itemDescription: "This armor consists of a coat and leggings, (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets.",
                        },
                        {
                            itemName: "Mace",
                            itemType: "Weapon",
                            itemQuantity: 1,
                            itemWeight: 4,
                            itemRarity: "Common",
                            itemDescription: "Proficiency with a mace allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
                        },
                        {
                            itemName: "Light Crossbow",
                            itemType: "Weapon",
                            itemQuantity: 1,
                            itemWeight: 5,
                            itemRarity: "Common",
                            itemDescription: "Proficiency with a light crossbow allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
                        },
                        {
                            itemName: "Crossbow Bolts",
                            itemType: "Ammunition",
                            itemQuantity: 20,
                            itemWeight: 30,
                            itemRarity: "Common",
                            itemDescription: "Crossbow bolts are used with a weapon that has the ammunition property to make a ranged attack. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon). At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield.",
                        },
                        {
                            itemName: "A holy symbol",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 0,
                            itemRarity: "Common",
                            itemDescription: "A holy symbol is a representation of a god or pantheon. A cleric or paladin can use a holy symbol as a spellcasting focus, as described in the Spellcasting section. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.",
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
                        name: "Draconic Ancestry - White Dragon",
                        origin: "Race - Dragonborn",
                        description: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table (Cold).",
                    },
                    {
                        name: "Breath Weapon - White Dragon",
                        origin: "Race - Dragonborn",
                        description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation (White dragon - 15 ft cone, con save, cold damage). \n When you use your breath weapon, each creature in the area of exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. \n After you use your breath weapon, you cannot use it again until you complete a short or long rest.",
                    },
                    {
                        name: "Damage Resistance - White Dragon",
                        origin: "Race - Dragonborn",
                        description: "You have resistance to the damage type associated with your draconic ancestry (White dragon - cold).",
                    },
                    {
                        name: "Guild Business",
                        origin: "Background - Guild Artisan",
                        description: "Most of the guilds are naturally found in the cities which are large enough to support various artisans which are practicing the same trade. However, your guild artisan 5e might be instead a loose networks of artisans like whose each work n a different village within the larger realm. To determine nature of your guild you have to work with your DM (dungeon master). \n As one of the members of your guild, you have to know the skills which are needed to create finished items from the raw materials (There are reflected in your proficiency with a certain kinds of the artisan's tools. \n As well as the principles of the trade and also the good business practices. The query now is either you abondon your trade for adventure or else take on the extra effort to weave the adventuring and also trade together.",
                    },
                    {
                        name: "Guild Membership",
                        origin: "Background - Guild Artisan",
                        description: "Like an establishment and the respect member of guild you can rely on the certain benefits which membership is providing and your fellow membership guild members will be providing you with lodging  and also food if necessary and also pay for your funeral if it needed. In some of the cities and also towns, a guildhall offers a central place to meet the other members of your profession which has the features to be a good place to meet potential patrons allies, or hirelings. \n Guilds are often wield with a tremendous political power. Suppose, if you're accused of a crime sometimes or somewhere there your guild will be supporting you if the good case can be made either for your innocence or for the crime is justifiable. Here you also can gain access to the powerful political figures too through the guild but if you are one of the members in the good standing. For the guilds coffers those kinds of connections might be need the donation of money or the magic items. To the guild you have to pay the amount which dues of 5gp, otherwise if you miss payments unfortunately, you must need to make up back dues to remain in the guilds good graces.",
                    },
                    {
                        name: "Spellcasting",
                        origin: "Class - Cleric",
                        description: "As a conduit for divine power, you can cast cleric spells. \n Cantrips: At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table. \n Spell Slots: The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots. \n For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells. \n You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list. \n Spellcasting Ability: Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one. \n Ritual Casting: You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared. \n Spellcasting Focus: You can use a holy symbol as a spellcasting focus for your cleric spells.",
                    },
                    {
                        name: "Divine Domain - Light",
                        origin: "Class - Cleric",
                        description: "At 1st level, you choose a domain shaped by your choice of Deity and the gifts they grant you. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels. \n Domain Spells: Each domain has a list of spells-its domain spells that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. \n If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.",
                    },
                    {
                        name: "Warding Flare",
                        origin: "Subclass - Domain of Light",
                        description: "Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature. \n You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
                    },
                ],
            }, 
            backstoryAndPersonality: {
                age: "16",
                height: "6 ft, 1 inch",
                weight: "278 lbs",
                eyes: "Violet",
                skin: "Snow",
                hair: "",
                personalityTraits: [
                    "Money and manners won't save you from a hungry owlbear."
                ],
                ideals: [
                    "The small and innocent must be cared for and protected."
                ],
                bonds: [
                    "I will do anything to protect the temple where I served."
                ],
                flaws: [
                    "I am slow to trust members of other races."
                ],
                backstory: "",
                alliesAndOrganizations: "",
                treasure: "",
            },
            spells: {
                spellcastingClass: "Cleric",
                spellcastingAbility: "Wisdom",
                spellSaveDC: 13,
                spellAttackBonus: 5,
                spellSlotsTotal: {
                    level1: 2,
                    level2: 0,
                    level3: 0,
                    level4: 0,
                    level5: 0,
                    level6: 0,
                    level7: 0,
                    level8: 0,
                    level9: 0,
                },
                spellSlotsExpended: {
                    level1: 0,
                    level2: 0,
                    level3: 0,
                    level4: 0,
                    level5: 0,
                    level6: 0,
                    level7: 0,
                    level8: 0,
                    level9: 0,
                },
                spellList: [
                    {
                        name: "Guidance",
                        level: 0,
                        type: "Divination", 
                        castingTime: "1 action",
                        range: "Touch",
                        target: "One willing creature",
                        components: ["V", "S"],
                        duration: "Concentration, Up to 1 minute",
                        prepared: false,
                        description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.",
                    },
                    {
                        name: "Sacred Flame",
                        level: 0,
                        type: "Evocation", 
                        castingTime: "1 action",
                        range: "60 ft",
                        target: "A creature that you can see within range",
                        components: ["V", "S"],
                        duration: "Instantaneous",
                        prepared: false,
                        description: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.",
                    },
                    {
                        name: "Thaumaturgy",
                        level: 0,
                        type: "Transmutation", 
                        castingTime: "1 action",
                        range: "30 ft",
                        target: "See text",
                        components: ["V"],
                        duration: "Up to 1 minute",
                        prepared: false,
                        description: "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range: \n Your voice booms up to three times as loud as normal for 1 minute. \n You cause flames to flicker, brighten, dim, or change color for 1 minute. \n You cause harmless tremors in the ground for 1 minute. \n You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers. \n You instantaneously cause an unlocked door or window to fly open or slam shut. \n You alter the appearance of your eyes for 1 minute. \n If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.",
                    },
                    {
                        name: "Light",
                        level: 0,
                        type: "Evocation", 
                        castingTime: "1 action",
                        range: "Touch",
                        target: "One object that is no larger than 10 ft in any dimension",
                        components: ["V", "M (A firefly or phosphorescent moss)"],
                        duration: "1 hour",
                        prepared: false,
                        description: "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. \n If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.",
                    },
                    {
                        name: "Burning Hands",
                        level: 1,
                        type: "Evocation", 
                        castingTime: "1 action",
                        range: "Self (15-foot cone)",
                        target: "Self (15-foot cone)",
                        components: ["V", "S"],
                        duration: "Instantaneous",
                        prepared: false,
                        description: "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried. \n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
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
                        description: "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. \n Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.",
                    },
                    {
                        name: "Bless",
                        level: 1,
                        type: "Enchantment", 
                        castingTime: "1 action",
                        range: "30 ft",
                        target: "Up to three creatures of your choice within range",
                        components: ["V", "S", "M (A sprinkling of holy water)"],
                        duration: "Concentration, Up to 1 minute",
                        prepared: false,
                        description: "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw. \n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
                    },
                    {
                        name: "Healing Word",
                        level: 1,
                        type: "Evocation", 
                        castingTime: "1 bonus action",
                        range: "60 ft",
                        target: "A creature of your choice that you can see within range",
                        components: ["V"],
                        duration: "Instantaneous",
                        prepared: false,
                        description: "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs. \n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the Healing increases by 1d4 for each slot level above 1st.",
                    },
                    {
                        name: "Guiding Bolt",
                        level: 1,
                        type: "Evocation", 
                        castingTime: "1 action",
                        range: "120 ft",
                        target: "A creature of your choice within range",
                        components: ["V", "S"],
                        duration: "1 round",
                        prepared: false,
                        description: "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then. \n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
                    },
                    {
                        name: "Bane",
                        level: 1,
                        type: "Enchantment", 
                        castingTime: "1 action",
                        range: "30 ft",
                        target: "Up to three creatures of your choice that you can see within range",
                        components: ["V", "S", "M (A drop of blood)"],
                        duration: "Concentration, Up to 1 minute",
                        prepared: false,
                        description: "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw. \n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
                    },
                ]
            },
            createdAt: Date.now,
        },
        {
            characterID: 3,
            characterSheet: {
                characterName: "Holg Amblecrown",
                class: "Warlock",
                level: 1,
                background: "Charlatan",
                playerName: "[insert later]",
                race: "Half-Orc",
                alignment: "Chaotic Good",
                experiencePoints: 0,
                statistics: {
                    abilityScores: {
                        strength: 9, 
                        dexterity: 13, 
                        constitution: 14, 
                        intelligence: 10, 
                        wisdom: 11, 
                        charisma: 16, 
                    },
                    inspiration: 0, 
                    proficiencyBonus: 2, 
                    savingThrows: {
                        strength: {
                            proficient: false, 
                            value: 1, 
                            additionalModifiers: [],
                        },
                        dexterity: {
                            proficient: false, 
                            value: 1, 
                            additionalModifiers: [], 
                        },
                        constitution: {
                            proficient: false, 
                            value: 2, 
                            additionalModifiers: [], 
                        },
                        intelligence: {
                            proficient: false, 
                            value: 0, 
                            additionalModifiers: [],
                        }, 
                        wisdom: {
                            proficient: true, 
                            value: 2, 
                            additionalModifiers: [], 
                        },
                        charisma: {
                            proficient: true, 
                            value: 5, 
                            additionalModifiers: [],
                        }, 
                    },
                    armorClass: 12,
                    initiative: 1,
                    speed: 30,
                    hitPoints: {
                        maximum: 10,
                        current: 10,
                        temporary: 0,
                        hitDice: {
                            total: "1d8 + con",
                            current: "1d8",
                        },
                    },
                    skills: {
                        acrobatics: {
                            proficient: false,
                            value: 1,
                            additionalModifiers: [],
                        },
                        animalHandling: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                        arcana: {
                            proficient: true,
                            value: 2,
                            additionalModifiers: [],
                        },
                        athletics: {
                            proficient: false,
                            value: -1,
                            additionalModifiers: [],
                        },
                        deception: {
                            proficient: true,
                            value: 5,
                            additionalModifiers: [],
                        },
                        history: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                        insight: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                        intimidation: {
                            proficient: true,
                            value: 5,
                            additionalModifiers: [],
                        },
                        investigation: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                        medicine: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                        nature: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                        perception: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                        performance: {
                            proficient: false,
                            value: 3,
                            additionalModifiers: [],
                        },
                        persuasion: {
                            proficient: false,
                            value: 3,
                            additionalModifiers: [],
                        },
                        religion: {
                            proficient: true,
                            value: 2,
                            additionalModifiers: [],
                        },
                        sleightOfHand: {
                            proficient: true,
                            value: 3,
                            additionalModifiers: [],
                        },
                        stealth: {
                            proficient: false,
                            value: 1,
                            additionalModifiers: [],
                        },
                        survival: {
                            proficient: false,
                            value: 0,
                            additionalModifiers: [],
                        },
                    },
                    passivePerception: 10,
                },
                weapons: [
                    {
                        weaponName: "Quarterstaff",
                        weaponType: [
                            "Simple", 
                            "Melee", 
                            "Staff"
                        ],
                        proficient: true,
                        attackBonus: 1,
                        damage: {
                            damageType: "Bludgeoning",
                            damageValue: "1d6/1d8 + 1",
                        },
                        properties: ["Versatile"],
                    },
                    {
                        weaponName: "Light Crossbow",
                        weaponType: [
                            "Simple", 
                            "Ranged", 
                            "Crossbow"
                        ],
                        proficient: true,
                        attackBonus: 4,
                        damage: {
                            damageType: "Piercing",
                            damageValue: "1d8 + 1",
                        },
                        properties: [
                            "Ammunition", "Range (80/320)", "Loading", "Two-Handed"
                        ],
                    },
                    {
                        weaponName: "Dagger",
                        weaponType: [
                            "Simple", 
                            "Melee", 
                            "Dagger"
                        ],
                        proficient: true,
                        attackBonus: +3,
                        damage: {
                            damageType: "Piercing",
                            damageValue: "1d4 + 1",
                        },
                        properties: [
                            "Finesse", "Light", "Thrown", "Range (20/60)"
                        ],
                    },
                ],
                proficiencies: {
                    tools: [
                        "Disguise Kit", "Forgery Kit"
                    ],
                    languages: [
                        "Common", "Orc"
                    ],
                    armor: [
                        "Light Armor"
                    ],
                    weapons: [
                        "Simple Weapons"
                    ],
                },
                equipment: {
                    items: [
                        {
                            itemName: "Disguise Kit",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 3,
                            itemRarity: "Common",
                            itemDescription: "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.",
                        },
                        {
                            itemName: "Deck of marked cards",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 0,
                            itemRarity: "Common",
                            itemDescription: "A marked deck is best used to tell you what cards are in other people's hands. You can use this to win games like hold em, and 5 card stud by being able to see what they have and whether you should bet this round. If you know they have a hand that will beat you, you save your money for when you know they can't. \n If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set.",
                        },
                        {
                            itemName: "Set of fine clothes",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 6,
                            itemRarity: "Common",
                            itemDescription: "This set of clothes is designed specifically to be expensive and to show it, including fancy, tailored clothes in whatever fashion happens to be the current style in the courts of the nobles. Precious metals and gems could be worked into the clothing.",
                        },
                        {
                            itemName: "Belt Pouch",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 1,
                            itemRarity: "Common",
                            itemDescription: "A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell componenets is called a component pouch. A pouch can hold up to 1/5 a cubic foot or 6lbs of gear.",
                        },
                        {
                            itemName: "Dagger",
                            itemType: "Weapon",
                            itemQuantity: 2,
                            itemWeight: 2,
                            itemRarity: "Common",
                            itemDescription: "Proficiency with a dagger allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
                        },
                        {
                            itemName: "Component Pouch",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 2,
                            itemRarity: "Common",
                            itemDescription: "A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description).",
                        },
                        {
                            itemName: "Leather Armor",
                            itemType: "Armor",
                            itemQuantity: 1,
                            itemWeight: 10,
                            itemRarity: "Common",
                            itemDescription: "The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.",
                        },
                        {
                            itemName: "Quarterstaff",
                            itemType: "Weapon",
                            itemQuantity: 1,
                            itemWeight: 4,
                            itemRarity: "Common",
                            itemDescription: "Proficiency with a quarterstaff allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
                        },
                        {
                            itemName: "Dungeoneer's Pack",
                            itemType: "Wondrous Item",
                            itemQuantity: 1,
                            itemWeight: 61.5,
                            itemRarity: "Common",
                            itemDescription: "Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.",
                        },
                        {
                            itemName: "Light Crossbow",
                            itemType: "Weapon",
                            itemQuantity: 1,
                            itemWeight: 5,
                            itemRarity: "Common",
                            itemDescription: "Proficiency with a light crossbow allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
                        },
                        {
                            itemName: "Crossbow Bolts",
                            itemType: "Ammunition",
                            itemQuantity: 20,
                            itemWeight: 30,
                            itemRarity: "Common",
                            itemDescription: "Crossbow bolts are used with a weapon that has the ammunition property to make a ranged attack. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon). At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield.",
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
                        origin: "Race - Half-Orc",
                        description: "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                    },
                    {
                        name: "Relentless Endurance",
                        origin: "Race - Half-Orc",
                        description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
                    },
                    {
                        name: "Savage Attacks",
                        origin: "Race - Half-Orc",
                        description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
                    },
                    {
                        name: "Favorite Schemes",
                        origin: "Background - Charlatan",
                        description: "Every charlatan has an angle they use in preference to other schemes. Choose a favorite scam or roll on the table below. \n I cheat at games of chance. \n I shave coins or forge documents. \n I insinuate myself into people's lives to prey on their weakness and secure their fortunes. \n I put on new identities like clothes. \n I run sleight-of-hand cons on street corners. \n I convince people that worthless junk is worth their hard-earned money.",
                    },
                    {
                        name: "False Identity",
                        origin: "Background - Charlatan",
                        description: "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.",
                    },
                    {
                        name: "Otherworldly Patron - The Archfey",
                        origin: "Class - Warlock",
                        description: "At 1st level, you have struck a bargain with an otherworldly being of your choice. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level. \n The Archfey: Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being's motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power or the settling of age-old grudges. Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and ancient hags.",
                    },
                    {
                        name: "Pact Magic",
                        origin: "Class - Warlock",
                        description: "Your arcane research and the magic bestowed on you by your patron have given you facility with spells. \n Cantrips: You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table. \n Spell Slots: The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest. \n For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell Witch Bolt, you must spend one of those slots, and you cast it as a 3rd-level spell. \n Spells Known of 1st Level and Higher: At 1st level, you know two 1st-level spells of your choice from the warlock spell list. \n The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level or higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level. \n Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots. \n Spellcasting Ability: Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one. \n Spellcasting Focus: You can use an arcane focus as a spellcasting focus for your warlock spells.",
                    },
                    {
                        name: "Fey Presence",
                        origin: "Subclass - Pact of the Archfey",
                        description: "Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn. \n Once you use this feature, you can't use it again until you finish a short or long res",
                    },
                ],
            }, 
            backstoryAndPersonality: {
                age: "28",
                height: "6 ft, 11 inches",
                weight: "200 lbs",
                eyes: "Black",
                skin: "Grayish Green",
                hair: "Light Brown",
                personalityTraits: [
                    "I have a crude sense of humor."
                ],
                ideals: [
                    "Helping others is the most important thing in the world."
                ],
                bonds: [
                    "My father sold his soul to some kind of devil in order to save me from a childhood illness or life threatening event."
                ],
                flaws: [
                    "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat."
                ],
                backstory: "",
                alliesAndOrganizations: "",
                treasure: "",
            },
            spells: {
                spellcastingClass: "Warlock",
                spellcastingAbility: "Charisma",
                spellSaveDC: 13,
                spellAttackBonus: 5,
                spellSlotsTotal: {
                    level1: 1,
                    level2: 0,
                    level3: 0,
                    level4: 0,
                    level5: 0,
                    level6: 0,
                    level7: 0,
                    level8: 0,
                    level9: 0,
                },
                spellSlotsExpended: {
                    level1: 0,
                    level2: 0,
                    level3: 0,
                    level4: 0,
                    level5: 0,
                    level6: 0,
                    level7: 0,
                    level8: 0,
                    level9: 0,
                },
                spellList: [
                    {
                        name: "Eldritch Blast",
                        level: 0,
                        type: "Evocation", 
                        castingTime: "1 action",
                        range: "120 ft",
                        target: "A creature within range",
                        components: ["V", "S"],
                        duration: "Instantaneous",
                        prepared: false,
                        description: "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.\n At Higher Levels. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.",
                    },
                    {
                        name: "Poison Spray",
                        level: 0,
                        type: "Conjuration", 
                        castingTime: "1 action",
                        range: "10 ft",
                        target: "A creature you can see within range",
                        components: ["V", "S"],
                        duration: "Instantaneous",
                        prepared: false,
                        description: "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.",
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
                        description: "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. \n Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.",
                    },
                    {
                        name: "Sleep",
                        level: 1,
                        type: "Enchantment", 
                        castingTime: "1 action",
                        range: "90 ft",
                        target: "Creatures within 20 feet of a point you choose within range (in ascending order of their current hit points, ignoring unconscious creatures)",
                        components: ["V", "S", "M (A pinch of fine sand, rose petals, or a cricket)"],
                        duration: "1 minute",
                        prepared: false,
                        description: "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren't affected by this spell. \n At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.",
                    },
                    {
                        name: "Hex",
                        level: 1,
                        type: "Enchantment", 
                        castingTime: "1 bonus action",
                        range: "90 ft",
                        target: "A creature that you can see within range",
                        components: ["V", "S", "M (The petrified eye of a newt)"],
                        duration: "Concentration, Up to 1 hour",
                        prepared: false,
                        description: "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability. \n If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature. \n A Remove Curse cast on the target ends this spell early. \n At Higher Levels. When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.",
                    },
                    {
                        name: "Witch Bolt",
                        level: 1,
                        type: "Evocation", 
                        castingTime: "1 action",
                        range: "30 ft",
                        target: "A creature within range",
                        components: ["V", "S", "M (A twig from a tree that has been struck by lightning)"],
                        duration: "Concentration, Up to 1 minute",
                        prepared: false,
                        description: "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell’s range or if it has total cover from you. \n At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st.",
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
        //                     itemQuantity: Number,
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
        //         spellSlotsTotal: {
        //             level1: Number,
        //             level2: Number,
        //             level3: Number,
        //             level4: Number,
        //             level5: Number,
        //             level6: Number,
        //             level7: Number,
        //             level8: Number,
        //             level9: Number,
        //         },
        //         spellSlotsExpended: {
        //             level1: Number,
        //             level2: Number,
        //             level3: Number,
        //             level4: Number,
        //             level5: Number,
        //             level6: Number,
        //             level7: Number,
        //             level8: Number,
        //             level9: Number,
        //         },
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