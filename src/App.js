import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/Footer";
import HackathonCarousel from "./components/pages/HackathonCarousel"
import "./App.css";



function App() {
  return (
    <Router>
      <div className="app-container">
        <main>
          <HackathonCarousel />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
