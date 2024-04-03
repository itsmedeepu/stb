const express = require("express");

const router = express.Router();

//cotrollers

const {
  Register,
  UpdateData,
  getAllStbs,
} = require("../controllers/stbcontroller");

router.get("/home", (req, res) => {
  res.send("im working fine");
});

router.post("/register", Register);
router.post("/update/:stbid", UpdateData);
router.get("/getstbs", getAllStbs);
module.exports = router;
