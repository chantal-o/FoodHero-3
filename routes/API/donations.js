const express = require("express");
const router = express.Router();
const inventory = require("../../controllers/inventorycontroller")


router.post("/", (req,res) => {
inventory.create(req,res)
}
)
router.get("/", (req, res) => {

    inventory.findAll(req, res)});

router.get("/:id", (req, res) => {

  inventory.findById(req, res)});

    module.exports = router;