import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Correct import for Swiper v9+
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Destination.scss";
import NatureImage from '../assets/Nature.jpg';

const Destination = () => {
  return (
    <div className="destination-section">
      {/* Fading Text Section */}
      <div className="text-content">
        <h2 className="section-title">Where to Go</h2>
        <h1 className="main-title">Pick your own journey.</h1>
        <p className="description">
          From the cool breeze and scenic mountain views 
          to the vibrant culture and bustling markets, 
          Baguio is a haven for adventurers, food lovers, and those seeking peace amidst nature. <br/><br/>
          Ditoy Baguio: Here, your adventure begins.
          Plan your trip today and experience the magic of Baguio!
        </p>
      </div>

      {/* Sliding Cards Section */}
      <Swiper
        slidesPerView={2.2} // Show 2 full cards and part of the third
        spaceBetween={20} // Space between cards
        modules={[ Navigation]} // Use Swiper modules
        className="cards-swiper"
      >
        <SwiperSlide>
          <div className="card">
            <img src={NatureImage} alt="Nature" />
            <div className="card-overlay">
              <h3>Nature</h3>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="" alt="Culture" />
            <div className="card-overlay">
              <h3>Culture</h3>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="nature.jpg" alt="Food" />
            <div className="card-overlay">
              <h3>Food</h3>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="nature.jpg" alt="Adventure & Activities" />
            <div className="card-overlay">
              <h3>Adventure & Activities</h3>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="nature.jpg" alt="Religious & Spiritual" />
            <div className="card-overlay">
              <h3>Religious & Spiritual</h3>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Destination;
