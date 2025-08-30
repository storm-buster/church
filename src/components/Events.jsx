"use client"

import { useState } from "react"
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa"
import "./Events.css"

const eventData = [
  {
    id: 1,
    title: "Sunday Worship Service",
    tabDate: "Every Sunday",
    date: (
      <>
        
        <br />
        <div><strong>Vishwakarma Colony</strong></div>
        <div>1st Service: 8:00 AM - 10:00 AM</div>
        <div>2nd Service: 10:00 AM - 12:00 PM</div>
        <br />
        <div><strong>YWCA Of Delhi Dwarka (VTI)</strong></div>
        <div>3rd Service: 6:00 PM - 8:00 PM</div>
      </>
    ),
    time: "",
    description: (
      <em>
        Join us for a time of worship,<br />
        prayer, and teaching from God's Word.
      </em>
    ),
    image: "/Anime Landscape.png",
  },
  {
    id: 2,
    title: "Bible Study",
    tabDate: "Every Friday",
    date: "Every Friday",
    time: "6:00 PM - 8:00 PM",
    description: "Dive deeper into Scripture with our interactive Bible study sessions.",
    image: "\Anime Landscape.png",
  },
  {
    id: 3,
    title: "Intercessory Prayer",
    tabDate: "Every Friday",
    date: "Every Friday",
    time: "9:30 PM - 11:00 PM",
    description: "A fun and engaging evening for teenagers to grow in faith and friendship.",
    image: "\Anime Landscape.png",
  },
 
]

const Events = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <section id="events" className="section events">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Events
        </h2>

        <div className="events-container">
          <div className="events-tabs" data-aos="fade-up">
            {eventData.map((event) => (
              <div
                key={event.id}
                className={`event-tab ${activeTab === event.id ? "active" : ""}`}
                onClick={() => setActiveTab(event.id)}
              >
                <h3>{event.title}</h3>
                <div className="event-meta">
                  <span>
                    <FaCalendarAlt /> {event.tabDate}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="event-content" data-aos="fade-up" data-aos-delay="100">
            {eventData.map((event) => (
              <div key={event.id} className={`event-details ${activeTab === event.id ? "active" : ""}`}>
                <div className="event-image">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} />
                </div>
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <div>{event.date}</div>
                    <div>{event.time}</div>
                  </div>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  )
}

export default Events

