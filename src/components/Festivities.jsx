import React,  { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import "../styles/Festivities.scss";
import feather from 'feather-icons';
import Baguio from "../assets/Festivities/baguio-day.jpg";
import Christmas from "../assets/Festivities/christmas.jpg";
import Cosplay from "../assets/Festivities/cosplay.jpg";
import Halloween from "../assets/Festivities/halloween.jpg";
import Ibagiw from "../assets/Festivities/ibagiw.jpg";
import Panagbenga from "../assets/Festivities/panagbenga.jpg";
import Pride from "../assets/Festivities/pride.jpg";
import Saleng from "../assets/Festivities/saleng.jpg";
import Session from "../assets/Festivities/session.jpg";
import Strawberry from "../assets/Festivities/strawberry.jpg";
import Sumvac from "../assets/Festivities/sumvac.jpg";
import Float from "../assets/Festivities/float.jpg";
import Market from "../assets/Festivities/market.jpg";
import Panagbengascapes from "../assets/Festivities/panagbengascapes.jpg";
import Lantern from "../assets/Festivities/lantern.jpg";

const places = [
  {
    title: "Panagbenga Festival (Flower Festival) Grand Parade",
    description:
      "No list of Baguio events is complete without the Panagbenga Festival, one of the country’s grandest and most beloved celebrations. Panagbenga is a Kankanaey term meaning “season of blooming,” and that's exactly what the city does—burst into bloom. The entire city comes alive with color and creativity. The highlight? A spectacular grand float parade, where intricately designed floats made entirely of fresh flowers roll through the streets, followed by energetic street dancing featuring dancers in vibrant Cordilleran costumes. Expect Session Road to be closed to traffic and turned into a pedestrian-only fiesta, with food stalls, live performances, and family-friendly activities. It’s festive, joyful, and very much a celebration of life, nature, and culture.",
    image: Panagbenga,
    where: "Baguio",
    date: "February 1",
  },
  {
    title: "Panagbengascapes: Landscaping Competition and Exhibition",
    description:
      "During the Panagbenga season, Baguio transforms into a living canvas with the Panagbengascapes Landscaping Competition. Local artists, gardeners, and designers bring out their best to craft breathtaking floral installations and eco-themed exhibits. Stroll through Baguio Botanical Garden and Panagbenga Park, and you’ll find whimsical plant sculptures, bonsai displays, and garden designs that reflect both Cordilleran culture and environmental creativity. It’s a quiet, peaceful contrast to the parades—perfect for nature lovers and those looking to slow down and take in the artistry of the land.",
    image: Panagbengascapes,
    where: "Baguio Botanical Garden & Panagbenga Park",
    date: "February 1 – March 2",
  },
  {
    title: "Baguio Blooms: A Market Encounter",
    description:
      "Looking for local finds and fresh flowers? Then the Baguio Blooms Market Encounter is where you want to be. Held at the Melvin Jones Grandstand, this fair features a vibrant mix of flower stalls, local crafts, regional delicacies, and eco-friendly products. It’s a delightful way to experience the entrepreneurial and artistic side of Baguio, with every booth offering something handmade, heartfelt, or homegrown. Whether you're shopping for souvenirs, sampling strawberry jams, or snapping selfies with giant floral arches—this spot is always buzzing with energy.",
    image: Market,
    where: "Melvin Jones Grandstand",
    date: "February 1 – March 2",
  },
  {
    title: "Panagbenga Grand Float Parade",
    description:
      "A day after the street dance spectacle, the Grand Float Parade takes over Session Road with a dazzling display of flower-covered floats that rival the beauty of any world-class parade. Each float is a mobile masterpiece, blending local themes with bursts of color and creative flair, often accompanied by costumed performers and marching bands. It's Baguio’s own floral fantasyland rolling down the streets—and a photo opportunity you won't want to miss. Be sure to arrive early and grab a good viewing spot; it’s one of the most beloved moments of the whole festival.",
    image: Float,
    where: "Session Road",
    date: "February 25",
  },
  {
    title: "Session in Bloom",
    description:
      "As a finale to the Panagbenga Festival, Session in Bloom turns the heart of Baguio into a vibrant street market and cultural space. For one week, Session Road is closed off to vehicles and opened up to pedestrians, artisans, food stalls, and performers. This is where you’ll find local handicrafts, indigenous textiles, hand-carved souvenirs, and a dizzying array of street food—longganisa on sticks, strawberry-flavored treats, ube desserts, and so much more. There’s also live music and dance, making the entire stretch feel like an open-air festival. It’s one of the best ways to enjoy Baguio like a local.",
    image: Session,
    where: "Session Road",
    date: "February 25 – March 2",
  },
  {
    title: "Strawberry Festival (La Trinidad)",
    description:
      "Though technically in La Trinidad, the Strawberry Festival is a short trip away and totally worth the detour. Known for producing some of the best strawberries in the country, La Trinidad celebrates its berry bounty with fruit-themed floats, the world’s biggest strawberry cake, and of course, plenty of strawberry-picking activities. Local farmers set up booths selling strawberry jams, wine, pastries, and souvenirs. It’s also a great time to learn about Benguet agriculture and enjoy scenic views of the strawberry fields. Come early for the freshest fruits and stay for the colorful community parades.",
    image: Strawberry,
    where: "La Trinidad, Benguet (15–20 mins from Baguio)",
    date: "March 3 – 29",
  },
  {
    title: "Baguio Summer Vacation (SUMVAC)",
    description:
      "Every summer, Baguio becomes a haven for families escaping the scorching heat of the lowlands. To make this annual migration more exciting, the city holds SUMVAC (Summer Vacation in Baguio)—a series of concerts, public art events, sports competitions, and cultural presentations. Expect outdoor movie nights at parks, acoustic nights at open-air cafes, biking and skating competitions at Burnham Park, and local markets celebrating Cordilleran food and crafts. SUMVAC isn’t one singular event—it’s a whole season of summer fun in the highlands.",
    image: Sumvac,
    where: "Citywide ",
    date: "March 26 – May 25",
  },
  {
    title: "Saleng Festival (Environmental Festival)",
    description:
      "Saleng is the Ilocano word for pine tree—one of Baguio’s most iconic symbols. The Saleng Festival celebrates environmental awareness, sustainability, and reforestation efforts. It’s a newer city initiative but growing steadily in popularity. Activities include tree planting drives, eco-art installations, bike-for-a-cause events, and clean-up campaigns. If you’re an eco-conscious traveler, June is the perfect time to give back to the city by joining one of these efforts.",
    image: Saleng,
    where: "Citywide ",
    date: "June",
  },
  {
    title: "Pride Month in Baguio",
    description:
      "Baguio celebrates Pride Month every June with events that are heartfelt, artistic, and deeply community-driven. The highlight is the Pride March, where LGBTQIA+ folks and allies walk proudly through Session Road, waving rainbow flags and sharing messages of love and equality. Local venues like Ili-Likha Artist Village and Mt. Cloud Bookshop often host drag shows, open mics, art exhibits, and forums on LGBTQIA+ rights. There are also pride-themed pop-ups selling handmade merch and crafts. It may not be the flashiest Pride celebration, but in true Baguio fashion—it’s warm, creative, and full of soul.",
    image: Pride,
    where: "Session Road, Burnham Park, Ili-Likha",
    date: "June 14 – 15",
  },
  {
    title: "Baguio Charter Day",
    description:
      "On September 1, Baguio marks the day it officially became a chartered city in 1909. What follows is a civic celebration that blends pride, tradition, and community. The day begins with a parade, usually led by city officials and various sectors, followed by cultural showcases, environmental programs, and award ceremonies honoring outstanding citizens. It’s a more laid-back, introspective celebration compared to Panagbenga—but no less meaningful. For residents, Charter Day is about honoring Baguio’s journey and identity as a melting pot of highland and lowland cultures.",
    image: Baguio,
    where: "City Hall and public venues",
    date: "September 1",
  },
  {
    title: "Baguio Cosplay Festival",
    description:
      "Baguio's creative spirit shines during the Baguio Cosplay Festival, an annual event officially institutionalized by the city in 2024. Held along the iconic Session Road, the festival features vibrant cosplay parades, anime-themed booths, and interactive activities that celebrate pop culture and artistic expression. Highlights include a mascot and inflatable race, cosplay competitions, and performances by local bands. The festival's official mascot, Ngeyaw—a lion in a kimono inspired by Baguio's Lion's Head—symbolizes the city's blend of tradition and creativity.",
    image: Cosplay,
    where: "Session Road",
    date: "October 27",
  },
  {
    title: "University of Baguio Halloween Parade (Karkarna ti Rabii)",
    description:
      "Every October, the University of Baguio brings Philippine folklore to life with its annual Halloween parade, Karkarna ti Rabii—Ilocano for “Creatures of the Night.” This vibrant event features students dressed as mythical beings like the kapre, manananggal, and tikbalang, parading down Session Road in elaborate costumes often made from recycled materials. The parade includes choreographed performances and aims to celebrate and raise awareness of the country's rich oral traditions and legends.",
    image: Halloween,
    where: "Session Road",
    date: "Last Friday of October",
  },
  {
    title: "Baguio Creative Festival (Ibagiw Festival)",
    description:
      "As a UNESCO Creative City, Baguio has proudly nurtured its identity as a hub for artists, artisans, and cultural workers. Every November, the city puts its creative pulse on full display during the Ibagiw Creative Festival. This month-long celebration showcases indigenous crafts, contemporary art, music, poetry, and even culinary arts. From art installations at Ili-Likha and the Baguio Convention Center to weaving and pottery demos in Tam-Awan, the festival creates spaces where tradition and innovation meet. It’s a perfect event for creatives, culture buffs, and anyone looking to witness how art thrives in the highlands.",
    image: Ibagiw,
    where: "Multiple venues",
    date: "November 8 - December 8",
  },
  {
    title: "SLU Lantern Parade",
    description:
      "Every December 1st, Baguio's holiday season officially begins with the Saint Louis University (SLU) Lantern Parade. This annual event features a vibrant procession of student-made lanterns, each showcasing creativity and cultural themes. The parade typically starts along Session Road and culminates at the Melvin Jones Grandstand, illuminating the city with festive lights and community spirit. It's a cherished tradition that brings together locals and visitors to celebrate the joy of the season.",
    image: Lantern,
    where: "Session Road to Melvin Jones Grandstand",
    date: "December 1",
  },
  {
    title: "An Enchanting Baguio Christmas",
    description:
      "There’s no better place to feel the spirit of the holidays than in the cool, festive atmosphere of Christmas in Baguio. With the city’s chilly December weather, pine-scented air, and twinkling lights all around, it’s the closest thing the Philippines has to a cozy winter wonderland. The city government transforms parks and landmarks into glowing Christmas villages. A massive tree lights up Session Road, Burnham Park hosts holiday-themed shows, and kids can enjoy carousels, fireworks, and caroling in public squares. Add a cup of hot strawberry taho or freshly baked bibingka, and you’ve got yourself a magical Christmas night in the mountains.",
    image: Christmas,
    where: "Burnham Park, Session Road, Wright Park",
    date: "December",
  },
//   {
//     title: "Baguio",
//     description:
//       "Baguio",
//     image: Pinikpikan,
//     where: "Session Road",
//     date: "June",
//     mapsLink: "https://www.google.com/maps?q=Baguio+"
//   },
];

const Festivities = () => {
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
        <div class="banner-image-festivities"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation">
        <button className="nav-button" onClick={() => navigate("/")}>
          Home
        </button>
        <i className="arrow" data-feather="arrow-right-circle"></i>
        <button className="nav-button active">Events & Festivities</button>
      </div>

      {/* Page Title */}
      <h1>Must-Experience Events and Festivals in Baguio City</h1>
      <p className="desc">Baguio isn’t just about pine trees, fog-kissed mornings, and cozy sweaters. It’s also a city brimming with vibrant festivals, rich traditions, and artistic celebrations that reflect the heart and soul of the Cordilleras. Whether you’re planning a quick weekend getaway or a deep dive into local culture, timing your trip around these events can transform your Baguio visit from great to unforgettable.</p>

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
              <i data-feather="map-pin" className="icon"></i>
              <span>{place.where}</span>
            </p>
            <p className="info-line">
              <i data-feather="calendar" className="icon"></i>
              <span>{place.date}</span>
            </p>
            {/* Directions */}
            {/* <a
            href={place.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="get-directions-button"
            >
            <i className="icon" data-feather="map-pin"></i> Get Directions
          </a> */}
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

export default Festivities;