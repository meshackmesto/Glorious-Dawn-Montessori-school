import React from 'react';
import '../style/Fee.css';
import image from '../assests/logo.jpeg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram , faTwitter ,faYoutube} from '@fortawesome/free-brands-svg-icons';

const FeePage = () => {
    return (
        <div className="fee-page">
            <h1>Fee Structure</h1>
            <table className="fee-table">
                <thead>
                    <tr>
                        <th>Grade</th>
                        <th>Term 1</th>
                        <th>Term 2</th>
                        <th>Term 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Grade 1</td>
                        <td>$1000</td>
                        <td>$900</td>
                        <td>$900</td>
                    </tr>
                    <tr>
                        <td>Grade 2</td>
                        <td>$1100</td>
                        <td>$1000</td>
                        <td>$1000</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
            <button className="pay-button">Pay Now</button>
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

export default FeePage;
