import React from 'react';
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import Headersocials from './HeaderSocials';
const Header = () => {
    return (
        <header id="home">
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Deepanshu Sharma</h1>
                <h5 className="text-light">Associate Technology L2</h5>
                <h5 className="text-light">Publicis Sapient</h5>
<CTA/>
<Headersocials/>
<div className="me">
    <img src={ME} alt="me" />
</div>
<a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
           
        </header>
    );
}

export default Header;
