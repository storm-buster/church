"use client"

import { useState, useEffect } from "react"
import emailjs from '@emailjs/browser'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa"
import "./Contact.css"

const Contact = ({ fullPage = false }) => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
      }

      console.log('Sending email with params:', templateParams)

      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )

      console.log('EmailJS Response:', response)

      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      })

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setFormStatus({
        submitted: true,
        success: false,
        message: `Error: ${error.message || 'Failed to send message. Please try again later.'}`,
      })
    }

    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      })
    }, 5000)
  }

  return (
    <section id="contact" className={`section contact ${fullPage ? "full-page" : ""}`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Contact Us
        </h2>

        <div className="contact-container">
          <div className="contact-info" data-aos="fade-right">
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>Our Location</h3>
                <p>E-112 , Vishwakarma Colony, M B Road, NewDelhi- 110044</p>
                <div className="map-container" data-aos="fade-up">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3426889049615!2d77.28628499999999!3d28.4993357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce19517306f7b%3A0xc5f8370d2035b249!2sThe%20Amazing%20Grace%20Evangelical%20Mission!5e0!3m2!1sen!2sin!4v1740637479768!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Church Location"
          ></iframe>
        </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>Phone(+91)</h3>
                <p>9354055543(AGTI-Office)</p>
                <p>9818482781(Founder President and Senior Pastor) </p>
                <p>9315142286(Associate Pastor)</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>agem@amazinggrace.org.in</p>
                <p>pastor@amazinggrace.org</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <h3>Service Hours</h3>
                <p>Sunday Service : 10:00 AM - 12:00 PM</p>
                <p>Wednesday: 7:00 PM - 8:30 PM</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form" data-aos="fade-left">
            <h3>Send Us a Message</h3>

            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
              <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
              <label htmlFor="name">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
              <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
              <label htmlFor="name">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

