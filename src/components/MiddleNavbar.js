import React, { useEffect, useState } from "react";
import "./styles/MiddleNavbar.css"; // Import CSS styles

const MiddleNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust the scroll position for stickiness
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


  return (
    <div className={`middle-navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-links">
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
  );
};

export default MiddleNavbar;
