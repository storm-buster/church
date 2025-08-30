"use client"
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Ministries from "./components/Ministries";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Donate from "./components/Donate";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Ministries />
              <Events />
              <Testimonials />
              <Contact />
            </>
          }
        />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/media" element={<Media />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </Router> 
  );
}

export default App;