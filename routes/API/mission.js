const express = require("express");
const router = express.Router();

router.post("/mission", (req, res) => {

  mission.findByID({ email: req.body.id }).then(mission => {
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
