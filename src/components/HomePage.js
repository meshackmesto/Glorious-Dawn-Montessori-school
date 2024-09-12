import React from 'react';
import { Link } from 'react-router-dom';
import '../style/HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Our School</h1>
                    <p>Where every child matters and is nurtured to their fullest potential.</p>
                    <Link to="/admissions" className="cta-button">Apply Now</Link>
                </div>
            </div>

            {/* Discover Section */}
            <div className="section discover-section">
                <h2>Discover Our School</h2>
                <p>Our school offers a variety of educational opportunities, from arts and music to sports and robotics.</p>
                <Link to="/schoollife" className="cta-button">View Activities</Link>
            </div>

            {/* About Section */}
            <div className="section about-section">
                <h2>About Our School</h2>
                <p>Our school is dedicated to nurturing and educating children in a supportive and engaging environment.</p>
                <Link to="/about" className="cta-button">Learn More</Link>
            </div>

            {/* Montessori Section */}
            <div className="section montessori-section">
                <h2>Why Choose Montessori?</h2>
                <p>At Montessori, we believe in creating a safe, supportive, and inclusive environment for all children.</p>
                <Link to="/Admissions" className="cta-button">Learn More</Link>
            </div>

            {/* Facilities Section */}
            <div className="section facilities-section">
                <h2>School Facilities</h2>
                <p>Our school offers a wide range of facilities, from a spacious library to a state-of-the-art playground.</p>
                <Link to="/Playground" className="cta-button">View Facilities</Link>
            </div>
            <footer>
                <p>&copy; 2022 Montessori School. All rights reserved.</p>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact">Contact Us</Link>
            </footer>
        </div>
    );
};

export default HomePage;
