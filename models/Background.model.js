const { Schema, model } = require("mongoose");

const backgroundSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  skillProficiencies: [
    {
      type: String,
    },
  ],
  skillProficiencyOptions: {
    numberOfChoices: {
      type: Number,
    },
    choices: [{ type: String }],
  },
  toolProficiencies: [
    {
      type: String,
    },
  ],
  toolProficiencyOptions: {
    numberOfChoices: {
      type: Number,
    },
    choices: [{ type: String }],
  },
  languages: [
    {
      type: String,
    },
  ],
  languageOptions: {
    numberOfChoices: {
      type: Number,
    },
    choices: [{ type: String }],
  },
  features: {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
});

const Class = model("Class", classSchema);
module.exports = Class;
