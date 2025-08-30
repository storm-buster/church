"use client"

import { useState, useEffect } from "react"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import "./Testimonials.css"

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    role: "Church Member",
    quote:
      "Amazing Grace has been a spiritual home for me and my family. The teachings are profound and the community is loving and supportive.",
    image: "/jose-varghese.jpeg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Volunteer",
    quote:
      "Serving at Amazing Grace has been a blessing. I've grown so much in my faith and found purpose through the various ministries.",
    image: "/jose-varghese.jpeg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Youth Group Member",
    quote:
      "The youth program at Amazing Grace has helped me navigate the challenges of being a Christian teenager in today's world.",
    image: "/jose-varghese.jpeg",
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const length = testimonialData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="Testimonials" className="section Testimonials">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Testimonials
        </h2>

        <div className="Testimonials-slider" data-aos="fade-up">
          <div className="Testimonials-container">
            {testimonialData.map((testimonial, index) => (
              <div key={testimonial.id} className={`testimonial ${index === current ? "active" : ""}`}>
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <p className="quote">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button className="control-btn prev" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <div className="testimonial-dots">
              {testimonialData.map((_, index) => (
                <span
                  key={index}
                  className={index === current ? "dot active" : "dot"}
                  onClick={() => setCurrent(index)}
                ></span>
              ))}
            </div>
            <button className="control-btn next" onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

