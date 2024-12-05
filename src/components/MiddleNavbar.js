import React, { useEffect, useState } from "react";
import "./styles/MiddleNavbar.css"; // Import CSS styles

const MiddleNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To handle menu toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const toggleMenu = () => {
  //   setIsMenuOpen((prev) => !prev); 
  // };

  return (
    <div className={`middle-navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-container">
        {/* Hamburger icon for mobile
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div> */}

        {/* Navbar Links */}
        <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#about" className="navbar-link">
            About
          </a>
          <a href="#timelines" className="navbar-link">
            Timelines
          </a>
          <a href="#prizes" className="navbar-link">
            Prizes
          </a>
          <a href="#rules" className="navbar-link">
            Rules
          </a>
          <a href="#faqs" className="navbar-link">
            FAQs
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiddleNavbar;
