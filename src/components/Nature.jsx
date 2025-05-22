import React,  { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import "../styles/Nature.scss";
import feather from 'feather-icons';
// import BannerImage from "../assets/Nature/banner-image.png";
import BurnhamPark from "../assets/Nature/burnham-park.jpg";
import MinesViewPark from "../assets/Nature/minesview-park.png";
import CampJohnHay from "../assets/Nature/camp-john-hay.jpg";
import BotanicalGarden from "../assets/Nature/botanical-garden.png";
import WrightPark from "../assets/Nature/wright-park.jpeg";
import BaguioEcoPark from "../assets/Nature/baguio-eco-park.jpg";
import Maryknoll from "../assets/Nature/maryknoll.jpg";
import Bamboo from "../assets/Nature/bamboo.jpg";
import StrawberryFarm from "../assets/Nature/strawberry-farm.jpg";

const places = [
  {
    title: "Burnham Park",
    description:
      "This sprawling green space lies at the very heart of Baguio, making it a beloved destination for both locals and tourists. It offers a peaceful retreat where you can bask in nature’s beauty while enjoying a variety of activities. The man-made lake is perfect for boating, and the park’s vibrant flower gardens create a picturesque setting for leisurely strolls. Families often gather here for picnics, taking advantage of the ample shady trees and the serene atmosphere.",
    image: BurnhamPark,
    hours: "Open 24hrs daily",
    fees: "Entrance Fee: P0 | Pay Parking",
    mapsLink: "https://www.google.com/maps?q=Burnham+Park+Baguio"
  },
  {
    title: "Mines View Park",
    description:
      "Mines View Park is a must-visit for its breathtaking panoramic views of the surrounding mountains and lush valleys. The park’s elevated location makes it an excellent spot to catch the sunrise or sunset, providing a magical start or end to your day. Visitors often find themselves captivated by the scenery, which also serves as a stunning backdrop for photos. The area is dotted with souvenir shops where you can purchase locally crafted goods.",
    image: MinesViewPark,
    hours: "Open daily, 6:00 AM – 8:00 PM",
    fees: "Entrance Fee: P5 - P10 | Free Parking",
    mapsLink: "https://www.google.com/maps?q=Mines+View+Park+Baguio"
  },
  {
    title: "Camp John Hay",
    description:
      "Known for its towering pine trees and tranquil atmosphere, Camp John Hay is a haven for nature lovers and history buffs alike. The eco-trails are perfect for relaxing walks amidst the greenery, while the historical Bell House and amphitheater offer a glimpse into the area’s rich past. Al fresco dining spots provide the perfect opportunity to enjoy delicious meals while surrounded by nature.",
    image: CampJohnHay,
    hours: "Open daily, 6:00 AM – 7:00 PM",
    fees: "Entrance Fee: P0 | Free and Pay Parking",
    mapsLink: "https://www.google.com/maps?q=Camp+John+Hay+Park+Baguio"
  },
  {
    title: "Botanical Garden",
    description:
      "The Botanical Garden is a sanctuary for plant enthusiasts and those seeking a serene escape. This verdant haven features a diverse collection of flowers, shrubs, and towering trees, making it an ideal location for photography and quiet reflection. Visitors can also explore traditional huts that highlight Baguio’s indigenous culture, adding a cultural dimension to their visit. The calm ambiance and lush surroundings make it a favorite spot for unwinding.",
    image: BotanicalGarden,
    hours: "Open daily, 6:00 AM – 6:00 PM",
    fees: "Entrance Fee: P25 - P100 | Pay Parking",
    mapsLink: "https://www.google.com/maps?q=Botanical+Garden+Baguio"
  },
  {
    title: "Wright Park",
    description:
      "Wright Park is known for its long pool of water flanked by towering pine trees, offering a tranquil escape from the city’s hustle and bustle. The park’s serene atmosphere and fresh mountain air make it an excellent place to relax. Horseback riding is a popular activity here, especially for families with children. The park’s picturesque surroundings also make it a favorite among photographers and nature lovers.",
    image: WrightPark,
    hours: "Open daily, 9:30 AM – 7:00 PM",
    fees: "Entrance Fee: P0 | Free Parking",
    mapsLink: "https://www.google.com/maps?q=Wright+Park+Baguio"
  },
  {
    title: "Mirador Heritage And Eco Park",
    description:
      "Mirador Heritage And Eco Park is a lesser-known gem that provides an immersive experience in nature, away from the usual tourist crowds. Its winding trails lead through serene pine forests, making it an ideal spot for hiking or quiet reflection. The park’s peaceful environment is perfect for picnics or simply enjoying the natural beauty of the area.",
    image: BaguioEcoPark,
    hours: "Open daily, 6:00 AM – 6:00 PM",
    fees: "Entrance Fee: P50 - P100 | Pay Parking",
    mapsLink: "https://www.google.com/maps?q=Mirador+Heritage+Baguio"
  },
  {
    title: "Maryknoll Ecological Sanctuary",
    description:
      "Maryknoll Ecological Sanctuary is a peaceful haven tucked away in the outskirts of the city, ideal for travelers seeking quiet reflection and a deeper connection with nature. This tranquil spot offers lush gardens, forest trails, and a “cosmic journey” trail that takes visitors through interactive stations highlighting the story of creation and humanity's role in caring for the Earth. It’s not just a nature walk—it’s an experience that blends ecology, spirituality, and education.",
    image: Maryknoll,
    hours: "Open daily, 8:30 AM – 4:30 PM",
    fees: "Entrance Fee: P35 - P50 | Pay Parking",
    mapsLink: "https://www.google.com/maps?q=Maryknoll+Ecological+Sanctuary"
  },
  {
    title: "Bamboo Sanctuary",
    description:
      "Tucked away in a quiet part of Baguio, the Bamboo Sanctuary offers a peaceful retreat for those looking to reconnect with nature. Walking through the towering bamboo groves, you’ll feel like you’ve stepped into a zen-inspired forest. The light filtering through the green stalks creates a calming, almost meditative atmosphere—perfect for relaxing strolls or introspective moments. This hidden gem is also a favorite spot for casual photoshoots thanks to its unique aesthetic and tranquil ambiance. It’s an ideal escape from the hustle of downtown Baguio.",
    image: Bamboo,
    hours: "Open Friday - Sunday, 7:30 AM – 4:30 PM",
    fees: "Entrance Fee: Any amount will do (For Donations) | Pay Parking",
    mapsLink: "https://www.google.com/maps?q=Baguio+Educational+Demo+Farm+Sanctuary"
  },
  {
    title: "La Trinidad Strawberry Farm",
    description:
      "While not technically in Baguio, the nearby strawberry farms in La Trinidad offer a delightful experience for nature and food enthusiasts. The farms are known for their lush fields and fresh strawberries, which visitors can pick straight from the plants. The scenic views of the farmland, framed by rolling mountains, add to the charm of the experience.",
    image: StrawberryFarm,
    hours: "Open daily, 9:00 AM – 5:00 PM",
    fees: "Entrance Fee: P0 | Free Parking",
    mapsLink: "https://www.google.com/maps?q=La+Trinidad+Strawberry+Farm"
  },
];

const Nature = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
        const navigate = useNavigate();
    
        useEffect(() => {
        feather.replace();
    
        const handleScroll = () => {
          setShowTopBtn(window.scrollY > 300);
        };
    
        window.addEventListener("scroll", handleScroll);
        AOS.init({ duration: 800, once: true });
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
        AOS.init({
            duration: 800,
            once: true
          });
        feather.replace();
    
        const scrollToTop = () => {
            window.scrollTo({
            top: 0,
            behavior: "smooth",
            });
        };

  return (
    <div className="places-container">
      {/* Banner Image */}
      <div class="banner">
        <div class="banner-image-nature"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation">
        <button className="nav-button" onClick={() => navigate("/")}>
          Home
        </button>
        <i className="arrow" data-feather="arrow-right-circle"></i>
        <button className="nav-button active">Nature</button>
      </div>

      {/* Page Title */}
      <h1>Explore Baguio’s Natural Wonders</h1>
      <p className="desc">Baguio City isn’t just about cool weather and pine trees — it’s a sanctuary for nature lovers looking to slow down, breathe fresh mountain air, and reconnect with the earth. From scenic parks and lush gardens to hidden eco-spots and panoramic viewpoints, the City of Pines offers a refreshing escape at every turn. Whether you're up for a morning stroll among flowers, paddling a boat under the sun, or hiking quiet forest trails, these natural gems showcase the peaceful and vibrant side of Baguio. Ready to explore?</p>

      {/* List of Places */}
      {places.map((place, index) => (
        <div
          className={`place-card ${index % 2 === 0 ? "image-left" : "image-right"}`}
          key={index}
          data-aos="fade-up"
        >
          <img src={place.image} alt={place.title} className="place-image" />
          <div className="place-details">
            <h2>{place.title}</h2>
            <p>{place.description}</p>
            {/* Info */}
            <p className="info-line">
              <i data-feather="clock" className="icon"></i>
              <span>{place.hours}</span>
            </p>
            <p className="info-line">
              <i data-feather="credit-card" className="icon"></i>
              <span>{place.fees}</span>
            </p>
            {/* Directions */}
            <a
            href={place.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="get-directions-button"
            >
            <i className="icon" data-feather="map-pin"></i> Get Directions
          </a>
          </div>
        </div>
      ))}

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i data-feather="arrow-up-circle"></i>
        </button>
      )}
    </div>
  );
};

export default Nature;