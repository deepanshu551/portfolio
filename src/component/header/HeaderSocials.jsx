import React from 'react';
import {BsLinkedin,BsGithub,BsDribbble} from "react-icons/bs"
const Headersocials = () => {
    return (
        <div className="header__socials">
            <a className="icons" href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a className="icons" href="https://github.com" target="_blank"><BsGithub/></a>
            <a className="icons" href="https://dribble.com" target="_blank"><BsDribbble/></a>
        </div>
    );
}

export default Headersocials;
