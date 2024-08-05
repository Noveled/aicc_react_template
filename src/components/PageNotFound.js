import React from 'react'
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="not-found-container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
}

export default PageNotFound