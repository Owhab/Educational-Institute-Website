import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className = 'py-5'>
            <h1 className = 'text-center not-found'>404</h1>
            <h1 className = 'text-center'>OOPS! PAGE NOT FOUND</h1>
            <p className = 'text-center'>Sorry, The page you are looking for doesn't exist. If you think something is broken, report a problem.</p>
            <div className="d-flex justify-content-evenly">
            <Link to = '/home'> 
            <Button variant="primary" type="submit">Return Home</Button> 
            </Link> 
            <Link to = '/contact'> 
            <Button variant="warning" type="submit">Report Problem</Button> 
            </Link>
            </div>
            
        </div>
    );
};

export default NotFound;