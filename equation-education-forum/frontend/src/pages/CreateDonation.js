// Refined CreateDonation.js File
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import paypal from "../images/paypalqrcode.png"
import ImpactImage from "../images/Donate.jpeg";
import DonationImage2 from "../images/donation.jpg";
import axios from "axios";

function CreateDonationPage() {
  const navigate = useNavigate();

  // Form State
  const [form, setForm] = useState({
    amount: "",
    recurring: false,
    project: "",
    paymentMethod: "PayPal", // Default payment option
  });

  const [errors, setErrors] = useState({}); // Error tracking

  // Handle Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // Validate Inputs
  const validateForm = () => {
    const newErrors = {};

    if (!form.amount || form.amount <= 0) {
      newErrors.amount = "Please enter a valid donation amount greater than $0.";
    }

    if (!form.paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Send donation details to the backend
      const response = await axios.post("http://localhost:5000/api/donations", form);

      alert("Donation request submitted successfully!");

      // Navigate to PayPal payment if applicable
      if (form.paymentMethod === "PayPal" && response.data.paypalOrderId) {
        const orderId = response.data.paypalOrderId; // Backend returns PayPal order ID
        window.location.href = `https://www.paypal.com/checkoutnow?token=${orderId}`;
        return;
      }

      // Redirect to thank-you page
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting donation:", error.response?.data || error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-orange-500 text-white py-16 px-8 text-center">
        <div className="absolute inset-0">
          <img
            src={DonationImage2}
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Help Us Empower Underprivileged Communities
          </h1>
          <p className="text-lg">
            Your donation will provide essential education and life skills
            training to children in need.
          </p>
          <button
            onClick={() =>
              document.getElementById("donation-form").scrollIntoView()
            }
            className="mt-6 bg-white text-orange-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-200"
          >
            Donate Now
          </button>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 px-8 text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">Our Impact</h2>
        <p className="text-lg mb-8">
          Your contributions directly support our programs that educate and
          empower thousands of children and families.
        </p>
        <img
          src={ImpactImage}
          alt="Impact"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
        />
      </section>

      {/* Donation Form Section */}
      <section
        id="donation-form"
        className="bg-white py-12 px-8 shadow-lg rounded-lg max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Make a Donation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Donation Amount */}
          <div>
            <label className="block mb-2 font-medium">Donation Amount ($)</label>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              value={form.amount}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
              min="1"
            />
            {errors.amount && <p className="text-red-500 mt-2">{errors.amount}</p>}
          </div>

          {/* Recurring Donation */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="recurring"
              id="recurring"
              checked={form.recurring}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="recurring" className="font-medium">
              Make this a monthly donation
            </label>
          </div>

          {/* Dedicated Project */}
          <div>
            <label className="block mb-2 font-medium">
              Dedicate Donation to a Project
            </label>
            <select
              name="project"
              value={form.project}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select a project</option>
              <option value="Education for Children">Education for Children</option>
              <option value="Healthcare Support">Healthcare Support</option>
              <option value="Clean Water Initiative">Clean Water Initiative</option>
            </select>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block mb-2 font-medium">Payment Method</label>
            <div className="flex items-center space-x-4">
              <img src={ paypal} alt="PayPal" className="h-8" />
              <span className="font-medium">PayPal</span>
            </div>
            {errors.paymentMethod && (
              <p className="text-red-500 mt-2">{errors.paymentMethod}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600"
          >
            Donate Now
          </button>
        </form>
      </section>

      {/* Call-to-Action */}
      <section className="text-center py-8">
        <h3 className="text-xl font-medium">
          Every donation makes a difference in someone’s life.
        </h3>
        <p className="text-gray-600">Thank you for supporting our mission!</p>
      </section>
      <Footer />
    </div>
  );
}

export default CreateDonationPage;
