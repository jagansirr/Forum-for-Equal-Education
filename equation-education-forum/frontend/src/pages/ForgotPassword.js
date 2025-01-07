import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/forgot-password', { email });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Request failed');
      setMessage('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full p-2 border"
      />
      <button onClick={handleForgotPassword} className="w-full bg-blue-500 text-white p-2 mt-4">
        Submit
      </button>
      {message && (
        <p className="text-green-500 mt-4">
          {message}
          <br />
          <Link to="/reset-password" className="text-blue-500 hover:underline">
            Reset your password
          </Link>
        </p>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default ForgotPassword;
