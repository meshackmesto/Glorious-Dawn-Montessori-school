import React from "react";
import '../style/healthPage.css';
import image from '../assests/logo.jpeg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram , faTwitter ,faYoutube} from '@fortawesome/free-brands-svg-icons';


const healthPage =() =>{
    return (
        <div>
            <h1>Welcome to Health Page</h1>
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
    )
}


export default healthPage;