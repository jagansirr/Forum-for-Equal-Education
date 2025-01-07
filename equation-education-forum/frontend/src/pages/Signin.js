import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/signin', formData);

  
      console.log('Sign-In Response:', response.data); // Debugging log for success
      localStorage.setItem('authToken', response.data.token); // Save token to localStorage
  
      navigate("/our-aim" ); // Redirect to the our Aim  page
    } catch (error) {
      console.error('Error during Sign-In:', error); // Debugging log for errors
      setErrors({ apiError: error.response?.data?.message || 'Sign-In failed' });
    }
  };
  

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        {errors.apiError && <p className="text-red-500">{errors.apiError}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 mt-4">Sign In</button>
      </form>
      <div className="mt-4 text-left">
        <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
             </div>
    </div>
  );
};

export default Signin ;
