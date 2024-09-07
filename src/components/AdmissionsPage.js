import React from 'react';
import '../style/AdmissionsPage.css';

const AdmissionsPage = () => {
    return (
        <div className="admissions-page">
            <h1>Admissions</h1>
            <p>We welcome new students to join our school community. Please fill out the application form and submit the necessary documents.</p>
            <form>
                <label>Student Name</label>
                <input type="text" name="studentName" required />

                <label>Date of Birth</label>
                <input type="date" name="dob" required />

                <label>Grade Applying For</label>
                <select name="grade" required>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    {/* Add more grades as needed */}
                </select>

                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default AdmissionsPage;
