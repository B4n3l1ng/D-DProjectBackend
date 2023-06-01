const mongoose = require("mongoose");
const Character = require("../models/Character.model");
const Class = require("../models/Class.model");

// artisan's tools: "Alchemist's supplies", "Brewer's supplies", "Calligrapher's supplies", "Carpenter's tools", "Cobbler's tools", "Cook's utensils", "Glassblower's tools", "Jeweler's tools", "Leatherworker's tools", "Mason's tools", "Painter's supplies", "Potter's tools", "Smith's tools","Tinker's tools", "Weaver's Tools", "Woodcarver's tools"
//miscelaneous tools: "Disguise Kit", "Forgery Kit", "Herbalism Kit", "Navigator's tools", "Poisoner's kit", "Thieve's tools"
const seed = [
  {
    name: "Crelros",
    level: 16,
    race: "Half-orc",
    class: "Fighter",
    subclass: "Champion",
    profBonus: 5,
    speed: 45,
    str: 23,
    strMod: 6,
    strSaveProf: true,
    dex: 13,
    dexMod: 1,
    dexSaveProf: false,
    con: 16,
    conMod: 3,
    conSaveProf: true,
    int: 10,
    intMod: 0,
    intSaveProf: false,
    wis: 13,
    wisMod: 1,
    wisSaveProf: false,
    cha: 12,
    chaMod: 1,
    chaSaveProf: false,
    armorClass: 19,
    acrobatics: 6,
    animalHandling: 6,
    arcana: 0,
    athletics: 16,
    deception: 6,
    history: 0,
    insight: 1,
    intimidation: 6,
    investigation: 0,
    medicine: 6,
    nature: 0,
    perception: 1,
    performance: 1,
    persuasion: 1,
    religion: 0,
    sleightOfHand: 6,
    stealth: 6,
    survival: 11,
  },
  {
    name: "Cris",
    level: 16,
    race: "Protector Aasimar",
    class: "Ranger",
    subclass: "Beastmaster",
    profBonus: 5,
    speed: 35,
    str: 12,
    strMod: 1,
    strSaveProf: true,
    dex: 20,
    dexMod: 5,
    dexSaveProf: true,
    con: 15,
    conMod: 2,
    conSaveProf: false,
    int: 13,
    intMod: 1,
    intSaveProf: false,
    wis: 20,
    wisMod: 5,
    wisSaveProf: false,
    cha: 12,
    chaMod: 1,
    chaSaveProf: false,
    armorClass: 17,
    acrobatics: 5,
    animalHandling: 10,
    arcana: 6,
    athletics: 1,
    deception: 1,
    history: 1,
    insight: 5,
    intimidation: 1,
    investigation: 6,
    medicine: 5,
    nature: 6,
    perception: 15,
    performance: 1,
    persuasion: 1,
    religion: 1,
    sleightOfHand: 5,
    stealth: 5,
    survival: 10,
  },
  {
    name: "Ren",
    level: 3,
    race: "Half-elf (Custom Lineage)",
    class: "Blood Hunter",
    subclass: "Order of the Lycan",
    profBonus: 2,
    speed: 30,
    str: 14,
    strMod: 2,
    strSaveProf: false,
    dex: 18,
    dexMod: 4,
    dexSaveProf: true,
    con: 15,
    conMod: 2,
    conSaveProf: false,
    int: 9,
    intMod: -1,
    intSaveProf: true,
    wis: 18,
    wisMod: 4,
    wisSaveProf: true,
    cha: 6,
    chaMod: -2,
    chaSaveProf: false,
    armorClass: 18,
    acrobatics: 6,
    animalHandling: 4,
    arcana: -1,
    athletics: 2,
    deception: -2,
    history: -1,
    insight: 6,
    intimidation: -2,
    investigation: -1,
    medicine: 4,
    nature: -1,
    perception: 4,
    performance: -2,
    persuasion: -2,
    religion: -1,
    sleightOfHand: 6,
    stealth: 6,
    survival: 6,
  },
  {
    name: "Lilith",
    level: 3,
    race: "Half-elf (Custom Lineage)",
    class: "Sorcerer",
    subclass: "Shadow",
    profBonus: 2,
    speed: 30,
    str: 11,
    strMod: 1,
    strSaveProf: false,
    dex: 13,
    dexMod: 1,
    dexSaveProf: false,
    con: 14,
    conMod: 2,
    conSaveProf: true,
    int: 14,
    intMod: 2,
    intSaveProf: false,
    wis: 12,
    wisMod: 1,
    wisSaveProf: false,
    cha: 18,
    chaMod: 4,
    chaSaveProf: true,
    armorClass: 15,
    acrobatics: 1,
    animalHandling: 1,
    arcana: 4,
    athletics: 0,
    deception: 6,
    history: 2,
    insight: 1,
    intimidation: 4,
    investigation: 4,
    medicine: 1,
    nature: 2,
    perception: 1,
    performance: 4,
    persuasion: 6,
    religion: 2,
    sleightOfHand: 1,
    stealth: 1,
    survival: 3,
  },
];
const seedClasses = [
  {
    name: "Artificer",
    hitDice: "d8",
    proficiencies: {
      armor: ["Light armor", "Medium armor", "shields"],
      weapons: ["Simple weapons"],
      tools: ["Thieve's tools", "Thinkerer's tools"],
      toolChoices: [
        {
          numberOfChoices: 1,
          choices: [
            "Alchemist's supplies",
            "Brewer's supplies",
            "Calligrapher's supplies",
            "Carpenter's tools",
            "Cobbler's tools",
            "Cook's utensils",
            "Glassblower's tools",
            "Jeweler's tools",
            "Leatherworker's tools",
            "Mason's tools",
            "Painter's supplies",
            "Potter's tools",
            "Smith's tools",
            "Weaver's Tools",
            "Woodcarver's tools",
          ],
        },
      ],
      savingThrows: ["Con", "Int"],
      skills: {
        numberOfChoices: 2,
        choices: [
          "Arcana",
          "History",
          "Investigation",
          "Medicine",
          "Nature",
          "Perception",
          "Sleigh of Hand",
        ],
      },
    },
    features: [
      {
        name: "Magical Tinkering",
        description:
          "At 1st level, you've learned how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice: The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet. Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long. The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away. A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like. The chosen property lasts indefinitely. As an action, you can touch the object and end the property early. You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.",
        levelRequirement: 1,
      },
      {
        name: "Infuse Item",
        description:
          "At 2nd level, you've gained the ability to imbue mundane items with certain magical infusions, turning those objects into magic items.",
        levelRequirement: 2,
      },
      {
        name: "Artificier Specialist",
        description: `At 3rd level, you choose the type of specialist you are. Your choice grants you features at 5th level and again at 9th and 15th level.`,
        choices: ["Alchemist", "Armorer", "Artillerist", "Battle Smith"],
        levelRequirement: 3,
      },
      {
        name: "The Right Tool for the Job",
        description:
          "At 3rd level, you've learned how to produce exactly the tool you need: with thieves' tools or artisan's tools in hand, you can magically create one set of artisan's tools in an unoccupied space within 5 feet of you. This creation requires 1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.",
        levelRequirement: 3,
      },
      {
        name: "Tool expertise",
        description:
          "At 6th level, your proficiency bonus is now doubled for any ability check you make that uses your proficiency with a tool.",
        levelRequirement: 6,
      },
      {
        name: "Flash of Genius",
        description:
          "At 7th level, you've gained the ability to come up with solutions under pressure. When you or another creature you can see within 30 feet of you makes an ability check or a saving throw, you can use your reaction to add your Intelligence modifier to the roll. You can use this feature a number of times equal to your Intelligence modifier (minimum of once). You regain all expended uses when you finish a long rest.",
        levelRequirement: 7,
      },
      {
        name: "Magic Item Adept",
        description:
          "When you reach 10th level, you achieve a profound understanding of how to use and make magic items: You can attune to up to four magic items at once. If you craft a magic item with a rarity of common or uncommon, it takes you a quarter of the normal time, and it costs you half as much of the usual gold.",
        levelRequirement: 10,
      },
      {
        name: "Spell-Storing Item",
        description:
          "At 11th level, you can now store a spell in an object. Whenever you finish a long rest, you can touch one simple or martial weapon or one item that you can use as a spellcasting focus, and you store a spell in it, choosing a 1st- or 2nd-level spell from the artificer spell list that requires 1 action to cast (you needn't have it prepared). While holding the object, a creature can take an action to produce the spell's effect from it, using your spellcasting ability modifier. If the spell requires concentration, the creature must concentrate. The spell stays in the object until it's been used a number of times equal to twice your Intelligence modifier (minimum of twice) or until you use this feature again to store a spell in an object.",
        levelRequirement: 11,
      },
      {
        name: "Magic Item Savant",
        description:
          "At 14th level, your skill with magic items deepens more: You can attune to up to five magic items at once. You ignore all class, race, spell and level requirements on attuning to or using a magic item.",
        levelRequirement: 14,
      },
      {
        name: "Magic Item Master",
        description:
          "Starting at 18th level, you can attune up to six magic items at once.",
        levelRequirement: 18,
      },
      {
        name: "Soul of Artifice",
        description:
          "At 20th level, you develop a mystical connection to your magic items, which you can draw on for protection: You gain a +1 bonus to all saving throws per magic item you are currently attuned to. If you're reduced to 0 hit points but not killed out-right, you can use your reaction to end one of your artificer infusions, causing you to drop to 1 hit point instead of 0.",
        levelRequirement: 20,
      },
    ],
    subclasses: [
      {
        name: "Alchemist",
        features: [
          {
            name: "Experimental Elixir",
            description: `Beginning at 3rd level, whenever you finish a long rest, you can magically produce an experimental elixir in an empty flask you touch. Roll on the Experimental Elixir table for the elixir's effect, which is triggered when someone drinks the elixir. As an action, a creature can drink the elixir or administer it to an incapacitated creature.

            You can create additional experimental elixirs by expending a spell slot of 1st level or higher for each one. When you do so, you use your action to create the elixir in an empty flask you touch, and you choose the elixir's effect from the Experimental Elixir table.
            
            Creating an experimental elixir requires you to have alchemist supplies on your person, and any elixir you create with this feature lasts until it is drunk or until the end of your next long rest.
            
            When you reach certain levels in this class, you can make more elixirs at the end of a long rest: two at 6th level and three at 15th level. Roll for each elixir's effect separately. Each elixir requires its own flask.
            
            1- 	Healing. The drinker regains a number of hit points equal to 2d4 + your Intelligence Modifier
            2-  Swiftness. The drinker's walking speed increases by 10 feet for 1 hour.
            3- 	Resilience. The drinker gains a +1 bonus to AC for 10 minutes.
            4-  Boldness. The drinker can roll a d4 and add the number rolled to every attack roll and saving throw they make for the next minute.
            5-  Flight. The drinker gains a flying speed of 10 feet for 10 minutes.
            6-  Transformation. The drinker's body is transformed as if by the Alter Self spell. The drinker determines the transformation caused by the spell, the effects of which last for 10 minutes.`,
            levelRequirement: 3,
          },
          {
            name: "Alchemical Savant",
            description: `At 5th level, you've developed masterful command of magical chemicals, enhancing the healing and damage you create through them. Whenever you cast a spell using your alchemist's supplies as the spellcasting focus, you gain a bonus to one roll of the spell. That roll must restore hit points or be a damage roll that deals acid, fire, necrotic, or poison damage, and the bonus equals your Intelligence modifier (minimum of +1).`,
            levelRequirement: 5,
          },
          {
            name: "Restorative Reagents",
            description: `Starting at 9th level, you can incorporate restorative reagents into some of your works:

            Whenever a creature drinks an experimental elixir you created, the creature gains temporary hit points equal to 2d6 + your Intelligence modifier (minimum of 1 temporary hit point).
            You can cast Lesser Restoration without expending a spell slot and without preparing the spell, provided you use alchemist's supplies as the spellcasting focus. You can do so a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 9,
          },
          {
            name: "Chemical Mastery",
            description: `By 15th level, you have been exposed to so many chemicals that they pose little risk to you, and you can use them to quickly end certain ailments:

            You gain resistance to acid damage and poison damage, and you are now immune to the poisoned condition.
            You can cast Greater Restoration and Heal without expending a spell slot, without preparing the spell, and without providing the material component, provided you use alchemist’s supplies as the spellcasting focus. Once you cast either spell with this feature, you can't cast that spell with it again until you finish a long rest.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Armorer",
        features: [
          {
            name: "Arcane Armor",
            description: `Beginning at 3rd level, your metallurgical pursuits have led to you making armor a conduit for your magic. As an action, you can turn a suit of armor you are wearing into Arcane Armor, provided you have smith's tools in hand.

            You gain the following benefits while wearing this armor:
            
            If the armor normally has a Strength requirement, the arcane armor lacks this requirement for you.
            You can use the arcane armor as a spellcasting focus for your artificer spells.
            The armor attaches to you and can’t be removed against your will. It also expands to cover your entire body, although you can retract or deploy the helmet as a bonus action. The armor replaces any missing limbs, functioning identically to a body part it is replacing.
            You can doff or don the armor as an action.
            The armor continues to be Arcane Armor until you don another suit of armor or you die.`,
            levelRequirement: 3,
          },
          {
            name: "Armor Model",
            description: `Beginning at 3rd level, you can customize your Arcane Armor. When you do so, choose one of the following armor models: Guardian or Infiltrator. The model you choose gives you special benefits while you wear it.

            Each model includes a special weapon. When you attack with that weapon, you can add your Intelligence modifier, instead of Strength or Dexterity, to the attack and damage rolls.
            
            You can change the armor's model whenever you finish a short or long rest, provided you have smith's tools in hand.
            
            Guardian. You design your armor to be in the front line of conflict. It has the following features:
            
            Thunder Gauntlets. Each of the armor's gauntlets counts as a simple melee weapon while you aren't holding anything in it, and it deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.
            Defensive Field. As a bonus action, you can gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
            Infiltrator. You customize your armor for subtle undertakings. It has the following features:
            
            Lightning Launcher. A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals 1d6 lightning damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra 1d6 lightning damage to that target.
            Powered Steps. Your walking speed increases by 5 feet.
            Dampening Field. You have advantage on Dexterity (Stealth) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal.`,
            levelRequirement: 3,
          },
          {
            name: "Extra Attack",
            description: `Starting at 5th level, you can attack twice, rather than once, whenever you take the Attack action on your turn.`,
            levelRequirement: 5,
          },
          {
            name: "Armor Modifications",
            description: `At 9th level, you learn how to use your artificer infusions to specially modify your Arcane Armor. That armor now counts as separate items for the purposes of your Infuse Items feature: armor (the chest piece), boots, helmet, and the armor's special weapon. Each of those items can bear one of your infusions, and the infusions transfer over if you change your armor's model with the Armor Model feature. In addition, the maximum number of items you can infuse at once increases by 2, but those extra items must be part of your Arcane Armor.`,
            levelRequirement: 9,
          },
          {
            name: "Perfected Armor",
            description: `At 15th level, your Arcane Armor gains additional benefits based on its model, as shown below.

            Guardian. When a Huge or smaller creature you can see ends its turn within 30 feet of you, you can use your reaction to magically force the creature to make a Strength saving throw against your spell save DC, pulling the creature up to 30 feet toward you to an unoccupied space. If you pull the target to a space within 5 feet of you, you can make a melee weapon attack against it as part of this reaction.
            
            You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.
            
            Infiltrator. Any creature that takes lightning damage from your Lightning Launcher glimmers with magical light until the start of your next turn. The glimmering creature sheds dim light in a 5-foot radius, and it has disadvantage on attack rolls against you, as the light jolts it if it attacks you. In addition, the next attack roll against it has advantage, and if that attack hits, the target takes an extra 1d6 lightning damage.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Artillerist",
        features: [
          {
            name: "Eldritch Cannon",
            description: `Also at 3rd level, you've learned how to create a magical cannon. Using woodcarver's tools or smith's tools, you can take an action to magically create a Small or Tiny eldritch cannon in an unoccupied space on a horizontal surface within 5 feet of you. A Small eldritch cannon occupies its space, and a Tiny one can be held in one hand. Once you create a cannon, you can't do so again until you finish a long rest or until you expend a spell slot to create one. You can have only one cannon at a time and can't create one while your cannon is present.

            The cannon is a magical object. Regardless of size, the cannon has an AC of 18 and a number of hit points equal to five times your artificer level. It is immune to poison damage and psychic damage. If it is forced to make an ability check or a saving throw, treat all its ability scores as 10 (+0). If the mending spell is cast on it, it regains 2d6 hit points. It disappears if it is reduced to 0 hit points or after 1 hour. You can dismiss it early as an action.
            
            When you create the cannon, you determine its appearance and whether it has legs. You also decide which type it is, choosing from the options on the Eldritch Cannons table. On each of your turns, you can take a bonus action to cause the cannon to activate if you are within 60 feet of it. As part of the same bonus action, you can direct the cannon to walk or climb up to 15 feet to an unoccupied space, provided it has legs.
            
            Flamethrower: The cannon exhales fire in an adjacent 15-foot cone that you designate. Each creature in that area must make a Dexterity saving throw against your spell save DC, taking 2d8 fire damage on a failed save or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried.
            Force Ballista: Make a ranged spell attack, originating from the cannon, at one creature or object within 120 feet of it. On a hit, the target takes 2d8 force damage, and if the target is a creature, it is pushed up to 5 feet away from the cannon.
            Protector: The cannon emits a burst of positive energy that grants itself and each creature of your choice within 10 feet of it a number of temporary hit points equal to 1d8 + your Intelligence modifier (minimum of +1).`,
            levelRequirement: 3,
          },
          {
            name: "Arcane Firearm",
            description: `At 5th level, You know how to turn a wand, staff, or rod into an arcane firearm, a conduit for your destructive spells. When you finish a long rest, you can use woodcarver's tools to carve special sigils into a wand, staff, or rod and thereby turn it into your arcane firearm. The sigils disappear from the object if you later carve them on a different item. The sigils otherwise last indefinitely.

            You can use your arcane firearm as a spellcasting focus for your artificer spells. When you cast an artificer spell through the firearm, roll a d8, and you gain a bonus to one of the spell's damage rolls equal to the number rolled.`,
            levelRequirement: 5,
          },
          {
            name: "Explosive Cannon",
            description: `Starting at 9th level, every eldritch cannon you create is more destructive:

            The cannon's damage rolls all increase by 1d8.
            As an action, you can command the cannon to detonate if you are within 60 feet of it. Doing so destroys the cannon and forces each creature within 20 feet of it to make a Dexterity saving throw against your spell save DC, taking 3d8 force damage on a failed save or half as much damage on a successful one.`,
            levelRequirement: 9,
          },
          {
            name: "Fortified Position",
            description: `By 15th level, you’re a master at forming well-defended emplacements using Eldritch Cannon:

            You and your allies have half cover while within 10 feet of a cannon you create with Eldritch Cannon, as a result of a shimmering field of magical protection that the cannon emits.
            You can now have two cannons at the same time. You can create two with the same action (but not the same spell slot), and you can activate both of them with the same bonus action. You determine whether the cannons are identical to each other or different. You can't create a third cannon while you have two.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Battle Smith",
        features: [
          {
            name: "Battle Ready",
            description: `When you reach 3rd level, your combat training and your experiments with magic have paid off in two ways:

            You gain proficiency with martial weapons.
            When you attack with a magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls.`,
            levelRequirement: 3,
          },
          {
            name: "Steel Defender",
            description: `By 3rd level, your tinkering has borne you a faithful companion, a steel defender. It's friendly to you and your companions, and it obeys your commands. See its game statistics in the Steel Defender stat block, which uses your proficiency bonus (PB) in several places. You determine the creature's appearance and whether it has two legs or four; your choice has no effect on its game statistics.

            In combat, the defender shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the defender can take any action of its choice, not just Dodge.
            
            If the Mending spell is cast on it, it regains 2d6 hit points. If it has died within the last hour, you can use your smith's tools as an action to revive it, provided you are within 5 feet of it and you expend a spell slot of 1st level or higher. The steel defender returns to life after 1 minute with all its hit points restored.
            
            At the end of a long rest, you can create a new steel defender if you have smith's tools with you. If you already have a defender from this feature, the first one immediately perishes. The defender also perishes if you die.
            
            
            
            Steel Defender
            
            Medium construct
            
            Armor Class: 15 (natural armor)
            
            Hit Points: 2 + your Intelligence modifier + 5 times your artificer level (the defender has a number of Hit Dice [d8s] equal to your artificer level)
            
            Speed: 40 ft.
            
            STR: 14
            DEX: 12
            CON: 14
            INT: 4
            WIS: 10
            CHA: 6
            
            Saving Throws: Dex +1 plus PB, Con +2 plus PB
            
            Skills: Athletics +2 plus PB, Perception +0 plus PB x 2
            
            Damage Immunities: poison
            
            Condition Immunities: charmed, exhaustion, poisoned
            
            Senses: darkvision 60 ft., passive Perception 10 + (PB x 2)
            
            Languages: understands the languages you speak
            
            Challenge: —
            
            Proficiency Bonus (PB): equals your bonus
            
            Vigilant. The defender can't be surprised.
            
            Actions:
            Force-Empowered Rend. Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target you can see. Hit: 1d8 + PB force damage.
            Repair (3/Day). The magical mechanisms inside the defender restore 2d8 + PB hit points to itself or to one construct or object within 5 feet of it.
            
            Reactions:
            Deflect Attack. The defender imposes disadvantage on the attack roll of one creature it can see that is within 5 feet of it, provided the attack roll is against a creature other than the defender.`,
            levelRequirement: 3,
          },
          {
            name: "Extra Attack",
            description: `Starting at 5th level, you can attack twice, rather than once, whenever you take the Attack action on your turn.`,
            levelRequirement: 5,
          },
          {
            name: "Arcane Jolt",
            description: `At 9th level, you've learn new ways to channel arcane energy to harm or heal. When either you hit a target with a magic weapon attack or your steel defender hits a target, you can channel magical energy through the strike to create one of the following effects:

            The target takes an extra 2d6 force damage.
            Choose one creature or object you can see within 30 feet of the target. Healing energy flows into the chosen recipient, restoring 2d6 hit points to it.
            You can use this energy a number of times equal to your Intelligence modifier (minimum of once), but you can do so no more than once on a turn. You regain all expended uses when you finish a long rest.`,
            levelRequirement: 9,
          },
          {
            name: "Improved Defender",
            description: `At 15th level, your Arcane Jolt and steel defender become more powerful:

            The extra damage and the healing of your Arcane Jolt both increase to 4d6.
            Your steel defender gains a +2 bonus to Armor Class.
            Whenever your steel defender uses its Deflect Attack, the attacker takes force damage equal to 1d4 + your Intelligence modifier.`,
            levelRequirement: 15,
          },
        ],
      },
    ],
  },
  {
    name: "Barbarian",
    hitDice: "d12",
    proficiencies: {
      armor: ["Light armor", "Medium armor", "shields"],
      weapons: ["simple weapons", "martial weapons"],
      tools: [],
      toolChoices: [],
      savingThrows: ["str", "con"],
      skills: {
        numberOfChoices: 2,
        choices: [
          "Animal Handling",
          "Athletics",
          "Intimidation",
          "Nature",
          "Perception",
          "Survival",
        ],
      },
    },
    features: [
      {
        name: "Rage",
        description: `In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.

        While raging, you gain the following benefits if you aren't wearing heavy armor:
        
        You have advantage on Strength checks and Strength saving throws.
        When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.
        You have resistance to bludgeoning, piercing, and slashing damage.
        If you are able to cast spells, you can't cast them or concentrate on them while raging.
        
        Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.
        
        Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.`,
        levelRequirement: 1,
      },
      {
        name: "Unarmored Defense",
        description: `While you are not wearing any armor, your armor class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.`,
        levelRequirement: 1,
      },
      {
        name: "Danger Sense",
        description: `At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.`,
        levelRequirement: 2,
      },
      {
        name: "Reckless Attack",
        description: `Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.`,
        levelRequirement: 2,
      },
      {
        name: "Primal Path",
        description: `At 3rd level, you choose a path that shapes the nature of your rage. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.`,
        choices: [
          "Ancestral Guardian",
          "Battlerager",
          "Beast",
          "Berserker",
          "Storm Herald",
          "Totem Warrior",
          "Wild Magic",
          "Zealot",
        ],
        levelRequirement: 3,
      },
      {
        name: "Extra Attack",
        description: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.`,
        levelRequirement: 5,
      },
      {
        name: "Fast Movement",
        description: `Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.`,
        levelRequirement: 5,
      },
      {
        name: "Feral Instinct",
        description: `By 7th level, your instincts are so honed that you have advantage on initiative rolls.

        Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.`,
        levelRequirement: 7,
      },
      {
        name: "Brutal Critical",
        description: `Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.

        This increases to two additional dice at 13th level and three additional dice at 17th level.`,
        levelRequirement: 9,
      },
      {
        name: "Relentless Rage",
        description: `Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.

        Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.`,
        levelRequirement: 11,
      },
      {
        name: "Persistent Rage",
        description: `Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.`,
        levelRequirement: 15,
      },
      {
        name: "Indomitable Might",
        description: `Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.`,
        levelRequirement: 18,
      },
      {
        name: "Primal Champion",
        description: `At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.`,
        levelRequirement: 20,
      },
    ],
    subclasses: [
      {
        name: "Path of the Ancestral Guardian",
        features: [
          {
            name: "Ancestral Protectors",
            description: `Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends.`,
            levelRequirement: 3,
          },
          {
            name: "Spirit Shield",
            description: `Beginning at 6th level, the guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6.

            When you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level.`,
            levelRequirement: 6,
          },
          {
            name: "Consult the Spirits",
            description: `At 10th level, you gain the ability to consult with your ancestral spirits. When you do so, you cast the Augury or Clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells.

            After you cast either spell in this way, you can't use this feature again until you finish a short or long rest.`,
            levelRequirement: 10,
          },
          {
            name: "Vengeful Ancestors",
            description: `At 14th level, your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage that your Spirit Shield prevents.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Path of the Battlerager",
        features: [
          {
            name: "Battlerager Armor",
            description: `When you choose this path at 3rd level, you gain the ability to use spiked armor as a weapon.

            While you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes against a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.
            
            Additionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds.`,
            levelRequirement: 3,
          },
          {
            name: "Reckless Abandon",
            description: `Beginning at 6th level, when you use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish if any of them are left when your rage ends.`,
            levelRequirement: 6,
          },
          {
            name: "Battlerager Charger",
            description: `Beginning at 10th level, you can take the Dash action as a bonus action while you are raging.`,
            levelRequirement: 10,
          },
          {
            name: "Spiked Retribution",
            description: `Starting at 14th level, when a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't incapacitated, and are wearing spiked armor.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Path of the Beast",
        features: [
          {
            name: "Form of the Beast",
            description: `Starting when you choose this path at 3rd level, when you enter your rage, you can transform, revealing the bestial power within you. Until the rage ends, you manifest a natural weapon. It counts as a simple melee weapon for you, and you add your Strength modifier to the attack and damage rolls when you attack with it, as normal.

            You choose the weapon’s form each time you rage:
            
            Bite. Your mouth transforms into a bestial muzzle or great mandibles (your choice). It deals 1d8 piercing damage on a hit. Once on each of your turns when you damage a creature with this bite, you regain a number of hit points equal to your proficiency bonus, provided you have less than half your hit points when you hit.
            
            Claws. Each of your hands transforms into a claw, which you can use as a weapon if it’s empty. It deals 1d6 slashing damage on a hit. Once on each of your turns when you attack with a claw using the Attack action, you can make one additional claw attack as part of the same action.
            
            Tail. You grow a lashing, spiny tail, which deals 1d8 piercing damage on a hit and has the reach property. If a creature you can see within 10 feet of you hits you with an attack roll, you can use your reaction to swipe your tail and roll a d8, applying a bonus to your AC equal to the number rolled, potentially causing the attack to miss you.`,
            levelRequirement: 3,
          },
          {
            name: "Bestial Soul",
            description: `Beginning at 6th level, the feral power within you increases, causing the natural weapons of your Form of the Beast to count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.

            You can also alter your form to help you adapt to your surroundings. When you finish a short or long rest, choose one of the following benefits, which lasts until you finish a short or long rest:
            
            You gain a swimming speed equal to your walking speed, and you can breathe underwater.
            You gain a climbing speed equal to your walking speed, and you can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
            When you jump, you can make a Strength (Athletics) check and extend your jump by a number of feet equal to the check’s total. You can make this special check only once per turn.`,
            levelRequirement: 6,
          },
          {
            name: "Infectious Fury",
            description: `At 10th level, when you hit a creature with your natural weapons while you are raging, the beast within you can curse your target with rabid fury. The target must succeed on a Wisdom saving throw (DC equal to 8 + your Constitution modifier + your proficiency bonus) or suffer one of the following effects (your choice):

            The target must use its reaction to make a melee attack against another creature of your choice that you can see.
            Target takes 2d12 psychic damage.
            You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 10,
          },
          {
            name: "Call the Hunt",
            description: `At 14th level, the beast within you grows so powerful that you can spread its ferocity to others and gain resilience from them joining your hunt. When you enter your rage, you can choose a number of other willing creatures you can see within 30 feet of you equal to your Constitution modifier (minimum of one creature). You gain 5 temporary hit points for each creature that accepts this feature. Until the rage ends, the chosen creatures can use the following benefit once on each of their turns: when the creature hits a target with an attack roll and deals damage to it, the creature can roll a d6 and gain a bonus to the damage equal to the number rolled.

            You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Path of the Berserker",
        features: [
          {
            name: "Frenzy",
            description: `Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.`,
            levelRequirement: 3,
          },
          {
            name: "Mindless Rage",
            description: `Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.`,
            levelRequirement: 6,
          },
          {
            name: "Intimidating Presence",
            description: `Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.

            If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.`,
            levelRequirement: 10,
          },
          {
            name: "Retaliation",
            description: `Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Path of the Storm Herald",
        features: [
          {
            name: "Storm Aura",
            description: `When you select this path at 3rd level, you emanate a stormy, magical aura while you rage. The aura extends 10 feet from you in every direction, but not through total cover.

            Your aura has an effect that activates when you enter your rage, and you can activate the effect again on each of your turns as a bonus action. Choose desert, sea, or tundra. Your aura's effect depends on that chosen environment, as detailed below. You can change your environment choice whenever you gain a level in this class.
            
            If your aura's effects require a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.
            
            Desert. When this effect is activated, all other creatures in your aura take 2 fire damage each. The damage increases when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level.
            
            Sea. When this effect is activated, you can choose one other creature you can see in your aura. The target must make a Dexterity saving throw. The target takes 1d6 lightning damage on a failed save, or half as much damage on a successful one. The damage increases when you reach certain levels in this class, increasing to 2d6 at 10th level, 3d6 at 15th level, and 4d6 at 20th level.
            
            Tundra. When this effect is activated, each creature of your choice in your aura gains 2 temporary hit points, as icy spirits inure it to suffering. The temporary hit points increase when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level.`,
            levelRequirement: 3,
          },
          {
            name: "Storm Soul",
            description: `At 6th level, the storm grants you benefits even when your aura isn't active. The benefits are based on the environment you chose for your Storm Aura.

            Desert. You gain resistance to fire damage, and you don’t suffer the effects of extreme heat, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch a flammable object that isn't being worn or carried by anyone else and set it on fire.
            
            Sea. You gain resistance to lightning damage, and you can breathe underwater. You also gain a swimming speed of 30 feet.
            
            Tundra. You gain resistance to cold damage, and you don’t suffer the effects of extreme cold, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch water and turn a 5-foot cube of it into ice, which melts after 1 minute. This action fails if a creature is in the cube.`,
            levelRequirement: 6,
          },
          {
            name: "Shielding Storm",
            description: `At 10th level, you learn to use your mastery of the storm to protect others. Each creature of your choice has the damage resistance you gained from the Storm Soul feature while the creature is in your Storm Aura.`,
            levelRequirement: 10,
          },
          {
            name: "Raging Storm",
            description: `At 14th level, the power of the storm you channel grows mightier, lashing out at your foes. The effect is based on the environment you chose for your Storm Aura.

            Desert. Immediately after a creature in your aura hits you with an attack, you can use your reaction to force that creature to make a Dexterity saving throw. On a failed save, the creature takes fire damage equal to half your Barbarian level.
            
            Sea. When you hit a creature in your aura with an attack, you can use your reaction to force that creature to make a Strength saving throw. On a failed save, the creature is knocked prone, as if struck by a wave.
            
            Tundra. Whenever the effect of your Storm Aura is activated, you can choose one creature you can see in the aura. That creature must succeed on a Strength saving throw, or its speed is reduced to 0 until the start of your next turn, as magical frost covers it.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Path of the Totem Warrior",
        features: [
          {
            name: "Spirit Seeker",
            description: `Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the Beast Sense and Speak with Animals spells, but only as rituals.`,
            levelRequirement: 3,
          },
          {
            name: "Totem Spirit",
            description: `At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object – an amulet or similar adornment – that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow.

            Your totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle.
            
            Bear. While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment.
            
            Eagle. While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease.
            
            Elk. While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift.
            
            Tiger. While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps.
            
            Wolf. While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters.`,
            levelRequirement: 3,
          },
          {
            name: "Aspect of the Beast",
            description: `At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.

            Bear. You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.
            
            Eagle. You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks.
            
            Elk. Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they're within 60 feet of you and you're not incapacitated. The elk spirit helps you roam far and fast.
            
            Tiger. You gain proficiency in two skills from the following list: Athletics, Acrobatics, Stealth, and Survival. The cat spirit hones your survival instincts.
            
            Wolf. You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace.`,
            levelRequirement: 6,
          },
          {
            name: "Spirit Walker",
            description: `At 10th level, you can cast the Commune with Nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.`,
            levelRequirement: 10,
          },
          {
            name: "Totemic Attunement",
            description: `At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.

            Bear. While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be frightened.
            
            Eagle. While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft.
            
            Elk. While raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw (DC 8 + your Strength bonus + your proficiency bonus) or be knocked prone and take bludgeoning damage equal to 1d12 + your Strength modifier.
            
            Tiger. While you're raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it.
            
            Wolf. While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with melee weapon attack.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Path of Wild Magic",
        features: [
          {
            name: "Magic Awareness",
            description: `When you choose this path at 3rd level, as an action, you can open your awareness to the presence of concentrated magic. Until the end of your next turn, you know the location of any spell or magic item within 60 feet of you that isn’t behind total cover. When you sense a spell, you learn which school of magic it belongs to.

            You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 3,
          },
          {
            name: "Wild Surge",
            description: `lso at 3rd level, the magical energy roiling inside you sometimes erupts from you. When you enter your rage, roll on the Wild Magic table to determine the magical effect produced.

            If the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.
            
            Wild Magic
            
            1	Each creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take 1d12 necrotic damage. You also gain temporary hit points equal to 1d12 plus your barbarian level.
            
            2	You teleport up to 30 feet to an unoccupied space you can see. Until your rage ends, you can use this effect again on each of your turns as a bonus action.
            
            3	An intangible spirit, which looks like a flumph or a pixie (your choice), appears within 5 feet of one creature of your choice that you can see within 30 feet of you. At the end of the current turn, the spirit explodes, and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 1d6 force damage. Until your rage ends, you can use this effect again, summoning another spirit, on each of your turns as a bonus action.
            
            4	Magic infuses one weapon of your choice that you are holding. Until your rage ends, the weapon's damage type changes to force, and it gains the light and thrown properties, with a normal range of 20 feet and a long range of 60 feet. If the weapon leaves your hand, the weapon reappears in your hand at the end of the current turn.
            
            5	Whenever a creature hits you with an attack roll before your rage ends, that creature takes 1d6 force damage, as magic lashes out in retribution.
            
            6	Until your rage ends, you are surrounded by multicolored, protective lights; you gain a +1 bonus to AC, and while within 10 feet of you, your allies gain the same bonus.
            
            7	Flowers and vines temporarily grow around you; until your rage ends, the ground within 15 feet of you is difficult terrain for your enemies.
            
            8	A bolt of light shoots from your chest. Another creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take 1d6 radiant damage and be blinded until the start of your next turn. Until your rage ends, you can use this effect again on each of your turns as a bonus action.`,
            levelRequirement: 3,
          },
          {
            name: "Bolstering Magic",
            description: `Beginning at 6th level, you can harness your wild magic to bolster yourself or a companion. As an action, you can touch one creature (which can be yourself) and confer one of the following benefits of your choice to that creature:

            For 10 minutes, the creature can roll a d3 whenever making an attack roll or an ability check and add the number rolled to the d20 roll.
            Roll a d3. The creature regains one expended spell slot, the level of which equals the number rolled or lower (the creature’s choice). Once a creature receives this benefit, that creature can’t receive it again until after a long rest.
            You can take this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 6,
          },
          {
            name: "Unstable Backlash",
            description: `At 10th level, when you are imperiled during your rage, the magic within you can lash out; immediately after you take damage or fail a saving throw while raging, you can use your reaction to roll on the Wild Magic table and immediately produce the effect rolled. This effect replaces your current Wild Magic effect.`,
            levelRequirement: 10,
          },
          {
            name: "Controlled Surge",
            description: `At 14th level, whenever you roll on the Wild Magic table, you can roll the die twice and choose which of the two effects to unleash. If you roll the same number on both dice, you can ignore the number and choose any effect on the table.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Path of the Zealot",
        features: [
          {
            name: "Divine Fury",
            description: `Starting when you choose this path at 3rd level, you can channel divine fury into your weapon strikes. While you're raging, the first creature you hit on each of your turns with a weapon attack takes extra damage equal to 1d6 + half your Barbarian level. The extra damage is necrotic or radiant; you choose the type of damage when you gain this feature.`,
            levelRequirement: 3,
          },
          {
            name: "Warrior of the Gods",
            description: `At 3rd level, your soul is marked for endless battle. If a spell, such as Raise Dead, has the sole effect of restoring you to life (but not undeath), the caster doesn't need material components to cast the spell on you.`,
            levelRequirement: 3,
          },
          {
            name: "Fanatical Focus",
            description: `Starting at 6th level, the divine power that fuels your rage can protect you. If you fail a saving throw while raging, you can reroll it, and you must use the new roll. You can use this ability only once per rage.`,
            levelRequirement: 6,
          },
          {
            name: "Zealous Presence",
            description: `At 10th level, you learn to channel divine power to inspire zealotry in others. As a bonus action, you unleash a battle cry infused with divine energy. Up to ten other creatures of your choice within 60 feet of you that can hear you gain advantage on attack rolls and saving throws until the start of your next turn.

            Once you use this feature, you can’t use it again until you finish a long rest.`,
            levelRequirement: 10,
          },
          {
            name: "Rage Beyond Death",
            description: `Beginning at 14th level, the divine power that fuels your rage allows you to shrug off fatal blows.

            While you're raging, having 0 hit points doesn’t knock you unconscious. You still must make death saving throws, and you suffer the normal effects of taking damage while at 0 hit points. However, if you would die due to failing death saving throws, you don’t die until your rage ends, and you die then only if you still have 0 hit points.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Path of the Juggernaut",
        features: [
          {
            name: "Thunderous Blows",
            description: `Starting when you choose this path at 3rd level, your rage instills you with the strength to batter around your foes, making any battlefield your domain. Once per turn while raging, when you damage a creature with a melee attack, you can force the target to make a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier). On a failure, you push the target 5 feet away from you, and you can choose to immediately move 5 feet into the target’s previous position.`,
            levelRequirement: 3,
          },
          {
            name: "Stance of the Mountain",
            description: `You harness your fury to anchor your feet to the earth, shrugging off the blows of those who wish to topple you. Upon choosing this path at 3rd level, you cannot be knocked prone while raging unless you become unconscious.`,
            levelRequirement: 3,
          },
          {
            name: "Demolishing Might",
            description: `Beginning at 6th level, you can muster destructive force with your assault, shaking the core of even the strongest structures. All of your melee attacks gain the siege property (your attacks deal double damage to objects and structures). Your melee attacks against creatures of the construct type deal an additional 1d8 weapon damage.`,
            levelRequirement: 6,
          },
          {
            name: "Overwhelming Cleave",
            description: `Upon reaching 10th level, you wade into armies of foes, great swings of your weapon striking any who threaten you. When you make a weapon attack while raging, you can make another attack as a bonus action with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.`,
            levelRequirement: 10,
          },
          {
            name: "Unstoppable",
            description: `Starting at 14th level, you can choose to become unstoppable when you enter a rage. If you do so, for the duration of the rage your speed cannot be reduced, and you are immune to the frightened, paralyzed, and stunned conditions. If you are frightened, paralyzed, or stunned, you can still take your bonus action to enter your rage and suspend the effects for the duration of the rage. When your rage ends, you suffer one level of exhaustion.`,
            levelRequirement: 14,
          },
        ],
      },
    ],
  },
  {
    name: "Bard",
    hitDice: "d8",
    proficiencies: {
      armor: ["Light armor"],
      weapons: [
        "simple weapons",
        "hand crossbows",
        "longswords",
        "rapiers",
        "shortswords",
      ],
      tools: [],
      toolChoices: [
        {
          numberOfChoices: 3,
          choices: [
            "Bagpipes",
            "Drum",
            "Dulcimer",
            "Flute",
            "Lute",
            "Lyre",
            "Horn",
            "Pan",
            "Shawm",
            "Viol",
          ],
        },
      ],
      savingThrows: ["dex", "cha"],
      skills: {
        numberOfChoices: 3,
        choices: [
          "Acrobatics",
          "Animal Handling",
          "Arcana",
          "Athletics",
          "Deception",
          "History",
          "Insight",
          "Intimidation",
          "Investigation",
          "Medicine",
          "Nature",
          "Perception",
          "Performance",
          "Persuasion",
          "Religion",
          "Sleight of Hand",
          "Stealth",
          "Survival",
        ],
      },
    },
    features: [
      {
        name: "Bardic Inspiration",
        description: `You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.

        Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.
        
        You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.
        
        Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.`,
        levelRequirement: 1,
      },
      {
        name: "Jack of All Trades",
        description: `Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.`,
        levelRequirement: 2,
      },
      {
        name: "Bard College",
        description: `At 3rd level, you delve into the advanced techniques of a bard college of your choice. Your choice grants you features at 3rd level and again at 6th and 14th level.`,
        choices: [
          "Creation",
          "Eloquence",
          "Glamour",
          "Lore",
          "Spirits",
          "Swords",
          "Valor",
          "Whispers",
        ],
        levelRequirement: 3,
      },
      {
        name: "Song of Rest",
        description: `Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.

        The extra Hit Points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.`,
        levelRequirement: 2,
      },
      {
        name: "Expertise",
        description: `At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.

        At 10th level, you can choose another two skill proficiencies to gain this benefit.`,
        levelRequirement: 3,
      },
      {
        name: "Font of Inspiration",
        description: `Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.`,
        levelRequirement: 5,
      },
      {
        name: "Countercharm",
        description: `At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).`,
        levelRequirement: 6,
      },
      {
        name: "Magical Secrets",
        description: `By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.

        The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.
        
        You learn two additional spells from any classes at 14th level and again at 18th level.`,
        levelRequirement: 10,
      },
      {
        name: "Superior Inspiration",
        description: `At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.`,
        levelRequirement: 20,
      },
    ],
    subclasses: [
      {
        name: "College of Creation",
        features: [
          {
            name: "Note of Potential",
            description: `When you join the College of Creation at 3rd level, whenever you give a creature a Bardic Inspiration die, you can utter a note from the Song of Creation to create a Tiny mote of potential, which orbits within 5 feet of that creature. The mote is intangible and invulnerable, and it lasts until the Bardic Inspiration die is lost. The mote looks like a musical note, a star, a flower, or another symbol of art or life that you choose.

            When the creature uses the Bardic Inspiration die, the mote provides an additional effect based on whether the die benefits an ability check, an attack roll, or a saving throw, as detailed below:
            
            Ability Check. When the creature rolls the Bardic Inspiration die to add it to an ability check, the creature can roll the Bardic Inspiration die again and choose which roll to use, as the mote pops and emits colorful, harmless sparks for a moment.
            
            Attack Roll. Immediately after the creature rolls the Bardic Inspiration die to add it to an attack roll against a target, the mote thunderously shatters. The target and each creature of your choice that you can see within 5 feet of it must succeed on a Constitution saving throw against your spell save DC or take thunder damage equal to the number rolled on the Bardic Inspiration die.
            
            Saving Throw. Immediately after the creature rolls the Bardic Inspiration die and adds it to a saving throw, the mote vanishes with the sound of soft music, causing the creature to gain temporary hit points equal to the number rolled on the Bardic Inspiration die plus your Charisma modifier (minimum of 1 temporary hit point).`,
            levelRequirement: 3,
          },
          {
            name: "Performance of Creation",
            description: `Also at 3rd level, as an action, you can channel the magic of the Song of Creation to create one nonmagical item of your choice in an unoccupied space within 10 feet of you. The item must appear on a surface or in a liquid that can support it. The gp value of the item can't be more than 20 times your bard level, and the item must be Medium or smaller. The item glimmers softly, and a creature can faintly hear music when touching it. The created item disappears after a number of hours equal to your proficiency bonus. For examples of items you can create, see the equipment chapter of the Player's Handbook.

            Once you create an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 2nd level or higher to use this feature again. You can have only one item created by this feature at a time; if you use this action and already have an item from this feature, the first one immediately vanishes.
            
            The size of the item you can create with this feature increases by one size category when you reach 6th level (Large) and 14th level (Huge).`,
            levelRequirement: 3,
          },
          {
            name: "Animating Performance",
            description: `By 6th level, as an action, you can target a Large or smaller nonmagical item you can see within 30 feet of you and animate it. The animate item uses the Dancing Item stat block, which uses your proficiency bonus (PB), The item is friendly to you and your companions and obeys your commands. It lives for 1 hour, until it is reduced to 0 hit points, or until you die.

            In combat, the item shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the item can take any action of its choice, not just Dodge.
            
            When you use your Bardic Inspiration feature, you can command the item as part of the same bonus action you use for Bardic Inspiration.
            
            Once you animate an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use this feature again. You can have only one item animated by this feature at a time; if you use this action and already have a dancing item from this feature, the first one immediately becomes inanimate.
            
            Dancing Item

            Large or smaller construct

            Armor Class: 16 (natural armor)

            Hit Points: 10 + 5 times your bard level

            Speed: 30 ft., fly 30 ft. (hover)

            STR: 18	DEX: 14	CON: 16	INT: 4	WIS: 10	CHA: 6
            
            Damage Immunities: poison, psychic
            Condition Immunities: charmed, exhaustion, poisoned, frightened
            Senses: darkvision 60 ft., passive Perception 10
            Languages: understands the languages you speak
            Challenge: —
            Proficiency Bonus (PB): equals your bonus

            Immutable Form. The item is immune to any spell or effect that would alter its form.

            Irrepressible Dance. When any creature starts its turn within 10 feet of the item, the item can increase or decrease (your choice) the walking speed of that creature by 10 feet until the end of the turn, provided the item isn't incapacitated.
          
            Actions
            Force-Empowered Slam. Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target you can see. Hit: 1d10 + PB force damage.`,
            levelRequirement: 6,
          },
          {
            name: "Creative Crescendo",
            description: `At 14th level, when you use your Performance of Creation feature, you can create more than one item at once. The number of items equals your Charisma modifier (minimum of two items). If you create an item that would exceed that number, you choose which of the previously created items disappears. Only one of these items can be of the maximum size you can create; the rest must be Small or Tiny.

            You are no longer limited by gp value when creating items with Performance of Creation.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "College of Eloquence",
        features: [
          {
            name: "Silver Tongue",
            description: `Starting at 3rd level, you are a master at saying the right thing at the right time. When you make a Charisma (Persuasion) or Charisma (Deception) check, you can treat a d20 roll of 9 or lower as a 10.`,
            levelRequirement: 3,
          },
          {
            name: "Unsettling Words",
            description: `Also at 3rd level, you can spin words laced with magic that unsettle a creature and cause it to doubt itself. As a bonus action, you can expend one use of your Bardic Inspiration and choose one creature you can see within 60 feet of you. Roll the Bardic Inspiration die. The creature must subtract the number rolled from the next saving throw it makes before the start of your next turn.`,
            levelRequirement: 3,
          },
          {
            name: "Unfailing Inspiration",
            description: `At 6th level, your inspiring words are so persuasive that others feel driven to succeed. When a creature adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll fails, the creature can keep the Bardic Inspiration die.`,
            levelRequirement: 6,
          },
          {
            name: "Universal Speech",
            description: `Also at 6th level, you have gained the ability to make your speech intelligible to any creature. As an action, choose one or more creatures within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). The chosen creatures can magically understand you, regardless of the language you speak, for 1 hour.

            Once you use this feature, you can't use it again until you finish a long rest, unless you expend a spell slot to use it again.`,
            levelRequirement: 6,
          },
          {
            name: "Infectious Inspiration",
            description: `At 14th level, when you successfully inspire someone, the power of your eloquence can now spread to someone else. When a creature within 60 feet of you adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll succeeds, you can use your reaction to encourage a different creature (other than yourself) that can hear you within 60 feet of you, giving it a Bardic Inspiration die without expending any of your Bardic Inspiration uses.

            You can use this reaction a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "College of Glamour",
        features: [
          {
            name: "Mantle of Inspiration",
            description: `When you join the College of Glamour at 3rd level, you gain the ability to weave a song of fey magic that imbues your allies with vigor and speed.

            As a bonus action, you can expend one use of your Bardic Inspiration to grant yourself a wondrous appearance. When you do so, choose a number of creatures you can see and who can see you within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one). Each of them gains 5 temporary hit points. When a creature gains these temporary hit points, it can immediately use its reaction to move up to its speed, without provoking opportunity attacks.
            
            The number of temporary hit points increases when you reach certain levels in this class, increasing to 8 at 5th level, 11 at 10th level, and 14 at 15th level.`,
            levelRequirement: 3,
          },
          {
            name: "Enthralling Performance",
            description: `Starting at 3rd level, you can charge your performance with seductive, fey magic.

            If you perform for at least 1 minute, you can attempt to inspire wonder in your audience by singing, reciting a poem, or dancing. At the end of the performance, choose a number of humanoids within 60 feet of you who watched and listened to all of it, up to a number equal to your Charisma modifier (minimum of one). Each target must succeed on a Wisdom saving throw against your spell save DC or be charmed by you. While charmed in this way, the target idolizes you, it speaks glowingly of you to anyone who speaks to it, and it hinders anyone who opposes you, avoiding violence unless it was already inclined to fight on your behalf. This effect ends on a target after 1 hour, if it takes any damage, if you attack it, or if it witnesses you attacking or damaging any of its allies.
            
            If a target succeeds on its saving throw, the target has no hint that you tried to charm it.
            
            Once you use this feature, you can’t use it again until you finish a short or long rest.`,
            levelRequirement: 3,
          },
          {
            name: "Mantle of Majesty",
            description: `At 6th level, you gain the ability to cloak yourself in a fey magic that makes others want to serve you. As a bonus action, you cast Command, without expending a spell slot, and you take on an appearance of unearthly beauty for 1 minute or until your concentration ends (as if you were concentrating on a spell). During this time, you can cast Command as a bonus action on each of your turns, without expending a spell slot.

            Any creature charmed by you automatically fails its saving throw against the Command you cast with this feature.
            
            Once you use this feature, you can’t use it again until you finish a long rest.`,
            levelRequirement: 6,
          },
          {
            name: "Unbreakable Majesty",
            description: `At 14th level, your appearance permanently gains an otherworldly aspect that makes you look more lovely and fierce.

            In addition, as a bonus action, you can assume a magically majestic presence for 1 minute or until you are incapacitated. For the duration, whenever any creature tries to attack you for the first time on a turn, the attacker must make a Charisma saving throw against your spell save DC. On a failed save, it can't attack you on this turn, and it must choose a new target for its attack or the attack is wasted. On a successful save, it can attack you on this turn, but it has disadvantage on any saving throw it makes against your spells on your next turn.
            
            Once you assume this majestic presence, you can't do so again until you finish a short or long rest.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "College of Lore",
        features: [
          {
            name: "Bonus Proficiencies",
            description: `When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.`,
            levelRequirement: 3,
          },
          {
            name: "Cutting Words",
            description: `Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed.`,
            levelRequirement: 3,
          },
          {
            name: "Additional Magical Secrets",
            description: `At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know.`,
            levelRequirement: 6,
          },
          {
            name: "Peerless Skill",
            description: `Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "College of Spirits",
        features: [
          {
            name: "Guiding Whispers",
            description: `At 3rd level, you can reach out to spirits to guide you and others. You learn the Guidance cantrip, which doesn’t count against the number of bard cantrips you know. For you, it has a range of 60 feet when you cast it.`,
            levelRequirement: 3,
          },
          {
            name: "Spiritual Focus",
            description: `At 3rd level, you employ tools that aid you in channeling spirits, be they historical figures or fictional archetypes. You can use the following objects as a spellcasting focus for your bard spells: a candle, crystal ball, skull, spirit board, or tarokka deck.

            Starting at 6th level, when you cast a bard spell that deals damage or restores hit points through the Spiritual Focus, roll a d6, and you gain a bonus to one damage or healing roll of the spell equal to the number rolled.`,
            levelRequirement: 3,
          },
          {
            name: "Tales from Beyond",
            description: `At 3rd level, you reach out to spirits who tell their tales through you. While you are holding your Spiritual Focus, you can use a bonus action to expend one use of your Bardic Inspiration and roll on the Spirit Tales table using your Bardic Inspiration die to determine the tale the spirits direct you to tell. You retain the tale in mind until you bestow the tale’s effect or you finish a short or long rest.

            You can use an action to choose one creature you can see within 30 feet of you (this can be you) to be the target of the tale’s effect. Once you do so, you can’t bestow the tale’s effect again until you roll it again.
            
            You can retain only one of these tales in mind at a time, and rolling on the Spirit Tales table immediately ends the effect of the previous tale.
            
            If the tale requires a saving throw, the DC equals your spell save DC.
            
            Spirit Tales
            Bardic Insp. Die	Tale Told Through You
            1	Tale of the Clever Animal. For the next 10 minutes, whenever the target makes an Intelligence, a Wisdom, or a Charisma check, the target can roll an extra die immediately after rolling the d20 and add the extra die's number to the check. The extra die is the same type as your Bardic Inspiration die.
            2	Tale of the Renowned Duelist. You make a melee spell attack against the target. On a hit, the target takes force damage equal to two rolls of your Bardic Inspiration die + your Charisma modifier.
            3	Tale of the Beloved Friends. The target and another creature of its choice it can see within 5 feet of it gains temporary hit points equal to a roll of your Bardic Inspiration die + your Charisma modifier
            4	Tale of the Runaway. The target can immediately use its reaction to teleport up to 30 feet to an unoccupied space it can see. When the target teleports, it can choose a number of creatures it can see within 30 feet of it up to your Charisma modifier (minimum of 0) to immediately use the same reaction.
            5	Tale of the Avenger. For 1 minute, any creature that hits the target with a melee attack takes force damage equal to a roll of your Bardic Inspiration die.
            6	Tale of the Traveler. The target gains temporary hit points equal to a roll of your Bardic Inspiration die + your bard level. While it has these temporary hit points, the target’s walking speed increases by 10 feet and it gains a +1 bonus to its AC.
            7	Tale of the Beguiler. The target must succeed on a Wisdom saving throw or take psychic damage equal to two rolls of your Bardic Inspiration die, and the target is incapacitated until the end of its next turn.
            8	Tale of the Phantom. The target becomes invisible until the end of its next turn or until it hits a creature with an attack. If it hits a creature with an attack during this invisibility, the creature it hits takes necrotic damage equal to a roll of your Bardic Inspiration die and is frightened of the target until the end of the frightened creature's next turn.
            9	Tale of the Brute. Each creature of the target’s choice it can see within 30 feet of it must make a Strength saving throw. On a failed save, a creature takes thunder damage equal to three rolls of your Bardic Inspiration die and is knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn’t knocked prone.
            10	Tale of the Dragon. The target spews fire from the mouth in a 30-foot cone. Each creature in that area must make a Dexterity saving throw, taking fire damage equal to four rolls of your Bardic Inspiration die on a failed save, or half as much damage on a successful one.
            11	Tale of the Angel. The target regains hit points equal to two rolls of your Bardic Inspiration die + your Charisma modifier, and you end one condition from the following list affecting the target: blinded, deafened, paralyzed, petrified, or poisoned.
            12	Tale of the Mind-Bender You envoke an incomprehensible fable from an otherworldly being. The target must succeed on an Intelligence saving throw or take psychic damage equal to three rolls of your Bardic Inspiration die and be stunned until the end of its next turn.`,
            levelRequirement: 3,
          },
          {
            name: "Spirit Session",
            description: `At 6th level, spirits provide you with supernatural insights. You can conduct an hour-long ritual channeling spirits (which can be done during a short or long rest) using your Spiritual Focus. You can conduct the ritual with a number of willing creatures equal to your proficiency bonus (including yourself). At the end of the ritual, you temporarily learn one spell of your choice from any class.

            The spell you choose must be of a level equal to the number of creatures that conducted the ritual or less, the spell must of a level you can cast, and it must be in the school of Divination or Necromancy. The chosen spell counts as a bard spell for you but doesn’t count against the number of bard spells you know.
            
            Once you perform the ritual, you can’t do so again until you start a long rest, and you know the chosen spell until you start a long rest.`,
            levelRequirement: 6,
          },
          {
            name: "Mystical Connection",
            description: `At 14th level, you now have the ability to nudge the spirits of Tales from Beyond toward certain tales. Whenever you roll on the Spirit Tales table, you can roll the die twice and choose which of the two effects to bestow. If you roll the same number on both dice, you can ignore the number and choose any effect on the table.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "College of Swords",
        features: [
          {
            name: "Bonus Proficiencies",
            description: `When you join the College of Swords at 3rd level, you gain proficiency with medium armor and the scimitar.

            If you’re proficient with a simple or martial melee weapon, you can use it as a spellcasting focus for your bard spells.`,
            levelRequirement: 3,
          },
          {
            name: "Fighting Style",
            description: `At 3rd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.

            Dueling. When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.
            Two-Weapon Fighting. When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.`,
            levelRequirement: 3,
          },
          {
            name: "Blade Flourish",
            description: `At 3rd level, you learn to conduct impressive displays of martial prowess and speed.

            Whenever you take the Attack action on your turn, your walking speed increases by 10 feet until the end of the turn, and if a weapon attack that you make as part of this action hits a creature, you can use one of the following Blade Flourish options of your choice. You can use only one Blade Flourish option per turn.
            
            Defensive Flourish. You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You also add the number rolled to your AC until the start of your next turn.
            
            Slashing Flourish. You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit and to any other creature of your choice that you can see within 5 feet of you. The damage equals the number you roll on the Bardic Inspiration die.
            
            Mobile Flourish. You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You can also push the target up to 5 feet away from you, plus a number of feet equal to the number you roll on that die. You can then immediately use your reaction to move up to your walking speed to an unoccupied space within 5 feet of the target.`,
            levelRequirement: 3,
          },
          {
            name: "Extra Attack",
            description: `Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.`,
            levelRequirement: 6,
          },
          {
            name: "Master's Flourish",
            description: `Starting at 14th level, whenever you use a Blade Flourish option, you can roll a d6 and use it instead of expending a Bardic Inspiration die.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "College of Valor",
        features: [
          {
            name: "Bonus Proficiencies",
            description: `When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons.`,
            levelRequirement: 3,
          },
          {
            name: "Combat Inspiration",
            description: `Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses`,
            levelRequirement: 3,
          },
          {
            name: "Extra Attack",
            description: `Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.`,
            levelRequirement: 6,
          },
          {
            name: "Battle Magic",
            description: `At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "College of Whispers",
        features: [
          {
            name: "Psychic Blades",
            description: `When you join the College of Whispers at 3rd level, you gain the ability to make your weapon attacks magically toxic to a creature's mind.

            When you hit a creature with a weapon attack, you can expend one use of your Bardic Inspiration to deal an additional 2d6 psychic damage to that target. You can do so only once per round on your turn.
            
            The psychic damage increases when you reach certain levels in this class, increasing to 3d6 at 5th level, 5d6 at 10th level, and 8d6 at 15th level.`,
            levelRequirement: 3,
          },
          {
            name: "Words of Terror",
            description: `At 3rd level, you learn to infuse innocent-seeming words with an insidious magic that can inspire terror.

            If you speak to a humanoid alone for at least 1 minute, you can attempt to seed paranoia and fear into its mind. At the end of the conversation, the target must succeed on a Wisdom saving throw against your spell save DC or be frightened of you or another creature of your choice. The target is frightened in this way for 1 hour, until it is attacked or damaged, or until it witnesses its allies being attacked or damaged.
            
            If the target succeeds on its saving throw, the target has no hint that you tried to frighten it.
            
            Once you use this feature, you can't use it again until you finish a short rest or long rest.`,
            levelRequirement: 3,
          },
          {
            name: "Mantle of Whispers",
            description: `At 6th level, you gain the ability to adopt a humanoid's persona. When a humanoid dies within 30 feet of you, you can magically capture its shadow using your reaction. You retain this shadow until you use it or you finish a long rest.

            You can use the shadow as an action. When you do so, it vanishes, magically transforming into a disguise that appears on you. You now look like the dead person, but healthy and alive. This disguise lasts for 1 hour or until you end it as a bonus action.
            
            While you're in the disguise, you gain access to all information that the humanoid would freely share with a casual acquaintance. Such information includes general details on its background and personal life, but doesn't include secrets. The information is enough that you can pass yourself off as the person by drawing on its memories.
            
            Another creature can see through this disguise by succeeding on a Wisdom (Insight) check contested by your Charisma (Deception) check. You gain a +5 bonus to your check.
            
            Once you capture a shadow with this feature, you can't capture another one with it until you finish a short or long rest.`,
            levelRequirement: 6,
          },
          {
            name: "Shadow Lore",
            description: `At 14th level, you gain the ability to weave dark magic into your words and tap into a creature’s deepest fears.

            As an action, you magically whisper a phrase that only one creature of your choice within 30 feet of you can hear. The target must make a Wisdom saving throw against your spell save DC. It automatically succeeds if it doesn’t share a language with you or if it can’t hear you. On a successful saving throw, your whisper sounds like unintelligible mumbling and has no effect.
            
            If the target fails its saving throw, it is charmed by you for the next 8 hours or until you or your allies attack or damage it. It interprets the whispers as a description of its most mortifying secret.
            
            While you gain no knowledge of this secret, the target is convinced you know it. While charmed in this way, the creature obeys your commands for fear that you will reveal its secret. It won’t risk its life for you or fight for you, unless it was already inclined to do so. It grants you favors and gifts it would offer to a close friend.
            
            When the effect ends, the creature has no understanding of why it held you in such fear.
            
            Once you use this feature, you can’t use it again until you finish a long rest.`,
            levelRequirement: 14,
          },
        ],
      },
    ],
  },
  {
    name: "Cleric",
    hitDice: "d8",
    proficiencies: {
      armor: ["Light armor", "Medium armor", "Shields"],
      weapons: ["Simple weapons"],
      tools: [],
      toolChoices: [
        {
          numberOfChoices: 0,
          choices: [],
        },
      ],
      savingThrows: ["wis", "cha"],
      skills: {
        numberOfChoices: 2,
        choices: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
      },
    },
    features: [
      {
        name: "Divine Domain",
        description: `At 1st level, you choose a domain shaped by your choice of Deity and the gifts they grant you. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.`,
        choices: [
          "Arcana",
          "Death",
          "Forge",
          "Grave",
          "Knowledge",
          "Life",
          "Light",
          "Nature",
          "Order",
          "Peace",
          "Tempest",
          "Trickery",
          "Twilight",
          "War",
        ],
        levelRequirement: 1,
      },
      {
        name: "Channel Divinity",
        description: `At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.

        When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.
        
        Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.
        
        Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.`,
        levelRequirement: 2,
      },
      {
        name: "Channel Divinity: Turn Undead",
        description: `As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.

        A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.`,
        levelRequirement: 2,
      },
      {
        name: "Destroy Undead",
        description: `Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Cleric table above.`,
        levelRequirement: 5,
      },
      {
        name: "Divine Intervention",
        description: `Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.

        Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.
        
        At 20th level, your call for intervention succeeds automatically, no roll required.`,
        levelRequirement: 10,
      },
    ],
    subclasses: [
      {
        name: "Arcana Domain",
        features: [
          {
            name: "Arcane Initiate",
            description: `When you choose this domain at 1st level, you gain proficiency in the Arcana skill, and you gain two cantrips of your choice from the wizard spell list. For you, these cantrips count as cleric cantrips.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Arcane Abjuration",
            description: `Starting at 2nd level, you can use your Channel Divinity to abjure otherworldly creatures.

            As an action, you present your holy symbol, and one celestial, elemental, fey, or fiend of your choice that is within 30 feet of you must make a Wisdom saving throw, provided that the creature can see or hear you. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.
            
            A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. It also can't take reactions. For its action, it can only use the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.
            
            After you reach 5th level, when a creature fails its saving throw against your Arcane Abjuration feature, the creature is banished for 1 minute (as in the Banishment spell, no concentration required) if it isn't on its plane of origin and its challenge rating is at or below a certain threshold, as shown on the Arcane Banishment table.
            
            Arcane Banishment
            Level	        CR
            5th	      1/2 or lower
            8th	        1 or lower
            11th	      2 or lower
            14th	      3 or lower
            17th	      4 or lower`,
            levelRequirement: 2,
          },
          {
            name: "Spell Breaker",
            description: `Starting at 6th level, when you restore hit points to an ally with a spell of 1st level or higher, you can also end one spell of your choice on that creature. The level of the spell you end must be equal to or lower than the level of the spell slot you use to cast the healing spell.`,
            levelRequirement: 6,
          },
          {
            name: "Potent Spellcasting",
            description: `Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.`,
            levelRequirement: 6,
          },
          {
            name: "Arcane Mastery",
            description: `At 17th level, you choose four spells from the wizard spell list, one from each of the following levels: 6th, 7th, 8th, and 9th. You add them to your list of domain spells. Like your other domain spells, they are always prepared and count as cleric spells for you.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Death Domain",
        features: [
          {
            name: "Bonus Proficiency",
            description: `When you choose this domain at 1st level, you gain proficiency with martial weapons.`,
            levelRequirement: 1,
          },
          {
            name: "Reaper",
            description: `At 1st level, you learn one necromancy cantrip of your choice from any spell list. When you cast a necromancy cantrip that normally targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Touch of Death",
            description: `Starting at 2nd level, you can use Channel Divinity to destroy another creature's life force by touch. When you hit a creature with a melee attack, you can use Channel Divinity to deal extra necrotic damage to the target. The damage equals 5 + twice your cleric level.`,
            levelRequirement: 2,
          },
          {
            name: "Inescapable Destruction",
            description: `Starting at 6th level, your ability to channel negative energy becomes more potent. Necrotic damage dealt by your cleric spells and Channel Divinity options ignores resistance to necrotic damage.`,
            levelRequirement: 6,
          },
          {
            name: "Divine Strike",
            description: `At 8th level, you gain the ability to infuse your weapon strikes with necrotic energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an a 1d8 necrotic damage to the target. When you reach 14th level, the extra damage increases to 2d8.`,
            levelRequirement: 8,
          },
          {
            name: "Improved Reaper",
            description: `Starting at 17th level, when you cast a necromancy spell of 1st through 5th level that targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other. If the spell consumes its material components, you must provide them for each target.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Forge Domain",
        features: [
          {
            name: "Bonus Proficiencies",
            description: `When you choose this domain at 1st level, you gain proficiency with heavy armor and smith's tools.`,
            levelRequirement: 1,
          },
          {
            name: "Blessing of the Forge",
            description: `At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a simple or martial weapon. Until the end of your next long rest or until you die, the object becomes a magic item, granting a +1 bonus to AC if it's armor or a +1 bonus to attack and damage rolls if it's a weapon.

            Once you use this feature, you can't use it again until you finish a long rest.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Artisan's Blessing",
            description: `Starting at 2nd level, you can use your Channel Divinity to create simple items.

            You conduct an hour-long ritual that crafts a nonmagical item that must include some metal: a simple or martial weapon, a suit of armor, ten pieces of ammunition, a set of tools, or another metal object. The creation is completed at the end of the hour, coalescing in an unoccupied space of your choice on a surface within 5 feet of you.
            
            The thing you create can be something that is worth no more than 100 gp. As part of this ritual, you must lay out metal, which can include coins, with a value equal to the creation. The metal irretrievably coalesces and transforms into the creation at the ritual's end, magically forming even nonmetal parts of the creation.
            
            The ritual can create a duplicate of a nonmagical item that contains metal, such as a key, if you possess the original during the ritual.`,
            levelRequirement: 2,
          },
          {
            name: "Soul of the Forge",
            description: `Starting at 6th level, your mastery of the forge grants you special abilities:

            You gain resistance to fire damage.
            While wearing heavy armor, you gain a +1 bonus to AC.`,
            levelRequirement: 6,
          },
          {
            name: "Divine Strike",
            description: `At 8th level, you gain the ability to infuse your weapon strikes with the fiery power of the forge. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 fire damage to the target. When you reach 14th level, the extra damage increases to 2d8.`,
            levelRequirement: 8,
          },
          {
            name: "Saint of Forge and Fire",
            description: `At 17th level, your blessed affinity with fire and metal becomes more powerful:

            You gain immunity to fire damage.
            While wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.`,
            levelRequirement: 8,
          },
        ],
      },
      {
        name: "Grave Domain",
        features: [
          {
            name: "Circle of Mortality",
            description: `At 1st level, you gain the ability to manipulate the line between life and death. When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible for each die.

            In addition, you learn the Spare the Dying cantrip, which doesn't count against the number of cleric cantrips you know. For you, it has a range of 30 feet, and you can cast it as a bonus action.`,
            levelRequirement: 1,
          },
          {
            name: "Eyes of the Grave",
            description: `At 1st level, you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your next turn, you know the location of any undead within 60 feet of you that isn't behind total cover and that isn't protected from divination magic. This sense doesn't tell you anything about a creature's capabilities or identity.

            You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Path to the Grave",
            description: `Starting at 2nd level, you can use your Channel Divinity to mark another creature’s life force for termination.

            As an action, you choose one creature you can see within 30 feet of you, cursing it until the end of your next turn. The next time you or an ally of yours hits the cursed creature with an attack, the creature has vulnerability to all of that attack's damage, and then the curse ends.`,
            levelRequirement: 2,
          },
          {
            name: "Sentinel at Death's Door",
            description: `At 6th level, you gain the ability to impede death’s progress. As a reaction when you or an ally that you can see within 30 feet of you suffers a critical hit, you can turn that attack into a normal hit. Any effects triggered by a critical hit are canceled.

            You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.`,
            levelRequirement: 6,
          },
          {
            name: "Potent Spellcasting",
            description: `Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.`,
            levelRequirement: 8,
          },
          {
            name: "Keeper of Souls",
            description: `At 17th level, you can seize a trace of vitality from a parting soul and use it to heal the living. When an enemy you can see dies within 30 feet of you, you or one ally of your choice that is within 30 feet of you regains hit points equal to the enemy’s number of Hit Dice. You can use this feature only if you aren't incapacitated. Once you use it, you can't do so again until the start of your next turn.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Knowledge Domain",
        features: [
          {
            name: "Blessings of Knowledge",
            description: `At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.

            Your proficiency bonus is doubled for any ability check you make that uses either of those skills.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Knowledge of the Ages",
            description: `Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.`,
            levelRequirement: 2,
          },
          {
            name: "Channel Divinity: Read Thoughts",
            description: `At 6th level, you can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.

            As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.
            
            If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.
            
            During that time, you can use your action to end this effect and cast the Suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.`,
            levelRequirement: 6,
          },
          {
            name: "Potent Spellcasting",
            description: `Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.`,
            levelRequirement: 8,
          },
          {
            name: "Visions of the Past",
            description: `Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.

            Once you use this feature, you can't use it again until you finish a short or long rest.
            
            Object Reading. Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.
            
            Area Reading. As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Life Domain",
        features: [
          {
            name: "Bonus Proficiency",
            description: `When you choose this domain at 1st level, you gain proficiency with heavy armor.`,
            levelRequirement: 1,
          },
          {
            name: "Disciple of Life",
            description: `Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Preserve Life",
            description: `Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.

            As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.`,
            levelRequirement: 3,
          },
          {
            name: "Blessed Healer",
            description: `Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.`,
            levelRequirement: 6,
          },
          {
            name: "Divine Strike",
            description: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.`,
            levelRequirement: 8,
          },
          {
            name: "Supreme Healing",
            description: `Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Light Domain",
        features: [
          {
            name: "Bonus Cantrip",
            description: `When you choose this domain at 1st level, you gain the Light cantrip if you don't already know it. This cantrip doesn’t count against the number of cleric cantrips you know.`,
            levelRequirement: 1,
          },
          {
            name: "Warding Flare",
            description: `Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature.

            You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Radiance of the Dawn",
            description: `Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.

            As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected.`,
            levelRequirement: 2,
          },
          {
            name: "Improved Flare",
            description: `Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.`,
            levelRequirement: 6,
          },
          {
            name: "Potent Spellcasting",
            description: `Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.`,
            levelRequirement: 8,
          },
          {
            name: "Corona of Light",
            description: `Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Nature Domain",
        features: [
          {
            name: "Acolyte of Nature",
            description: `At 1st level, you learn one cantrip of your choice from the druid spell list. This cantrip counts as a cleric cantrip for you, but it doesn’t count against the number of cleric cantrips you know. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.`,
            levelRequirement: 1,
          },
          {
            name: "Bonus Proficiency",
            description: `Also at 1st level, you gain proficiency with heavy armor.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Charm Animals and Plants",
            description: `Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.

            As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.`,
            levelRequirement: 2,
          },
          {
            name: "Dampen Elements",
            description: `Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.`,
            levelRequirement: 6,
          },
          {
            name: "Divine Strike",
            description: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to 2d8.`,
            levelRequirement: 8,
          },
          {
            name: "Master of Nature",
            description: `At 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Order Domain",
        features: [
          {
            name: "Bonus Proficiencies",
            description: `When you choose this domain at 1st level, you gain proficiency with heavy armor. You also gain proficiency in the Intimidation or Persuasion skill (your choice).`,
            levelRequirement: 1,
          },
          {
            name: "Voice of Authority",
            description: `Starting at 1st level, you can invoke the power of law to embolden an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell to make one weapon attack against a creature of your choice that you can see.

            If the spell targets more than one ally, you choose the ally who can make the attack.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Order's Demand",
            description: `Starting at 2nd level, you can use your Channel Divinity to exert an intimidating presence over others.

            As an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be charmed by you until the end of your next turn or until the charmed creature takes any damage. You can also cause any of the charmed creatures to drop what they are holding when they fail the saving throw.`,
            levelRequirement: 2,
          },
          {
            name: "Embodiment of the Law",
            description: `At 6th level, you become remarkably adept at channeling magical energy to compel others.

            If you cast a spell of the enchantment school using a spell slot of 1st level or higher, you can change the spell's casting time to 1 bonus action for this casting, provided the spell's casting time is normally 1 action.
            
            You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.`,
            levelRequirement: 6,
          },
          {
            name: "Divine Strike",
            description: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 psychic damage to the target. When you reach 14th level, the extra damage increases to 2d8.`,
            levelRequirement: 8,
          },
          {
            name: "Order's Wrath",
            description: `Starting at 17th level, enemies you designate for destruction wilt under the combined efforts of you and your allies. If you deal your Divine Strike damage to a creature on your turn, you can curse that creature until the start of your next turn. The next time one of your allies hits the cursed creature with an attack, the target also takes 2d8 psychic damage, and the curse ends. You can curse a creature in this way only once per turn.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Peace Domain",
        features: [
          {
            name: "Implement of Peace",
            description: `When you choose this domain at 1st level, you gain proficiency in the Insight, Performance, or Persuasion skill (your choice).`,
            levelRequirement: 1,
          },
          {
            name: "Emboldening Bond",
            description: `Starting at 1st level, you can forge an empowering bond among people who are at peace with one another. As an action, you choose a number of willing creatures within 30 feet of you (this can include yourself) equal to your proficiency bonus. You create a magical bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a d4 and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the d4 no more than once per turn.

            You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Balm of Peace",
            description: `Starting at 2nd level, you can use your Channel Divinity to make your very presence a soothing balm. As an action, you can move up to your speed, without provoking opportunity attacks, and when you move within 5 feet of any other creature during this action, you can restore a number of hit points to that creature equal to 2d6 + your Wisdom modifier (minimum of 1 hit point). A creature can receive this healing only once whenever you take this action.`,
            levelRequirement: 2,
          },
          {
            name: "Protective Bond",
            description: `Beginning at 6th level, the bond you forge between people helps them protect each other. When a creature affected by your Emboldening Bond feature is about to take damage, a second bonded creature within 30 feet of the first can use its reaction to teleport to an unoccupied space within 5 feet of the first creature. The second creature then takes all the damage instead.`,
            levelRequirement: 6,
          },
          {
            name: "Potent Spellcasting",
            description: `At 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.`,
            levelRequirement: 8,
          },
          {
            name: "Expansive Bond",
            description: `At 17th level, the benefits of your Emboldening Bond and Protective Bond features now work when the creatures are within 60 feet of each other. Moreover, when a creature uses Protective Bond to take someone else's damage, the creature has resistance to that damage.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Tempest Domain",
        features: [
          {
            name: "Bonus Proficiencies",
            description: `At 1st level, you gain proficiency with martial weapons and heavy armor.`,
            levelRequirement: 1,
          },
          {
            name: "Wrath of the Storm",
            description: `Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.

            You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Destructive Wrath",
            description: `Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.

            When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.`,
            levelRequirement: 2,
          },
          {
            name: "Thunderous Strike",
            description: `At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you.`,
            levelRequirement: 6,
          },
          {
            name: "Divine Strike",
            description: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage increases to 2d8.`,
            levelRequirement: 8,
          },
          {
            name: "Stormborn",
            description: `At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Trickery Domain",
        features: [
          {
            name: "Blessing of the Trickster",
            description: `Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Invoke Duplicity",
            description: `Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.

            As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.
            
            For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target.`,
            levelRequirement: 2,
          },
          {
            name: "Channel Divinity: Cloak of Shadows",
            description: `Starting at 6th level, you can use your Channel Divinity to vanish.

            As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.`,
            levelRequirement: 6,
          },
          {
            name: "Divine Strike",
            description: `At 8th level, you gain the ability to infuse your weapon strikes with poison – a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8.`,
            levelRequirement: 8,
          },
          {
            name: "Improved Duplicity",
            description: `At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Twilight Domain",
        features: [
          {
            name: "Bonus Proficiencies",
            description: `At 1st level, you gain proficiency with martial weapons and heavy armor.`,
            levelRequirement: 1,
          },
          {
            name: "Eyes of Night",
            description: `Starting at 1st level, you can see through the deepest gloom. You have darkvision out to a range of 300 feet. In that radius, you can see in dim light as if it were bright light and in darkness as if it were dim light.

            As an action, you can magically share the darkvision of this feature with willing creatures you can see within 10 feet of you, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). The shared darkvision lasts for 1 hour. Once you share it, you can't do so again until you finish a long rest, unless you expend a spell slot of any level to share it again.`,
            levelRequirement: 1,
          },
          {
            name: "Vigilant Blessing",
            description: `At 1st level, the night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Twilight Sanctuary",
            description: `At 2nd level, you can use your Channel Divinity to refresh your allies with soothing twilight.

            As an action, you present your holy symbol, and a sphere of twilight emanates from you. The sphere is centered on you, has a 30-foot radius, and is filled with dim light. The sphere moves with you, and it lasts for 1 minute or until you are incapacitated or die. Whenever a creature (including you) ends its turn in the sphere, you can grant that creature one of these benefits:
            
            You grant it temporary hit points equal to 1d6 plus your cleric level.
            You end one effect on it causing it to be charmed or frightened.`,
            levelRequirement: 2,
          },
          {
            name: "Steps of Night",
            description: `Starting at 6th level, you can draw on the mystical power of night to rise into the air. As a bonus action when you are in dim light or darkness, you can magically give yourself a flying speed equal to your walking speed for 1 minute. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest`,
            levelRequirement: 6,
          },
          {
            name: "Divine Strike",
            description: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage. When you reach 14th level, the extra damage increases to 2d8.`,
            levelRequirement: 8,
          },
          {
            name: "Twilight Shroud",
            description: `At 17th level, the twilight that you summon offers a protective embrace: you and your allies have half cover while in the sphere created by your Twilight Sanctuary.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "War Domain",
        features: [
          {
            name: "Bonus Proficiency",
            description: `At 1st level, you gain proficiency with martial weapons and heavy armor.`,
            levelRequirement: 1,
          },
          {
            name: "War Priest",
            description: `From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action.

            You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Guided Strike",
            description: `Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.`,
            levelRequirement: 2,
          },
          {
            name: "Channel Divinity: War God's Blessing",
            description: `At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.`,
            levelRequirement: 6,
          },
          {
            name: "Divine Strike",
            description: `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8.`,
            levelRequirement: 8,
          },
          {
            name: "Avatar of Battle",
            description: `At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Blood Domain",
        features: [
          {
            name: "Bonus Proficiency",
            description: `At 1st level, you gain proficiency with martial weapons.`,
            levelRequirement: 1,
          },
          {
            name: "Bloodletting Focus",
            description: `From 1st level, your divine magics draw the blood from inflicted wounds, worsening the agony of your nearby foes. When you use a spell of 1st level or higher to inflict damage to any creatures that have blood, those creatures suffer additional necrotic damage equal to 2 + the spell’s level.`,
            levelRequirement: 1,
          },
          {
            name: "Channel Divinity: Blood Puppet",
            description: `Starting at 2nd level, you can use your Channel Divinity to briefly control a creature’s actions against their will.

            As an action, you target a Large or smaller creature that has blood within 60 feet of you. That creature must succeed on a Constitution saving throw against your spell save DC or immediately move up to half of their movement in any direction of your choice and make a single weapon attack against a creature of your choice within range. Dead or unconscious creatures automatically fail their saving throw. At 8th level, you can target a Huge or smaller creature.`,
            levelRequirement: 2,
          },
          {
            name: "Channel Divinity: Crimson Bond",
            description: `Starting at 6th level, you can use your Channel Divinity to focus on a sample of blood from a creature that is at least 2 ounces, and that has been spilt no longer than a week ago.

            As an action, you can focus on the blood of the creature to form a bond and gain information about their current circumstances. You know their approximate distance and direction from you, as well as their general state of health, as long as they are within 10 miles of you. You can maintain this effect as though you were concentrating on a spell for up to 1 hour.
            
            During your bond, you can spend an action to attempt to connect with the bonded creature’s senses. The target makes a Constitution saving throw against your spell save DC. If they succeed, the connection is resisted, ending the bond. You suffer 2d6 necrotic damage. Upon a failed saving throw, you can choose to either see through the eyes of or hear through their ears of the target for a number of rounds equal to your Wisdom modifier (minimum of 1). During this time, you are blind or deaf (respectively) with regard to your own senses.
            
            Once this connection ends, the Crimson Bond is lost.`,
            levelRequirement: 6,
          },
          {
            name: "Sanguine Recall",
            description: `At 8th level, you can sacrifice a portion of your own vitality to recover expended spell slots. As an action, you recover spell slots that have a combined level equal to or less than half of your cleric level (rounded up), and none of the slots can be 6th level or higher. You immediately suffer 1d6 necrotic damage per spell slot level recovered. You can’t use this feature again until you finish a long rest.

            For example, if you are an 8th-level cleric, you can recover up to four levels of spell slots. You can recover a single 4th-level spell slot, two 2nd-level spell slots, a 3rd-level spell slot and a 1st level spell slot, or four 1st-level spell slots. You then suffer 4d6 damage.`,
            levelRequirement: 8,
          },
          {
            name: "Vascular Corruption Aura",
            description: `At 17th level, as an action, you can emit a powerful aura that extends 30 feet out from you. This aura pulses necrotic energy through the veins of nearby foes, causing them to burst and bleed.

            For 1 minute, any enemy creatures with blood that begin their turn within the aura or enter it for the first time on their turn immediately suffer 2d6 necrotic damage. Any enemy creature with blood that would regain hit points while within the aura only regains half of the intended number of hit points (rounded up).
            
            Once you use this feature, you can’t use it again until you finish a long rest.`,
            levelRequirement: 17,
          },
        ],
      },
    ],
  },
  {
    name: "Druid",
    hitDice: "d8",
    proficiencies: {
      armor: [
        "Light armor",
        "Medium armor",
        "Shields",
        "Will not wear armor or use shields made of metal",
      ],
      weapons: [
        "Clubs",
        "Daggers",
        "Darts",
        "Javelins",
        "Maces",
        "Quarterstaffs",
        "Scimitars",
        "Sickles",
        "Slings",
        "Spears",
      ],
      tools: ["Herbalism kit"],
      toolChoices: [
        {
          numberOfChoices: 0,
          choices: [],
        },
      ],
      savingThrows: ["int", "wis"],
      skills: {
        numberOfChoices: 2,
        choices: [
          "Arcana",
          "Animal Handling",
          "Insight",
          "Medicine",
          "Nature",
          "Perception",
          "Religion",
          "Survival",
        ],
      },
    },
    features: [
      {
        name: "Druidic",
        description: `You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.`,
        levelRequirement: 1,
      },
      {
        name: "Wild Shape",
        description: `Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.

        Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.
        
        Beast Shapes
        Level	    Max. CR	        Limitations
        2nd	      1/4	            No flying or swimming speed
        4th	      1/2	            No flying speed
        8th	      1
        You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.

        While you are transformed, the following rules apply:

        Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.
        When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form, For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.
        You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as Call Lightning, that you've already cast.
        You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.
        You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form.`,
        levelRequirement: 2,
      },
      {
        name: "Druid Circle",
        description: `At 2nd level, you choose to identify with a circle of druids. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.`,
        choices: [
          "Dreams",
          "Land",
          "Moon",
          "Shepherd",
          "Spores",
          "Stars",
          "Wildfire",
        ],
        levelRequirement: 2,
      },
      {
        name: "Timeless Body",
        description: `Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.`,
        levelRequirement: 18,
      },
      {
        name: "Beast Spells",
        description: `Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components.`,
        levelRequirement: 18,
      },
      {
        name: "Archdruid",
        description: `At 20th level, you can use your Wild Shape an unlimited number of times.

        Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.`,
        levelRequirement: 20,
      },
      // CONTINUE FROM HERE
    ],
    subclasses: [
      {
        name: "Circle of Dreams",
        features: [
          {
            name: "Balm of the Summer Court",
            description: `At 2nd level, you become imbued with the blessings of the Summer Court. You are a font of energy that offers respite from injuries. You have a pool of fey energy represented by a number of d6s equal to your druid level.

            As a bonus action, you can choose an ally you can see within 120 feet of you and spend a number of those dice equal to half your druid level or less. Roll the spent dice and add them together. The target regains a number of hit points equal to the total. The target also gains 1 temporary hit point per die spent.
            
            You regain the expended dice when you finish a long rest.`,
            levelRequirement: 2,
          },
          {
            name: "Hearth of Moonlight and Shadow",
            description: `At 6th level, home can be wherever you are. During a short or long rest, you can invoke the shadowy power of the Gloaming Court to help guard your respite. At the start of the rest, you touch a point in space, and an invisible, 30-foot-radius sphere of magic appears, centered on that point. Total cover blocks the sphere.

            While within the sphere, you and your allies gain a +5 bonus to Dexterity (Stealth) and Wisdom (Perception) checks, and any light from open flames in the sphere (a campfire, torches, or the like) isn't visible outside it.
            
            The sphere vanishes at the end of the rest or when you leave the sphere.`,
            levelRequirement: 6,
          },
          {
            name: "Hidden Paths",
            description: `Starting at 10th level, you can use the hidden, magical pathways that some fey use to traverse space in a blink of an eye. As a bonus action on your turn, you can teleport up to 60 feet to an unoccupied space you can see. Alternatively, you can use your action to teleport one willing creature you touch up to 30 feet to an unoccupied space you can see.

            You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.`,
            levelRequirement: 10,
          },
          {
            name: "Walker in Dreams",
            description: `At 14th level, the magic of the Feywild grants you the ability to travel mentally or physically through dreamlands.

            When you finish a short rest, you can cast one of the following spells, without expending a spell slot or requiring material components: Dream (with you as the messenger), Scrying, or Teleportation Circle.
            
            This use of Teleportation Circle is special. Rather than opening a portal to a permanent teleportation circle, it opens a portal to the last location where you finished a long rest on your current plane of existence. If you haven't taken a long rest on your current plane, the spell fails but isn't wasted.
            
            Once you use this feature, you can't use it again until you finish a long rest.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Circle of the Land",
        features: [
          {
            name: "Natural Recovery",
            description: `Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest.

            For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots.`,
            levelRequirement: 2,
          },
          {
            name: "Land's Stride",
            description: `Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.

            In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the Entangle spell.`,
            levelRequirement: 6,
          },
          {
            name: "Nature's Ward",
            description: `When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease`,
            levelRequirement: 10,
          },
          {
            name: "Nature's Sanctuary",
            description: `When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.

            The creature is aware of this effect before it makes its attack against you.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Circle of the Moon",
        features: [
          {
            name: "Combat Wild Shape",
            description: `When you choose this circle at 2nd level, you gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.

            Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended.`,
            levelRequirement: 2,
          },
          {
            name: "Circle Forms",
            description: `The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1. You ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there.

            Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.`,
            levelRequirement: 2,
          },
          {
            name: "Primal Strike",
            description: `Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.`,
            levelRequirement: 6,
          },
          {
            name: "Elemental Wild Shape",
            description: `At 10th level, you can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental.`,
            levelRequirement: 10,
          },
          {
            name: "Thousand Forms",
            description: `By 14th level, you have learned to use magic to alter your physical form in more subtle ways. You can cast the Alter Self spell at will.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Circle of the Shepherd",
        features: [
          {
            name: "Speech of the Woods",
            description: `At 2nd level, you gain the ability to converse with beasts and many fey.

            You learn to speak, read, and write Sylvan. In addition, beasts can understand your speech, and you gain the ability to decipher their noises and motions. Most beasts lack the intelligence to convey or understand sophisticated concepts, but a friendly beast could relay what it has seen or heard in the recent past. This ability doesn’t grant you any special friendship with beasts, though you can combine this ability with gifts to curry favor with them as you would with any nonplayer character.`,
            levelRequirement: 2,
          },
          {
            name: "Spirit Totem",
            description: `Starting at 2nd level, you gain the ability to call forth nature spirits and use them to influence the world around you.

            As a bonus action, you can magically summon an incorporeal spirit to a point you can see within 60 feet of you. The spirit creates an aura in a 30-foot radius around that point. It counts as neither a creature nor an object, though it has the spectral appearance of the creature it represents. As a bonus action, you can move the spirit up to 60 feet to a point you can see.
            
            The spirit persists for 1 minute. Once you use this feature, you can’t use it again until you finish a short or long rest.
            
            The effect of the spirit’s aura depends on the type of spirit you summon from the options below.
            
            Bear Spirit. The bear spirit grants you and your allies its might and endurance. Each creature of your choice in the aura when the spirit appears gains temporary hit points equal to 5 + your druid level. In addition, you and your allies gain advantage on Strength checks and Strength saving throws while in the aura.
            
            Hawk Spirit. The hawk spirit is a consummate hunter, aiding you and your allies with its keen sight. When a creature makes an attack roll against a target in the spirit’s aura, you can use your reaction to grant advantage to that attack roll. In addition, you and your allies have advantage on Wisdom (Perception) checks while in the aura.
            
            Unicorn Spirit. The unicorn spirit lends its protection to those nearby. You and your allies gain advantage on all ability checks made to detect creatures in the spirit’s aura. In addition, if you cast a spell using a spell slot that restores hit points to any creature inside or outside the aura, each creature of your choice in the aura also regains hit points equal to your druid level.`,
            levelRequirement: 2,
          },
          {
            name: "Mighty Summoner",
            description: `At 6th level, beasts and fey that you conjure are more resilient than normal. Any beast or fey summoned or created by a spell that you cast gains two benefits:

            The creature appears with more hit points than normal: 2 extra hit points per Hit Die it has.
            The damage from its natural weapons is considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage.`,
            levelRequirement: 6,
          },
          {
            name: "Guardian Spirit",
            description: `Beginning at 10th level, your Spirit Totem safeguards the beasts and fey that you call forth with your magic. When a beast or fey that you summoned or created with a spell ends its turn in your Spirit Totem aura, that creature regains a number of hit points equal to half your druid level.`,
            levelRequirement: 10,
          },
          {
            name: "Faithful Summons",
            description: `Starting at 14th level, the nature spirits you commune with protect you when you are the most defenseless. If you are reduced to 0 hit points or are incapacitated against your will, you can immediately gain the benefits of Conjure Animals as if it were cast with a 9th-level spell slot. It summons four beasts of your choice that are challenge rating 2 or lower. The conjured beasts appear within 20 feet of you. If they receive no commands from you, they protect you from harm and attack your foes. The spell lasts for 1 hour, requiring no concentration, or until you dismiss it (no action required).

            Once you use this feature, you can’t use it again until you finish a long rest.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Circle of Spores",
        features: [
          {
            name: "Halo of Spores",
            description: `Starting at 2nd level, you are surrounded by invisible, necrotic spores that are harmless until you unleash them on a creature nearby. When a creature you can see moves into a space within 10 feet of you or starts its turn there, you can use your reaction to deal 1d4 necrotic damage to that creature unless it succeeds on a Constitution saving throw against your spell save DC. The necrotic damage increases to 1d6 at 6th level, 1d8 at 10th level, and 1d10 at 14th level.`,
            levelRequirement: 2,
          },
          {
            name: "Symbiotic Entity",
            description: `Also at 2nd level, you gain the ability to channel magic into your spores. As an action, you can expend a use of your Wild Shape feature to awaken those spores, rather than transforming into a beast form, and you gain 4 temporary hit points for each level you have in this class. While this feature is active, you gain the following benefits:

            When you deal your Halo of Spores damage, roll the damage die a second time and add it to the total.
            Your melee weapon attacks deal an extra 1d6 necrotic damage to any target they hit.
            These benefits last for 10 minutes, until you lose all these temporary hit points. or until you use your Wild Shape again.`,
            levelRequirement: 2,
          },
          {
            name: "Fungal Infestation",
            description: `At 6th level, your spores gain the ability to infest a corpse and animate it. If a beast or a humanoid that is Small or Medium dies within 10 feet of you, you can use your reaction to animate it, causing it to stand up immediately with 1 hit point. The creature uses the Zombie stat block in the Monster Manual. It remains animate for 1 hour, after which time it collapses and dies.

            In combat, the zombie's turn comes immediately after yours. It obeys your mental commands, and the only action it can take is the Attack action, making one melee attack.
            
            You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.`,
            levelRequirement: 6,
          },
          {
            name: "Spreading Spores",
            description: `At 10th level, you gain the ability to seed an area with deadly spores. As a bonus action while your Symbiotic Entity feature is active, you can hurl spores up to 30 feet away, where they swirl in a 10-foot cube for 1 minute. The spores disappear early if you use this feature again, if you dismiss them as a bonus action, or if your Symbiotic Entity feature is no longer active.

            Whenever a creature moves into the cube or starts its turn there, that creature takes your Halo of Spores damage, unless the creature succeeds on a Constitution saving throw against your spell save DC. A creature can take this damage no more than once per turn.
            
            While the cube of spores persists, you can't use your Halo of Spores reaction.`,
            levelRequirement: 10,
          },
          {
            name: "Fungal Body",
            description: `At 14th level, the fungal spores in your body alter you: you can't be blinded, deafened, frightened, or poisoned, and any critical hit against you counts as a normal hit instead, unless you're incapacitated.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Circle of Stars",
        features: [
          {
            name: "Star Map",
            description: `At 2nd level, you've created a star chart as part of your heavenly studies. It is a Tiny object and can serve as a spellcasting focus for your druid spells. You determine its form by rolling on the Star Map table or by choosing one.

            While holding this map, you have these benefits:
            
            You know the Guidance cantrip.
            You have the Guiding Bolt spell prepared. It counts as a druid spell for you, and it doesn't count against the number of spells you can have prepared.
            You can cast Guiding Bolt without expending a spell slot. You can do so a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
            If you lose the map, you can perform a 1-hour ceremony to magically create a replacement. This ceremony can be performed during a short or long rest, and it destroys the previous map.
            
            d6	Map Form
            1	  A scroll covered with depictions of constellations
            2	  A stone tablet with fine holes drilled through it
            3	  A speckled owlbear hide, tooled with raised marks
            4	  A collection of maps bound in an ebony cover
            5	  A crystal that projects starry patterns when placed before a light
            6	  Glass disks that depict constellations`,
            levelRequirement: 2,
          },
          {
            name: "Starry Form",
            description: `At 2nd level, you gain the ability to harness constellations’ power to alter your form. As a bonus action, you can expend a use of your Wild Shape feature to take on a starry form, rather than transforming into a beast.

            While in your starry form, you retain your game statistics, but your body becomes luminous; your joints glimmer like stars, and glowing lines connect them as on a star chart. This form sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The form lasts for 10 minutes. It ends early if you dismiss it (no action required), are incapacitated, die, or use this feature again.
            
            Whenever you assume your starry form, choose which of the following constellations glimmers on your body; your choice gives you certain benefits while in the form:
            
            Archer. A constellation of an archer appears on you. When you activate this form, and as a bonus action on your subsequent turns while it lasts, you can make a ranged spell attack, hurling a luminous arrow that targets one creature within 60 feet of you. On a hit, the attack deals radiant damage equal to 1d8 + your Wisdom modifier.
            
            Chalice. A constellation of a life-giving goblet appears on you. Whenever you cast a spell using a spell slot that restores hit points to a creature, you or another creature within 30 feet of you can regain hit points equal to 1d8 + your Wisdom modifier.
            
            Dragon. A constellation of a wise dragon appears on you. When you make an Intelligence or a Wisdom check or a Constitution saving throw to maintain concentration on a spell, you can treat a roll of 9 or lower on the d20 as a 10.`,
            levelRequirement: 2,
          },
          {
            name: "Cosmic Omen",
            description: `When you reach 6th level, you learn to use your star map to divine the will of the cosmos. Whenever you finish a long rest, you can consult your Star Map for omens. When you do so, roll a die. Until you finish your next long rest, you gain access to a special reaction based on whether you rolled an even or an odd number on the die:

            Weal (even). Whenever a creature you can see within 30 feet of you is about to make an attack roll, a saving throw, or an ability check, you can use your reaction to roll a d6 and add the number rolled to the total.
            
            Woe (odd). Whenever a creature you can see within 30 feet of you is about to make an attack roll, a saving throw, or an ability check, you can use your reaction to roll a d6 and subtract the number rolled from the total.
            
            You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 6,
          },
          {
            name: "Twinkling Constellations",
            description: `At 10th level, the constellations of your Starry Form improve. The 1d8 of the Archer and the Chalice becomes 2d8, and while the Dragon is active, you have a flying speed of 20 feet and can hover.

            Moreover, at the start of each of your turns while in your Starry Form, you can change which constellation glimmers on your body.`,
            levelRequirement: 10,
          },
          {
            name: "Full of Stars",
            description: `At 14th level, while in your Starry Form, you become partially incorporeal, giving you resistance to bludgeoning, piercing, and slashing damage.`,
            levelRequirement: 14,
          },
        ],
      },
      {
        name: "Circle of Wildfire",
        features: [
          {
            name: "Summon Wildfire Spirit",
            description: `At 2nd level, You can summon the primal spirit bound to your soul. As an action, you can expend one use of your Wild Shape feature to summon your wildfire spirit, rather than assuming a beast form.

            The spirit appears in an unoccupied space of your choice that you can see within 30 feet of you. Each creature within 10 feet of the spirit (other than you) when it appears must succeed on a Dexterity saving throw against your spell save DC or take 2d6 fire damage.
            
            The spirit is friendly to you and your companions and obeys your commands. See this creature's game statistics in the Wildfire Spirit stat block, which uses your proficiency bonus (PB) in several places. You determine the spirit's appearance. Some spirits take the form of a humanoid figure made of gnarled branches covered in flame, while others look like beasts wreathed in fire.
            
            In combat, the spirit shares your initiative count, but it takes its turn immediately after yours. The only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the spirit can take any action of its choice, not just Dodge.
            
            The spirit manifests for 1 hour, until it is reduced to 0 hit points, until you use this feature to summon the spirit again, or until you die.
            
            Wildfire Spirit

            Small elemental

            Armor Class: 13 (natural armor)

            Hit Points: 5 + five times your druid level

            Speed: 30 ft., fly 30 ft. (hover)

            STR 10	DEX 14	CON 14	INT 13	WIS 15	CHA 11

            Damage Immunities: fire
            Condition Immunities: charmed, frightened, grappled, prone, restrained
            Senses: darkvision 60 ft., passive Perception 12
            Languages: understands the languages you speak
            Challenge: —
            Proficiency Bonus: equals your bonus

            Actions
            
            Flame Seed. Ranged Weapon Attack: your spell attack modifier to hit, range 60 ft., one target you can see. Hit: 1d6 + PB fire damage.

            Fiery Teleportation. The spirit and each willing creature of your choice within 5 feet of it teleport up to 15 feet to unoccupied spaces you can see. Then each creature within 5 feet of the space that the spirit left must succeed on a Dexterity saving throw against your spell save DC or take 1d6 + PB fire damage.`,
            levelRequirement: 2,
          },
          {
            name: "Enhanced Bond",
            description: `At 6th level, the bond with your wildfire spirit enhances your destructive and restorative spells. Whenever you cast a spell that deals fire damage or restores hit points while your wildfire spirit is summoned, roll a d8, and you gain a bonus equal to the number rolled to one damage or healing roll of the spell.

            In addition, when you cast a spell with a range other than self, the spell can originate from you or your wildfire spirit.`,
            levelRequirement: 6,
          },
          {
            name: "Cauterizing Flames",
            description: `At 10th level, you gain the ability to turn death into magical flames that can heal or incinerate. When a Small or larger creature dies within 30 feet of you or your wildfire spirit, a harmless spectral flame springs forth in the dead creature's space and flickers there for 1 minute. When a creature you can see enters that space, you can use your reaction to extinguish the spectral flame there and either heal the creature or deal fire damage to it. The healing or damage equals 2d10 + your Wisdom modifier.

            You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 10,
          },
          {
            name: "Blazing Revival",
            description: `At 14th level, the bond with your wildfire spirit can save you from death. If the spirit is within 120 feet of you when you are reduced to 0 hit points and thereby fall unconscious, you can cause the spirit to drop to 0 hit points. You then regain half your hit points and immediately rise to your feet.

            Once you use this feature, you can't use it again until you finish a long rest.`,
            levelRequirement: 14,
          },
        ],
      },
    ],
  },
  {
    name: "Fighter",
    hitDice: "d10",
    proficiencies: {
      armor: ["light armor", "medium armor", "heavy armor", "shields"],
      weapons: ["simple weapons", "martial weapons"],
      tools: [],
      toolChoices: [
        {
          numberOfChoices: 0,
          choices: [],
        },
      ],
      savingThrows: ["str", "con"],
      skills: {
        numberOfChoices: 2,
        choices: [
          "Acrobatics",
          "Animal Handling",
          "Athletics",
          "History",
          "Insight",
          "Intimidation",
          "Perception",
          "Survival",
        ],
      },
    },
    features: [
      {
        name: "Fighting Style",
        description: `You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.

        Archery. You gain a +2 bonus to attack rolls you make with ranged weapons.

        Blind Fighting. You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.
        
        Defense. While you are wearing armor, you gain a +1 bonus to AC.
        
        Dueling. When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.
        
        Great Weapon Fighting. When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.
        
        Interception. When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.
        
        Protection. When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.
        
        Superior Technique. You learn one maneuver of your choice from among those available to the Battle Master archetype. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice.)
        You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.
        
        Thrown Weapon Fighting. You can draw a weapon that has the thrown property as part of the attack you make with the weapon.
        In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.
        
        Two-Weapon Fighting. When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.
        
        Unarmed Fighting. Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier on a hit. If you aren't wielding any weapons or a shield when you make the attack roll, the d6 becomes a d8.
        At the start of each of your turns, you can deal 1d4 bludgeoning damage to one creature grappled by you.`,
        levelRequirement: 1,
      },
      {
        name: "Second Wind",
        description: `You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.

        Once you use this feature, you must finish a short or long rest before you can use it again.`,
        levelRequirement: 1,
      },
      {
        name: "Action Surge",
        description: `Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.

        Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.`,
        levelRequirement: 2,
      },
      {
        name: "Martial Archetype",
        description: `At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.`,
        choices: [
          "Arcane Archer",
          "Banneret",
          "Battle Master",
          "Cavalier",
          "Champion",
          "Echo Knight",
          "Eldritch Knight",
          "Psi Warrior",
          "Rune Knight",
          "Samurai",
        ],
        levelRequirement: 3,
      },
      {
        name: "Extra Attack",
        description: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.

        The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.`,
        levelRequirement: 5,
      },
      {
        name: "Indomitable",
        description: `Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.

        You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.`,
        levelRequirement: 9,
      },
    ],
    subclasses: [
      {
        name: "Arcane Archer",
        features: [
          {
            name: "Arcane Archer Lore",
            description: `At 3rd level, you learn magical theory or some of the secrets of nature – typical for practitioners of of this elven martial tradition. You choose to gain proficiency in either the Arcana or the Nature skill, and you choose to learn either the Prestidigitation or Druidcraft cantrip.`,
            levelRequirement: 3,
          },
          {
            name: "Arcane Shot",
            description: `At 3rd level, you learn to unleash special magical effects with some of your shots. When you gain this feature, you learn two Arcane Shot options of your choice (see "Arcane Shot Options" below).

            Once per turn when you fire an arrow from a shortbow or longbow as part of the Attack action, you can apply one of your Arcane Shot options to that arrow. You decide to use the option when the arrow hits, unless the option doesn’t involve an attack roll. You have two uses of this ability, and you regain all expended uses of it when you finish a short or long rest.
            
            You gain an additional Arcane Shot option of your choice when you reach certain levels in this class: 7th, 10th, 15th, and 18th level. Each option also improves when you become an 18th-level fighter.
            The Arcane Shot feature lets you choose options for it at certain levels. The options are presented here in alphabetical order. They are all magical effects, and each one is associated with one of the schools of magic.

            If an option requires a saving throw, your Arcane Shot save DC equals 8 + your proficiency bonus + your Intelligence modifier.

            Banishing Arrow. You use abjuration magic to try to temporarily banish your target to a harmless location in the Feywild. The creature hit by the arrow must also succeed on a Charisma saving throw or be banished. While banished in this way, its speed is 0, and it is incapacitated. At the end of its next turn, the target reappears in the space it vacated or in the nearest unoccupied space if that space is occupied.

            After you reach 18th level in this class, a target also takes 2d6 force damage when the arrow hits it.

            Beguiling Arrow. Your enchantment magic causes this arrow to temporarily beguile its target. The creature hit by the arrow takes an extra 2d6 psychic damage, and choose one of your allies within 30 feet of the target. The target must succeed on a Wisdom saving throw, or it is charmed by the chosen ally until the start of your next turn. This effect ends early if the chosen ally attacks the charmed target, deals damage to it, or forces it to make a saving throw.

            The psychic damage increases to 4d6 when you reach 18th level in this class.

            Bursting Arrow. You imbue your arrow with force energy drawn from the school of evocation. The arrow detonates after your attack. Immediately after the arrow hits the creature, the target and all other creatures within 10 feet of it take 2d6 force damage each.

            The force damage increases to 4d6 when you reach 18th level in this class.

            Enfeebling Arrow. You weave necromantic magic into your arrow. The creature hit by the arrow takes an extra 2d6 necrotic damage. The target must also succeed on a Constitution saving throw, or the damage dealt by its weapon attacks is halved until the start of your next turn.

            The necrotic damage increases to 4d6 when you reach 18th level in this class.

            Grasping Arrow. When this arrow strikes its target, conjuration magic creates grasping, poisonous brambles, which wrap around the target. The creature hit by the arrow takes an extra 2d6 poison damage, its speed is reduced by 10 feet, and it takes 2d6 slashing damage the first time on each turn it moves 1 foot or more without teleporting. The target or any creature that can reach it can use its action to remove the brambles with a successful Strength (Athletics) check against your Arcane Shot save DC. Otherwise, the brambles last for 1 minute or until you use this option again.

            The poison damage and slashing damage both increase to 4d6 when you reach 18th level in this class.

            Piercing Arrow. You use transmutation magic to give your arrow an ethereal quality. When you use this option, you don’t make an attack roll for the attack. Instead, the arrow fires forward in a line, which is 1 foot wide and 30 feet long, before disappearing. The arrow passes harmlessly through objects, ignoring cover. Each creature in that line must make a Dexterity saving throw. On a failed save, a creature takes damage as if it were hit by the arrow, plus an extra 1d6 piercing damage. On a successful save, a target takes half as much damage.

            The piercing damage increases to 2d6 when you reach 18th level in this class.

            Seeking Arrow. Using divination magic, you grant your arrow the ability to seek out your target, allowing the arrow to curve and twist its path in search of its prey. When you use this option, you don’t make an attack roll for the attack. Instead, choose one creature you have seen in the past minute. The arrow flies toward that creature, moving around corners if necessary and ignoring three-quarters cover and half cover. If the target is within the weapon’s range and there is a path large enough for the arrow to travel to the target, the target must make a Dexterity saving throw. On a failed save, it takes damage as if it were hit by the arrow, plus an extra 1d6 force damage, and you learn the target’s current location. On a successful save, the target takes half as much damage, and you don’t learn its location.

            The force damage increases to 2d6 when you reach 18th level in this class.

            Shadow Arrow. You weave illusion magic into your arrow, causing it to occlude your foe’s vision with shadows. The creature hit by the arrow takes an extra 2d6 psychic damage, and it must succeed on a Wisdom saving throw or be unable to see anything farther than 5 feet away until the start of your next turn.

            The psychic damage increases to 4d6 when you reach 18th level in this class.`,
            levelRequirement: 3,
          },
          {
            name: "Magic Arrow",
            description: `At 7th level, you gain the ability to infuse arrows with magic. Whenever you fire a nonmagical arrow from a shortbow or longbow, you can make it magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. The magic fades from the arrow immediately after it hits or misses its target.`,
            levelRequirement: 7,
          },
          {
            name: "Curving Shot",
            description: `At 7th level, you learn how to direct an errant arrow toward a new target. When you make an attack roll with a magic arrow and miss, you can use a bonus action to reroll the attack roll against a different target within 60 feet of the original target.`,
            levelRequirement: 7,
          },
          {
            name: "Ever-Ready Shot",
            description: `Starting at 15th level, your magical archery is available whenever battle starts. If you roll initiative and have no uses of Arcane Shot remaining, you regain one use of it.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Banneret",
        features: [
          {
            name: "Rallying Cry",
            description: `When you choose this archetype at 3rd level, you learn how to inspire your allies to fight on past their injuries.

            When you use your Second Wind feature, you can choose up to three creatures within 60 feet of you that are allied with you. Each one regains hit points equal to your fighter level, provided that the creature can see or hear you.`,
            levelRequirement: 3,
          },
          {
            name: "Royal Envoy",
            description: `Knights of high standing are expected to conduct themselves with grace.

            At 7th level, you gain proficiency in the Persuasion skill. If you are already proficient in it, you gain proficiency in one of the following skills of your choice: Animal Handling, Insight, Intimidation, or Performance.
            
            Your proficiency bonus is doubled for any ability check you make that uses Persuasion. You receive this benefit regardless of the skill proficiency you gain from this feature.`,
            levelRequirement: 7,
          },
          {
            name: "Inspiring Surge",
            description: `Starting at 10th level, when you use your Action Surge feature, you can choose one creature within 60 feet of you that is allied with you. That creature can make one melee or ranged weapon attack with its reaction, provided that it can see or hear you.

            Starting at 18th level, you can choose two allies within 60 feet of you, rather than one.`,
            levelRequirement: 10,
          },
          {
            name: "Bulwark",
            description: `Beginning at 15th level, you can extend the benefit of your Indomitable feature to an ally. When you decide to use Indomitable to reroll an Intelligence, a Wisdom, or a Charisma saving throw and you aren't incapacitated, you can choose one ally within 60 feet of you that also failed its saving throw against the same effect. If that creature can see or hear you, it can reroll its saving throw and must use the new roll.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Battle Master",
        features: [
          {
            name: "Combat Superiority",
            description: `When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.

            Maneuvers. You learn three maneuvers of your choice. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack. You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.
            
            Superiority Dice. You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest. You gain another superiority die at 7th level and one more at 15th level.
            
            Saving Throws. Some of your maneuvers require your target to make a saving throw to resist the maneuver's effects. The saving throw DC is calculated as follows:
            
            Maneuver save DC = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)`,
            levelRequirement: 3,
          },
          {
            name: "Student of War",
            description: `At 3rd level, you gain proficiency with one type of artisan's tools of your choice.`,
            levelRequirement: 3,
          },
          {
            name: "Know Your Enemy",
            description: `Starting at 7th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:

            Strength score
            Dexterity score
            Constitution score
            Armor Class
            Current hit points
            Total class levels, if any
            Fighter class levels, if any`,
            levelRequirement: 7,
          },
          {
            name: "Improved Combat Superiority",
            description: `At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s.`,
            levelRequirement: 10,
          },
          {
            name: "Relentless",
            description: `Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Cavalier",
        features: [
          {
            name: "Bonus Proficiency",
            description: `When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: Animal Handling, History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice.`,
            levelRequirement: 3,
          },
          {
            name: "Born to the Saddle",
            description: `Starting at 3rd level, your mastery as a rider becomes apparent. You have advantage on saving throws made to avoid falling off your mount. If you fall off your mount and descend no more than 10 feet, you can land on your feet if you’re not incapacitated.

            Finally, mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed.`,
            levelRequirement: 3,
          },
          {
            name: "Unwavering Mark",
            description: `Starting at 3rd level, you can menace your foes, foiling their attacks and punishing them for harming others. When you hit a creature with a melee weapon attack, you can mark the creature until the end of your next turn. This effect ends early if you are incapacitated or you die, or if someone else marks the creature.

            While it is within 5 feet of you, a creature marked by you has disadvantage on any attack roll that doesn't target you.
            
            In addition, if a creature marked by you deals damage to anyone other than you, you can make a special melee weapon attack against the marked creature as a bonus action on your next turn. You have advantage on the attack roll, and if it hits, the attack's weapon deals extra damage to the target equal to half your fighter level.
            
            Regardless of the number of creatures you mark, you can make this special attack a number of times equal to your Strength modifier (a minimum of once), and you regain all expended uses of it when you finish a long rest.`,
            levelRequirement: 3,
          },
          {
            name: "Warding Maneuver",
            description: `At 7th level, you learn to fend off strikes directed at you, your mount, or other creatures nearby. If you or a creature you can see within 5 feet of you is hit by an attack, you can roll 1d8 as a reaction if you're wielding a melee weapon or a shield. Roll the die, and add the number rolled to the target's AC against that attack. If the attack still hits, the target has resistance against the attack's damage.

            You can use this feature a number of times equal to your Constitution modifier (a minimum of once), and you regain all expended uses of it when you finish a long rest`,
            levelRequirement: 7,
          },
          {
            name: "Hold the Line",
            description: `At 10th level, you become a master of locking down your enemies. Creatures provoke an opportunity attack from you when they move 5 feet or more while within your reach, and if you hit a creature with an opportunity attack, the target's speed is reduced to 0 until the end of the current turn.`,
            levelRequirement: 10,
          },
          {
            name: "Ferocious Charger",
            description: `Starting at 15th level, you can run down your foes, whether you're mounted or not. If you move at least 10 feet in a straight line right before attacking a creature and you hit it with the attack, that target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature only once on each of your turns.`,
            levelRequirement: 15,
          },
          {
            name: "Vigilant Defender",
            description: `Starting at 18th level, you respond to danger with extraordinary vigilance. In combat, you get a special reaction that you can take once on every creature's turn, except your turn. You can use this special reaction only to make an opportunity attack, and you can't use it on the same turn that you take your normal reaction.`,
            levelRequirement: 18,
          },
        ],
      },
      {
        name: "Champion",
        features: [
          {
            name: "Improved Critical",
            description: `Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.`,
            levelRequirement: 3,
          },
          {
            name: "Remarkable Athlete",
            description: `Starting at 7th level, you can add half your proficiency bonus (rounded up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus.

            In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.`,
            levelRequirement: 7,
          },
          {
            name: "Additional Fighting Style",
            description: `At 10th level, you can choose a second option from the Fighting Style class feature.`,
            levelRequirement: 10,
          },
          {
            name: "Superior Critical",
            description: `Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.`,
            levelRequirement: 15,
          },
          {
            name: "Survivor",
            description: `At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.`,
            levelRequirement: 18,
          },
        ],
      },
      {
        name: "Echo Knight",
        features: [
          {
            name: "Manifest Echo",
            description: `At 3rd level, you can use a bonus action to magically manifest an echo of yourself in an unoccupied space you can see within 15 feet of you. This echo is a magical, translucent, gray image of you that lasts until it is destroyed, until you dismiss it as a bonus action, until you manifest another echo, or until you're incapacitated.

            Your echo has AC 14 + your proficiency bonus, 1 hit point, and immunity to all conditions. If it has to make a saving throw, it uses your saving throw bonus for the roll. It is the same size as you, and it occupies its space. On your turn, you can mentally command the echo to move up to 30 feet in any direction (no action required). If your echo is ever more than 30 feet from you at the end of your turn, it is destroyed.
            
            As a bonus action, you can teleport, magically swapping places with your echo at a cost of 15 feet of your movement, regardless of the distance between the two of you.
            When you take the Attack action on your turn, any attack you make with that action can originate from your space or the echo's space. You make this choice for each attack.
            When a creature that you can see within 5 feet of your echo moves at least 5 feet away from it, you can use your reaction to make an opportunity attack against that creature as if you were in the echo's space.`,
            levelRequirement: 3,
          },
          {
            name: "Unleash Incarnation",
            description: `At 3rd level, you can heighten your echo's fury. Whenever you take the Attack action, you can make one additional melee attack from the echo's position.

            You can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest.`,
            levelRequirement: 3,
          },
          {
            name: "Echo Avatar",
            description: `Starting at 7th level, you can temporarily transfer your consciousness to your echo. As an action, you can see through your echo's eyes and hear through its ears. During this time, you are deafened and blinded. You can sustain this effect for up to 10 minutes, and you can end it at any time (requires no action). While your echo is being used in this way, it can be up to 1,000 feet away from you without being destroyed.`,
            levelRequirement: 7,
          },
          {
            name: "Shadow Martyr",
            description: `Starting at 10th level, you can make your echo throw itself in front of an attack directed at another creature that you can see. Before the attack roll is made, you can use your reaction to teleport the echo to an unoccupied space within 5 feet of the targeted creature. The attack roll that triggered the reaction is instead made against your echo.

            Once you use this feature, you can't use it again until you finish a short or long rest.`,
            levelRequirement: 10,
          },
          {
            name: "Reclaim Potential",
            description: `By 15th level, you've learned to absorb the fleeting magic of your echo. When an echo of yours is destroyed by taking damage, you can gain a number of temporary hit points equal to 2d6 + your Constitution modifier, provided you don't already have temporary hit points.

            You can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest.`,
            levelRequirement: 15,
          },
          {
            name: "Legion of One",
            description: `At 18th level, you can use a bonus action to create two echos with your Manifest Echo feature, and these echoes can co-exist. If you try to create a third echo, the previous two echoes are destroyed. Anything you can do from one echo's position can be done from the other's instead.

            In addition, when you roll initiative and have no uses of your Unleash Incarnation feature left, you regain one use of that feature.`,
            levelRequirement: 18,
          },
        ],
      },
      {
        name: "Eldritch Knight",
        features: [
          {
            name: "Weapon Bond",
            description: `At 3rd level, you learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond.

            Once you have bonded a weapon to yourself, you can't be disarmed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand.
            
            You can have up to two bonded weapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two.`,
            levelRequirement: 3,
          },
          {
            name: "War Magic",
            description: `Beginning at 7th level, when you use your action to cast a cantrip, you can make one weapon attack as a bonus action.`,
            levelRequirement: 7,
          },
          {
            name: "Eldritch Strike",
            description: `At 10th level, you learn how to make your weapon strikes undercut a creature's resistance to your spells. When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.`,
            levelRequirement: 10,
          },
          {
            name: "Arcane Charge",
            description: `At 15th level, you gain the ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action.`,
            levelRequirement: 15,
          },
          {
            name: "Improved War Magic",
            description: `Starting at 18th level, when you use your action to cast a spell, you can make one weapon attack as a bonus action.`,
            levelRequirement: 18,
          },
        ],
      },
      {
        name: "Psi Warrior",
        features: [
          {
            name: "Psionic Power",
            description: `At 3rd level, you harbor a wellspring of psionic energy within yourself. This energy is represented by your Psionic Energy dice, which are each a d6. You have a number of these dice equal to twice your proficiency bonus, and they fuel various psionic powers you have, which are detailed below.

            Some of your powers expend the Psionic Energy die they use, as specified in a power's description, and you can't use a power if it requires you to use a die when your dice are all expended. You regain all your expended Psionic Energy dice when you finish a long rest. In addition, as a bonus action, you can regain one expended Psionic Energy die, but you can't do so again until you finish a short or long rest.
            
            When you reach certain levels in this class, the size of your Psionic Energy dice increases: at 5th level (d8), 11th level (d10), and 17th level (d12).
            
            The powers below use your Psionic Energy dice.
            
            Protective Field. When you or another creature you can see within 30 feet of you takes damage, you can use your reaction to expend one Psionic Energy die, roll the die, and reduce the damage taken by the number rolled plus your Intelligence modifier (minimum reduction of 1), as you create a momentary shield of telekinetic force.
            
            Psionic Strike. You can propel your weapons with psionic force. Once on each of your turns, immediately after you hit a target within 30 feet of you with an attack and deal damage to it with a weapon, you can expend one Psionic Energy die, rolling it and dealing force damage to the target equal to the number rolled plus your Intelligence modifier.
            
            Telekinetic Movement. You can move an object or a creature with your mind. As an action, you target one loose object that is Large or smaller or one willing creature, other than yourself. If you can see the target and it is within 30 feet of you, you can move it up to 30 feet to an unoccupied space you can see. Alternatively, if it is a Tiny object, you can move it to or from your hand. Either way, you can move the target horizontally, vertically, or both. Once you take this action, you can't do so again until you finish a short or long rest, unless you expend a Psionic Energy die to take it again.`,
            levelRequirement: 3,
          },
          {
            name: "Telekinetic Adept",
            description: `By the 7th level, You have mastered new ways to use your telekinetic abilities, detailed below.

            Psi-Powered Leap. As a bonus action, you can propel your body with your mind. You gain a flying speed equal to twice your walking speed until the end of the current turn. Once you take this bonus action, you can't do so again until you finish a short or long rest, unless you expend a Psionic Energy die to take it again.
            
            Telekinetic Thrust. When you deal damage to a target with your Psionic Strike, you can force the target to make a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Intelligence modifier. If the save fails, you can knock the target prone or move it up to 10 feet in any direction horizontally.`,
            levelRequirement: 7,
          },
          {
            name: "Guarded Mind",
            description: `Starting at 10th level, the psionic energy flowing through you has bolstered your mind. You have resistance to psychic damage. Moreover, if you start your turn charmed or frightened, you can expend a Psionic Energy die and end every effect on yourself subjecting you to those conditions.`,
            levelRequirement: 10,
          },
          {
            name: "Bulwark of Force",
            description: `At 15th level, you can shield yourself and others with telekinetic force. As a bonus action, you can choose creatures, which can include you, that you can see within 30 feet of you, up to a number of creatures equal to your Intelligence modifier (minimum of one creature). Each of the chosen creatures is protected by half cover for 1 minute or until you're incapacitated.

            Once you take this bonus action, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to take it again.`,
            levelRequirement: 15,
          },
          {
            name: "Telekinetic Master",
            description: `By 18th level, your ability to move creatures and objects with your mind is matched by few. You can cast the Telekinesis spell, requiring no components, and your spellcasting ability for the spell is Intelligence. On each of your turns while you concentrate on the spell, including the turn when you cast it, you can make one attack with a weapon as a bonus action.

            Once you cast the spell with this feature, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to cast it again.`,
            levelRequirement: 18,
          },
        ],
      },
      {
        name: "Rune Knight",
        features: [
          {
            name: "",
            description: `Rune Carver
            Starting at 3rd level, you can use magic runes to enhance your gear. You learn two runes of your choice, from among the runes described below, and each time you gain a level in this class, you can replace one rune you know with a different one from this feature. When you reach certain levels in this class, you learn additional runes, as shown in the Runes Known table.
            
            Runes Known	
            Fighter Level	Number of Runes
                  3rd	           2
                  7th	           3
                  10th	         4
                  15th	         5
            Whenever you finish a long rest, you can touch a number of objects equal to the number of runes you know, and you inscribe a different rune onto each of the objects. To be eligible, an object must be a weapon, a suit of armor, a shield, a piece of jewelry, or something else you can wear or hold in a hand. Your rune remains on an object until you finish a long rest, and an object can bear only one of your runes at a time.
            
            The following runes are available to you when you learn a rune. If a rune has a level requirement, you must be at least that level in this class to learn the rune. If a rune requires a saving throw, your Rune Magic save DC equals 8 + your proficiency bonus + your Constitution modifier.
            
            Cloud Rune. This rune emulates the deceptive magic used by some cloud giants. While wearing or carrying an object inscribed with this rune, you have advantage on Dexterity (Sleight of Hand) checks and Charisma (Deception) checks.
            In addition, when you or a creature you can see within 30 feet of you is hit by an attack roll, you can use your reaction to invoke the rune and choose a different creature within 30 feet of you, other than the attacker. The chosen creature becomes the target of the attack, using the same roll. This magic can transfer the attack's effects regardless of the attack's range. Once you invoke this rune, you can't do so again until you finish a short or long rest.
            
            Fire Rune. This rune's magic channels the masterful craftsmanship of great smiths. While wearing or carrying an object inscribed with this rune, your proficiency bonus is doubled for any ability check you make that uses your proficiency with a tool.
            In addition, when you hit a creature with an attack using a weapon, you can invoke the rune to summon fiery shackles: the target takes an extra 2d6 fire damage, and it must succeed on a Strength saving throw or be restrained for 1 minute. While restrained by the shackles, the target takes 2d6 fire damage at the start of each of its turns. The target can repeat the saving throw at the end of each of its turns, banishing the shackles on a success. Once you invoke this rune, you can't do so again until you finish a short or long rest.
            
            Frost Rune. This rune's magic evokes the might of those who survive in the wintry wilderness, such as frost giants. While wearing or carrying an object inscribed with this rune, you have advantage on Wisdom (Animal Handling) checks and Charisma (Intimidation) checks.
            In addition, you can invoke the rune as a bonus action to increase your sturdiness. For 10 minutes, you gain a +2 bonus to all ability checks and saving throws that use Strength or Constitution. Once you invoke this rune, you can't do so again until you finish a short or long rest.
            
            Stone Rune. This rune's magic channels the judiciousness associated with stone giants. While wearing or carrying an object inscribed with this rune, you have advantage on Wisdom (Insight) checks, and you have darkvision out to a range of 120 feet.
            In addition, when a creature you can see ends its turn within 30 feet of you, you can use your reaction to invoke the rune and force the creature to make a Wisdom saving throw. Unless the save succeeds, the creature is charmed by you for 1 minute. While charmed in this way, the creature has a speed of 0 and is incapacitated, descending into a dreamy stupor. The creature repeats the saving throw at the end of each of its turns, ending the effect on a success. Once you invoke this rune, you can't do so again until you finish a short or long rest.
            
            Hill Rune (7th Level or Higher). This rune's magic bestows a resilience reminiscent of a hill giant. While wearing or carrying an object that bears this rune, you have advantage on saving throws against being poisoned, and you have resistance against poison damage.
            In addition, you can invoke the rune as a bonus action, gaining resistance to bludgeoning, piercing, and slashing damage for 1 minute. Once you invoke this rune, you can't do so again until you finish a short or long rest.
            
            Storm Rune (7th Level or Higher). Using this rune, you can glimpse the future like a storm giant seer. While wearing or carrying an object inscribed with this rune, you have advantage on Intelligence (Arcana) checks, and you can't be surprised as long as you aren't incapacitated.
            In addition, you can invoke the rune as a bonus action to enter a prophetic state for 1 minute or until you're incapacitated. Until the state ends, when you or another creature you can see within 60 feet of you makes an attack roll, a saving throw, or an ability check, you can use your reaction to cause the roll to have advantage or disadvantage. Once you invoke this rune, you can't do so again until you finish a short or long rest.`,
            levelRequirement: 3,
          },
          {
            name: "Giant Might",
            description: `At 3rd level, you have learned how to imbue yourself with the might of giants. As a bonus action, you magically gain the following benefits, which last for 1 minute:

            If you are smaller than Large, you become Large, along with anything you are wearing. If you lack the room to become Large, your size doesn't change.
            You have advantage on Strength checks and Strength saving throws.
            Once on each of your turns, one of your attacks with a weapon or an unarmed strike can deal an extra 1d6 damage to a target on a hit.
            You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.`,
            levelRequirement: 3,
          },
          {
            name: "Runic Shield",
            description: `At 7th level, you learn to invoke your rune magic to protect your allies. When another creature you can see within 60 feet of you is hit by an attack roll, you can use your reaction to force the attacker to reroll the d20 and use the new roll.

            You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 7,
          },
          {
            name: "Great Stature",
            description: `By 10th level, the magic of your runes permanently alters you. When you gain this feature, roll 3d4. You grow a number of inches in height equal to the roll.

            Moreover, the extra damage you deal with your Giant's Might feature increases to 1d8.`,
            levelRequirement: 10,
          },
          {
            name: "Master of Runes",
            description: `At 15th level, you can invoke each rune you know from your Rune Carver feature twice, rather than once, and you regain all expended uses when you finish a short or long rest.`,
            levelRequirement: 15,
          },
          {
            name: "Runic Juggernaut",
            description: `At 18th level, you learn how to amplify your rune-powered transformation. As a result, the extra damage you deal with the Giant's Might feature increases to 1d10. Moreover, when you use that feature, your size can increase to Huge, and while you are that size, your reach increases by 5 feet.`,
            levelRequirement: 18,
          },
        ],
      },
      {
        name: "Samurai",
        features: [
          {
            name: "Bonus Proficiency",
            description: `When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice.`,
            levelRequirement: 3,
          },
          {
            name: "Fighting Spirit",
            description: `Starting at 3rd level, your intensity in battle can shield you and help you strike true. As a bonus action on your turn, you can give yourself advantage on all weapon attack rolls until the end of the current turn. When you do so, you also gain 5 temporary hit points. The number of hit points increases when you reach certain levels in this class, increasing to 10 at 10th level and 15 at 15th level.

            You can use this feature three times. You regain all expended uses of it when you finish a long rest.`,
            levelRequirement: 3,
          },
          {
            name: "Elegant Courtier",
            description: `Starting at 7th level, your discipline and attention to detail allow you to excel in social situations. Whenever you make a Charisma (Persuasion) check, you gain a bonus to the check equal to your Wisdom modifier.

            Your self-control also causes you to gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).`,
            levelRequirement: 7,
          },
          {
            name: "Tireless Spirit",
            description: `Starting at 10th level, when you roll initiative and have no uses of Fighting Spirit remaining, you regain one use.`,
            levelRequirement: 10,
          },
          {
            name: "Rapid Strike",
            description: `Starting at 15th level, you learn to trade accuracy for swift strikes. If you take the Attack action on your turn and have advantage on an attack roll against against one of the targets, you can forgo the advantage for that roll to make an additional weapon attack against that target, as part of the same action. You can do so no more than once per turn.`,
            levelRequirement: 15,
          },
          {
            name: "Strength Before Death",
            description: `Starting at 18th level, your fighting spirit can delay the grasp of death. If you take damage that reduces you to 0 hit points, you can use your reaction to delay falling unconscious, and you can immediately take an extra turn. While you have 0 hit points during that extra turn, taking damage causes death saving throw failures as normal, and three death saving throw failures can still kill you. When the extra turn ends, you fall unconscious if you still have 0 hit points.

            Once you use this feature, you can’t use it again until you finish a long rest.`,
            levelRequirement: 18,
          },
        ],
      },
    ],
  },
  {
    name: "Monk",
    hitDice: "1d8",
    proficiencies: {
      armor: [],
      weapons: ["simple weapons", "shortswords"],
      tools: [],
      toolChoices: [
        {
          numberOfChoices: 1,
          choices: [
            "Alchemist's supplies",
            "Brewer's supplies",
            "Calligrapher's supplies",
            "Carpenter's tools",
            "Cobbler's tools",
            "Cook's utensils",
            "Glassblower's tools",
            "Jeweler's tools",
            "Leatherworker's tools",
            "Mason's tools",
            "Painter's supplies",
            "Potter's tools",
            "Smith's tools",
            "Tinker's tools",
            "Weaver's Tools",
            "Woodcarver's tools",
          ],
        },
      ],
      savingThrows: ["str", "dex"],
      skills: {
        numberOfChoices: 2,
        choices: [
          "Acrobatics",
          "Athletics",
          "History",
          "Insight",
          "Religion",
          "Stealth",
        ],
      },
    },
    features: [
      {
        name: "Unarmored Defense",
        description: `Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.`,
        levelRequirement: 1,
      },
      {
        name: "Martial Arts",
        description: `At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.

        You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:
        
        You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.
        You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.
        When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.
        Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon on the Weapons page.`,
        levelRequirement: 1,
      },
      {
        name: "Ki",
        description: `Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.

        You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.
        
        When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.
        
        Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:
        
        Ki save DC = 8 + your proficiency bonus + your Wisdom modifier
        
        Flurry of Blows. Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.
        Patient Defense. You can spend 1 ki point to take the Dodge action as a bonus action on your turn.
        Step of the Wind. You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.`,
        levelRequirement: 2,
      },
      {
        name: "Unarmored Movement",
        description: `Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.

        At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.`,
        levelRequirement: 2,
      },
      {
        name: "Monastic Tradition",
        description: `When you reach 3rd level, you commit yourself to a monastic tradition. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.`,
        choices: [
          "Astral Self",
          "Ascendant Dragon",
          "Drunked Master",
          "Four Elements",
          "Kensei",
          "Long Death",
          "Mercy",
          "Open Hand",
          "Shadow",
          "Sun Soul",
          "Cobalt Soul",
        ],
        levelRequirement: 3,
      },
      {
        name: "Deflect Missiles",
        description: `Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.

        If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with a range of 20/60 using the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.`,
        levelRequirement: 3,
      },
      {
        name: "Slow Fall",
        description: `Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.`,
        levelRequirement: 4,
      },
      {
        name: "Extra Attack",
        description: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.`,
        levelRequirement: 5,
      },
      {
        name: "Stunning Strike",
        description: `Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.`,
        levelRequirement: 5,
      },
      {
        name: "Ki-Empowered Strikes",
        description: `Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.`,
        levelRequirement: 6,
      },
      {
        name: "Evasion",
        description: `At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`,
        levelRequirement: 7,
      },
      {
        name: "Stillness of Mind",
        description: `Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.`,
        levelRequirement: 7,
      },
      {
        name: "Purity of Body",
        description: `At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.`,
        levelRequirement: 10,
      },
      {
        name: "Tongue of the Sun and Moon",
        description: `Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.`,
        levelRequirement: 13,
      },
      {
        name: "Diamond Soul",
        description: `Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.

        Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.`,
        levelRequirement: 14,
      },
      {
        name: "Timeless Body",
        description: `At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water.`,
        levelRequirement: 15,
      },
      {
        name: "Empty Body",
        description: `Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.

        Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you.`,
        levelRequirement: 18,
      },
      {
        name: "Perfect Self",
        description: `At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.`,
        levelRequirement: 20,
      },
    ],
    subclasses: [
      {
        name: "Way of the Astral Self",
        features: [
          {
            name: "Arms of the Astral Self",
            description: `At 3rd level, your mastery of your ki allows you to summon a portion of your astral self. As a bonus action, you can spend 1 ki point to summon the arms of your astral self. When you do so, each creature of your choice that you can see within 10 feet of you must succeed on a Dexterity saving throw or take force damage equal to two rolls of your Martial Arts die.

            For 10 minutes, these spectral arms hover near your shoulders or surround your arms (your choice). You determine the arms' appearance, and they vanish early if you are incapacitated or die.
            
            While the spectral arms are present, you gain the following benefits:
            
            You can use your Wisdom modifier in place of your Strength modifier when making Strength checks and Strength saving throws.
            You can use the spectral arms to make unarmed strikes.
            When you make an unarmed strike with the arms on your turn, your reach for it is 5 feet greater than normal.
            The unarmed strikes you make with the arms can use your Wisdom modifier in place of your Strength or Dexterity modifier for the attack and damage rolls, and their damage type is force.`,
            levelRequirement: 3,
          },
          {
            name: "Visage of the Astral Self",
            description: `When you reach 6th level, you can summon the visage of your astral self. As a bonus action, or as part of the bonus action you take to activate Arms of the Astral Self, you can spend 1 ki point to summon this visage for 10 minutes. It vanishes early if you are incapacitated or die.

            The spectral visage covers your face like a helmet or mask. You determine its appearance.
            
            While the spectral visage is present, you gain the following benefits.
            
            Astral Sight. You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.
            
            Wisdom of the Spirit. You have advantage on Wisdom (Insight) and Charisma (Intimidation) checks.
            
            Word of the Spirit. When you speak, you can direct your words to a creature of your choice that you can see within 60 feet of you, making it so only that creature can hear you. Alternatively, you can amplify your voice so that all creatures within 600 feet can hear you`,
            levelRequirement: 6,
          },
          {
            name: "Body of the Astral Self",
            description: `Starting at 11th level, when you have both your astral arms and visage summoned, you can cause the body of your astral self to appear (no action required). This spectral body covers your physical form like a suit of armor, connecting with the arms and visage. You determine its appearance.

            While the spectral body is present, you gain the following benefits.
            
            Deflect Energy. When you take acid, cold, fire, force, lightning, or thunder damage, you can use your reaction to deflect it. When you do so, the damage you take is reduced by 1d10 + your Wisdom modifier (minimum reduction of 1).
            
            Empowered Arms. Once on each of your turns when you hit a target with the Arms of the Astral Self, you can deal extra damage to the target equal to your Martial Arts die.`,
            levelRequirement: 11,
          },
          {
            name: "Awakened Astral Self",
            description: `Starting at 17th level, your connection to your astral self is complete, allowing you to unleash its full potential. As a bonus action, you can spend 5 ki points to summon the arms, visage, and body of your astral self and awaken it for 10 minutes. This awakening ends early if you are incapacitated or die.

            While your astral self is awakened, you gain the following benefits.
            
            Armor of the Spirit. You gain a +2 bonus to Armor Class.
            
            Astral Barrage. Whenever you use the Extra Attack feature to attack twice, you can instead attack three times if all the attacks are made with your astral arms.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Way of the Ascendant Dragon",
        features: [
          {
            name: "Draconic Disciple",
            description: `At 3rd level, you can channel draconic power to magnify your presence and imbue your unarmed strikes with the essence of a dragon’s breath. You gain the following benefits:

            Draconic Presence. If you fail a Charisma (Intimidation) or Charisma (Persuasion) check, you can use your reaction to reroll the check, as you tap into the mighty presence of dragons. Once this feature turns a failure into a success, you can’t use it again until you finish a long rest.
            Draconic Strike. When you damage a target with an unarmed strike, you can change the damage type to acid, cold, fire, lightning, or poison.
            Tongue of Dragons. You learn to speak, read, and write Draconic or one other language of your choice.`,
            levelRequirement: 3,
          },
          {
            name: "Breath of the Dragon",
            description: `At 3rd level you can channel destructive waves of energy, like those created by the dragons you emulate. When you take the Attack action on your turn, you can replace one of the attacks with an exhalation of draconic energy in either a 20-foot cone or a 30-foot line that is 5 feet wide (your choice). Choose a damage type: acid, cold, fire, lightning, or poison. Each creature in that area must make a Dexterity saving throw against your ki save DC, taking damage of the chosen type equal to two rolls of your Martial Arts die on a failed save, or half as much damage on a successful one.

            At 11th level, the damage of this feature increases to three rolls of your Martial Arts die.
            
            You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. While you have no uses available, you can spend 2 ki points to use this feature again.`,
            levelRequirement: 3,
          },
          {
            name: "Wings Unfurled",
            description: `At 6th level when you use your Step of the Wind, you can unfurl spectral draconic wings from your back that vanish at the end of your turn. While the wings exist, you have a flying speed equal to your walking speed.

            You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 6,
          },
          {
            name: "Aspect of the Wyrm",
            description: `At 11th level the power of your draconic spirit now radiates from you, warding your allies or inspiring fear in your enemies. As a bonus action, you can create an aura of draconic power that radiates 10 feet from you for 1 minute. For the duration, you gain one of the following effects of your choice:

            Frightful Presence. When you create this aura, and as a bonus action on subsequent turns, you can choose a creature within the aura. The target must succeed on a Wisdom saving throw against your ki save DC or become frightened of you for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save.
            Resistance. Choose a damage type when you activate this aura: acid, cold, fire, lightning, or poison. You and your allies within the aura have resistance to that damage.
            Once you create this aura, you can’t create it again until you finish a long rest, unless you expend 3 ki points to create it again.`,
            levelRequirement: 11,
          },
          {
            name: "Ascendant Aspect",
            description: `At 17th level, your draconic spirit reaches its peak. You gain the following benefits:

            Augment Breath. When you use your Breath of the Dragon, you can spend 1 ki point to augment its shape and power. The exhalation of draconic energy becomes either a 60-foot cone or a 90-foot line that is 5 feet wide (your choice), and each creature in that area takes damage equal to four rolls of your Martial Arts die on a failed save, or half as much damage on a successful one.
            Blindsight. You gain blindsight out to 10 feet. Within that range, you can effectively see anything that isn’t behind total cover, even if you’re blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.
            Explosive Fury. When you activate your Aspect of the Wyrm, draconic fury explodes from you. Choose any number of creatures you can see in your aura. Each of those creatures must succeed on a Dexterity saving throw against your ki save DC or take 3d10 acid, cold, fire, lightning, or poison damage (your choice).`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Way of the Drunken Master",
        features: [
          {
            name: "Bonus Proficiencies",
            description: `When you choose this tradition at 3rd level, you gain proficiency in the Performance skill if you don't already have it. Your martial arts technique mixes combat training with the precision of a dancer and the antics of a jester. You also gain proficiency with brewer's supplies if you don't already have it.`,
            levelRequirement: 3,
          },
          {
            name: "Drunken Technique",
            description: `At 3rd level, you learn how to twist and turn quickly as part of your Flurry of Blows. Whenever you use Flurry of Blows, you gain the benefit of the Disengage action, and your walking speed increases by 10 feet until the end of the current turn.`,
            levelRequirement: 3,
          },
          {
            name: "Tipsy Sway",
            description: `Starting at 6th level, you can move in sudden, swaying ways. You gain the following benefits.

            Leap to Your Feet. When you're prone, you can stand up by spending 5 feet of movement, rather than half your speed.
            Redirect Attack. When a creature misses you with a melee attack roll, you can spend 1 ki point as a reaction to cause that attack to hit one creature of your choice, other than the attacker, that you can see within 5 feet of you.`,
            levelRequirement: 6,
          },
          {
            name: "Drunkard's Luck",
            description: `Starting at 11th level, you always seem to get a lucky bounce at the right moment. When you make an ability check, an attack roll, or a saving throw and have disadvantage, you can spend 2 ki points to cancel the disadvantage for that roll.`,
            levelRequirement: 11,
          },
          {
            name: "Intoxicated Frenzy",
            description: `At 17th level, you gain the ability to make an overwhelming number of attacks against a group of enemies. When you use your Flurry of Blows, you can make up to three additional attacks with it (up to a total of five Flurry of Blows attacks), provided that each Flurry of Blows attack targets a different creature this turn.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Way of the Four Elements",
        features: [
          {
            name: "Disciple of the Elements",
            description: `When you choose this tradition at 3rd level, you learn magical disciplines that harness the power of the four elements. A discipline requires you to spend ki points each time you use it.

            You know the Elemental Attunement discipline and one other elemental discipline of your choice. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level.
            
            Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.
            
            Casting Elemental Spells. Some elemental disciplines allow you to cast spells. See chapter 10 for the general rules of spellcasting. To cast one of these spells, you use its casting time and other rules, but you don't need to provide material components for it.
            
            Once you reach 5th level in this class, you can spend additional ki points to increase the level of an elemental discipline spell that you cast, provided that the spell has an enhanced effect at a higher level, as Burning Hands does. The spell's level increases by 1 for each additional ki point you spend. For example, if you are a 5th-level monk and use Sweeping Cinder Strike to cast Burning Hands, you can spend 3 ki points to cast it as a 2nd-level spell (the discipline's base cost of 2 ki points plus 1).
            
            The maximum number of ki points you can spend to cast a spell in this way (including its base ki point cost and any additional ki points you spend to increase its level) is determined by your monk level, as shown in the Spells and Ki Points table.
            
            Spells and Ki Points
            Monk Levels	            Maximum Ki Points for a Spell
            5th-8th	                3
            9th-12th	              4
            13th-16th	              5
            17th-20th	              6`,
            levelRequirement: 3,
          },
        ],
      },
      {
        name: "Way of the Kensei",
        features: [
          {
            name: "Path of the Kensei",
            description: `When you choose this tradition at 3rd level, your special martial arts training leads you to master the use of certain weapons. This path also includes instruction in the deft strokes of calligraphy or painting. You gain the following benefits:

            Kensei Weapons. Choose two types of weapons to be your kensei weapons: one melee weapon and one ranged weapon. Each of these weapons can be any simple or martial weapon that lacks the heavy and special properties. The longbow is also a valid choice. You gain proficiency with these weapons if you don't already have it. Weapons of the chosen types are monk weapons for you. Many of this tradition's features work only with your kensei weapons. When you reach 6th, 11th, and 17th level in this class, you can choose another type of weapon – either melee or ranged – to be a kensei weapon for you, following the criteria above.
            Agile Parry. If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren’t incapacitated.
            Kensei's Shot. You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra 1d4 damage of the weapon’s type. You retain this benefit until the end of the current turn.
            Way of the Brush. You gain proficiency with your choice of calligrapher's supplies or painter's supplies.`,
            levelRequirement: 3,
          },
          {
            name: "One with the Blade",
            description: `At 6th level, you extend your ki into your kensei weapons, granting you the following benefits.

            Magic Kensei Weapons. Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.
            Deft Strike. When you hit a target with a kensei weapon, you can spend 1 ki point to cause the weapon to deal extra damage to the target equal to your Martial Arts die. You can use this feature only once on each of your turns.`,
            levelRequirement: 6,
          },
          {
            name: "Sharpen the Blade",
            description: `At 11th level, you gain the ability to augment your weapons further with your ki. As a bonus action, you can expend up to 3 ki points to grant one kensei weapon you touch a bonus to attack and damage rolls when you attack with it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute or until you use this feature again. This feature has no effect on a magic weapon that already has a bonus to attack and damage rolls.`,
            levelRequirement: 11,
          },
          {
            name: "Unerring Accuracy",
            description: `At 17th level, your mastery of weapons grants you extraordinary accuracy. If you miss with an attack roll using a monk weapon on your turn, you can reroll it. You can use this feature only once on each of your turns.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Way of the Long Death",
        features: [
          {
            name: "Touch of Death",
            description: `Starting when you choose this tradition at 3rd level, your study of death allows you to extract vitality from another creature as it nears its demise. When you reduce a creature within 5 feet of you to 0 hit points, you gain temporary hit points equal to your Wisdom modifier + your monk level (minimum of 1 temporary hit point).`,
            levelRequirement: 3,
          },
          {
            name: "Hour of Reaping",
            description: `At 6th level, you gain the ability to unsettle or terrify those around you as an action, for your soul has been touched by the shadow of death. When you take this action, each creature within 30 feet of you that can see you must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.`,
            levelRequirement: 6,
          },
          {
            name: "Mastery of Death",
            description: `Beginning at 11th level, you use your familiarity with death to escape its grasp. When you are reduced to 0 hit points, you can expend 1 ki point (no action required) to have 1 hit point instead.`,
            levelRequirement: 11,
          },
          {
            name: "Touch of the Long Death",
            description: `Starting at 17th level, your touch can channel the energy of death into a creature. As an action, you touch one creature within 5 feet of you, and you expend 1 to 10 ki points. The target must make a Constitution saving throw, and it takes 2d10 necrotic damage per ki point spent on a failed save, or half as much damage on a successful one.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Way of Mercy",
        features: [
          {
            name: "Implements of Mercy",
            description: `When you choose this tradition at 3rd level, you gain proficiency in the Insight and Medicine skills, and you gain proficiency with the herbalism kit.

            You also gain a special mask, which you often wear when using the features of this subclass. You determine its appearance, or generate it randomly by rolling on the Merciful Mask table.
            
            Merciful Mask	
            d6	Mask Appearance
            1	  Raven
            2	  Blank and white
            3	  Crying visage
            4	  Laughing visage
            5	  Skull
            6	  Butterfly`,
            levelRequirement: 3,
          },
          {
            name: "Hands of Healing",
            description: `At 3rd level, your mystical touch can mend wounds. As an action, you can spend 1 ki point to touch a creature and restore a number of hit points equal to a roll of your Martial Arts die + your Wisdom modifier.

            When you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature without spending a ki point for the healing.`,
            levelRequirement: 3,
          },
          {
            name: "Hands of Harm",
            description: `At 3rd level, you use your ki to inflict wounds. When you hit a creature with an unarmed strike, you can spend 1 ki point to deal extra necrotic damage equal to one roll of your Martial Arts die + your Wisdom modifier. You can use this feature only once per turn.`,
            levelRequirement: 3,
          },
          {
            name: "Physician's Touch",
            description: `Starting at 6th level, you can administer even greater cures with a touch, and if you feel it's necessary, you can use your knowledge to cause harm.

            When you use Hands of Healing on a creature, you can also end one disease or one of the following conditions affecting the creature: blinded, deafened, paralyzed, poisoned, or stunned.
            
            When you use Hands of Harm on a creature, you can subject that creature to the poisoned condition until the end of your next turn.`,
            levelRequirement: 6,
          },
          {
            name: "Flurry of Healing and Harm",
            description: `Starting at 11th level, you can now mete out a flurry of comfort and hurt. When you use Flurry of Blows, you can now replace each of the unarmed strikes with a use of your Hands of Healing, without spending ki points for the healing.

            In addition, when you make an unarmed strike with Flurry of Blows, you can use Hand of Harm with that strike without spending the ki point for Hands of Harm. You can still use Hands of Harm only once per turn.`,
            levelRequirement: 11,
          },
          {
            name: "Hand of Ultimate Mercy",
            description: `By 17th level, your mastery of life energy opens the door to the ultimate mercy. As an action, you can touch the corpse of a creature that died within the past 24 hours and expend 5 ki points. The creature then returns to life, regaining a number of hit points equal to 4d10 + your Wisdom modifier. If the creature died while subject to any of the following conditions, it revives with them removed: blinded, deafened, paralyzed, poisoned, and stunned.

            Once you use this feature, you can't use it again until you finish a long rest.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Way of the Open Hand",
        features: [
          {
            name: "Open Hand Technique",
            description: `Starting when you choose this tradition at 3rd level, you can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:

            It must succeed on a Dexterity saving throw or be knocked prone.
            It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.
            It can't take reactions until the end of your next turn.`,
            levelRequirement: 3,
          },
          {
            name: "Wholeness of Body",
            description: `At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.`,
            levelRequirement: 6,
          },
          {
            name: "Tranquility",
            description: `Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a Sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.`,
            levelRequirement: 11,
          },
          {
            name: "Quivering Palm",
            description: `At 17th level, you gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.

            You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Way of Shadow",
        features: [
          {
            name: "Shadow Arts",
            description: `Starting when you choose this tradition at 3rd level, you can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast darkness, darkvision, pass without trace, or silence, without providing material components. Additionally, you gain the minor illusion cantrip if you don't already know it.`,
            levelRequirement: 3,
          },
          {
            name: "Shadow Step",
            description: `At 6th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn.`,
            levelRequirement: 6,
          },
          {
            name: "Cloak of Shadows",
            description: `By 11th level, you have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light.`,
            levelRequirement: 11,
          },
          {
            name: "Opportunist",
            description: `At 17th level, you can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Way of the Sun Soul",
        features: [
          {
            name: "Radiant Sun Bolt",
            description: `Starting when you choose this tradition at 3rd level, you can hurl searing bolts of magical radiance.

            You gain a new attack option that you can use with the Attack action. This special attack is a ranged spell attack with a range of 30 feet. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. Its damage is radiant, and its damage die is a d4. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.
            
            When you take the Attack action on your turn and use this special attack as part of it, you can spend 1 ki point to make the special attack twice as a bonus action.
            
            When you gain the Extra Attack feature, this special attack can be used for any of the attacks you make as part of the Attack action.`,
            levelRequirement: 3,
          },
          {
            name: "Searing Arc Strike",
            description: `At 6th level, you gain the ability to channel your ki into searing waves of energy. Immediately after you take the Attack action on your turn, you can spend 2 ki points to cast the Burning Hands spell as a bonus action.

            You can spend additional ki points to cast Burning Hands as a higher level spell. Each additional ki point you spend increases the spell's level by 1. The maximum number of ki points (2 plus any additional points) that you can spend on the spell equals half your monk level.`,
            levelRequirement: 6,
          },
          {
            name: "Searing Sunburst",
            description: `At 11th level, you gain the ability to create an orb of light that erupts into a devastating explosion. As an action, you magically create an orb and hurl it at a point you choose within 150 feet, where it erupts into a sphere of radiant light for a brief but deadly instant.

            Each creature in that 20-foot-radius sphere must succeed on a Constitution saving throw or take 2d6 radiant damage. A creature doesn't need to make the save if the creature is behind total cover that is opaque.
            
            You can increase the sphere's damage by spending ki points. Each point you spend, up to a maximum of 3, increases the damage by 2d6.`,
            levelRequirement: 11,
          },
          {
            name: "Sun Shield",
            description: `At 17th level, you become wreathed in a luminous, magical aura. You shed bright light in a 30-foot radius and dim light for an additional 30 feet. You can extinguish or restore the light as a bonus action.

            If a creature hits you with a melee attack while this light shines, you can use your reaction to deal radiant damage to the creature. The radiant damage equals 5 + your Wisdom modifier.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Way of the Cobalt Soul",
        features: [
          {
            name: "Extract Aspects",
            description: `Starting at 3rd level, you can strike pressure points to intuit crucial information about a foe. When you hit a creature with one of the attacks granted by your Flurry of Blows, you can analyze it. Whenever an analyzed creature misses you with an attack, you can immediately use your reaction to make an unarmed strike against that creature if it's within your reach. This benefit lasts until you finish a short or long rest.

            Additionally, when you analyze a creature, you learn all of its damage vulnerabilities, damage resistances, damage immunities, and condition immunities.`,
            levelRequirement: 3,
          },
          {
            name: "Extort Truth",
            description: `Starting at 6th level, you can precisely strike a hidden cluster of nerves on a creature, temporarily preventing it from masking its true thoughts and intent. When you hit a creature with an unarmed strike, you can spend 1 ki point to force it to make a Charisma saving throw. On a failed save, the creature is unable to speak a deliberate lie, and all Charisma checks directed at the creature are made with advantage for up to 10 minutes. You know if it succeeded or failed on its saving throw.

            And affected creature is aware of the effect and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive in its answers as long as the effect lasts.
            
            If you wish to impose this effect on a creature without injuring it, you can attack the creature to simply touch it, dealing no damage on a hit.`,
            levelRequirement: 6,
          },
          {
            name: "Mystical Erudition",
            description: `Also at 6th level, you have extensively studied the history and lore within the archives of the Cobalt Soul. You learn one language of your choice, and you gain proficiency with one of the following skills of your choice: Arcana, History, Investigation, Nature, or Religion. If you already have proficiency in one of the listed skills, you can instead choose to double your proficiency bonus for any ability check you make that uses the chosen skill.

            You gain an additional language and an additional skill proficiency from the above list (or you can double the bonus of an existing proficiency from the list) at 11th and 17th level.`,
            levelRequirement: 6,
          },
          {
            name: "Mind of Mercury",
            description: `Starting at 11th level, you've honed your awareness and reflexes through mental aptitude and pattern recognition. Once per turn, if you've already taken your reaction, you may spend 1 ki point to take an additional reaction. You can use only one reaction per triggering effect.`,
            levelRequirement: 11,
          },
          {
            name: "Debilitating Barrage",
            description: `Upon reaching 17th level, you've gained the knowledge to manipulate a creature's ki to undermine their fortitude. When you hit a creature with an unarmed strike, you can spend 3 ki points to cause the creature to gain vulnerability to one damage type of your choice for 1 minute, or until the end of a turn in which it has taken damage of that type.

            If a creature has resistance to the damage type you choose, this resistance is suppressed for 1 minute, rather than gaining vulnerability. A creature that is immune to the damage type you choose is unaffected. A creature who is affected by this feature cannot be affected by it again for 24 hours.`,
            levelRequirement: 17,
          },
        ],
      },
    ],
  },
  {
    name: "Paladin",
    hitDice: "d10",
    proficiencies: {
      armor: ["Light armor", "Medium armor", "Heavy armor", "shields"],
      weapons: ["simple weapons", "martial weapons"],
      tools: [],
      toolChoices: [
        {
          numberOfChoices: 0,
          choices: [],
        },
      ],
      savingThrows: ["wis", "cha"],
      skills: {
        numberOfChoices: 2,
        choices: [
          "Athletics",
          "Insight",
          "Intimidation",
          "Medicine",
          "Persuasion",
          "Religion",
        ],
      },
    },
    features: [
      {
        name: "Divine Sense",
        description: `The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.

        You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.`,
        levelRequirement: 1,
      },
      {
        name: "Lay on Hands",
        description: `Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.

        As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.
        
        Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.
        
        This feature has no effect on undead and constructs.`,
        levelRequirement: 1,
      },
      {
        name: "Fighting Style",
        description: `Starting at 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.

        Blessed Warrior. You learn two cantrips of your choice from the cleric spell list. They count as paladin spells for you, and Charisma is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the cleric spell list.
        
        Blind Fighting. You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.
        
        Defense. While you are wearing armor, you gain a +1 bonus to AC.
        
        Dueling. When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.
        
        Great Weapon Fighting. When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.
        
        Interception. When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.
        
        Protection. When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.`,
        levelRequirement: 2,
      },
      {
        name: "Divine Smite",
        description: `Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.`,
        levelRequirement: 2,
      },
      {
        name: "Divine Health",
        description: `By 3rd level, the divine magic flowing through you makes you immune to disease.`,
        levelRequirement: 3,
      },
      {
        name: "Sacred Oath",
        description: `When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.`,
        levelRequirement: 3,
      },
      {
        name: "Extra Attack",
        description: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.`,
        levelRequirement: 5,
      },
      {
        name: "Aura of Protection",
        description: `Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.

        At 18th level, the range of this aura increases to 30 feet.`,
        levelRequirement: 6,
      },
      {
        name: "Aura of Courage",
        description: `Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.

        At 18th level, the range of this aura increases to 30 feet.`,
        levelRequirement: 10,
      },
      {
        name: "Improved Divine Smite",
        description: `By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.`,
        levelRequirement: 11,
      },
      {
        name: "Cleansing Touch",
        description: `Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.

        You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.`,
        levelRequirement: 14,
      },
    ],
    subclasses: [
      {
        name: "Oath of the Ancients",
        features: [
          {
            name: "Channel Divinity",
            description: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

            Nature's Wrath. You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.
            Turn the Faithless. You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.
            
            A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.
            
            If the creature's true form is concealed by an illusion, shapeshifting, or other effect, that form is revealed while it is turned.`,
            levelRequirement: 3,
          },
          {
            name: "Aura of Warding",
            description: `Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells.

            At 18th level, the range of this aura increases to 30 feet.`,
            levelRequirement: 7,
          },
          {
            name: "Undying Sentinel",
            description: `Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can't use it again until you finish a long rest.

            Additionally, you suffer none of the drawbacks of old age, and you can't be aged magically.`,
            levelRequirement: 15,
          },
          {
            name: "Elder Champion",
            description: `At 20th level, you can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take on a bark-like texture, your hair might become leafy or moss-like, or you might sprout antlers or a lion-like mane.

            Using your action, you undergo a transformation. For 1 minute, you gain the following benefits:
            
            At the start of each of your turns, you regain 10 hit points.
            Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.
            Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.
            Once you use this feature, you can't use it again until you finish a long rest.`,
            levelRequirement: 20,
          },
        ],
      },
      {
        name: "Oath of Conquest",
        features: [
          {
            name: "Channel Divinity",
            description: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

            Conquering Presence. You can use your Channel Divinity to exude a terrifying presence. As an action, you force each creature of your choice that you can see within 30 feet of you to make a Wisdom saving throw. On a failed save, a creature becomes frightened of you for 1 minute. The frightened creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success.
            Guided Strike. You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.`,
            levelRequirement: 3,
          },
          {
            name: "Aura of Conquest",
            description: `Starting at 7th level, you constantly emanate a menacing aura while you're not incapacitated. The aura extends 10 feet from you in every direction, but not through total cover.

            If a creature is frightened of you, its speed is reduced to 0 while in the aura, and that creature takes psychic damage equal to half your paladin level if it starts its turn there.
            
            At 18th level, the range of this aura increases to 30 feet.`,
            levelRequirement: 7,
          },
          {
            name: "Scornful Rebuke",
            description: `Starting at 15th level, those who dare to strike you are psychically punished for their audacity. Whenever a creature hits you with an attack, that creature takes psychic damage equal to your Charisma modifier (minimum of 1) if you’re not incapacitated.`,
            levelRequirement: 15,
          },
          {
            name: "Invincible Conqueror",
            description: `At 20th level, you gain the ability to harness extraordinary martial prowess. As an action, you can magically become an avatar of conquest, gaining the following benefits for 1 minute:

            You have resistance to all damage.
            When you take the Attack action on your turn, you can make one additional attack as part of that action.
            Your melee weapon attacks score a critical hit on a roll of 19 or 20 on the d20.
            Once you use this feature, you can’t use it again until you finish a long rest.`,
            levelRequirement: 20,
          },
        ],
      },
      {
        name: "Oath of the Crown",
        features: [
          {
            name: "Channel Divinity",
            description: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

            Champion Challenge. As a bonus action, you issue a challenge that compels other creatures to do battle with you. Each creature of your choice that you can see within 30 feet of you must make a Wisdom saving throw. On a failed save, a creature can't willingly move more than 30 feet away from you. This effect ends on the creature if you are incapacitated or die or if the creature is more than 30 feet away from you.
            Turn the Tide. As a bonus action, you can bolster injured creatures with your Channel Divinity. Each creature of your choice that can hear you within 30 feet of you regains hit points equal to 1d6 + your Charisma modifier (minimum of 1) if it has no more than half of its hit points.`,
            levelRequirement: 3,
          },
          {
            name: "Divine Allegiance",
            description: `Starting at 7th level, when a creature within 5 feet of you takes damage, you can use your reaction to magically substitute your own health for that of the target creature, causing that creature not to take the damage. Instead, you take the damage. This damage to you can't be reduced or prevented in any way.`,
            levelRequirement: 7,
          },
          {
            name: "Unyielding Saint",
            description: `Starting at 15th level, you have advantage on saving throws to avoid becoming paralyzed or stunned.`,
            levelRequirement: 15,
          },
          {
            name: "Exalted Champion",
            description: `At 20th level, your presence on the field of battle is an inspiration to those dedicated to your cause. You can use your action to gain the following benefits for 1 hour:

            You have resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.
            Your allies have advantage on death saving throws while within 30 feet of you.
            You have advantage on Wisdom saving throws, as do your allies within 30 feet of you.
            This effect ends early if you are incapacitated or die. Once you use this feature, you can't use it again until you finish a long rest.`,
            levelRequirement: 20,
          },
        ],
      },
      {
        name: "Oath of Devotion",
        features: [
          {
            name: "Channel Divinity",
            description: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

            Sacred Weapon. As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.
            
            You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.
            Turn the Unholy. As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.
            
            A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.`,
            levelRequirement: 3,
          },
          {
            name: "Aura of Devotion",
            description: `Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious.

            At 18th level, the range of this aura increases to 30 feet.`,
            levelRequirement: 7,
          },
          {
            name: "Purity of Spirit",
            description: `Beginning at 15th level, you are always under the effects of a Protection from Evil and Good spell.`,
            levelRequirement: 15,
          },
          {
            name: "Holy Nimbus",
            description: `At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.

            Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.
            
            In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.
            
            Once you use this feature, you can't use it again until you finish a long rest.`,
            levelRequirement: 20,
          },
        ],
      },
      {
        name: "Oath of Glory",
        features: [
          {
            name: "Channel Divinity",
            description: `When you take this oath at 3rd level, you gain the following two Channel Divinity options. See the Sacred Oath class feature for how Channel Divinity works.

            Peerless Athlete. As a bonus action, you can use your Channel Divinity to augment your athleticism. For the next 10 minutes, you have advantage on Strength (Athletics) and Dexterity (Acrobatics) checks; you can carry, push, drag, and lift twice as much weight as normal; and the distance of your long and high jumps increases by 10 feet (this extra distance costs movement as normal).
            Inspiring Smite. Immediately after you deal damage to a creature with your Divine Smite feature, you can use your Channel Divinity as a bonus action and distribute temporary hit points to creatures of your choice within 30 feet of you, which can include you. The total number of temporary hit points equals 2d8 + your level in this class, divided among the chosen creatures however you like.`,
            levelRequirement: 3,
          },
          {
            name: "Aura of Alacrity",
            description: `At 7th level, you emanate an aura that fills you and your companions with supernatural speed, allowing you to race across a battlefield in formation. Your walking speed increases by 10 feet. In addition, if you aren't incapacitated, the walking speed of any ally who starts their turn within 5 feet of you increases by 10 feet until the end of that turn.

            When you reach 18th level in this class, the range of the aura increases to 10 feet.`,
            levelRequirement: 7,
          },
          {
            name: "Glorious Defense",
            description: `When you reach 15th level, you can turn defense into a sudden strike. When you or another creature you can see within 10 feet of you is hit by an attack roll, you can use your reaction to grant a bonus to the target's AC against that attack, potentially causing it to miss. The bonus equals your Charisma modifier (minimum of +1). If the attack misses, you can make one weapon attack against the attacker as part of this reaction, provided the attacker is within your weapon's range.

            You can use this feature a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 15,
          },
          {
            name: "Living Legend",
            description: `At 20th level, you can empower yourself with the legends — whether true or exaggerated — of your great deeds. As a bonus action, you gain the following benefits for 1 minute:

            You are blessed with an otherworldly presence, gaining advantage on all Charisma checks.
            Once on each of your turns when you make a weapon attack and miss, you can cause that attack to hit instead.
            If you fail a saving throw, you can use your reaction to reroll it. You must use this new roll.
            Once you use this feature, you can’t use it again until you finish a long rest, unless you expend a 5th-level spell slot to use it again.`,
            levelRequirement: 20,
          },
        ],
      },
      {
        name: "Oath of Redemption",
        features: [
          {
            name: "Channel Divinity",
            description: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

            Emissary of Peace. You can use your Channel Divinity to augment your presence with divine power. As a bonus action, you grant yourself a +5 bonus to Charisma (Persuasion) checks for the next 10 minutes.
            Rebuke the Violent. You can use your Channel Divinity to rebuke those who use violence. Immediately after an attacker within 30 feet of you deals damage with an attack against a creature other than you, you can use your reaction to force the attacker to make a Wisdom saving throw. On a failed save, the attacker takes radiant damage equal to the damage it just dealt. On a successful save, it takes half as much damage.`,
            levelRequirement: 3,
          },
          {
            name: "Aura of the Guardian",
            description: `Starting at 7th level, you can shield your allies from harm at the cost of your own health. When a creature within 10 feet of you takes damage, you can use your reaction to magically take that damage, instead of that creature taking it. This feature doesn't transfer any other effects that might accompany the damage, and this damage can't be reduced in any way.

            At 18th level, the range of this aura increases to 30 feet.`,
            levelRequirement: 7,
          },
          {
            name: "Protective Spirit",
            description: `Starting at 15th level, a holy presence mends your wounds in combat. You regain hit points equal to 1d6 + half your paladin level if you end your turn in combat with fewer than half of your hit points remaining and you aren’t incapacitated.`,
            levelRequirement: 15,
          },
          {
            name: "Emissary of Redemption",
            description: `At 20th level, you become an avatar of peace, which gives you the following benefits.

            You have resistance to all damage dealt by other creatures (their attacks, spells, and other effects).
            Whenever a creature damages you, it takes radiant damage equal to half the amount it dealt to you.
            If you attack a creature, cast a spell on it, or deal damage to it by any means but this feature, neither benefit works against that creature until you finish a long rest.`,
            levelRequirement: 20,
          },
        ],
      },
      {
        name: "Oath of Vengeance",
        features: [
          {
            name: "Channel Divinity",
            description: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

            Abjure Enemy. As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.
            
            On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature's speed is 0, and it can't benefit from any bonus to its speed.
            
            On a successful save, the creature's speed is halved for 1 minute or until the creature takes any damage.
            Vow of Enmity. As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.`,
            levelRequirement: 3,
          },
          {
            name: "Relentless Avenger",
            description: `By 7th level, your supernatural focus helps you close off a foe's retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn't provoke opportunity attacks.`,
            levelRequirement: 7,
          },
          {
            name: "Soul of Vengeance",
            description: `Starting at 15th level, the authority with which you speak your Vow of Enmity gives you greater power over your foe. When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.`,
            levelRequirement: 15,
          },
          {
            name: "Avenging Angel",
            description: `At 20th level, you can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:

            Wings sprout from your back and grant you a flying speed of 60 feet.
            You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.
            Once you use this feature, you can't use it again until you finish a long rest.`,
            levelRequirement: 20,
          },
        ],
      },
      {
        name: "Oath of the Watchers",
        features: [
          {
            name: "Channel Divinity",
            description: `When you take this oath at 3rd level, you gain the following two Channel Divinity options. See the Sacred Oath class feature for how Channel Divinity works.

            Watcher's Will. You can use your Channel Divinity to invest your presence with the warding power of your faith. As an action, you can choose a number of creatures you can see within 30 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). For 1 minute, you and the chosen creatures have advantage on Intelligence, Wisdom, and Charisma saving throws.
            Abjure the Extraplanar. You can use your Channel Divinity to castigate unworldly beings. As an action, you present your holy symbol and each aberration, celestial, elemental, fey, or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.
            
            A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can take the Dodge action.`,
            levelRequirement: 3,
          },
          {
            name: "Aura of the Sentinel",
            description: `At 7th level, you emit an aura of alertness while you aren't incapacitated. When you and any creatures of your choice within 10 feet of you roll initiative, you all gain a bonus to initiative equal to your proficiency bonus.

            At 18th level, the range of this aura increases to 30 feet.`,
            levelRequirement: 7,
          },
          {
            name: "Vigilant Rebuke",
            description: `At 15th level, you've learned how to chastise anyone who dares wield beguilements against you and your wards. Whenever you or a creature you can see within 30 feet of you succeeds on an Intelligence, a Wisdom, or a Charisma saving throw, you can use your reaction to deal 2d8 + your Charisma modifier force damage to the creature that forced the saving throw.`,
            levelRequirement: 15,
          },
          {
            name: "Mortal Bulwark",
            description: `At 20th level, you manifest a spark of divine power in defense of the mortal realms. As a bonus action, you gain the following benefits for 1 minute:

            You gain truesight with a range of 120 feet.
            You have advantage on attack rolls against aberrations, celestials, elementals, fey, and fiends.
            When you hit a creature with an attack roll and deal damage to it, you can also force it to make a Charisma saving throw against your spell save DC. On a failed save, the creature is magically banished to its native plane of existence if it's currently not there. On a successful save, the creature can't be banished by this feature for 24 hours.
            Once you use this bonus action, you can't use it again until you finish a long rest, unless you expend a 5th-level spell slot to use it again.`,
            levelRequirement: 20,
          },
        ],
      },
      {
        name: "Oathbreaker",
        features: [
          {
            name: "Channel Divinity",
            description: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

            Control Undead. As an action, you target one undead creature you can see within 30 feet of you. The target must make a Wisdom saving throw. On a failed save, the target must obey your commands for the next 24 hours, or until you use this Channel Divinity option again. An undead whose challenge rating is equal to or greater than your paladin level is immune to this effect.
            Dreadful Aspect. As an action, you channel the darkest emotions and focus them into a burst of magical menace. Each creature of your choice within 30 feet of you must make a Wisdom saving throw if it can see you. On a failed save, the target is frightened of you for 1 minute. If a creature frightened by this effect ends its turn more than 30 feet away from you, it can attempt another Wisdom saving throw to end the effect on it.`,
            levelRequirement: 3,
          },
          {
            name: "Aura of Hate",
            description: `Starting at 7th level you, as well any fiends and undead within 10 feet of you, gain a bonus to melee weapon damage rolls equal to your Charisma modifier (minimum of +1). A creature can benefit from this feature from only one paladin at a time.

            At 18th level, the range of this aura increases to 30 feet.`,
            levelRequirement: 7,
          },
          {
            name: "Supernatural Resistance",
            description: `At 15th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.`,
            levelRequirement: 15,
          },
          {
            name: "Dread Lord",
            description: `At 20th level, you can, as an action, surround yourself with an aura of gloom that lasts for 1 minute. The aura reduces any bright light in a 30-foot radius around you to dim light. Whenever an enemy that is frightened by you starts its turn in the aura, it takes 4d10 psychic damage. Additionally, you and any creatures of your choosing in the aura are draped in deeper shadow. Creatures that rely on sight have disadvantage on attack rolls against creatures draped in this shadow.

            While the aura lasts, you can use a bonus action on your turn to cause the shadows in the aura to attack one creature. Make a melee spell attack against the target. If the attack hits, the target takes necrotic damage equal to 3d10 + your Charisma modifier.
            
            After activating the aura, you can't do so again until you finish a long rest.`,
            levelRequirement: 20,
          },
        ],
      },
      {
        name: "Oath of the Open Sea",
        features: [
          {
            name: "Channel Divinity",
            description: `When you take this oath at 3rd level, you gain the following two Channel Divinity options.

            Marine Layer. As an action, you channel the sea to create a thick cloud of fog that surrounds you for 20 feet in all directions. The fog moves with you, remaining centered on you and making its area heavily obscured. You and each creature within 5 feet of you instead treat the area as lightly obscured. This fog lasts for 10 minutes, spreads around corners, and cannot be dispersed unless you choose to end this effect (no action required).
            Fury of the Tides. As a bonus action, you channel the powerful might of the waves to bolster your attacks for 1 minute. Once per turn for the duration, when you hit a creature with a weapon attack, you can choose to push the target 10 feet away from you. If pushed into an obstacle or another creature, the target takes bludgeoning damage equal to your Charisma modifier.`,
            levelRequirement: 3,
          },
          {
            name: "Aura of Liberation",
            description: `Starting at 7th level, you fill nearby creatures with the energy of movement. While you’re not incapacitated, you and creatures of your choice within 10 feet of you cannot be grappled or restrained, and ignore penalties on movement and attacks while underwater. Creatures that are already grappled or restrained when they enter the aura can spend 5 feet of movement to automatically escape unless they are bound by magic restraints.

            When you reach 18th level in this class, the aura affects creatures within 30 feet of you.`,
            levelRequirement: 7,
          },
          {
            name: "Stormy Waters",
            description: `At 15th level, you can call on the force of crashing waters as a reaction whenever a creature moves into or out of your reach. The creature takes 1d12 bludgeoning damage and must succeed on a Strength saving throw against your spell save DC or be knocked prone.`,
            levelRequirement: 15,
          },
          {
            name: "Mythic Swashbuckler",
            description: `At 20th level, you learn to channel the spirits of historic sea captains to briefly become a paragon of heroic adventure. As an action, you embrace these spirits of the sea to gain the following benefits for 1 minute:

            You have advantage on Strength (Athletics) checks and you gain a climbing speed equal to your walking speed. If you already have a climbing speed, it is doubled.
            If you are within 5 feet of a creature and no other creatures are within 5 feet of you, you have advantage on attack rolls against that creature.
            You can take the Dash or Disengage action as a bonus action.
            You have advantage on Dexterity checks and Dexterity saving throws against effects you can see.
            Once you use this feature, you can’t use it again until you finish a long rest.`,
            levelRequirement: 20,
          },
        ],
      },
    ],
  },
  {
    name: "Ranger",
    hitDice: "d10",
    proficiencies: {
      armor: ["light armor", "medium armor", "shields"],
      weapons: ["simple weapons", "martial weapons"],
      tools: [],
      toolChoices: [
        {
          numberOfChoices: 0,
          choices: [],
        },
      ],
      savingThrows: ["str", "dex"],
      skills: {
        numberOfChoices: 3,
        choices: [
          "Animal Handling",
          "Athletics",
          "Insight",
          "Investigation",
          "Nature",
          "Perception",
          "Stealth",
          "Survival",
        ],
      },
    },
    features: [
      {
        name: "Favored Enemy",
        description: `Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.

        Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.
        
        You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.
        
        When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.
        
        You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.`,
        levelRequirement: 1,
      },
      {
        name: "Natural Explorer",
        description: `Also at 1st level, you are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.

        While traveling for an hour or more in your favored terrain, you gain the following benefits:
        
        Difficult terrain doesn’t slow your group’s travel.
        Your group can’t become lost except by magical means.
        Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.
        If you are traveling alone, you can move stealthily at a normal pace.
        When you forage, you find twice as much food as you normally would.
        While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.
        You choose additional favored terrain types at 6th and 10th level.`,
        levelRequirement: 1,
      },
      {
        name: "Fighting Style",
        description: `At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.

        Archery. You gain a +2 bonus to attack rolls you make with ranged weapons.
        Blind Fighting. You have blind sight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.
        Defense. While you are wearing armor, you gain a +1 bonus to AC.
        Druidic Warrior. You learn two cantrips of your choice from the Druid spell list. They count as ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the Druid spell list.
        Dueling. When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.
        Thrown Weapon Fighting. You can draw a weapon that has the thrown property as part of the attack you make with the weapon.
        In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.
        Two-Weapon Fighting. When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.`,
        levelRequirement: 2,
      },
      {
        name: "Primeval Awareness",
        description: `Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number.`,
        levelRequirement: 3,
      },
      {
        name: "Ranger Conclave",
        description: `At 3rd level, you choose to emulate the ideals and training of a ranger conclave. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.`,
        choices: [
          "Beast Master",
          "Fey Wanderer",
          "Gloom Stalker",
          "Horizon Walker",
          "Hunter",
          "Monster Slayer",
          "Swarmkeeper",
          "Drakewarden",
        ],
        levelRequirement: 3,
      },
      {
        name: "Extra Attack",
        description: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.`,
        levelRequirement: 5,
      },
      {
        name: "Land's Stride",
        description: `Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.

        In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the Entangle spell.`,
        levelRequirement: 8,
      },
      {
        name: "Hide in Plain Sight",
        description: `Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.

        Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.`,
        levelRequirement: 10,
      },
      {
        name: "Vanish",
        description: `Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.`,
        levelRequirement: 14,
      },
      {
        name: "Feral Senses",
        description: `At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it.

        You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened.`,
        levelRequirement: 18,
      },
      {
        name: "Foe Slayer",
        description: `At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.`,
        levelRequirement: 20,
      },
    ],
    subclasses: [
      {
        name: "Beast Master Conclave",
        features: [
          {
            name: "Primal Companion",
            description: `You magically summon a primal beast, which draws strength from your bond with nature. The beast is friendly to you and your companions and obeys your commands. Choose its stat block-Beast of the Land, Beast of the Sea, or Beast of the Sky-which uses your proficiency bonus (PB) in several places. You also determine the kind of animal the beast is, choosing a kind appropriate for the stat block. Whatever kind you choose, the beast bears primal markings, indicating its mystical origin.

            In combat, the beast acts during your turn. It can move and use its reaction on its own, but the only action it takes is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. You can also sacrifice one of your attacks when you take the Attack action to command the beast to take the Attack action. If
            you are incapacitated, the beast can take any action of its choice, not just Dodge.
            
            If the beast has died within the last hour, you can use your action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored. When you finish a long rest, you can summon a different primal beast. The new beast appears in an unoccupied space within 5 feet of you, and you choose its stat block and appearance. If you already have a beast from this feature, it vanishes when the new beast appears. The beast also vanishes if you die.
            
            Beast of the Land
            Medium beast
            Armor Class: 13 + PB (natural armor)
            Hit Points: 5 + five times your ranger level (the beast has a number of Hit Dice [d8s] equal to your ranger level)
            Speed: 40 ft., climb 40ft.
            STR 14	DEX 14 	CON 15	INT 8	WIS 14	CHA 11
            Senses: darkvision 60 ft., passive Perception 12
            Languages: understands the languages you speak
            Challenge: —
            Proficiency Bonus (PB): equals your bonus
            Charge: If the beast moves at least 20 feet straight toward a target and then hits it with a maul attack on the same turn, the target takes an extra ld6 slashing damage. If the target is a creature, it must succeed on a Strength saving throw against your spell save DC or be knocked prone.
            Primal Bond: You can add your proficiency bonus to any ability check or saving throw that the beast makes.
            Actions
            Maul. Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d8 + 2 + PB slashing damage.


            Beast of the Sea
            Medium beast
            Armor Class: 13 + PB (natural armor)
            Hit Points: 5 + five times your ranger level (the beast has a number of Hit Dice [d8s] equal to your ranger level)
            Speed: 5 ft., swim 60ft.
            STR 14	DEX 14 	CON 15	INT 8	WIS 14	CHA 11
            Senses: darkvision 60 ft., passive Perception 12
            Languages: understands the languages you speak
            Challenge: —
            Proficiency Bonus (PB): equals your bonus
            Amphibious: The beast can breathe both air and water.
            Primal Bond: You can add your proficiency bonus to any ability check or saving throw that the beast makes.
            Actions
            Binding Strike. Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d6 + 2 + PB piercing or bludgeoning damage (your choice), and the target is grappled (escape DC equals your spell save DC). Until this grapple ends, the beast can't use this attack on another target.
            
            
            Beast of the Sky
            Small beast
            Armor Class: 13 + PB (natural armor)
            Hit Points: 4 + four times your ranger level (the beast has a number of Hit Dice [d6s] equal to your ranger level)
            Speed: 10 ft., fly 60ft.
            STR 6	DEX 16	CON 13	INT 8	WIS 14	CHA 11
            Senses: darkvision 60 ft., passive Perception 12
            Languages: understands the languages you speak
            Challenge: —
            Proficiency Bonus (PB): equals your bonus
            Flyby: The beast doesn't provoke opportunity attacks when it flies out of an enemy's reach.
            Primal Bond: You can add your proficiency bonus to any ability check or saving throw that the beast makes.
            Actions
            Shred. Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d4 + 3 + PB slashing damage.`,
            levelRequirement: 3,
          },
          {
            name: "Exceptional Training",
            description: `Beginning at 7th level, on any of your turns when your beast companion doesn’t attack, you can use a bonus action to command the beast to take the Dash, Disengage, or Help action on its turn. In addition, the beast’s attacks now count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.`,
            levelRequirement: 7,
          },
          {
            name: "Bestial Fury",
            description: `Starting at 11th level, when you command your beast companion to take the Attack action, the beast can make two attacks, or it can take the Multiattack action if it has that action.`,
            levelRequirement: 11,
          },
          {
            name: "Share Spells",
            description: `Beginning at 15th level, when you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Fey Wanderer Conclave",
        features: [
          {
            name: "Dreadful Strikes",
            description: `At 3rd level, you can augment your weapon strikes with mind-scarring magic, drawn from the gloomy hollows of the Feywild. When you hit a creature with a weapon, you can deal an extra 1d4 psychic damage to the target, which can take this extra damage only once per turn.

            The extra damage increases to 1d6 when you reach 11th level in this class.`,
            levelRequirement: 3,
          },
          {
            name: "Otherworldly Glamour",
            description: `Additionally at 3rd level, your fey qualities give you a supernatural charm. As a result, whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier (minimum of +1).

            In addition, you gain proficiency in one of the following skills of your choice: Deception, Performance, or Persuasion.`,
            levelRequirement: 3,
          },
          {
            name: "Beguiling Twist",
            description: `Beginning at 7th level, the magic of the Feywild guards your mind. You have advantage on saving throws against being charmed or frightened.

            In addition, whenever you or a creature you can see within 120 feet of you succeeds on a saving throw against being charmed or frightened, you can use your reaction to force a different creature you can see within 120 feet of you to make a Wisdom saving throw against your spell save DC. If the save fails, the target is charmed or frightened by you (your choice) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save.`,
            levelRequirement: 7,
          },
          {
            name: "Fey Reinforcements",
            description: `At 11th level, the royal courts of the Feywild have blessed you with the assistance of fey beings: you know the spell Summon Fey. It doesn't count against the number of ranger spells you know, and you can cast it without a material component. You can also cast it once without using a spell slot, and you regain the ability to do so when you finish a long rest.

            Whenever you start casting the spell, you can modify it so that it doesn't require concentration. If you do so, the spell's duration becomes 1 minute for that casting.`,
            levelRequirement: 11,
          },
          {
            name: "Misty Wanderer",
            description: `When you reach 15th level, you can slip in and out of the Feywild to move in a blink of an eye: you can cast Misty Step without expending a spell slot. You can do so a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest.

            In addition, whenever you cast Misty Step, you can bring along one willing creature you can see within 5 feet of you. That creature teleports to an unoccupied space of your choice within 5 feet of your destination space.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Gloom Stalker Conclave",
        features: [
          {
            name: "Dread Ambusher",
            description: `At 3rd level, you master the art of the ambush. You can give yourself a bonus to your initiative rolls equal to your Wisdom modifier.

            At the start of your first turn of each combat, your walking speed increases by 10 feet, which lasts until the end of that turn. If you take the Attack action on that turn, you can make one additional weapon attack as part of that action. If that attack hits, the target takes an extra 1d8 damage of the weapon's damage type.`,
            levelRequirement: 3,
          },
          {
            name: "Umbral Sight",
            description: `At 3rd level, you gain darkvision out to a range of 60 feet. If you already have darkvision from your race, its range increases by 30 feet.

            You are also adept at evading creatures that rely on darkvision. While in darkness, you are invisible to any creature that relies on darkvision to see you in that darkness.`,
            levelRequirement: 3,
          },
          {
            name: "Iron Mind",
            description: `By 7th level, you have honed your ability to resist the mind-altering powers of your prey. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).`,
            levelRequirement: 7,
          },
          {
            name: "Stalker's Flurry",
            description: `At 11th level, you learn to attack with such unexpected speed that you can turn a miss into another strike. Once on each of your turns when you miss with a weapon attack, you can make another weapon attack as part of the same action.`,
            levelRequirement: 11,
          },
          {
            name: "Shadowy Dodge",
            description: `Starting at 15th level, you can dodge in unforeseen ways, with wisps of supernatural shadow around you. Whenever a creature makes an attack roll against you and doesn't have advantage on the roll, you can use your reaction to impose disadvantage on it. You must use this feature before you know the outcome of the attack roll.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Horizon Walker Conclave",
        features: [
          {
            name: "Detect Portal",
            description: `At 3rd level, you gain the ability to magically sense the presence of a planar portal. As an action, you detect the distance and direction to the closest planar portal within 1 mile of you.

            Once you use this feature, you can't use it again until you finish a short or long rest.
            
            See the "Planar Travel" section in chapter 2 of the Dungeon Master's Guide for examples of planar portals.`,
            levelRequirement: 3,
          },
          {
            name: "Planar Warrior",
            description: `At 3rd level, you learn to draw on the energy of the multiverse to augment your attacks.

            As a bonus action, choose one creature you can see within 30 feet of you. The next time you hit that creature on this turn with a weapon attack, all damage dealt by the attack becomes force damage, and the creature takes an extra 1d8 force damage from the attack. When you reach 11th level in this class, the extra damage increases to 2d8.`,
            levelRequirement: 3,
          },
          {
            name: "Ethereal Step",
            description: `At 7th level, you learn to step through the Ethereal Plane. As a bonus action on your turn, you can cast the Etherealness spell with this feature, without expending a spell slot, but the spell ends at the end of the current turn.

            Once you use this feature, you can’t use it again until you finish a short or long rest.`,
            levelRequirement: 7,
          },
          {
            name: "Distant Strike",
            description: `At 11th level, you gain the ability to pass between the planes in a blink of an eye. When you use the Attack action, you can teleport up to 10 feet before each attack to an unoccupied space you can see.

            If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature.`,
            levelRequirement: 11,
          },
          {
            name: "Spectral Defense",
            description: `At 15th level, your ability to move between planes enables you to slip through the planar boundaries to lessen the harm done to you during battle. When you take damage from an attack, you can use your reaction to give yourself resistance to all of that attack's damage on this turn.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Hunter Conclave",
        features: [
          {
            name: "Hunter's Prey",
            description: `At 3rd level, you gain one of the following features of your choice.

            Colossus Slayer. Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it’s below its hit point maximum. You can deal this extra damage only once per turn.
            Giant Killer. When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.
            Horde Breaker. Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.`,
            levelRequirement: 3,
          },
          {
            name: "Defensive Tactics",
            description: `At 7th level, you gain one of the following features of your choice.

            Escape the Horde. Opportunity attacks against you are made with disadvantage.
            Multiattack Defense. When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.
            Steel Will. You have advantage on saving throws against being frightened.`,
            levelRequirement: 7,
          },
          {
            name: "Multiattack",
            description: `At 11th level, you gain one of the following features of your choice.

            Volley. You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon’s range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target
            Whirlwind Attack. You can use your action to make melee attacks against any number of creatures within 5 feet of you, with a separate attack roll for each target.`,
            levelRequirement: 11,
          },
          {
            name: "Superior Hunter's Defense",
            description: `At 15th level, you gain one of the following features of your choice.

            Evasion. When you are subjected to an effect, such as a red dragon’s fiery breath or a lightning bolt spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on a saving throw, and only half damage if you fail
            Stand Against the Tide. When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.
            Uncanny Dodge. When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Monster Slayer Conclave",
        features: [
          {
            name: "Hunter's Sense",
            description: `At 3rd level, you gain the ability to peer at a creature and magically discern how best to hurt it. As an action, choose one creature you can see within 60 feet of you. You immediately learn whether the creature has any damage immunities, resistances, or vulnerabilities and what they are. If the creature is hidden from divination magic, you sense that it has no damage immunities, resistances, or vulnerabilities.

            You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses of it when you finish a long rest.`,
            levelRequirement: 3,
          },
          {
            name: "Slayer's Prey",
            description: `Starting at 3rd level, you can focus your ire on one foe, increasing the harm you inflict on it. As a bonus action, you designate one creature you can see within 60 feet of you as the target of this feature. The first time each turn that you hit that target with a weapon attack, it takes an extra 1d6 damage from the weapon.

            This benefit lasts until you finish a short or long rest. It ends early if you designate a different creature.`,
            levelRequirement: 3,
          },
          {
            name: "Supernatural Defense",
            description: `At 7th level, you gain extra resilience against your prey’s assaults on your mind and body. Whenever the target of your Slayer’s Prey forces you to make a saving throw and whenever you make an ability check to escape that target's grapple, add 1d6 to your roll.`,
            levelRequirement: 7,
          },
          {
            name: "Magic-User's Nemesis",
            description: `At 11th level, you gain the ability to thwart someone else's magic. When you see a creature casting a spell or teleporting within 60 feet of you, you can use your reaction to try to magically foil it. The creature must succeed on a Wisdom saving throw against your spell save DC, or its spell or teleport fails and is wasted.

            Once you use this feature, you can't use it again until you finish a short or long rest.`,
            levelRequirement: 11,
          },
          {
            name: "Slayer's Counter",
            description: `At 15th level, you gain the ability to counterattack when your prey tries to sabotage you. If the target of your Slayer’s Prey forces you to make a saving throw, you can use your reaction to make one weapon attack against the quarry. You make this attack immediately before making the saving throw. If the attack hits, your save automatically succeeds, in addition to the attack’s normal effects.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Swarmkeeper",
        features: [
          {
            name: "Gathered Swarm",
            description: `At 3rd level, a swarm of intangible nature spirits has bonded itself to you and can assist you in battle. Until you die, the swarm remains in your space, crawling on you or flying and skittering around you within your space. You determine its appearance, or you generate its appearance by rolling on the Swarm Appearance table.

            Swarm Appearance	
            d4	Appearance
            1	Swarming insects
            2	Miniature twig blights
            3	Fluttering birds
            4	Playful pixies
            Once on each of your turns, you can cause the swarm to assist you in one of the following ways, immediately after you hit a creature with an attack:
            
            The attack's target takes 1d6 piercing damage from the swarm.
            The attack's target must succeed on a Strength saving throw against your spell save DC or be moved by the swarm up to 15 feet horizontally in a direction of your choice.
            You are moved by the swarm 5 feet horizontally in a direction of your choice.`,
            levelRequirement: 3,
          },
          {
            name: "Writhing Tide",
            description: `Beginning at 7th level, you can condense part of your swarm into a focused mass that lifts you up. As a bonus action, you gain a flying speed of 10 feet and can hover. This effect lasts for 1 minute or until you are incapacitated.

            You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 7,
          },
          {
            name: "Mighty Swarm",
            description: `At 11th level, your Gathered Swarm grows mightier in the following ways:

            The damage of Gathered Swarm increases to 1d8.
            If a creature fails its saving throw against being moved by the Gathered Swarm, you can also cause the swarm to knock the creature prone.
            When you are moved by Gathered Swarm, it gives you half cover until the start of your next turn.`,
            levelRequirement: 11,
          },
          {
            name: "Swarming Dispersal",
            description: `When you reach 15th level, you can discorporate into your swarm, avoiding danger. When you take damage, you can use your reaction to give yourself resistance to that damage. You vanish into your swarm and then teleport to an unoccupied space that you can see within 30 feet of you, where you reappear with the swarm.

            You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 15,
          },
        ],
      },
      {
        name: "Drakewarden",
        features: [
          {
            name: "Draconic Gift",
            description: `At 3rd level, the bond you share with your drake creates a connection to dragonkind, granting you understanding and empowering your presence.

            You gain the following benefits:
            
            Thaumaturgy. You learn the Thaumaturgy cantrip, which is a ranger spell for you.
            Tongue of Dragons. You learn to speak, read, and write Draconic or one other language of your choice.`,
            levelRequirement: 3,
          },
          {
            name: "Drake Companion",
            description: `At 3rd level, as an action, you can magically summon the drake that is bound to you. It appears in an unoccupied space of your choice within 30 feet of you.

            The drake is friendly to you and your companions, and it obeys your commands. See its game statistics in the accompanying Drake Companion stat block, which uses your proficiency bonus (PB) in several places. Whenever you summon the drake, choose a damage type listed in its Draconic Essence trait. You can determine the cosmetic characteristics of the drake, such as its color, its scale texture, or any visible effect of its Draconic Essence; your choice has no effect on its game statistics.
            
            In combat, the drake shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the drake can take any action of its choice, not just Dodge.
            
            The drake remains until it is reduced to 0 hit points, until you use this feature to summon the drake again, or until you die. Anything the drake was wearing or carrying is left behind when the drake vanishes.
            
            Once you summon the drake, you can’t do so again until you finish a long rest, unless you expend a spell slot of 1st level or higher to summon it.
            
            Drake Companion
            Small dragon
            Armor Class: 14 + PB (natural armor)
            Hit Points: 5 + five times your ranger level (the drake has a number of hit dice [d10s] equal to your ranger level)
            Speed: 40 ft.
            STR 16	DEX 12	CON 15	INT 8	WIS 14	CHA 8
            Saving Throws: Dex +1 plus PB, Wis +2 plus PB
            Damage Immunities: determined by the drake’s Draconic Essence trait
            Senses: darkvision 60 ft., passive Perception 12
            Languages: Draconic
            Challenge: Proficiency Bonus (PB) equals your bonus
            Draconic Essence. When you summon the drake, choose a damage type: acid, cold, fire, lightning, or poison. The chosen type determines the drake’s damage immunity and the damage of its Infused Strikes trait.
            Actions
            Bite. Melee Weapon Attack: +3 plus PB to hit, reach 5 ft., one target. Hit: 1d6 plus PB piercing damage.
            Reactions
            Infused Strikes. When another creature within 30 feet of the drake that it can see hits a target with a weapon attack, the drake infuses the strike with its essence, causing the target to take an extra 1d6 damage of the type determined by its Draconic Essence.`,
            levelRequirement: 3,
          },
          {
            name: "Bond of Fang and Scale",
            description: `At 7th level the bond you share with your drake intensifies, protecting you and stoking the drake’s fury. When you summon your drake, it grows wings on its back and gains a flying speed equal to its walking speed.

            In addition, while your drake is summoned, you and the drake gain the following benefits:
            
            Drake Mount. The drake grows to Medium size. Reflecting your special bond, you can use the drake as a mount if your size is Medium or smaller. While you are riding your drake, it can’t use the flying speed of this feature.
            
            Magic Fang. The drake’s Bite attack deals an extra 1d6 damage of the type chosen for the drake’s Draconic Essence.
            
            Resistance. You gain resistance to the damage type chosen for the drake’s Draconic Essence.`,
            levelRequirement: 7,
          },
          {
            name: "Drake’s Breath",
            description: `At 11th level, as an action, you can exhale a 30-foot cone of damaging breath or cause your drake to exhale it. Choose acid, cold, fire, lightning, or poison damage (your choice doesn’t have to match your drake’s Draconic Essence). Each creature in the cone must make a Dexterity saving throw against your spell save DC, taking 8d6 damage on a failed save, or half as much damage on a successful one.

            This damage increases to 10d6 when you reach 15th level in this class.
            
            Once you use this feature, you can’t do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use it again.`,
            levelRequirement: 11,
          },
          {
            name: "Perfected Bond",
            description: `At 15th level, your bond to your drake reaches the pinnacle of its power. While your drake is summoned, you and the drake gain the following benefits:

            Empowered Bite. The drake’s Bite attack deals an extra 1d6 damage of the type chosen for its Draconic Essence (for a total of 2d6 extra damage).
            
            Large Drake. The drake grows to Large size. When you ride your drake, it is no longer prohibited from using the flying speed of Bond of Fang and Scale.
            
            Reflexive Resistance. When either you or the drake takes damage while you’re within 30 feet of each other, you can use your reaction to give yourself or the drake resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 15,
          },
        ],
      },
    ],
  },
  {
    name: "Rogue",
    hitDice: "d8",
    proficiencies: {
      armor: ["light armor"],
      weapons: [
        "simple weapons",
        "hand crossbows",
        "longbows",
        "longswords",
        "rapiers",
        "shortswords",
      ],
      tools: ["Thieves tools"],
      toolChoices: [
        {
          numberOfChoices: 0,
          choices: [],
        },
      ],
      savingThrows: ["dex", "int"],
      skills: {
        numberOfChoices: 4,
        choices: [
          "Acrobatics",
          "Athletics",
          "Deception",
          "Insight",
          "Intimidation",
          "Investigation",
          "Perception",
          "Performance",
          "Persuasion",
          "Sleight of Hand",
          "Stealth",
        ],
      },
    },
    features: [
      {
        name: "Expertise",
        description: `At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.

        At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit.`,
        levelRequirement: 1,
      },
      {
        name: "Sneak Attack",
        description: `Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.

        You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.
        
        The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.`,
        levelRequirement: 1,
      },
      {
        name: "Thieves' Cant",
        description: `During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.

        In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.`,
        levelRequirement: 1,
      },
      {
        name: "Cunning Action",
        description: `Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.`,
        levelRequirement: 2,
      },
      {
        name: "Roguish Archetype",
        //do choices here!!!!
        description: `At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.`,
        levelRequirement: 3,
      },
      {
        name: "Uncanny Dodge",
        description: `Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.`,
        levelRequirement: 5,
      },
      {
        name: "Evasion",
        description: `Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an Ice Storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`,
        levelRequirement: 7,
      },
      {
        name: "Reliable Talent",
        description: `By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.`,
        levelRequirement: 11,
      },
      {
        name: "Blindsense",
        description: `Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.`,
        levelRequirement: 14,
      },
      {
        name: "Slippery Mind",
        description: `By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.`,
        levelRequirement: 15,
      },
      {
        name: "Elusive",
        description: `Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated.`,
        levelRequirement: 18,
      },
      {
        name: "Stroke of Luck",
        description: `At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.

        Once you use this feature, you can't use it again until you finish a short or long rest.`,
        levelRequirement: 20,
      },
    ],
    subclasses: [
      {
        name: "Arcane Trickster",
        features: [
          {
            name: "Mage Hand Legerdemain",
            description: `Starting at 3rd level, when you cast Mage Hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it:

            You can stow one object the hand is holding in a container worn or carried by another creature.
            You can retrieve an object in a container worn or carried by another creature.
            You can use thieves' tools to pick locks and disarm traps at range.
            You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check.
            
            In addition, you can use the bonus action granted by your Cunning Action to control the hand.`,
            levelRequirement: 3,
          },
          {
            name: "Magical Ambush",
            description: `Starting at 9th level, if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn`,
            levelRequirement: 9,
          },
          {
            name: "Versatile Trickster",
            description: `At 13th level, you gain the ability to distract targets with your Mage Hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn.`,
            levelRequirement: 13,
          },
          {
            name: "Spell Thief",
            description: `At 17th level, you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.

            Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn't need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed.
            
            Once you use this feature, you can't use it again until you finish a long rest.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Assassin",
        features: [
          {
            name: "Bonus Proficiencies",
            description: `When you choose this archetype at 3rd level, you gain proficiency with the disguise kit and the poisoner's kit.`,
            levelRequirement: 3,
          },
          {
            name: "Assassinate",
            description: `Starting at 3rd level, you are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.`,
            levelRequirement: 3,
          },
          {
            name: "Infiltration Expertise",
            description: `Starting at 9th level, you can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can't establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and official- looking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants.

            Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to.`,
            levelRequirement: 9,
          },
          {
            name: "Impostor",
            description: `At 13th level, you gain the ability to unerringly mimic another person's speech, writing, and behavior. You must spend at least three hours studying these three components of the person's behavior, listening to speech, examining handwriting, and observing mannerisms.

            Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection.`,
            levelRequirement: 13,
          },
          {
            name: "Death Strike",
            description: `Starting at 17th level, you become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Inquisitive",
        features: [
          {
            name: "Ear for Deceit",
            description: `When you choose this archetype at 3rd level, you develop a keen ear for picking out lies. Whenever you make a Wisdom (Insight) check to determine whether a creature is lying, treat a roll of 7 or lower on the d20 as an 8.`,
            levelRequirement: 3,
          },
          {
            name: "Eye for Detail",
            description: `Starting at 3rd level, you can use a bonus action to make a Wisdom (Perception) check to spot a hidden creature or object or to make an Intelligence (Investigation) check to uncover or decipher clues.`,
            levelRequirement: 3,
          },
          {
            name: "Insightful Fighting",
            description: `At 3rd level, you gain the ability to decipher an opponent's tactics and develop a counter to them. As a bonus action, you make a Wisdom (Insight) check against a creature you can see that isn't incapacitated, contested by the target's Charisma (Deception) check. If you succeed, you can use your Sneak Attack against that target even if you don't have advantage on the attack roll, but not if you have disadvantage on it.

            This benefit lasts for 1 minute or until you successfully use this feature against a different target.`,
            levelRequirement: 3,
          },
          {
            name: "Steady Eye",
            description: `At 9th level, you gain advantage on any Wisdom (Perception) or Intelligence (Investigation) check if you move no more than half your speed on the same turn.`,
            levelRequirement: 9,
          },
          {
            name: "Unerring Eye",
            description: `At 13th level, your senses are almost impossible to foil. As an action, you sense the presence of illusions, shapechangers not in their original form, and other magic designed to deceive the senses within 30 feet of you, provided you aren't blinded or deafened. You sense that an effect is attempting to trick you, but you gain no insight into what is hidden or into its true nature.

            You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.`,
            levelRequirement: 13,
          },
          {
            name: "Eye for Weakness",
            description: `At 17th level, you learn to exploit a creature's weaknesses by carefully studying its tactics and movement. While your Insightful Fighting feature applies to a creature, your Sneak Attack damage against that creature increases by 3d6.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Mastermind",
        features: [
          {
            name: "Master of Intrigue",
            description: `When you choose this archetype at 3rd level, you gain proficiency with the disguise kit, the forgery kit, and one gaming set of your choice. You also learn two languages of your choice.

            Additionally, you can unerringly mimic the speech patterns and accent of a creature that you hear speak for at least 1 minute, enabling you to pass yourself off as a native speaker of a particular land, provided that you know the language.`,
            levelRequirement: 3,
          },
          {
            name: "Master of Tactics",
            description: `Starting at 3rd level, you can use the Help action as a bonus action. Additionally, when you use the Help action to aid an ally in attacking a creature, the target of that attack can be within 30 feet of you, rather than 5 feet of you, if the target can see or hear you.`,
            levelRequirement: 3,
          },
          {
            name: "Insightful Manipulator",
            description: `Starting at 9th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:

            Intelligence score
            Wisdom score
            Charisma score
            Class levels (if any)
            At the DM's option, you might also realize you know a piece of the creature's history or one of its personality traits, if it has any.`,
            levelRequirement: 9,
          },
          {
            name: "Misdirection",
            description: `Beginning at 13th level, you can sometimes cause another creature to suffer an attack meant for you. When you are targeted by an attack while a creature within 5 feet of you is granting you cover against that attack, you can use your reaction to have the attack target that creature instead of you.`,
            levelRequirement: 13,
          },
          {
            name: "Soul of Deceit",
            description: `Starting at 17th level, your thoughts can't be read by telepathy or other means, unless you allow it. You can present false thoughts by making a Charisma (Deception) check contested by the mind reader's Wisdom (Insight) check.

            Additionally, no matter what you say, magic that would determine if you are telling the truth indicates you are being truthful if you so choose, and you can't be compelled to tell the truth by magic.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Phantom",
        features: [
          {
            name: "Whispers of the Dead",
            description: `When you choose this archetype at 3rd level, echoes of those who have died cling to you. Whenever you finish a short or long rest, you can gain one skill or tool proficiency of your choice, as a ghostly presence shares its knowledge with you. You lose this proficiency when you use this feature to choose a different proficiency that you lack.`,
            levelRequirement: 3,
          },
          {
            name: "Wails from the Grave",
            description: `At 3rd level, as you nudge someone closer to the grave, you can channel the power of death to harm someone else as well. Immediately after you deal your Sneak Attack damage to a creature on your turn, you can target a second creature that you can see within 30 feet of the first creature. Roll half the number of Sneak Attack dice for your level (round up), and the second creature takes necrotic damage equal to the roll's total, as wails of the dead sound around them for a moment.

            You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
            levelRequirement: 3,
          },
          {
            name: "Tokens of the Departed",
            description: `At 9th level, when a life ends in your presence, you're able to snatch a token from the departing soul, a sliver of its life essence that takes physical form: as a reaction when a creature you can see dies within 30 feet of you, you can open your free hand and cause a Tiny trinket to appear there, a soul trinket. The DM determines the trinket's form or has you roll on the Trinkets table in the Player's Handbook to generate it.

            You can have a maximum number of soul trinkets equal to your proficiency bonus, and you can't create one while at your maximum.
            
            You can use soul trinkets in the following ways:
            
            While a soul trinket is on your person, you have advantage on death saving throws and Constitution saving throws, for your vitality is enhanced by the life essence within the object.
            When you deal Sneak Attack damage on your turn, you can destroy one of your soul trinkets that's on your person and then immediately use Wails from the Grave, without expending a use of that feature.
            As an action, you can destroy one of your soul trinkets, no matter where it's located. When you do so, you can ask the spirit associated with the trinket one question. The spirit appears to you and answers in a language it knew in life. It's under no obligation to be truthful, and it answers as concisely as possible, eager to be free. The spirit knows only what it knew in life, as determined by the DM.`,
            levelRequirement: 9,
          },
          {
            name: "Ghost Walk",
            description: `At 13th level, you can phase partially into the realm of the dead, becoming like a ghost. As a bonus action, you assume a spectral form. While in this form, you have a flying speed of 10 feet, you can hover, and attack rolls have disadvantage against you. You can also move through creatures and objects as if they were difficult terrain, but you take 1d10 force damage if you end your turn inside a creature or an object.

            You stay in this form for 10 minutes or until you end it as a bonus action. To use this feature again, you must finish a long rest or destroy one of your soul trinkets as part of the bonus action you use to activate Ghost Walk.`,
            levelRequirement: 13,
          },
          {
            name: "Death Knell",
            description: `At 17th level, your association with death has become so close that you gain the following benefits:

            When you use your Wails from the Grave, you can now deal the necrotic damage to both the first and the second creature.
            At the end of a long rest, a soul trinket appears in your hand if you don't have any soul trinkets, as the spirits of the dead are drawn to you.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Scout",
        features: [
          {
            name: "Skirmisher",
            description: `Starting at 3rd level, you are difficult to pin down during a fight. You can move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn’t provoke opportunity attacks.`,
            levelRequirement: 3,
          },
          {
            name: "Survivalist",
            description: `When you choose this archetype at 3rd level, you gain proficiency in the Nature and Survival skills if you don't already have it. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies.`,
            levelRequirement: 3,
          },
          {
            name: "Superior Mobility",
            description: `At 9th level, your walking speed increases by 10 feet. If you have a climbing or swimming speed, this increase applies to that speed as well.`,
            levelRequirement: 9,
          },
          {
            name: "Ambush Master",
            description: `Starting at 13th level, you excel at leading ambushes and acting first in a fight.

            You have advantage on initiative rolls. In addition, the first creature you hit during the first round of a combat becomes easier for you and others to strike; attack rolls against that target have advantage until the start of your next turn.`,
            levelRequirement: 13,
          },
          {
            name: "Sudden Strike",
            description: `Starting at 17th level, you can strike with deadly speed. If you take the Attack action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but you can't use your Sneak Attack against the same target more than once in a turn.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Soulknife",
        features: [
          {
            name: "Psionic Power",
            description: `Starting at 3rd level, you harbor a wellspring of psionic energy within yourself. This energy is represented by your Psionic Energy dice, which are each a d6. You have a number of these dice equal to twice your proficiency bonus, and they fuel various psionic powers you have, which are detailed below.

            Some of your powers expend the Psionic Energy die they use, as specified in a power's description, and you can't use a power if it requires you to use a die when your dice are all expended. You regain all your expended Psionic Energy dice when you finish a long rest. In addition, as a bonus action, you can regain one expended Psionic Energy die, but you can't do so again until you finish a short or long rest.
            
            When you reach certain levels in this class, the size of your Psionic Energy dice increases: at 5th level (d8), 11th level (d10), and 17th level (d12).
            
            The powers below use your Psionic Energy dice.
            
            Psi-Bolstered Knack. When your nonpsionic training fails you, your psionic power can help: if you fail an ability check using a skill or tool with which you have proficiency, you can roll one Psionic Energy die and add the number rolled to the check, potentially turning failure into success. You expend the die only if the roll succeeds.
            
            Psychic Whispers. You can establish telepathic communication between yourself and others — perfect for quiet infiltration. As an action, choose one or more creatures you can see, up to a number of creatures equal to your proficiency bonus, and then roll one Psionic Energy die. For a number of hours equal to the number rolled, the chosen creatures can speak telepathically with you, and you can speak telepathically with them. To send or receive a message (no action required), you and the other creature must be within 1 mile of each other. A creature can't use this telepathy if it can't speak any languages, and a creature can end the telepathic connection at any time (no action required). You and the creature don't need to speak a common language to understand each other.
            
            The first time you use this power after each long rest, you don't expend the Psionic Energy die. All other times you use the power, you expend the die.`,
            levelRequirement: 3,
          },
          {
            name: "Psychic Blades",
            description: `Also at 3rd level, You can manifest your psionic power as shimmering blades of psychic energy. Whenever you take the Attack action, you can manifest a psychic blade from your free hand and make the attack with that blade. This magic blade is a simple melee weapon with the finesse and thrown properties. It has a normal range of 60 feet and no long range, and on a hit, it deals psychic damage equal to 1d6 plus the ability modifier you used for the attack roll. The blade vanishes immediately after it hits or misses its target, and it leaves no mark on its target if it deals damage.

            After you attack with the blade, you can make a melee or ranged weapon attack with a second psychic blade as a bonus action on the same turn, provided your other hand is free to create it. The damage die of this bonus attack is 1d4, instead of 1d6.`,
            levelRequirement: 3,
          },
          {
            name: "Soul Blades",
            description: `Starting at 9th level, your Psychic Blades are now an expression of your psi-suffused soul, giving you these powers that use your Psionic Energy dice:

            Homing Strikes. If you make an attack roll with your Psychic Blades and miss the target, you can roll one Psionic Energy die and add the number rolled to the attack roll. If this causes the attack to hit, you expend the Psionic Energy die.
            
            Psychic Teleportation. As a bonus action, you manifest one of your Psychic Blades, expend one Psionic Energy die and roll it, and throw the blade at an unoccupied space you can see, up to a number of feet away equal to 10 times the number rolled. You then teleport to that space, and the blade vanishes.`,
            levelRequirement: 9,
          },
          {
            name: "Psychic Veil",
            description: `At 13th level, you can weave a veil of psychic static to mask yourself. As an action, you can magically become invisible, along with anything you are wearing or carrying, for 1 hour or until you dismiss this effect (no action required). This invisibility ends early immediately after you deal damage to a creature, or you force a creature to make a saving throw.

            Once you use this feature, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to use this feature again.`,
            levelRequirement: 13,
          },
          {
            name: "Rend Mind",
            description: `When you reach 17th level, you can sweep your Psychic Blade directly through a creature's mind. When you use your Psychic Blades to deal Sneak Attack damage to a creature, you can force that target to make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Dexterity modifier). If the save fails, the target is stunned for 1 minute. The stunned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

            Once you use this feature, you can't do so again until you finish a long rest, unless you expend three Psionic Energy dice to use it again`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Swashbuckler",
        features: [
          {
            name: "Fancy Footwork",
            description: `When you choose this archetype at 3rd level, you learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.`,
            levelRequirement: 3,
          },
          {
            name: "Rakish Audacity",
            description: `Starting at 3rd level, your confidence propels you into battle. You can give yourself a bonus to your initiative rolls equal to your Charisma modifier.

            You also gain an additional way to use your Sneak Attack; you don't need advantage on the attack roll to use your Sneak Attack against a creature if you are within 5 feet of it, no other creatures are within 5 feet of you, and you don't have disadvantage on the attack roll. All the other rules for Sneak Attack still apply to you.`,
            levelRequirement: 3,
          },
          {
            name: "Panache",
            description: `At 9th level, your charm becomes extraordinarily beguiling. As an action, you can make a Charisma (Persuasion) check contested by a creature's Wisdom (Insight) check. The creature must be able to hear you, and the two of you must share a language.

            If you succeed on the check and the creature is hostile to you, it has disadvantage on attack rolls against targets other than you and can't make opportunity attacks against targets other than you. This effect lasts for 1 minute, until one of your companions attacks the target or affects it with a spell, or until you and the target are more than 60 feet apart.
            
            If you succeed on the check and the creature isn't hostile to you, it is charmed by you for 1 minute. While charmed, it regards you as a friendly acquaintance. This effect ends immediately if you or your companions do anything harmful to it.`,
            levelRequirement: 9,
          },
          {
            name: "Elegant Maneuver",
            description: `Starting at 13th level, you can use a bonus action on your turn to gain advantage on the next Dexterity (Acrobatics) or Strength (Athletics) check you make during the same turn.`,
            levelRequirement: 13,
          },
          {
            name: "Master Duelist",
            description: `Beginning at 17th level, your mastery of the blade lets you turn failure into success in combat. If you miss with an attack roll, you can roll it again with advantage. Once you do so, you can't use this feature again until you finish a short or long rest.`,
            levelRequirement: 17,
          },
        ],
      },
      {
        name: "Thief",
        features: [
          {
            name: "Fast Hands",
            description: `Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.`,
            levelRequirement: 3,
          },
          {
            name: "Second-Story Work",
            description: `When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.

            In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.`,
            levelRequirement: 3,
          },
          {
            name: "Supreme Sneak",
            description: `Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.`,
            levelRequirement: 9,
          },
          {
            name: "Use Magic Device",
            description: `By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.`,
            levelRequirement: 13,
          },
          {
            name: "Thief's Reflexes",
            description: `When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.`,
            levelRequirement: 17,
          },
        ],
      },
    ],
  },
  //CONTINUE HERE WITH SORCERER
  {
    name: "",
    hitDice: "",
    proficiencies: {
      armor: [],
      weapons: [],
      tools: [],
      toolChoices: [
        {
          numberOfChoices: 3,
          choices: [],
        },
      ],
      savingThrows: ["", ""],
      skills: {
        numberOfChoices: 3,
        choices: [],
      },
    },
    features: [
      {
        name: "",
        description: ``,
        levelRequirement: 1,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 2,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 2,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 3,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 5,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 6,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 10,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 20,
      },
    ],
    subclasses: [
      {
        name: "",
        features: [
          {
            name: "",
            description: ``,
            levelRequirement: 3,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 3,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 3,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 6,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 14,
          },
        ],
      },
    ],
  },
  {
    name: "",
    hitDice: "",
    proficiencies: {
      armor: [],
      weapons: [],
      tools: [],
      toolChoices: [
        {
          numberOfChoices: 3,
          choices: [],
        },
      ],
      savingThrows: ["", ""],
      skills: {
        numberOfChoices: 3,
        choices: [],
      },
    },
    features: [
      {
        name: "",
        description: ``,
        levelRequirement: 1,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 2,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 2,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 3,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 5,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 6,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 10,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 20,
      },
    ],
    subclasses: [
      {
        name: "",
        features: [
          {
            name: "",
            description: ``,
            levelRequirement: 3,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 3,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 3,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 6,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 14,
          },
        ],
      },
    ],
  },
  {
    name: "",
    hitDice: "",
    proficiencies: {
      armor: [],
      weapons: [],
      tools: [],
      toolChoices: [
        {
          numberOfChoices: 3,
          choices: [],
        },
      ],
      savingThrows: ["", ""],
      skills: {
        numberOfChoices: 3,
        choices: [],
      },
    },
    features: [
      {
        name: "",
        description: ``,
        levelRequirement: 1,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 2,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 2,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 3,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 5,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 6,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 10,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 20,
      },
    ],
    subclasses: [
      {
        name: "",
        features: [
          {
            name: "",
            description: ``,
            levelRequirement: 3,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 3,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 3,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 6,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 14,
          },
        ],
      },
    ],
  },
  {
    name: "",
    hitDice: "",
    proficiencies: {
      armor: [],
      weapons: [],
      tools: [],
      toolChoices: [
        {
          numberOfChoices: 3,
          choices: [],
        },
      ],
      savingThrows: ["", ""],
      skills: {
        numberOfChoices: 3,
        choices: [],
      },
    },
    features: [
      {
        name: "",
        description: ``,
        levelRequirement: 1,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 2,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 2,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 3,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 5,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 6,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 10,
      },
      {
        name: "",
        description: ``,
        levelRequirement: 20,
      },
    ],
    subclasses: [
      {
        name: "",
        features: [
          {
            name: "",
            description: ``,
            levelRequirement: 3,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 3,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 3,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 6,
          },
          {
            name: "",
            description: ``,
            levelRequirement: 14,
          },
        ],
      },
    ],
  },
];
const seedDB = async () => {
  await Character.deleteMany({});
  await Character.insertMany(seed);
  await Class.deleteMany({});
  await Class.insertMany(seedClasses);
};

mongoose
  .connect("mongodb://127.0.0.1:27017/DND")
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((err) => console.log(err));

seedDB().then(() => {
  mongoose.connection.close();
});
