import React,  { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Activities.scss";
import feather from 'feather-icons';
import BurnhamPark from "../assets/Nature/burnham-park.jpg";


const places = [
  {
    title: "Burnham Park",
    description:
      "desc",
    image: BurnhamPark,
  },
];

const Activities = () => {
    useEffect(() => {
        feather.replace();
      }, []);

    const navigate = useNavigate();


  return (
    <div className="places-container">
      {/* Banner Image */}
      <div class="banner">
        <div class="banner-image"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation">
        <button className="nav-button" onClick={() => navigate("/")}>
          Home
        </button>
        <i className="arrow" data-feather="arrow-right-circle"></i>
        <button className="nav-button active">Activities</button>
      </div>

      {/* Page Title */}
      <h1>Things to Do in Baguio: Adventure, Outdoors, and Shopping</h1>

      {/* List of Places */}
      {places.map((place, index) => (
        <div
          className={`place-card ${index % 2 === 0 ? "image-left" : "image-right"}`}
          key={index}
        >
          <img src={place.image} alt={place.title} className="place-image" />
          <div className="place-details">
            <h2>{place.title}</h2>
            <p>{place.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;