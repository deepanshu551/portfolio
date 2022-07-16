import React from 'react';
import "./experienceDetails.css"
import {BsFillPatchCheckFill} from "react-icons/bs"
const Experiencedetails = (props) => {
    return (
        <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icons"/>
        <div>
        <h4>{props.title}</h4>
        <small className="text-light">{props.level[0].toUpperCase()+props.level.slice(1)}</small>
        </div>
            </article>
    );
}

export default Experiencedetails;
