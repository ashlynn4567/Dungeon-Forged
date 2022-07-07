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
        playerId: ID
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
        statistics: Statistics
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
        statistics: StatisticsInput
        weapons: [WeaponsInput]
        proficiencies: ProficienciesInput
        equipment: EquipmentInput
        featuresAndTraits: [FeaturesAndTraitsInput]
    }

    type Statistics {
        abilityScores: AbilityScores
        inspiration: Int
        proficiencyBonus: Int
        savingThrows: SavingThrows
        armorClass: Int
        initiative: Int
        speed: Int
        hitPoints: HitPoints
        skills: [Skills]
        passivePerception: Int
    }

    input StatisticsInput {
        abilityScores: AbilityScoresInput
        inspiration: Int
        proficiencyBonus: Int
        savingThrows: SavingThrowsInput
        armorClass: Int
        initiative: Int
        speed: Int
        hitPoints: HitPointsInput
        skills: [SkillsInput]
        passivePerception: Int
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
        strength: GenericStat
        dexterity: GenericStat
        constitution: GenericStat
        intelligence: GenericStat
        wisdom: GenericStat
        charisma: GenericStat
    }

    input SavingThrowsInput {
        strength: GenericStatInput
        dexterity: GenericStatInput
        constitution: GenericStatInput
        intelligence: GenericStatInput
        wisdom: GenericStatInput
        charisma: GenericStatInput
    }

    type GenericStat {
        proficient: Boolean
        value: Int
    }

    input GenericStatInput {
        proficient: Boolean
        value: Int
    }

    type HitPoints {
        maximum: Int
        current: Int
        temporary: Int
        hitDice: HitDice
    }

    input HitPointsInput {
        maximum: Int
        current: Int
        temporary: Int
        hitDice: HitDiceInput
    }

    type HitDice {
        total: String
        current: String
    }

    input HitDiceInput {
        total: String
        current: String
    }

    type Skills {
        acrobatics: GenericStat
        animalHandling: GenericStat
        arcana: GenericStat
        athletics: GenericStat
        deception: GenericStat
        history: GenericStat
        insight: GenericStat
        intimidation: GenericStat
        investigation: GenericStat
        medicine: GenericStat
        nature: GenericStat
        perception: GenericStat
        performance: GenericStat
        persuasion: GenericStat
        religion: GenericStat
        sleightOfHand: GenericStat
        stealth: GenericStat
        survival: GenericStat
    }

    input SkillsInput {
        acrobatics: GenericStatInput
        animalHandling: GenericStatInput
        arcana: GenericStatInput
        athletics: GenericStatInput
        deception: GenericStatInput
        history: GenericStatInput
        insight: GenericStatInput
        intimidation: GenericStatInput
        investigation: GenericStatInput
        medicine: GenericStatInput
        nature: GenericStatInput
        perception: GenericStatInput
        performance: GenericStatInput
        persuasion: GenericStatInput
        religion: GenericStatInput
        sleightOfHand: GenericStatInput
        stealth: GenericStatInput
        survival: GenericStatInput
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
        type: String
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
        type: String
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
        character(playerId: ID, characterId: ID!): Character
        characters(username: String!): [Character]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addCharacter(characterSheet: CharacterSheetInput!, backstoryAndPersonality: BackstoryAndPersonalityInput!, spells: SpellsInput!): Character
    }
`;

module.exports = typeDefs;