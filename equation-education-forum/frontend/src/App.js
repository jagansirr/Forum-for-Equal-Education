import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home'; // Import Home from the correct location
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Signout from './pages/Signout';
import AdminPanel from './pages/AdminPanel';
import CreateDonation from './pages/CreateDonation';
import DonationList from './pages/DonationList';
import HigherEducationPage from './pages/HigherEducationPage';
import MemberList from './pages/MemberList';
import OurAim from "./pages/OurAim";
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';
import Error from "./pages/Error";
import Register from './pages/Register';

import CancerAwareness from './pages/CancerAwareness';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />

      <Routes>

        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/create-donation" element={<CreateDonation />} />
        <Route path="/donations" element={<DonationList />} />
        <Route path="/members" element={<MemberList />} />
        <Route path="/our-aim" element={<OurAim />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signout" element={<Signout />} />
        <Route component={Error} />

        <Route path="/cancerAwareness" element={<CancerAwareness />} />
        <Route path="/higher-education" element={<HigherEducationPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
      </Routes>
    </Router>
  );
}
export const notifySuccess = (message) => toast.success(message);
export const notifyError = (message) => toast.error(message);

export default App;
