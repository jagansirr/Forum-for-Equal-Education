import React from "react";
import logo from "../images/ForumforEqualEducation.png";
import PaytmQR from "../images/Qr.png";
import PayPalQR from "../images/paytm.png";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 px-3">
      {/* Logo and Contact Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-1">
        <div className="flex items-center space-x-">
          <img
            src={logo}
            alt="Forum for Equal Education Logo"
            className="w-20 h-10 transform hover:scale-110 transition duration-300"
          />
          <span className="text-xl font-bold hover:text-yellow-300 transition duration-300">
            Forum for Equal Education
          </span>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <p className="text-gray-300 text-sm">
            Contact us at:{" "}
            <a
              href="mailto:Equaleducation@gmail.com"
              className="text-yellow-400 hover:text-yellow-500 underline transition duration-300"
            >
              Equaleducation@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Donation QR Codes */}
      <div className="flex justify-center space-x-8 mb-5">
        <div className="text-center">
          <img
            src={PaytmQR}
            alt="Paytm QR Code"
            className="w-12 h-12 mx-auto"
          />
          <p className="text-sm mt-2">Donate via Paytm</p>
        </div>
        <div className="text-center">
          <img
            src={PayPalQR}
            alt="PayPal QR Code"
            className="w-12 h-12 mx-auto"
          />
          <p className="text-sm mt-2">Donate via PayPal</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mb-3">
        <a
          href="https://www.facebook.com/share/1AwCV1s6s4/?mibextid=kFxxJD"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-400 transition duration-300"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-400 transition duration-300"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-400 transition duration-300"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-400 transition duration-300"
        >
          <FaLinkedin size={20} />
        </a>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center text-gray-300 text-sm">
       
        <p>
          &copy; {new Date().getFullYear()} Forum for Equal Education. Designed by{" "}
          <strong className="text-yellow-300">RAjAt kUmAr mAhAtA</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
