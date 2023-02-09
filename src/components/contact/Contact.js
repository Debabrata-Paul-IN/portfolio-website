import React, { useRef } from 'react';
import "./contact.css";
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine,RiWhatsappLine} from 'react-icons/ri'
import emailjs from 'emailjs-com';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ib8n1sl', 'template_wg5tfxo', form.current, 'T_sv_cKzWLXb4tuJC')
    e.target.reset();
  };


  return (
    <div id="contact">
    <h5>Get in touch</h5>
    <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option_icon"/>
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href="mailto:dummyemail@gmail.com" target="_blank" rel="noopener noreferrer">Send an email</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon"/>
            <h4>Messanger</h4>
            <h5>Debabrata Paul</h5>
            <a href="https://m.me/paul.debujnv">Send a message</a>
          </article>

          <article className="contact_option">
            <RiWhatsappLine className="contact_option_icon"/>
            <h4>Whatsapp</h4>
            <h5>Send Message at Whatsapp</h5>
            <a href="https://wa.me/+919366898304">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input name="name" type='text' placeholder="Your Full Name" required/>
          <input name="email" type='email' placeholder="Your Email" required/>
          <textarea name="message" rows='7' placeholder="'Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button> 
        </form>
      </div>
    </div>
  );
}
