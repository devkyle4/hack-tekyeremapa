import React from "react";
import Slider from "react-slick";
import "../styles/HackathonCarousel.css";

const hackathons = [
  {
    id: 1,
    title: "Tɛkyerɛma Pa Hackathon 2025",
    date: "May 17-30th, 2025",
    image: "/ns-1-blur.jpg",
    venue: "Venue: University of Ghana, Accra",
  },
  {
    id: 2,
    title: "Tɛkyerɛma Pa Hackathon 2025",
    date: "May 17-30th, 2025",
    image: "/hackathon2.jpg",
    venue: "Venue: University of Ghana, Accra",
  },
  {
    id: 3,
    title: "Tɛkyerɛma Pa Hackathon 2025",
    date: "May 17-30th, 2025",
    image: "/hackathon3.jpg",
    venue: "Venue: University of Ghana, Accra",
  },
];

const HackathonCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="carousel-slide">
            <div
              className="carousel-image"
              style={{
                backgroundImage: `url(${hackathon.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="carousel-text-container">
                <div className="carousel-text">
                  <h2>{hackathon.title}</h2>
                  <p>{hackathon.date}</p>
                  <div className="carousel-venue">
                    <p>{hackathon.venue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HackathonCarousel;
