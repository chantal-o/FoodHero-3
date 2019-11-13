const express = require("express");
const router = express.Router();
const mission = require("../../controllers/missioncontroller")


router.post("/mission", (req,res) => {
mission.create().then(mission => {
console.log (mission);
})
}
)
router.get("/mission", (req, res) => {

    mission.findAll({}).then(missions => {
        if (mission) {
          return res.status(400).json({mission: "Mission does not exist"});
        } else { res.json(missions);

      }})});

router.get("/mission/:id", (req, res) => {

  mission.findById({ mission: req.body.id }).then(mission => {
      if (mission) {
        return res.status(400).json({ email: "Mission does not exist" });
      } else {
        const missionData = new missionData({
            itemname: req.body.itemname,
            quantity: req.body.quantity,
            description: req.body.description,  
            donorname: req.body.donorname,
            volunteername: req.body.volunteername,
            recipientname: req.body.recipientname,
            date: req.body.date
        });
    }})});

    module.exports = router;