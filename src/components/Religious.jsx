import React,  { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import "../styles/Religious.scss";
import feather from 'feather-icons';
import Kalugong from "../assets/Religious&Spiritual/MountKalugong.jpg";
import Bell from "../assets/Religious&Spiritual/bellchurch.jpg";
import Cemetery from "../assets/Religious&Spiritual/cemetery.jpg";
import Diplomat from "../assets/Religious&Spiritual/diplomat.jpg";
import Grotto from "../assets/Religious&Spiritual/grotto.jpg";
import Maryknoll from "../assets/Religious&Spiritual/maryknoll.jpg";
import Pink from "../assets/Religious&Spiritual/pinksisters.jpg";
import Sagada from "../assets/Religious&Spiritual/sagada.jpg";
import TamAwan from "../assets/Religious&Spiritual/tamawan.jpg";
import Cathedral from "../assets/Religious&Spiritual/cathedral.png";

const places = [
  {
    title: "Visit Our Lady of the Atonement Cathedral (Baguio Cathedral)",
    description:
      "Towering over Session Road with its pink façade and twin spires, Baguio Cathedral is one of the city's most iconic landmarks. Whether you're attending mass or simply seeking a moment of stillness, this church offers a peaceful refuge amid the urban buzz. Climb the 100+ steps leading up to the entrance and take in a panoramic view of downtown Baguio—it's a place where prayer and perspective meet.",
    image: Cathedral,
    hours: "Open 5:00 AM - 7:00 PM",
    fees: "Fees: N/A",
    mapsLink: "https://www.google.com/maps?q=Baguio+Cathedral"
  },
  {
    title: "Meditate at the Bell Church",
    description:
      "Just past the Baguio-La Trinidad boundary lies the serene Bell Church, a Taoist temple known for its colorful dragons, ornate architecture, and peaceful gardens. The space invites quiet meditation, reflection, and even a peek into Chinese zodiac signs. It’s a beautiful fusion of culture and spirituality, making it a tranquil stop for those seeking balance and insight.",
    image: Bell,
    hours: "Open 7:00 AM - 5:00 PM",
    fees: "Fees: N/A",
    mapsLink: "https://www.google.com/maps?q=Baguio+Bell+Church"
  },
  {
    title: "Climb Mount Kalugong for Sunrise Reflections",
    description:
      "While not a temple, Mount Kalugong in nearby La Trinidad offers a deeply spiritual experience—especially if you hike up before dawn. As the sun rises over pine-covered cliffs and boulder formations, you’ll find a perfect spot for contemplation, journaling, or silent prayer, far from distractions. The energy here feels sacred, natural, and grounding.",
    image: Kalugong,
    hours: "Open 7:00 AM - 6:00 PM",
    fees: "Fees: P80 - P100",
    mapsLink: "https://www.google.com/maps?q=Baguio+Mount+Kalugong"
  },
  {
    title: "Pray at the Lourdes Grotto",
    description:
      "Take a quiet pilgrimage up the 252-step staircase to the Lourdes Grotto, a Catholic shrine dedicated to the Virgin Mary. Many light candles or say the Rosary here, making it a place where personal intentions are offered in heartfelt silence. The city view from the top is an added blessing.",
    image: Grotto,
    hours: "Open 7:00 AM - 7:00 PM",
    fees: "Fees: N/A",
    mapsLink: "https://www.google.com/maps?q=Baguio+Lourdes+Grotto"
  },
  {
    title: "Light Incense at the Maryknoll Ecological Sanctuary",
    description:
      "The Maryknoll Ecological Sanctuary is a lesser-known gem for spiritual seekers. It’s a place that combines faith, ecology, and healing. Walk the “Cosmic Journey Trail”, light incense in the Earth Chapel, or just rest in the garden surrounded by butterflies and birds. It’s ideal for spiritual retreats or solo inner work.",
    image: Maryknoll,
    hours: "Open 8:30 AM - 4:30 PM",
    fees: "Fees: P50",
    mapsLink: "https://www.google.com/maps?q=Baguio+Maryknoll+Ecological+Sanctuary"
  },
  {
    title: "Attend a Healing Mass or Retreat at the Pink Sisters Convent",
    description:
      "Located along Brent Road, the Pink Sisters Convent is home to an order of contemplative nuns known for their intercessory prayers. The chapel is quiet and reverent, and visitors often leave prayer petitions in the designated box. The stillness here—along with the sweet hymns from cloistered sisters—is deeply moving.",
    image: Pink,
    hours: "Open 5:30 AM – 11 AM & 1:00 PM – 3:30 PM",
    fees: "Fees: N/A",
    mapsLink: "https://www.google.com/maps?q=Baguio+Pink+Sisters+Convent"
  },
  {
    title: "Explore the Anglican St. Mary the Virgin Church in Sagada (Side Trip)",
    description:
      "If you're willing to take a spiritual detour from Baguio to Sagada, the St. Mary the Virgin Church offers an inspiring blend of Anglican tradition and mountain mystique. Its architecture, forested grounds, and historical significance make it a sacred destination nestled in the highlands. Pair it with visits to Echo Valley and the Hanging Coffins for a full spiritual journey.",
    image: Sagada,
    hours: "Open 11:00 AM - 3:00 PM",
    fees: "Fees: N/A",
    mapsLink: "https://www.google.com/maps?q=Sagada+St+Mary+The+Virgin+Church"
  },
  {
    title: "Take a Silent Walk Through the Cemetery of Negativism",
    description:
      "Inside Camp John Hay, this tongue-in-cheek cemetery is filled with mock tombstones bearing negative thoughts—“I Can’t Do It” and “It’s Impossible” are just some of the things symbolically laid to rest. It’s a fun yet thought-provoking stop that reminds us to let go of limiting beliefs and start fresh.",
    image: Cemetery,
    hours: "Open 9:00 AM - 6:00 PM",
    fees: "Fees: N/A",
    mapsLink: "https://www.google.com/maps?q=Baguio+Cemetery+Of+Negativism"
  },
  {
    title: "Reflect at the Dominican Hill Retreat House (Diplomat Hotel)",
    description:
      "Once a seminary and later a hotel, the now-ruined Diplomat Hotel on Dominican Hill carries both historic and spiritual weight. Many visitors come here for the panoramic views and its eerie but sacred aura. Despite ghost stories, the place invites deep reflection on impermanence, memory, and rebirth.",
    image: Diplomat,
    hours: "Open 7:00 AM - 5:00 PM",
    fees: "Fees: N/A",
    mapsLink: "https://www.google.com/maps?q=Baguio+Diplomat+Hotel"
  },
  {
    title: "Visit Tam-awan Village for Cordilleran Spirituality",
    description:
      "Tam-awan isn’t a religious site in the traditional sense, but its indigenous Ifugao huts, sacred rituals, and native artworks open a window into the spiritual lives of the Cordilleran people. Join a guided tour, watch an ancestral dance, or simply sit in quiet respect for the traditions that continue to shape this region’s soul.",
    image: TamAwan,
    hours: "Open 7:00 AM - 8:00 PM",
    fees: "Fees: P20 - P50",
    mapsLink: "https://www.google.com/maps?q=Baguio+Tamawan+Village"
  },
];

const Religious = () => {
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
        <div class="banner-image-religious"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation">
        <button className="nav-button" onClick={() => navigate("/")}>
          Home
        </button>
        <i className="arrow" data-feather="arrow-right-circle"></i>
        <button className="nav-button active">Religious & Spiritual</button>
      </div>

      {/* Page Title */}
      <h1>Religious and Spiritual Things to Do in Baguio for Soulful Travelers</h1>
      <p className="desc">Baguio is more than just cool weather, cozy cafés, and pine-covered hills—it's also a city deeply rooted in faith, reflection, and healing. Whether you're looking to attend mass in a century-old cathedral, light a candle in a quiet grotto, or simply find a moment of stillness among the trees, Baguio offers countless spaces for spiritual nourishment.</p>

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

export default Religious;