const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Get the token from the header

  if (!token) {
    return res.status(403).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = decoded; // Attach decoded token data (e.g., user ID) to the request object
    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = verifyToken;
