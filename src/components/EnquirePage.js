import React, { useState } from 'react';
import '../style/EnquirePage.css';

const EnquirePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="enquire-page">
            <h1>Enquire About Our School</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Question</label>
                <textarea name="question" value={formData.question} onChange={handleChange} required />

                <button type="submit">Submit Enquiry</button>
            </form>
        </div>
    );
};

export default EnquirePage;
