"use client"

import { useState } from "react"
import { FaChild, FaMusic, FaHandsHelping, FaGraduationCap, FaPrayingHands, } from "react-icons/fa"
import { FaHandHoldingHand , FaHandsHoldingChild} from "react-icons/fa6";
import { GiOpenBook } from "react-icons/gi";
import { IoAccessibilityOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import "./Ministries.css"

const ministryData = [
  {
    id: 1,
    title: "Sunday School",
    description:
      "Nurturing the faith of our youngest members through age-appropriate Bible lessons, activities, and worship.",
    icon: <FaHandsHoldingChild />,
    image: "\Anime Landscape.png",
  },
  {
    id: 2,
    title: "Worship",
    description:
      "Leading the congregation in heartfelt worship through music, song, and creative expressions of praise.",
    icon: <FaPrayingHands />,
    image: "\Anime Landscape.png",
  },
  {
    id: 3,
    title: "Bible Study",
    description: "Deepening our understanding of Scripture through in-depth study, discussion, and application.",
    icon: <GiOpenBook />,
    image: "\Anime Landscape.png",
  },

  {
    id: 4,
    title: "Youth",
    description: "Deepening our understanding of Scripture through in-depth study, discussion, and application.",
    icon: <HiOutlineUserGroup/>,
    image: "\Anime Landscape.png",
  },
  {
    id: 5,
    title: "Amazing Grace Theological Institute (AGTI)",
    description: "Deepening our understanding of Scripture through in-depth study, discussion, and application.",
    icon: <FaGraduationCap />,
    image: "\Anime Landscape.png",
  },
  
  {
    id: 6,
    title: "Stewardship And Life Transformation (SALT)",
    description: "Building meaningful relationships and spiritual growth through regular small group gatherings.",
    icon: <FaHandHoldingHand />,
    image: "\Anime Landscape.png",
  },
]

const Ministries = ({ fullPage = false, simple = false }) => {
  return (
    <section id="ministries" className={`section ministries${simple ? ' ministries-simple' : ''} ${fullPage ? "full-page" : ""}`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Ministries
        </h2>

        {fullPage && (
          <p className="text-center mb-5" data-aos="fade-up">
            At Amazing Grace, we offer various ministries to serve our congregation and community. Each ministry is
            designed to help people grow in their faith and use their gifts to serve others.
          </p>
        )}

        <div className="ministries-grid">
          {ministryData.map((ministry) => (
            <div
              key={ministry.id}
              className="ministry-card"
              data-aos="fade-up"
              data-aos-delay={ministry.id * 100}
            >
              <div className="ministry-header">
                <div className="ministry-icon">{ministry.icon}</div>
                <h3>{ministry.title}</h3>
              </div>
              {!simple && (
                <div className="ministry-content">
                  <div className="ministry-image">
                    <img src={ministry.image || "/placeholder.svg"} alt={ministry.title} />
                  </div>
                  <p>{ministry.description}</p>
                  <a href={`/ministries#${ministry.id}`} className="ministry-link">
                    Learn More
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ministries

