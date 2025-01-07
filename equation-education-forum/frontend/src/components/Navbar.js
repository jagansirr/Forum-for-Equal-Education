import React, { useState } from 'react';
import { HashLink } from "react-router-hash-link";
import logo from "../images/ForumforEqualEducation.png";

function Navbar() {
    const [dropdownVisible, setDropdownVisible] = useState(null);

    const toggleDropdown = (menu) => {
        setDropdownVisible((prev) => (prev === menu ? null : menu));
    };

    const headingStyle = {
        fontSize: '1.5rem', 
        fontWeight: 'bold',
    };

    return (
        <nav style={{ backgroundColor: 'red', color: 'yellow', padding: '10px' }}>
            <div className="navbar-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <img
                    src={logo}
                    alt="Logo"
                    style={{ height: '100px', cursor: 'pointer', padding: '5px' }}
                />
                <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', cursor: 'pointer', margin: 0 }}>
                    {/* Home Section */}
                    <li
                        onMouseEnter={() => toggleDropdown('home')}
                        onMouseLeave={() => toggleDropdown(null)}
                        style={{ position: 'relative' }}
                    >
                        <span style={headingStyle}>Home <span style={{ fontSize: '0.8em' }}>&#9662;</span></span>
                        {dropdownVisible === 'home' && (
                            <ul style={dropdownStyle}>
                                <li><HashLink smooth to="/#section-1" style={linkStyle}>Our Mission</HashLink></li>
                                <li><HashLink smooth to="/#section-2" style={linkStyle}>Our Approach</HashLink></li>
                                <li><HashLink smooth to="/#section-3" style={linkStyle}>Promoting Life Skills and Values</HashLink></li>
                                <li><HashLink smooth to="/#section-4" style={linkStyle}>Child Education</HashLink></li>
                            </ul>
                        )}
                    </li>

                    {/* About Us Section */}
                    <li
                        onMouseEnter={() => toggleDropdown('about-us')}
                        onMouseLeave={() => toggleDropdown(null)}
                        style={{ position: 'relative' }}
                    >
                        <span style={headingStyle}>About Us <span style={{ fontSize: '0.8em' }}>&#9662;</span></span>
                        {dropdownVisible === 'about-us' && (
                            <ul style={dropdownStyle}>
                                <li><HashLink smooth to="/about-us#mission" style={linkStyle}>Mission Statement</HashLink></li>
                                <li><HashLink smooth to="/about-us#vision" style={linkStyle}>Vision Statement</HashLink></li>
                                <li><HashLink smooth to="/about-us#core-values" style={linkStyle}>Core Values</HashLink></li>
                                <li><HashLink smooth to="/about-us#target-population" style={linkStyle}>Target Population</HashLink></li>
                                <li><HashLink smooth to="/about-us#higher-education" style={linkStyle}>Higher Education</HashLink></li>
                                <li><HashLink smooth to="/about-us#leadership-team" style={linkStyle}>Leadership Team</HashLink></li>
                                <li><HashLink smooth to="/about-us#call-to-action" style={linkStyle}>Call to Action</HashLink></li>
                            </ul>
                        )}
                    </li>

                    {/* Our Aim Section */}
                    <li
                        onMouseEnter={() => toggleDropdown('aim')}
                        onMouseLeave={() => toggleDropdown(null)}
                        style={{ position: 'relative' }}
                    >
                        <span style={headingStyle}>Our Aim <span style={{ fontSize: '0.8em' }}>&#9662;</span></span>
                        {dropdownVisible === 'aim' && (
                            <ul style={dropdownStyle}>
                                <li><HashLink smooth to="/our-aim#section-0" style={linkStyle}>Education of Child Labour</HashLink></li>
                                <li><HashLink smooth to="/our-aim#section-1" style={linkStyle}>Importance of Education</HashLink></li>
                                <li><HashLink smooth to="/our-aim#section-2" style={linkStyle}>Education Statistics</HashLink></li>
                                <li><HashLink smooth to="/our-aim#section-3" style={linkStyle}>Promoting Equality</HashLink></li>
                                <li><HashLink smooth to="/our-aim#section-4" style={linkStyle}>Improving Health</HashLink></li>
                                <li><HashLink smooth to="/our-aim#section-5" style={linkStyle}>Driving Innovation</HashLink></li>
                                <li><HashLink smooth to="/our-aim#section-6" style={linkStyle}>Women Empowerment</HashLink></li>
                                <li><HashLink smooth to="/our-aim#section-7" style={linkStyle}>Importance of Child Health</HashLink></li>
                            </ul>
                        )}
                    </li>

                    {/* Other Standalone Links */}
                    <li><HashLink smooth to="/create-donation" style={linkStyle}><span role="img" aria-label="love emoji" className="text-xl">❤️</span>Create Donation</HashLink></li>
                    <li><HashLink smooth to="/register" style={linkStyle}>RegisterForm</HashLink></li>
                    <li><HashLink smooth to="/signout" style={linkStyle}>Signout</HashLink></li>
                </ul>
            </div>
        </nav>
    );
}

// Styles for the dropdown menu
const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#34495e',
    padding: '10px',
    listStyle: 'none',
    margin: 0,
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
};

// Styles for the dropdown links
const linkStyle = {
    color: 'yellow',
    textDecoration: 'none',
    padding: '5px 10px',
    display: 'block',
    fontSize: '1.5rem', // This is approximately equivalent to 3xl
    fontWeight: 'bold',
};




export default Navbar;
