import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Schoollife.css';
import image from '../assests/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram , faTwitter ,faYoutube} from '@fortawesome/free-brands-svg-icons';

const SchoolLifePage = () => {
  return (
    <div className="school-life-page">
      <h1>Life at Our School</h1>
      <section className="activities">
        <h2>Activities</h2>
        <p>
          Our school provides a wide range of activities to help students explore their interests, from arts and music to sports and robotics.
        </p>
        <div className="activity-cards">
          <div className="card">
            <img src="path-to-activity1.jpg" alt="Art Class" />
            <h3>Art Class</h3>
            <p>Students learn to express their creativity through painting, sculpture, and design.</p>
            <Link to="/about" className="cta-button">Learn More</Link>
          </div>
          <div className="card">
            <img src="path-to-activity2.jpg" alt="Robotics Club" />
            <h3>Robotics Club</h3>
            <p>Our robotics club fosters innovation, engineering, and teamwork.</p>
            <Link to="/about" className="cta-button">Learn More</Link>
          </div>
          <div className="card">
            <img src="path-to-activity3.jpg" alt="Sports" />
            <h3>Sports</h3>
            <p>Physical education and team sports are part of our daily schedule to encourage fitness.</p>
            <Link to="/about" className="cta-button">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="lessons">
        <h2>Lessons</h2>
        <p>
          Our curriculum focuses on holistic education, combining academic excellence with character development.
        </p>
        <div className="lesson-cards">
          <div className="card">
            <img src="path-to-lesson1.jpg" alt="Math Lessons" />
            <h3>Math</h3>
            <p>We emphasize critical thinking and problem-solving through engaging math lessons.</p>
            <Link to="/about" className="cta-button">Learn More</Link>
          </div>
          <div className="card">
            <img src="path-to-lesson2.jpg" alt="Science Lessons" />
            <h3>Science</h3>
            <p>Science is taught with hands-on experiments to inspire curiosity and discovery.</p>
            <Link to="/about" className="cta-button">Learn More</Link>
          </div>
          <div className="card">
            <img src="path-to-lesson3.jpg" alt="Literature Lessons" />
            <h3>Literature</h3>
            <p>Our literature lessons foster a love for reading and analytical thinking.</p>
            <Link to="/about" className="cta-button">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="wellness">
        <h2>Student Wellness</h2>
        <p>
          We ensure our students' well-being through wellness programs, counseling, and health checks.
        </p>
        <div className="wellness-cards">
          <div className="card">
            <img src="path-to-wellness1.jpg" alt="Counseling Services" />
            <h3>Counseling Services</h3>
            <p>Our counselors provide mental health support and personal development guidance.</p>
            <Link to="/about" className="cta-button">Learn More</Link>
          </div>
          <div className="card">
            <img src="path-to-wellness2.jpg" alt="Physical Health" />
            <h3>Physical Health</h3>
            <p>Regular health checkups and physical education keep students fit and healthy.</p>
            <Link to="/about" className="cta-button">Learn More</Link>
          </div>
          <div className="card">
            <img src="path-to-wellness3.jpg" alt="Nutrition" />
            <h3>Nutrition</h3>
            <p>We offer nutritious meals and educate students about healthy eating habits.</p>
            <Link to="/about" className="cta-button">Learn More</Link>
          </div>
        </div>
      </section>
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

export default SchoolLifePage;
