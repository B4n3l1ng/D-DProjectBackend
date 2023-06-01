const Class = require("../models/Class.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const allClasses = await Class.find();
    /* console.log(allClasses[0].subclasses); */
    res.status(200).json(allClasses);
  } catch (error) {
    /* console.log(error); */
    res.status.json({ message });
  }
});

module.exports = router;
