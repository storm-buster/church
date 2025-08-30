"use client"

import React from "react"
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/SHARDA RIVER.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="hero-content">
        <div className="container">
          <h1 data-aos="fade-up" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            The Amazing Grace Evangelical Mission
          </h1>
          <p data-aos="fade-up" data-aos-delay="100" style={{ color: 'white', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            A Christ-Centered Pentecostal Church in Delhi
          </p>
          <a href="#services" className="btn btn-primary" data-aos="fade-up" data-aos-delay="200">
            Join Us On Sundays for Worship
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero