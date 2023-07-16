import React from 'react';
import './Contact.css';
import { MdLocationOn } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import {AiOutlineSend} from 'react-icons/ai'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h1 className="section_titlee">Contact Me</h1>
      <span className="section_subtitle">
       <p className="connect_text">Want to connect? My inbox is always open!</p>
      </span>


      <div className="contact_container container grid">
        <div>
          <a href="mailto:priyakumari2002002@gmail.com" target="_blank">
            <div className="contact_info">
              <HiOutlineMail className="contact_icon" />
              <div>
                <h3 className="contact_title">Email</h3>
                <span className="contact_subtitle">priyakumari2002002@gmail.com</span>
              </div>
            </div>
          </a>

          <a href="https://goo.gl/maps/AbkrLpc6JepJcrSL8" target="_blank">
            <div className="contact_info">
              <MdLocationOn className="contact_icon" />
              <div>
                <h3 className="contact_title">Location</h3>
                <span className="contact_subtitle">Kolkata, India</span>
              </div>
            </div>
          </a>
        </div>

        <form
          action="mailto:21051582@kiit.ac.in"
          className="contact_form grid"
          id="contact-form"
          method="POST"
        >
          <div id="alert" className="alert_style"></div>
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label className="contact_label">Name</label>
              <input type="text" name="name" className="contact_input" id="name" required />
            </div>
            <div className="contact_content">
              <label htmlFor="email" className="contact_label">Email</label>
              <input type="email" name="email" className="contact_input" id="email" required />
            </div>
          </div>
          <div className="contact_content">
            <label htmlFor="subject" className="contact_label">Subject</label>
            <input type="text" name="subject" className="contact_input" id="subject" required />
          </div>
          <div className="contact_content">
            <label htmlFor="message" className="contact_label">Message</label>
            <textarea
              name="message"
              id="message"
              cols="0"
              rows="7"
              className="contact_input message"
              style={{ resize: 'vertical' }}
              required
            ></textarea>
          </div>
          <button type="submit" className="button button--flex">
            Send Message <AiOutlineSend className='send'/>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;