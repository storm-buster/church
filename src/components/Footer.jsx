import { Link } from "react-router-dom"
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHeart,
} from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" style={{ backgroundColor: 'black' }}>
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              
              <p className="name">The Amazing Grace Evangelical Mission</p>
              <div className="footer-contact">
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <span>E-112 , Vishwakarma Colony, M B Road, NewDelhi- 110044</span>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <span>+91-9354055543</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <span>agem@amazinggrace.org.in</span>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/ministries">Ministries</Link>
                </li>
                <li>
                  <Link to="/media">Media</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            
            <div className="footer-newsletter">
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
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Amazing Grace Evangelical Mission. All Rights Reserved.</p>
          <p>
            Made with <FaHeart className="heart-icon" /> to the glory of God
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

