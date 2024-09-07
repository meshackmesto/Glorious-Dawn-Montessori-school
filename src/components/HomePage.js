import React from 'react';
import {Link} from 'react-router-dom';
import '../style/HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage-content">
                <h1>Welcome to Our School</h1>
                <p>Where every child matters and is nurtured to their fullest potential.</p>
                <Link to="/admissions" className="homepage-button">Apply Now</Link>
            </div>
        </div>
    );
};

export default HomePage;
