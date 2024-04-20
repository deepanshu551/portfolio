import React from 'react';
import "./footer.css"

import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'
const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">😊</a>
            <ul className="permaLinks">
                <li><a href="#">Home</a></li>
                <li>
                    <a href="#about">
                        About
                    </a>
                </li>
                <li>
                    <a href="#experience">
                        Experience
                    </a>
                </li>
                <li>
                    <a href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
           
            
        </footer>
    );
}

export default Footer;
