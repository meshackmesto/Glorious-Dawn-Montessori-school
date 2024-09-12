import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Schoollife.css';

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
          </div>
          <div className="card">
            <img src="path-to-activity2.jpg" alt="Robotics Club" />
            <h3>Robotics Club</h3>
            <p>Our robotics club fosters innovation, engineering, and teamwork.</p>
          </div>
          <div className="card">
            <img src="path-to-activity3.jpg" alt="Sports" />
            <h3>Sports</h3>
            <p>Physical education and team sports are part of our daily schedule to encourage fitness.</p>
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
          </div>
          <div className="card">
            <img src="path-to-lesson2.jpg" alt="Science Lessons" />
            <h3>Science</h3>
            <p>Science is taught with hands-on experiments to inspire curiosity and discovery.</p>
          </div>
          <div className="card">
            <img src="path-to-lesson3.jpg" alt="Literature Lessons" />
            <h3>Literature</h3>
            <p>Our literature lessons foster a love for reading and analytical thinking.</p>
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
          </div>
          <div className="card">
            <img src="path-to-wellness3.jpg" alt="Nutrition" />
            <h3>Nutrition</h3>
            <p>We offer nutritious meals and educate students about healthy eating habits.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolLifePage;
