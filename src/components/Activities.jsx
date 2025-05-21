import React,  { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import "../styles/Activities.scss";
import feather from 'feather-icons';
import Boat from "../assets/Activities/boat.jpg";
import Bikes from "../assets/Activities/bikes.jpg";
import Chalk from "../assets/Activities/chalk.png";
import Grotto from "../assets/Activities/grotto.jpg";
import Horse from "../assets/Activities/horse.jpg";
import NightMarket from "../assets/Activities/night-market.png";
import Strawberries from "../assets/Activities/strawberries.jpg";
import Trail from "../assets/Activities/trail.jpg";
import SkyRanch from "../assets/Activities/skyranch.jpg";
import Busking from "../assets/Activities/busking.png";

const places = [
  {
    title: "Paddling at Burnham Park",
    description:
      "One of the most iconic experiences in Burnham Park is paddling on its man-made lake. Whether you choose a swan-shaped pedal boat or a traditional rowboat, gliding across the calm waters offers a fun and peaceful escape in the heart of the city. It’s a great way to unwind, especially in the late afternoon when the golden light reflects off the water. Couples, families, and solo travelers alike enjoy this relaxing activity as a way to soak in Baguio’s charm from a unique vantage point.",
    image: Boat,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Fees: 120 - P500 boat rental",
    mapsLink: "https://www.google.com/maps?q=Baguio+Burnham+Lake"
  },
  {
    title: "Biking Around Burnham Park",
    description:
      "For something more active, Burnham Park’s tree-lined biking paths are perfect for a leisurely ride. You’ll find rental bikes of all kinds—from single-speed cruisers to quirky tandem bikes and even kiddie trikes. The cool mountain air and scenic surroundings make biking around the park a refreshing way to explore. It’s a favorite pastime for both locals and visitors, especially in the mornings when the park comes alive with activity. Whether you’re riding solo or with friends, biking in Burnham is a classic Baguio experience.",
    image: Bikes,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Fees: P50 - P300 rental",
    mapsLink: "https://www.google.com/maps?q=Baguio+Burnham+Park+Biking"
  },
    {
    title: "Ride Through the Pines at Wright Park",
    description:
      "With its towering pine trees and cool mountain breeze, Wright Park is a beloved destination for horseback riding in Baguio. The area comes alive with the gentle rhythm of hooves and the chatter of excited riders choosing their horses. Whether you're trotting around the riding circle or venturing out on the scenic trails, the experience blends adventure with a touch of nostalgia. It’s a chance to slow down, connect with nature, and enjoy a classic Baguio activity that’s as timeless as the pines themselves.",
    image: Horse,
    hours: "Open 6:00 AM - 8:00 PM",
    fees: "Fees: P200 - P300 per hour",
    mapsLink: "https://www.google.com/maps?q=Baguio+Wright+Park+Horse+Stables"
  },
    {
    title: "Hike the Yellow Trail in Camp John Hay",
    description:
      "If you’re craving forest air and quiet trails, the Yellow Trail (also called the Eco-Trail) in Camp John Hay is for you. This light hiking path is surrounded by dense pine trees and offers occasional glimpses of the city — minus the crowds. Along the path, you'll encounter art installations, rustic benches, and glimpses of the Cordillera mountain ranges, creating a harmonious blend of natural beauty and human creativity. Whether you're seeking solitude or a leisurely walk with loved ones, the Yellow Trail provides a rejuvenating experience that reconnects you with the tranquility of the natural world.",
    image: Trail,
    hours: "Open 24hrs daily",
    fees: "Fees: P0",
    mapsLink: "https://www.google.com/maps?q=Baguio+John+Hay+Yellow+Trail"
  },
    {
    title: "Pick Your Own Strawberries in La Trinidad",
    description:
      "Nestled in the heart of Benguet, the strawberry farms of La Trinidad offer a refreshing break from the city’s bustle. Rows of vibrant green plants stretch across the cool valley, each dotted with bright red berries ready to be picked. It’s a hands-on experience where visitors can roam the fields, gather their own strawberries, and take in the sights and scents of the countryside. The joy of harvesting fruit straight from the vine—paired with the scenic mountain backdrop—makes this activity both relaxing and unforgettable.",
    image: Strawberries,
    hours: "Open 6:00 AM - 8:00 PM",
    fees: "Fees: P500 - P800 per kg",
    mapsLink: "https://www.google.com/maps?q=La+Trinidad+Strawberry+Farm"
  },
    {
    title: "Climb the Steps to the Lourdes Grotto",
    description:
      "A trip to Baguio isn’t complete without the rewarding climb up the 252 steps leading to the Our Lady of Lourdes Grotto. This religious landmark draws both pilgrims and tourists who take the stairs as a form of devotion, reflection, or simply a physical challenge with a spiritual reward. As you ascend, the cityscape slowly comes into view, and the crisp mountain air makes each step feel refreshing despite the effort. At the top, visitors are greeted by a serene statue of the Virgin Mary and a panoramic view of the surrounding hills. It’s a peaceful spot to light a candle, say a prayer, or just catch your breath and take in the view.",
    image: Grotto,
    hours: "Open 6:00 AM - 7:30 PM daily",
    fees: "Fees: P0",
    mapsLink: "https://www.google.com/maps?q=Baguio+Lourdes+Grotto"
  },
    {
    title: "Chalk Art in Session Road: Baguio's Street Canvas Comes Alive",
    description:
      "Every Sunday, Session Road transforms into a canvas where chalk art takes the spotlight. Local artists, children, and curious passersby bring the pavement to life with vibrant colors and creative designs—from playful sketches to detailed masterpieces. It’s a fleeting yet powerful display of Baguio’s artistic soul, inviting everyone to pause, admire, or even pick up a piece of chalk and leave their own mark.sc",
    image: Chalk,
    hours: "Open 8:00 AM - 3:00 PM | Sundays only",
    fees: "Fees: P0",
    mapsLink: "https://www.google.com/maps?q=Baguio+Session+Road+Artist+Lane"
  },
    {
    title: "Busking in Session: The Soundtrack of Baguio Sundays",
    description:
      "Session Road doesn’t just burst with color on Sundays—it sings, too. Local musicians and street performers take to the sidewalks, filling the air with acoustic melodies, soulful vocals, and captivating rhythms. Busking has become a beloved part of Baguio’s weekend culture, offering raw, heartfelt performances that turn an ordinary stroll into an unforgettable experience.",
    image: Busking,
    hours: "Open 8:00 AM - 3:00 PM | Sundays only",
    fees: "Fees: P0",
    mapsLink: "https://www.google.com/maps?q=Baguio+Session+Road"
  },
    {
    title: "SM Sky Ranch Baguio",
    description:
      "Perched beside SM City Baguio, Sky Ranch offers a fun and family-friendly amusement experience right in the heart of the city. This mini theme park features a variety of rides for all ages—including a Ferris wheel that gives you a panoramic view of Baguio’s pine-covered hills, carousel rides, and thrill rides like bumper cars and mini coasters. With its cool mountain breeze and scenic backdrop, it’s a great spot to take a break from nature-hopping and enjoy a few hours of laughter and excitement. Plus, the convenience of nearby dining and shopping options makes it easy to turn your visit into a full day out.",
    image: SkyRanch,
    hours: "Open 10:00 AM - 10:00 PM",
    fees: "Fees: P50 - P300",
    mapsLink: "https://www.google.com/maps?q=Baguio+SM+Sky+Ranch"
  },
    {
    title: "Baguio Night Market ",
    description:
      "As the sun sets and the mountain air gets cooler, Harrison Road transforms into Baguio’s most energetic night-time attraction — the Baguio Night Market. Open daily from 9:00 PM, this bustling stretch is lined with stalls selling everything from thrifted clothes and vintage jackets to accessories, toys, and souvenirs. The hunt for great ukay-ukay (pre-loved) fashion finds is part of the thrill, with locals and tourists alike rummaging through rows of affordable and stylish items. But it's not just about shopping — the aroma of street food favorites like grilled isaw, shawarma, and strawberry taho fills the air, turning your late-night stroll into a food trip as well. The vibe is lively, the deals are real, and the experience is uniquely Baguio.",
    image: NightMarket,
    hours: "Open 9:00 PM - 2:00 AM daily",
    fees: "Fees: P0",
    mapsLink: "https://www.google.com/maps?q=Baguio+Night+Market"
  },
];

const Activities = () => {
    useEffect(() => {
        feather.replace();
      }, []);

    const navigate = useNavigate();
      AOS.init({
        duration: 800,
        once: true
      });
    feather.replace();


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
      <p className="desc">Baguio City isn’t just the Summer Capital of the Philippines — it’s a haven for adventurers, nature lovers, and bargain hunters. Whether you're chasing thrills, scenic views, or the best thrift finds, Baguio offers a mix of cool-weather experiences you won’t forget.</p>

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
    </div>
  );
};

export default Activities;