import React from "react";
import "./experience.css";
import Experiencedetails from "./ExperienceDetails";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <Experiencedetails title="HTML" level="experienced" />
            <Experiencedetails title="CSS" level="experienced" />
            <Experiencedetails title="JavaScript" level="experienced" />
            <Experiencedetails title="React" level="experienced" />
            <Experiencedetails title="Bootstrap" level="basic" />
            <Experiencedetails title="Tailwind" level="basic" />
            <Experiencedetails title="Material UI" level="basic" />
          </div>
        </div>
        <div className="experience__others">
          <h3>Other</h3>
          <div className="experience__content">
          <Experiencedetails title="NodeJs" level="intermediate" />
            <Experiencedetails title="Express" level="intermediate" />
            <Experiencedetails title="ASP.NET" level="basic" />
            <Experiencedetails title="MongoDB" level="intermediate" />
            <Experiencedetails title="MySql" level="basic" />
            <Experiencedetails title="AEM" level="basic" />
            <Experiencedetails title="GEN AI" level="basic" />
            <Experiencedetails title="webpack" level="basic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
