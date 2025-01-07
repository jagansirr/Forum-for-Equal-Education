const express = require("express");
const router = express.Router();
const donationController = require("../controllers/donationController");
const { createDonation } = require("../controllers/donationController");
const { fetchDonations } = require("../controllers/donationController");

const Donation = require("../models/Donation");

// Route to create a new donation
router.post("/", createDonation);
router.get("/", fetchDonations);

router.get('/donations', async (req, res) => {
    try {
        const donations = await Donation.find(); // Assuming a Donation model exists
        res.status(200).json(donations);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch donations' });
    }
});
router.put('/donations/:id/verify', async (req, res) => {
    try {
        const { id } = req.params;
        const donation = await Donation.findByIdAndUpdate(
            id,
            { verified: true },
            { new: true }
        );
        if (!donation) {
            return res.status(404).json({ error: 'Donation not found' });
        }
        res.status(200).json(donation);
    } catch (err) {
        res.status(500).json({ error: 'Failed to verify donation' });
    }

    router.post("/", donationController.createDonation);
router.get("/", donationController.fetchDonations);
router.put("/:id/verify", donationController.verifyDonation);

});



module.exports = router;
