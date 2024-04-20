import React from 'react';
import "./about.css";
import Me from "../../assets/profilepic.jpg";
import {FaAward,FaUsers} from "react-icons/fa";
import Aboutcard from './AboutCard';
import {VscFolderLibrary} from "react-icons/vsc"
const About = (props) => {
    
    return (
        <section id="about">
            <h5>Get To know</h5>
            <h2>About Me</h2>
           <div className="container about__container">

<div className="about__me">
    <div className="about__me-image">
<img src={Me} alt="me" />
    </div>
</div>
<div className="about__content">
    <div className="about__cards">
        <Aboutcard heading={"Experience"} subHeading={"4+ Years Working"}><FaAward className='icon'/></Aboutcard>
        <Aboutcard heading={"Clients"} subHeading={"Worked With 5+ clients"}><FaUsers className='icon'/></Aboutcard>
        <Aboutcard heading={"Projects"} subHeading={"Worked In 3+ clients Projects"}><VscFolderLibrary className='icon'/></Aboutcard>
    </div>
    <p>I am a passionate frontend developer with four years of hands-on experience in crafting responsive and user-friendly web applications using React. My journey in the world of web development has equipped me with a solid foundation in front-end technologies, including HTML5, CSS3, and JavaScript.</p>
<a href="#contact" className="btn btn-primary">Let's Contact</a>
</div>
           </div>
           
        </section>
    );
}

export default About;
