const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
  },
  level: {
    type: Number,
    enum: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    required: [true, "Level is required"],
  },
  race: {
    type: String,
    required: [true],
  },
  class: {
    type: String,
    required: [true],
  },
  subclass: {
    type: String,
    required: [true],
  },
  profBonus: {
    type: Number,
    required: [true, "Proficiency bonus is required"],
  },
  speed: {
    type: Number,
    required: [true],
  },
  str: {
    type: Number,
    required: [true, "Strength score is required"],
  },
  strMod: {
    type: Number,
    required: true,
  },
  strSaveProf: {
    type: Boolean,
    required: [true],
  },
  dex: {
    type: Number,
    required: [true, "Dexterity score is required"],
  },
  dexMod: {
    type: Number,
    required: [true],
  },
  dexSaveProf: {
    type: Boolean,
    required: [true],
  },
  con: {
    type: Number,
    required: [true, "Constitution score is required"],
  },
  conMod: {
    type: Number,
    required: [true],
  },
  conSaveProf: {
    type: Boolean,
    required: [true],
  },
  int: {
    type: Number,
    required: [true, "Intelligence score is required"],
  },
  intMod: {
    type: Number,
    required: [true],
  },
  intSaveProf: {
    type: Boolean,
    required: [true],
  },
  wis: {
    type: Number,
    required: [true, "Wisdom score is required"],
  },
  wisMod: {
    type: Number,
    required: [true],
  },
  wisSaveProf: {
    type: Boolean,
    required: [true],
  },
  cha: {
    type: Number,
    required: [true, "Charisma score is required"],
  },
  chaMod: {
    type: Number,
    required: [true],
  },
  chaSaveProf: {
    type: Boolean,
    required: [true],
  },
  armorClass: {
    type: Number,
    required: [true],
  },
  acrobatics: {
    type: Number,
    required: [true],
  },
  animalHandling: {
    type: Number,
    required: [true],
  },
  arcana: {
    type: Number,
    required: [true],
  },
  athletics: {
    type: Number,
    required: [true],
  },
  deception: {
    type: Number,
    required: [true],
  },
  history: {
    type: Number,
    required: [true],
  },
  insight: {
    type: Number,
    required: [true],
  },
  intimidation: {
    type: Number,
    required: [true],
  },
  investigation: {
    type: Number,
    required: [true],
  },
  medicine: {
    type: Number,
    required: [true],
  },
  nature: {
    type: Number,
    required: [true],
  },
  perception: {
    type: Number,
    required: [true],
  },
  performance: {
    type: Number,
    required: [true],
  },
  persuasion: {
    type: Number,
    required: [true],
  },
  religion: {
    type: Number,
    required: [true],
  },
  sleightOfHand: {
    type: Number,
    required: [true],
  },
  stealth: {
    type: Number,
    required: [true],
  },
  survival: {
    type: Number,
    required: [true],
  },
  /* creator: { type: Schema.Types.ObjectId, ref: 'User' } */
});

const Character = model("Character", characterSchema);

module.exports = Character;
