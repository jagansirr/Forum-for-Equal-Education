import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

import rightSideImage from "../images/feee.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        formData
      );

      console.log("Signup Response:", response.data);
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      setErrors({});
      navigate("/signin");
    } catch (error) {
      if (
        error.response?.status === 400 &&
        error.response?.data?.message === "Email already registered."
      ) {
        navigate("/signin");
      } else {
        setErrors({
          apiError: error.response?.data?.message || "Signup failed",
        });
      }
    }
  };

  const FooterSection = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Higher Education in India.by: <b>RAjAt kUmAr mAhAtA . </b>All rights reserved.</p>
    </div>
  </footer>
);

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="relative flex bg-white rounded-lg shadow-lg overflow-hidden w-4/5 max-w-3xl">
        {/* Left Side - Form */}
        <div className="w-2/3 p-3 relative z-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">
              🪶📖Register📖🪶
          </h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="block text-sm font-bold mb-2 text-teal-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 text-teal-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 text-teal-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 text-teal-700">
               [ Confirm Password ]
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {errors.apiError && (
              <p className="text-red-500 text-sm">{errors.apiError}</p>
            )}
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white py-4 rounded hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>
        </div>

        {/* Right Side - Image Overlap with Blur */}
        <div className="absolute -right-5 w-1/2 h-full">
          <img
            src={rightSideImage}
            alt="Join Us"
            className="h-full object-cover rounded-r-lg"
          />
          <div className="absolute inset-0 bg-red bg-opacity-20 blur-xl"></div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Register;
