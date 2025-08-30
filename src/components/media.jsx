"use client"

import { useState } from "react"
import { FaSearch, FaTimes } from "react-icons/fa"
import "./Media.css"

const MediaData = [
  {
    id: 1,
    title: "Sunday Worship",
    category: "worship",
    previewImage: "/Anime Landscape.png",
    images: [
      "/Anime Landscape.png",
      "/Anime Landscape.png",
      "/Anime Landscape.png",
      "/Anime Landscape.png"
    ],
  },
  {
    id: 2,
    title: "Youth Event",
    category: "youth",
    previewImage: "/Anime Landscape.png",
    images: [
      "/Anime Landscape.png",
      "/Anime Landscape.png",
      "/Anime Landscape.png",
      "/Anime Landscape.png"
    ],
  },
  {
    id: 4,
    title: "Bible Study",
    category: "study",
    previewImage: "/Anime Landscape.png",
    images: [
      "/Anime Landscape.png",
      "/Anime Landscape.png",
      "/Anime Landscape.png",
      "/Anime Landscape.png"
    ],
  },
  {
    id: 5,
    title: "Sunday School",
    category: "children",
    previewImage: "/Anime Landscape.png",
    images: [
      "/Anime Landscape.png",
      "/Anime Landscape.png",
      "/Anime Landscape.png",
      "/Anime Landscape.png"
    ],
  },
]

const Media = ({ fullPage = false }) => {
  const [filter, setFilter] = useState("all")
  const [lightbox, setLightbox] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedMediaId, setSelectedMediaId] = useState(null)

  const categories = ["all", ...new Set(MediaData.map((item) => item.category))]

  const filteredMedia = filter === "all" ? MediaData : MediaData.filter((item) => item.category === filter)

  const openLightbox = (mediaId, imgIdx) => {
    setLightbox(mediaId)
    setCurrentImageIndex(imgIdx)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightbox(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    const currentItem = MediaData.find((item) => item.id === lightbox)
    setCurrentImageIndex((prev) => (prev + 1) % currentItem.images.length)
  }

  const prevImage = () => {
    const currentItem = MediaData.find((item) => item.id === lightbox)
    setCurrentImageIndex((prev) => (prev - 1 + currentItem.images.length) % currentItem.images.length)
  }

  const handleMediaClick = (id) => {
    setSelectedMediaId(id)
  }

  const handleBackToGrid = () => {
    setSelectedMediaId(null)
  }

  // Get the selected media item
  const selectedMedia = MediaData.find((item) => item.id === selectedMediaId)

  return (
    <section id="Media" className={`section Media ${fullPage ? "full-page" : ""}`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Media
        </h2>

        {fullPage && (
          <p className="text-center mb-5" data-aos="fade-up">
            Browse through our collection of photos showcasing our church community and activities.
          </p>
        )}

        <div className="Media-filter" data-aos="fade-up">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${filter === category ? "active" : ""}`}
              onClick={() => { setFilter(category); setSelectedMediaId(null); }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Media Grid or Selected Media Images Grid */}
        {!selectedMediaId ? (
          <div className="Media-grid" data-aos="fade-up">
            {filteredMedia.map((item) => (
              <div key={item.id} className="Media-item" onClick={() => handleMediaClick(item.id)}>
                <img src={item.previewImage || "/placeholder.svg"} alt={item.title} />
                <div className="Media-overlay">
                  <div className="Media-info">
                    <h3>{item.title}</h3>
                    <span className="Media-category">{item.category}</span>
                    <div className="Media-icon">
                      <FaSearch />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <button className="back-to-grid-btn" onClick={handleBackToGrid}>&larr; Back to All Media</button>
            <div className="Media-images-grid" data-aos="fade-up">
              {selectedMedia.images.map((img, idx) => (
                <div key={idx} className="Media-sub-item" onClick={() => openLightbox(selectedMedia.id, idx)}>
                  <img src={img} alt={selectedMedia.title + ' ' + (idx + 1)} />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Lightbox with thumbnails */}
        {lightbox && (
          <div className="lightbox">
            <div className="lightbox-content">
              <button className="lightbox-close" onClick={closeLightbox}>
                <FaTimes />
              </button>
              <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
                &#10094;
              </button>
              <button className="lightbox-nav lightbox-next" onClick={nextImage}>
                &#10095;
              </button>
              <img
                src={MediaData.find((item) => item.id === lightbox).images[currentImageIndex] || "/placeholder.svg"}
                alt={MediaData.find((item) => item.id === lightbox).title}
              />
              <div className="lightbox-caption">
                <h3>{MediaData.find((item) => item.id === lightbox).title}</h3>
                <p>Image {currentImageIndex + 1} of {MediaData.find((item) => item.id === lightbox).images.length}</p>
              </div>
              {/* Thumbnails */}
              <div className="lightbox-thumbnails">
                {MediaData.find((item) => item.id === lightbox).images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`lightbox-thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Media

