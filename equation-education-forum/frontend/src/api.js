import axios from 'axios';
import { notifySuccess, notifyError } from './App';


// Base URL of the backend server
const API_BASE_URL = 'http://localhost:5000/api'; // Update if backend runs on a different port


export const loginUser = async (credentials) => {
    try {
        const response = await apiClient.post('/users/login', credentials); // Make sure the endpoint matches the backend
        notifySuccess('Logged in successfully!');
        return response.data;
    } catch (error) {
        notifyError('Login failed. Please try again.');
        console.error('Error during login:', error.response || error.message); // Log error for debugging
        throw error;
    }
};



/** 
 * Fetch users from the backend.
 * @returns {Promise<Object[]>} Array of user objects.
 */

/**
 * Fetch donations from the backend.
 * @returns {Promise<Object[]>} Array of donation objects.
 */
export const getDonations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/donations`);
        return response.data;
    } catch (error) {
        console.error('Error fetching donations:', error);
        throw error;
    }
};

export const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

// API methods for user-related operations
export const fetchUsers = async () => {
    try {
        const response = await apiClient.get('/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await apiClient.post('/users/signup', userData);
        notifySuccess(response.data.message || 'User registered successfully!');
        return response.data;
    } catch (error) {
        notifyError(error.response?.data?.message || 'Registration failed');
        throw error;
    }
};



/**
 * Send a contact form submission to the backend.
 * @param {Object} formData - Form data to send.
 * @returns {Promise<Object>} Response from the server.
 */
export const sendContactForm = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/contact`, formData);
        notifySuccess('Contact form submitted successfully!');
        return response.data;
    } catch (error) {
        notifyError('Error submitting contact form. Please try again.');
        console.error('Error sending contact form:', error);
        throw error;
    }
};
export const forgotPassword = async (email) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/forgot-password', { email });
      console.log(response.data.message); // Show success message to the user
      return response.data;
    } catch (error) {
      console.error('Error during Forgot Password:', error.response?.data?.message || 'Request failed');
      throw error;
    }
  };
  

