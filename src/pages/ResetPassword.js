import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    token: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResetPassword = async () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Send reset request to backend
      const response = await axios.post('http://localhost:5000/api/users/reset-password', {
        token: formData.token,
        password: formData.password,
      });

      setMessage(response.data.message);
      setError('');
      
      // Redirect to home page after successful reset
      setTimeout(() => {
        navigate("/our-aim" ); // Redirect to the our Aim  page
      }, 2000); // Wait 2 seconds to show the success message
    } catch (err) {
      setError(err.response?.data?.message || 'Password reset failed.');
      setMessage('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
      <div className="space-y-4">
        {/* Token Input Field */}
        <div>
          <label className="block mb-2 font-medium">Reset Token</label>
          <input
            type="text"
            name="token"
            value={formData.token}
            onChange={handleChange}
            placeholder="Enter reset token"
            className="w-full p-2 border rounded"
          />
        </div>
        {/* New Password Input Field */}
        <div>
          <label className="block mb-2 font-medium">New Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Confirm Password Input Field */}
        <div>
          <label className="block mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm new password"
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Submit Button */}
        <button
          onClick={handleResetPassword}
          className="w-full bg-blue-500 text-white p-2 mt-4 rounded"
        >
          Reset Password
        </button>
        {/* Success and Error Messages */}
        {message && <p className="text-green-500 mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
