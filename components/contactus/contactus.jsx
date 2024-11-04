import React, { useState } from 'react';
import './styles.contactus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to an API
    setSubmitted(true);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact-us-container'>
      <h1 className='title' style={{color:"black"}}>Contact Us</h1>
      <div className='contact-info'>
        <section className='info-section'>
          <h2>General Inquiries</h2>
          <p>Email: <a href="mailto:info@yourrecipewebsite.com">info@yourrecipewebsite.com</a></p>
          <p>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
        </section>

        <section className='info-section'>
          <h2>Customer Support</h2>
          <p>Email: <a href="mailto:support@yourrecipewebsite.com">support@yourrecipewebsite.com</a></p>
        </section>

        <section className='info-section'>
          <h2>Follow Us</h2>
          <p>
            <a href="https://www.facebook.com/yourrecipewebsite" target="_blank" rel="noopener noreferrer">
             
            </a>
            <a href="https://www.instagram.com/yourrecipewebsite" target="_blank" rel="noopener noreferrer">
             
            </a>
            <a href="https://www.twitter.com/yourrecipeweb" target="_blank" rel="noopener noreferrer">
             
            </a>
          </p>
        </section>

        <section className='info-section'>
          <h2>Mailing Address</h2>
          <p>Rasamaya</p>
          <p>123 Culinary Lane, Suite 456</p>
          <p>Foodie City, FC 78901</p>
        </section>
      </div>

      <section className='contact-form'>
        <h2>Send Us a Message</h2>
        {submitted ? (
          <p className="success-message">Thank you for your message! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        )}
      </section>
    </div>
  );
};

export default ContactUs;