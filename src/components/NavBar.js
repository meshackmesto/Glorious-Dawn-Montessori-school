import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css';
import logo from '../assests/logo.jpeg'; // Adjust the path to where your logo is stored

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle scroll events
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            setIsScrolled(true); // Set to true if scrolled down
        } else {
            setIsScrolled(false); // Set to false if back at the top
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Add event listener on mount
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-brand">
               <Link to="/"> <img src={logo} alt="School Logo" className="navbar-logo" />
               </Link>
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
