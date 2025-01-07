const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
console.log('Resolved path:', require.resolve('../controllers/userController'));


const { signup, signin, forgotPassword, resetPassword } =  require("../controllers/userController");

const verifyToken = require("../middleware/authMiddleware");

// Public Routes
router.post("/signup", userController.signup);
router.post("/signin",userController.signin);

router.post('/forgot-password', userController.forgotPassword);
router.post("/reset-password", userController.resetPassword);
// Protected Routes (Example)
router.get("/protected", verifyToken, (req, res) => {
  res.status(200).json({ message: "Access granted to protected route!", user: req.user });
});

module.exports = router;
