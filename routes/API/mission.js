const express = require("express");
const router = express.Router();
const mission = require("../../controllers/missioncontroller")


router.post("/", (req,res) => {
mission.create(req,res)
}
)
router.get("/", (req, res) => {

    mission.findAll(req, res)});

router.get("/:id", (req, res) => {

  mission.findById(req, res)});

    module.exports = router;