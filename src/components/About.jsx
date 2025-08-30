import { FaChurch, FaBook, FaPray, FaUsers } from "react-icons/fa"
import Ministries from "./Ministries"
import "./About.css"

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          The Church
        </h2>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p className="lead">
            Brief History of Amazing Grace Evangelical Mission:
            </p>
            <p>
              In 2002, the founder, Rev. Mathew Varughese, along with his wife and their six-month-old daughter, started a pioneering ministry from a modest a one-room flat in Southern Part of Delhi (Giri Nagar, Kalkaji) among native Hindi speaking, poor and downtrodden (slums and remote villages) community near and around South Delhi. The church quickly grew and by the end of the year, the congregation had grown to 25 believers. The fledgling church experienced numerous miraculous events that played a pivotal role in its growth. Among the most notable were two instances where individuals, who were declared dead, were brought back to life through prayer and God's intervention. These miracles strengthened the faith of the congregation and drew many more to the church which over the years culminated in the establishment of Amazing Grace Evangelical Mission with its church premises based out of Vishwakarma Colony, near Prehladpur, New Delhi.  It was here that God multiplied the church in leaps and bounds and that small congregation has since grown into a vibrant church of ~1500+ members. 
The Church has always focussed on serving the most vulnerable sections of the society who don't have any material possessions however are in urgent need of the Gospel and Christ to redeem them out of the bleak surroundings both in physical and spiritual terms.
            </p>
            
          </div>

          <div className="about-image" data-aos="fade-left">
            <img src="/WhatsApp Image 2025-03-16 at 7.31.21 PM.jpeg" alt="About Image" />
          </div>
        </div>

        {/* Ministries section removed as requested */}

        <div className="values-container">
          <h3 className="text-center mb-4" data-aos="fade-up">
            Our Core Values
          </h3>
          <div className="values-grid">
            <div className="value-card" data-aos="fade-up" data-aos-delay="100">
              <div className="value-icon">
                <FaChurch />
              </div>
              <h4>Worship</h4>
              <p>We worship the Triune God—Father, Son, and Holy Spirit—in Spirit and truth, with reverence, passion, and complete surrender to His will as revealed in Scripture.</p>
            </div>

            <div className="value-card" data-aos="fade-up" data-aos-delay="200">
              <div className="value-icon">
                <FaBook />
              </div>
              <h4>Scripture</h4>
              <p>We uphold the Bible as the inspired, infallible, and final authority, preaching and adhering to its unfiltered truth without compromise, led by the Holy Spirit.</p>
            </div>

            <div className="value-card" data-aos="fade-up" data-aos-delay="300">
              <div className="value-icon">
                <FaPray />
              </div>
              <h4>Prayer</h4>
              <p>We depend on the Holy Spirit in fervent, faith-filled prayer, seeking God's presence, power, and guidance in all aspects of life and ministry.</p>
            </div>

            <div className="value-card" data-aos="fade-up" data-aos-delay="400">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h4>Community</h4>
              <p>We cultivate a Spirit-led, Christ-centered fellowship, walking in love, holiness, and unity, equipping believers to fulfill the Great Commission and impact the world for God's glory.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

