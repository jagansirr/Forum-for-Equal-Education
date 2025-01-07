// Donation Controller (Optimized and Cleaned)
const Donation = require("../models/Donation");
const paypalClient = require("../config/paypal");

// Create Donation
exports.createDonation = async (req, res) => {
    try {
        const { amount, recurring, project, paymentMethod } = req.body;

        // Validate input
        if (!amount || !paymentMethod) {
            return res.status(400).json({ error: "Amount and payment method are required." });
        }

        // Save donation details in the database
        const donation = await Donation.create({ amount, recurring, project, paymentMethod });

        // If PayPal is the payment method, create a PayPal order
        if (paymentMethod === "PayPal") {
            const request = new paypalClient.orders.OrdersCreateRequest();
            request.prefer("return=representation");
            request.requestBody({
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            currency_code: "USD",
                            value: amount,
                        },
                    },
                ],
            });

            const order = await paypalClient.execute(request);

            return res.status(201).json({
                message: "Donation created successfully",
                donation,
                paypalOrderId: order.result.id, // Return PayPal order ID to frontend
            });
        }

        res.status(201).json({ message: "Donation created successfully", donation });
    } catch (error) {
        console.error("Error creating donation:", error);
        res.status(500).json({ error: "An error occurred while processing the donation." });
    }
};

// Fetch Donations
exports.fetchDonations = async (req, res) => {
    try {
        const donations = await Donation.findAll(); // Retrieve all donations from the database
        res.status(200).json(donations);
    } catch (error) {
        console.error("Error fetching donations:", error);
        res.status(500).json({ error: "Failed to fetch donations" });
    }
};

// Verify Donation
exports.verifyDonation = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Donation.update(
            { verified: true },
            { where: { id } }
        );

        if (!updated) {
            return res.status(404).json({ error: "Donation not found" });
        }

        res.status(200).json({ message: "Donation verified successfully" });
    } catch (error) {
        console.error("Error verifying donation:", error);
        res.status(500).json({ error: "Failed to verify donation" });
    }
};
