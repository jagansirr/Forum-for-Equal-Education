const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const db = require("../database/connection"); // Assuming MySQL connection
console.log("EMAIL:", process.env.EMAIL);
console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD ? "Loaded" : "Not Loaded");


// Environment variables for JWT and email
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const EMAIL = process.env.EMAIL || 'your_email@example.com';
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || 'your_email_password';

// Signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const [existingUser] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user in database
    await db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Signin
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user[0].id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Signed in successfully!', token });
  } catch (error) {
    console.error('Error during signin:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if user exists
    const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    if (user.length === 0) {
      return res.status(404).json({ message: 'Email address not found.' });
    }

    // Generate reset token
    const resetToken = Math.random().toString(36).substr(2);

    // Save reset token in database
    await db.execute("UPDATE users SET reset_token = ? WHERE email = ?", [resetToken, email]);

    // Send reset email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Password Reset Request',
      text: `Use this token to reset your password: ${resetToken}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Password reset email sent successfully.' });
  } catch (error) {
    console.error('Error in forgotPassword:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res.status(400).json({ message: 'Token and password are required.' });
    }

    // Check if the token exists in the database
    const [user] = await db.execute("SELECT * FROM users WHERE reset_token = ?", [token]);
    if (user.length === 0) {
      return res.status(404).json({ message: 'Invalid or expired token.' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the password and clear the reset token
    await db.execute("UPDATE users SET password = ?, reset_token = NULL WHERE reset_token = ?", [hashedPassword, token]);

    res.status(200).json({ message: 'Password reset successfully.' });
  } catch (error) {
    console.error('Error during resetPassword:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
