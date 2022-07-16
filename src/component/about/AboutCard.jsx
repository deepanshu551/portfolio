import React from 'react';
import "./aboutCard.css"
const Aboutcard = (props) => {
    return (
        <article className="about__card">
            {props.children}
            <h5>{props.heading}</h5>
            <small>{props.subHeading}</small>
        </article>
    );
}

export default Aboutcard;
