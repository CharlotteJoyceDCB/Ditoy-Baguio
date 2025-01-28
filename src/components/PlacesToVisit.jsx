import React,  { useEffect } from "react";
import "../styles/PlacesToVisit.scss";
import feather from 'feather-icons';
// import BannerImage from "../assets/Nature/banner-image.png";
import BurnhamPark from "../assets/Nature/burnham-park.jpg";
import MinesViewPark from "../assets/Nature/minesview-park.png";
import CampJohnHay from "../assets/Nature/camp-john-hay.jpg";
import BotanicalGarden from "../assets/Nature/botanical-garden.png";
import WrightPark from "../assets/Nature/wright-park.jpeg";
import BaguioEcoPark from "../assets/Nature/baguio-eco-park.jpg";
import StrawberryFarms from "../assets/Nature/strawberry-farm.jpg";

const places = [
  {
    title: "Burnham Park",
    description:
      "Here’s the first on our list: Burnham Park. This sprawling green space lies at the very heart of Baguio, making it a beloved destination for both locals and tourists. It offers a peaceful retreat where you can bask in nature’s beauty while enjoying a variety of activities. The man-made lake is perfect for boating, and the park’s vibrant flower gardens create a picturesque setting for leisurely strolls. Families often gather here for picnics, taking advantage of the ample shady trees and the serene atmosphere.",
    image: BurnhamPark,
  },
  {
    title: "Mines View Park",
    description:
      "Mines View Park is a must-visit for its breathtaking panoramic views of the surrounding mountains and lush valleys. The park’s elevated location makes it an excellent spot to catch the sunrise or sunset, providing a magical start or end to your day. Visitors often find themselves captivated by the scenery, which also serves as a stunning backdrop for photos. The area is dotted with souvenir shops where you can purchase locally crafted goods, adding a touch of Baguio to your trip.",
    image: MinesViewPark,
  },
  {
    title: "Camp John Hay",
    description:
      "Known for its towering pine trees and tranquil atmosphere, Camp John Hay is a haven for nature lovers and history buffs alike. The eco-trails are perfect for relaxing walks amidst the greenery, while the historical Bell House and amphitheater offer a glimpse into the area’s rich past. Al fresco dining spots provide the perfect opportunity to enjoy delicious meals while surrounded by nature.",
    image: CampJohnHay,
  },
  {
    title: "Botanical Garden",
    description:
      "The Botanical Garden is a sanctuary for plant enthusiasts and those seeking a serene escape. This verdant haven features a diverse collection of flowers, shrubs, and towering trees, making it an ideal location for photography and quiet reflection. Visitors can also explore traditional huts that highlight Baguio’s indigenous culture, adding a cultural dimension to their visit. The calm ambiance and lush surroundings make it a favorite spot for unwinding.",
    image: BotanicalGarden,
  },
  {
    title: "Wright Park",
    description:
      "Wright Park is known for its long pool of water flanked by towering pine trees, offering a tranquil escape from the city’s hustle and bustle. The park’s serene atmosphere and fresh mountain air make it an excellent place to relax. Horseback riding is a popular activity here, especially for families with children. The park’s picturesque surroundings also make it a favorite among photographers and nature lovers.",
    image: WrightPark,
  },
  {
    title: "Mirador Heritage And Eco Park",
    description:
      "Mirador Heritage And Eco Park is a lesser-known gem that provides an immersive experience in nature, away from the usual tourist crowds. Its winding trails lead through serene pine forests, making it an ideal spot for hiking or quiet reflection. The park’s peaceful environment is perfect for picnics or simply enjoying the natural beauty of the area.",
    image: BaguioEcoPark,
  },
  {
    title: "La Trinidad Strawberry Farms",
    description:
      "While not technically in Baguio, the nearby strawberry farms in La Trinidad offer a delightful experience for nature and food enthusiasts. The farms are known for their lush fields and fresh strawberries, which visitors can pick straight from the plants. The scenic views of the farmland, framed by rolling mountains, add to the charm of the experience.",
    image: StrawberryFarms,
  },
];

const PlacesToVisit = () => {
    useEffect(() => {
        feather.replace();
      }, []);

  return (
    <div className="places-container">
      {/* Banner Image */}
      <div class="banner">
        <div class="banner-image"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation">
        <button className="nav-button" onClick={() => (window.location.href = "/home")}>
          Home
        </button>
        <i  className="arrow" data-feather="arrow-right-circle"></i>
        <button className="nav-button active">Where to go?</button>
      </div>

      {/* Page Title */}
      <h1>Why You Should Visit Baguio’s Stunning Natural Attractions</h1>

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

export default PlacesToVisit;