const { gql } = require("apollo-server-express");

// TO-DO: Queries and Mutations for types created from character data

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
        userId: ID
        characterId: ID
        characterSheet: CharacterSheet
        backstoryAndPersonality: BackstoryAndPersonality
        spells: Spells
    }

    type CharacterSheet {
        characterName: String
        class: String
        level: Int
        background: String
        race: String
        alignment: String
        experiencePoints: Int
        abilityScores: AbilityScores
        inspiration: Int
        proficiencyBonus: Int
        savingThrows: SavingThrows
        armorClass: Int
        initiative: Int
        speed: Int
        hitPoints: HitPoints
        skills: Skills
        passivePerception: Int
        weapons: [Weapons]
        proficiencies: Proficiencies
        equipment: Equipment
        featuresAndTraits: [FeaturesAndTraits]
    }

    input CharacterSheetInput {
        characterName: String
        class: String
        level: Int
        background: String
        race: String
        alignment: String
        experiencePoints: Int
        abilityScores: AbilityScoresInput
        inspiration: Int
        proficiencyBonus: Int
        savingThrows: SavingThrowsInput
        armorClass: Int
        initiative: Int
        speed: Int
        hitPoints: HitPointsInput
        skills: SkillsInput
        passivePerception: Int
        weapons: [WeaponsInput]
        proficiencies: ProficienciesInput
        equipment: EquipmentInput
        featuresAndTraits: [FeaturesAndTraitsInput]
    }

    type AbilityScores {
        strength: Int
        dexterity: Int
        constitution: Int
        intelligence: Int
        wisdom: Int
        charisma: Int
    }

    input AbilityScoresInput {
        strength: Int
        dexterity: Int
        constitution: Int
        intelligence: Int
        wisdom: Int
        charisma: Int
    }

    type SavingThrows {
        strength: GenericSavingThrow
        dexterity: GenericSavingThrow
        constitution: GenericSavingThrow
        intelligence: GenericSavingThrow
        wisdom: GenericSavingThrow
        charisma: GenericSavingThrow
    }

    input SavingThrowsInput {
        strength: GenericSavingThrowInput
        dexterity: GenericSavingThrowInput
        constitution: GenericSavingThrowInput
        intelligence: GenericSavingThrowInput
        wisdom: GenericSavingThrowInput
        charisma: GenericSavingThrowInput
    }

    type GenericSavingThrow {
        proficient: Boolean
        value: Int
    }

    input GenericSavingThrowInput {
        proficient: Boolean
        value: Int
    }

    type HitPoints {
        maximum: Int
        current: Int
        temporary: Int
        hitDice: String
    }

    input HitPointsInput {
        maximum: Int
        current: Int
        temporary: Int
        hitDice: String
    }

    type Skills {
        acrobatics: GenericSkills
        animalHandling: GenericSkills
        arcana: GenericSkills
        athletics: GenericSkills
        deception: GenericSkills
        history: GenericSkills
        insight: GenericSkills
        intimidation: GenericSkills
        investigation: GenericSkills
        medicine: GenericSkills
        nature: GenericSkills
        perception: GenericSkills
        performance: GenericSkills
        persuasion: GenericSkills
        religion: GenericSkills
        sleightOfHand: GenericSkills
        stealth: GenericSkills
        survival: GenericSkills
    }

    input SkillsInput {
        acrobatics: GenericSkillsInput
        animalHandling: GenericSkillsInput
        arcana: GenericSkillsInput
        athletics: GenericSkillsInput
        deception: GenericSkillsInput
        history: GenericSkillsInput
        insight: GenericSkillsInput
        intimidation: GenericSkillsInput
        investigation: GenericSkillsInput
        medicine: GenericSkillsInput
        nature: GenericSkillsInput
        perception: GenericSkillsInput
        performance: GenericSkillsInput
        persuasion: GenericSkillsInput
        religion: GenericSkillsInput
        sleightOfHand: GenericSkillsInput
        stealth: GenericSkillsInput
        survival: GenericSkillsInput
    }

    type GenericSkills {
        proficient: Boolean
        value: Int
    }

    input GenericSkillsInput {
        proficient: Boolean
        value: Int
    }

    type Weapons {
        weaponName: String
        weaponType: [String]
        proficient: Boolean
        attackBonus: Int
        damage: WeaponDamage
        properties: [String]
    }

    input WeaponsInput {
        weaponName: String
        weaponType: [String]
        proficient: Boolean
        attackBonus: Int
        damage: WeaponDamageInput
        properties: [String]
    }

    type WeaponDamage {
        damageType: String
        damageValue: String
    }

    input WeaponDamageInput {
        damageType: String
        damageValue: String
    }

    type Proficiencies {
        tools: [String]
        languages: [String]
        armor: [String]
        weapons: [String]
    }

    input ProficienciesInput {
        tools: [String]
        languages: [String]
        armor: [String]
        weapons: [String]
    }

    type Equipment {
        items: [Items]
        currency: Currency
    }

    input EquipmentInput {
        items: [ItemsInput]
        currency: CurrencyInput
    }

    type Items {
        itemName: String
        itemType: String
        itemQuantity: Int
        itemWeight: Int
        itemRarity: String
        itemDescription: String
    }

    input ItemsInput {
        itemName: String
        itemType: String
        itemQuantity: Int
        itemWeight: Int
        itemRarity: String
        itemDescription: String
    }

    type Currency {
        copperPieces: Int
        silverPieces: Int
        electrum: Int
        goldPieces: Int
        platinumPieces: Int
    }

    input CurrencyInput {
        copperPieces: Int
        silverPieces: Int
        electrum: Int
        goldPieces: Int
        platinumPieces: Int
    }

    type FeaturesAndTraits {
        name: String
        origin: String
        description: String
    }

    input FeaturesAndTraitsInput {
        name: String
        origin: String
        description: String
    }

    type BackstoryAndPersonality {
        age: Int
        height: String
        weight: String
        eyes: String
        skin: String
        hair: String
        personalityTraits: [String]
        ideals: [String]
        bonds: [String]
        flaws: [String]
        backstory: String
        alliesAndOrganizations: String
        treasure: String
    }

    input BackstoryAndPersonalityInput {
        age: Int
        height: String
        weight: String
        eyes: String
        skin: String
        hair: String
        personalityTraits: [String]
        ideals: [String]
        bonds: [String]
        flaws: [String]
        backstory: String
        alliesAndOrganizations: String
        treasure: String
    }

    type Spells {
        spellcastingClass: String
        spellcastingAbility: String
        spellSaveDC: Int
        spellAttackBonus: Int
        spellSlotsTotal: SpellSlots
        spellSlotsExpended: SpellSlots
        spellList: [SpellList]
    }

    input SpellsInput {
        spellcastingClass: String
        spellcastingAbility: String
        spellSaveDC: Int
        spellAttackBonus: Int
        spellSlotsTotal: SpellSlotsInput
        spellSlotsExpended: SpellSlotsInput
        spellList: [SpellListInput]
    }

    type SpellSlots {
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

    input SpellSlotsInput {
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

    type SpellList {
        name: String
        level: Int
        spellType: String
        castingTime: String
        range: String
        target: String
        components: [String]
        duration: String
        prepared: Boolean
        description: String
    }

    input SpellListInput {
        name: String
        level: Int
        spellType: String
        castingTime: String
        range: String
        target: String
        components: [String]
        duration: String
        prepared: Boolean
        description: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        characters: [Character]
        character(userId: ID, characterId: ID!): Character
        userCharacters(username: String!): [Character]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addCharacter(characterSheet: CharacterSheetInput!, backstoryAndPersonality: BackstoryAndPersonalityInput!, spells: SpellsInput!): Character
    }
`;

module.exports = typeDefs;