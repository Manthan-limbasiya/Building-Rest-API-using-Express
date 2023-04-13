const express = require("express");
const {
  addMens,
  getMens,
  getMen,
  updateMens,
  deleteMens,
} = require("../../controllers/mens");

const router = express.Router();

router.post("/mens", addMens);

router.get("/mens", getMens);

router.get("/mens/:id", getMen);

router.patch("/mens/:id", updateMens);

router.delete("/mens/:id", deleteMens);

module.exports = router;
