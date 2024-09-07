import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css';
import logo from '../assests/logo.jpeg'; // Adjust the path to where your logo is stored
import HomePage from './HomePage';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img  src={logo} alt="School Logo"  onClick={HomePage} className="navbar-logo" />
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleMenu} className="navbar-menu-button">
                    ☰
                </button>
            </div>
            {isOpen && (
                <div className="navbar-dropdown">
                    <Link to="/music">Music</Link>
                    <Link to="/enquire">Enquire</Link>
                    <Link to="/fee">Fees</Link>
                    <Link to="/admissions">Admissions</Link>
                    <Link to="/playground">Playground</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
