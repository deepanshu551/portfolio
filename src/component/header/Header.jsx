import React from "react";
import "./Header.css";
import CTA from "./CTA";
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Deepanshu Sharma</h1>
        <h5 className="text-light">Front-End Developer 2</h5>
        <h5 className="text-light">Publicis Sapient</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
