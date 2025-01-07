const Contact = require("../models/Contact");
const { protect, authorize } = require("../middleware/authMiddleware");


// Submit Contact Form
exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Input validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: "Name, email, and message are required" });
        }

        const contact = await Contact.create({ name, email, phone, message });
        res.status(201).json({ message: "Contact form submitted successfully", contact });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error submitting contact form" });
    }
};

// Get All Contact Messages (Admin only)
exports.getContactMessages = async (req, res) => {
    try {
      const messages = await Contact.find(); // Example database query
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
