import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className = 'Footer text-center'>
            <div className="copyright-social">
                <h2>Join with Social Media</h2>
            <a href="https://facebook.com/owhab.cse" target = "_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://facebook.com/owhab.cse" target = "_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://facebook.com/owhab.cse" target = "_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://facebook.com/owhab.cse" target = "_blank"><i class="fab fa-linkedin"></i></a>

            </div>
            <div className="copyright-content d-flex px-5 justify-content-between">
            <p> &copy; Copyright All Right Reserved || Little Beats</p>
            <p>Popular Learning School in Bangladesh</p>
            </div>
            
        </div>
    );
};

export default Footer;