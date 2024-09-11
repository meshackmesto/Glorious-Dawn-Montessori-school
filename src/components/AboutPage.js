import React from 'react';
import '../style/About.css'
import studentsImage from '../assests/students.jpg'

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
        </div>
    );
};

export default AboutPage;
