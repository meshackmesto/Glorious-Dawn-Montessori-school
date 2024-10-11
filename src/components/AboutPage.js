import React from 'react';
import '../style/About.css'
import {Link} from 'react-router-dom';
import studentsImage from '../assests/students.jpg';
import image from '../assests/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram , faTwitter ,faYoutube} from '@fortawesome/free-brands-svg-icons';

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="hero-section" style={{ backgroundImage: `url(${studentsImage})` }}>
                <div className="hero-content">
                    <h1>About Our School</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="about-content">
                <p>Glorious Dawn Montessori School commenced its journey on January 23rd, 2024, and welcomed its first students for admission in February of the same year.
                Built upon Christian principles, our institution aims to establish a firm foundation in Christ for every child, drawing inspiration from Matthew 7:24-26.</p>
                <p>Our vision is to empower children with a profound understanding of the world and their place within it.</p>
                <p>Mission is to cultivate an environment that nurtures children’s confidence, allowing them to explore, learn, and develop essential social and emotional skills crucial for their academic and lifelong pursuits. We offer a diverse range of engaging activities and interactive experiences designed to fuel curiosity and ignite a lifelong passion for learning among our students.</p>
                <p>Mission is to cultivate an environment that nurtures children’s confidence, allowing them to explore, learn, and develop essential social and emotional skills crucial for their academic and lifelong pursuits. We offer a diverse range of engaging activities and interactive experiences designed to fuel curiosity and ignite a lifelong passion for learning among our students.</p>
            </div>
            <footer className="footer">
    <img src={image} alt="School Logo" className="logo" />
    
    <div className='social-icon'>
        <a href='https://www.facebook.com/profile.php?id=61558678702793'>
            <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href='https://www.instagram.com/gloriousdawnmontessori/'>
            <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href='https://www.twitter.com'><FontAwesomeIcon icon={faTwitter} /></a>
        <a href='https://www.youtube.com'><FontAwesomeIcon icon={faYoutube} /></a>
    </div>

    {/* Divider line */}
    <div className="footer-divider"></div>

    <div className="footer-links">
        <table>
            <tr>
                <td><Link to="/privacy">Privacy Policy</Link></td>
                <td><Link to="/terms">Terms of Service</Link></td>
                <td><Link to="/contact">Contact Us</Link></td>
            </tr>   
            <tr>   
                <td><Link to="/admissions">Admissions</Link></td>
                <td><Link to="/Enquire">Enquire</Link></td>
                <td><Link to="/fee">Fees</Link></td>
                <td><Link to="/schoollife">School Life</Link></td>
            </tr>  
        </table> 
    </div>
    
    <p className="copyright">&copy; 2022 Montessori School. All rights reserved.</p>
</footer>
        </div>
    );
};

export default AboutPage;
