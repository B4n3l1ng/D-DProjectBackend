const { Schema, model } = require("mongoose");

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hitDice: {
    type: String,
  },
  proficiencies: {
    armor: [
      {
        type: String,
      },
    ],
    weapons: [
      {
        type: String,
      },
    ],
    tools: [
      {
        type: String,
      },
    ],
    toolChoices: [
      {
        numberOfChoices: Number,
        choices: [String],
      },
    ],
    savingThrows: [
      {
        type: String,
      },
    ],
    skills: {
      numberOfChoices: Number,
      choices: [
        {
          type: String,
        },
      ],
    },
  },
  features: [
    {
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      levelRequirement: {
        type: Number,
      },
    },
  ],
  subclasses: [
    {
      name: {
        type: String,
      },
      features: [
        {
          name: {
            type: String,
          },
          description: {
            type: String,
          },
          levelRequirement: {
            type: Number,
          },
        },
      ],
    },
  ],
});

const Class = model("Class", classSchema);
module.exports = Class;
