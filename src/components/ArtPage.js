import React from 'react';
import '../style/ArtPage.css';
import image from '../assests/logo.jpeg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram , faTwitter ,faYoutube} from '@fortawesome/free-brands-svg-icons';

const ArtPage = () => {
  const artPieces = [
    {
      title: "Sunset Over the Hills",
      description: "A beautiful depiction of a sunset over rolling hills, showcasing the use of warm colors and soft brush strokes.",
      imageUrl: "path-to-art1.jpg",
      artist: "Jane Doe",
      grade: "Grade 3",
    },
    {
      title: "Ocean Waves",
      description: "An energetic and vibrant painting capturing the movement of ocean waves, using cool tones and dynamic lines.",
      imageUrl: "path-to-art2.jpg",
      artist: "John Smith",
      grade: "Grade 5",
    },
    {
      title: "Spring Blossoms",
      description: "A delicate portrayal of spring flowers in bloom, with attention to detail and a bright color palette.",
      imageUrl: "path-to-art3.jpg",
      artist: "Alice Johnson",
      grade: "Grade 4",
    },
    // Add more art pieces here
  ];

  return (
    <div className="art-page">
      <h1>Children's Art Gallery</h1>
      <div className="art-gallery">
        {artPieces.map((art, index) => (
          <div className="art-card" key={index}>
            <img src={art.imageUrl} alt={art.title} />
            <h2>{art.title}</h2>
            <p>{art.description}</p>
            <p><strong>Artist:</strong> {art.artist}</p>
            <p><strong>Grade:</strong> {art.grade}</p>
          </div>
        ))}
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

export default ArtPage;
