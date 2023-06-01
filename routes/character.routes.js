const router = require("express").Router();
const Character = require("../models/Character.model");

router.get("/", async (req, res) => {
  try {
    const allCharacters = await Character.find();
    res.status(201).json(allCharacters);
  } catch (error) {
    if (error.code === 11000) {
      res.status.json({ message });
    }
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Character.findById(id);
    res.status(201).json(character);
  } catch (error) {
    if (error.code === 11000) {
      res.status.json({ message });
    }
  }
});

module.exports = router;
