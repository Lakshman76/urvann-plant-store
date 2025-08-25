const express = require("express");
const router = express.Router();
const { getAllPlants, addNewPlant } = require("../controllers/plantController");

router.get("/", getAllPlants);
router.post("/", addNewPlant);

module.exports = router;