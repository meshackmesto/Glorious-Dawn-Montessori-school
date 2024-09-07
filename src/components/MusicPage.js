import React from 'react';
import '../style/MusicPage.css';
import musicImg from '../assets/images/music-class.jpg';

const MusicPage = () => {
    return (
        <div className="music-page">
            <h1>Music Program</h1>
            <p>Our school offers a wide range of musical instruments for students to learn and enjoy.</p>
            <img src={musicImg} alt="Students playing music" className="music-image" />
            <div className="instrument-list">
                <h2>Instruments Offered:</h2>
                <ul>
                    <li>Piano</li>
                    <li>Violin</li>
                    <li>Guitar</li>
                    <li>Drums</li>
                    <li>Flute</li>
                </ul>
            </div>
        </div>
    );
};

export default MusicPage;
