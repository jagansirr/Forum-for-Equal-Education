// Import necessary dependencies
import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Signout = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Perform sign-out logic here
        // For example, clear local storage or cookies
        localStorage.removeItem('userToken');
        
        // Redirect to login or home page
        navigate('/signin'); // Ensure this matches your route configuration
    };

    const handleCancel = () => {
        // Redirect back to dashboard or previous page
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="mb-6 text-2xl font-bold text-gray-800">Are you sure you want to sign out?</h1>
            <div className="flex space-x-4">
                <button
                    className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={handleSignOut}
                >
                    Yes, Sign Out
                </button>
                <button
                    className="px-6 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Signout;
