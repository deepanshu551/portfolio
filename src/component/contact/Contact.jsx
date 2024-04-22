import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('form',nameRef.current.value);
    let obj={from_name:`${emailRef.current.value}`,to_name:`deepanshu`,message:`${msgRef.current.value}`}
    
    emailjs
      .send(
        "service_3umorxr",
        "template_8vdj9mv",
        obj,
        "BzYjfgjNdM12IcPZW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>deepanshusharma551@gmail.com</h5>
            <a href="mailto:deepanshusharma551@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-9736992342</h5>
            <a
              href="https://api.whatsapp.com/send?+919736992342"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            ref={nameRef}
          />

          <input ref={emailRef} type="email" name="email" placeholder="Yout Email" required />
          <textarea
            name="message"
            ref={msgRef}
            rows="7"
            placeholder="Yout Message"
            require
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
