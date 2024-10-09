import React from 'react';
import { Link } from 'react-router-dom';
import '../style/HomePage.css';
import image from '../assests/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram , faTwitter ,faYoutube} from '@fortawesome/free-brands-svg-icons';



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

            <div className="section discover-section">
    <h2>Discover Our School</h2>
    <p>At Glorious Dawn Montessori School, we provide a nurturing environment that fosters curiosity and a love for learning. Our educational opportunities encompass a wide range of activities, from arts and music to sports and robotics, ensuring that every child can explore their passions and develop their skills. With a focus on holistic development, we encourage independence and critical thinking, preparing our students for a bright future.</p>
    <p>Our dedicated faculty is committed to creating a supportive atmosphere where each child is seen as an individual. We believe in the Montessori philosophy, emphasizing hands-on learning and experiential activities that inspire creativity and collaboration. By cultivating a strong sense of community, we empower our students to become confident, compassionate leaders who are ready to make a positive impact in the world.</p>
    <Link to="/schoollife" className="cta-button">View Activities</Link>
    </div>
            {/* About Section */}
<div className="section about-section">
    <h2>About Our School</h2>
    <p>Our school is dedicated to nurturing and educating children in a supportive and engaging environment. We focus on developing the whole child—intellectually, socially, and emotionally—ensuring that every student feels valued and inspired. Our experienced educators work closely with families to create a personalized learning experience that respects each child's unique strengths and interests.</p>
    <Link to="/about" className="cta-button">Learn More</Link>
</div>

{/* Montessori Section */}
<div className="section montessori-section">
    <h2>Why Choose Montessori?</h2>
    <p>At Montessori, we believe in creating a safe, supportive, and inclusive environment for all children. Our approach fosters independence and a lifelong love for learning, allowing students to explore subjects at their own pace. By integrating hands-on activities and collaborative projects, we cultivate critical thinking skills and creativity, preparing children for future challenges in a rapidly changing world.</p>
    <Link to="/Admissions" className="cta-button">Learn More</Link>
</div>

{/* Facilities Section */}
<div className="section facilities-section">
    <h2>School Facilities</h2>
    <p>Our school offers a wide range of facilities, from a spacious library to a state-of-the-art playground. Each area is designed to promote exploration and learning, with dedicated spaces for art, science, and technology. Our outdoor facilities encourage physical activity and teamwork, while our serene indoor environments support focused study and creativity, ensuring that students thrive both academically and socially.</p>
    <Link to="/Playground" className="cta-button">View Facilities</Link>
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

export default HomePage;
