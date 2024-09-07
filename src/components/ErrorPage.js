import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>Oops! Page Not Found</h1>
            <p>It seems you've hit a broken link or the page has moved.</p>
            <Link to="/">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;