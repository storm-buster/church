"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="logo_Agem.png" alt="Amazing Grace Church" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ministries"
              className={`nav-link ${location.pathname === "/ministries" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Ministries
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/media"
              className={`nav-link ${location.pathname === "/media" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Media
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/team"
              className={`nav-link ${location.pathname === "/team" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/donate"
              className={`nav-link ${location.pathname === "/donate" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

