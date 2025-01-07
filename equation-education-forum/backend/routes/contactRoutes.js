const express = require("express");
const router = express.Router();
const { submitContactForm, getContactMessages } = require("../controllers/contactController");
const { protect, authorize } = require("../middleware/authMiddleware");
//const { getContactMessages } = require("../controllers/contactController");


// Submit Contact Form
router.post("/", submitContactForm);

// Get All Contact Messages (Admin only)
router.get("/", protect, authorize(["admin"]), getContactMessages);

router.get("/protected", protect, (req, res) => {
    res.json({ message: "You have accessed a protected route!" });
  });
module.exports = router;
