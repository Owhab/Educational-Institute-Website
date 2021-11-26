import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav className = " mx-auto navbar  navbar-expand-lg navbar-light">
                <div className = "container-fluid d-flex justify-content-between">
                        <Link className = "navbar-brand" to = '/home'>Little Beats</Link>

                    <div>
                    <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className = "navbar-toggler-icon"></span>
                    </button>
                    <div className = "collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className = "navbar-nav ">

                            <NavLink className = "nav-link active" to = '/home'>Home</NavLink>
                            <NavLink className = "nav-link active" to = '/about'>About</NavLink>
                            <NavLink className = "nav-link active" to = '/services'>Services</NavLink>
                            <NavLink className = "nav-link active" to = '/instructors'>Instructors</NavLink>
                            <NavLink className = "nav-link active" to = '/contact'>Contact</NavLink>
                             
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;