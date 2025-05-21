import React,  { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import "../styles/Culture.scss";
import feather from 'feather-icons';
import Bencab from "../assets/Culture/bencab2.jpg";
import IgorotStone from "../assets/Culture/igorot.jpg";
import Ililikha from "../assets/Culture/ililikha.jpg";
import Moma from "../assets/Culture/moma.jpg";
import Museum from "../assets/Culture/museum.jpg";
import Tadek from "../assets/Culture/tadek.png";
import TamAwan from "../assets/Culture/tam-awan.jpg";
import Weaving from "../assets/Culture/weaving.jpg";
import Wedding from "../assets/Culture/wedding.png";
import Woodcarving from "../assets/Culture/woodcarving.jpg";

const places = [
  {
    title: "Visit the Tam-awan Village",
    description:
      "Nestled in the hills of Baguio, Tam-awan Village is a reconstructed traditional Cordilleran village that offers visitors a unique glimpse into the indigenous culture of the region. Built by local artists, the village showcases Ifugao huts, tribal art, and beautiful native gardens. Visitors can explore the grounds, view art exhibits, join workshops, and even catch live cultural performances on certain days. It’s a serene yet enriching space that connects you with the roots of the Cordillera people and the creative spirit of Baguio.",
    image: TamAwan,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Fees: P30 - P60",
    mapsLink: "https://www.google.com/maps?q=Baguio+Tam+Awan+Village"
  },
  {
    title: "Drop by the Ili-Likha Artists Village",
    description:
      "Hidden along Assumption Road, Ili-Likha Artists Village is a quirky, multi-level complex built by national artist Kidlat Tahimik. This creative space is a haven for artists and food lovers alike, made entirely from recycled materials, wood, and found objects. As you wander through its winding pathways, you’ll encounter murals, installations, poetry walls, and cozy food stalls offering local and sustainable dishes. It’s not just a place to eat — it’s an experience of Baguio’s alternative, progressive culture.",
    image: Ililikha,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Fees: P0",
    mapsLink: "https://www.google.com/maps?q=Baguio+Ililikha"
  },
  {
    title: "Explore the Baguio Museum",
    description:
      "The Baguio Museum, located near Burnham Park, is a must-visit for those wanting to understand the city's rich heritage. Its exhibits highlight the traditions of the different Cordilleran tribes — from traditional clothing and weaponry to intricate weaving and ritual items. The dioramas and artifacts paint a vivid picture of highland life, helping visitors appreciate the region’s cultural identity beyond its tourist attractions.",
    image: Museum,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Fees: P40",
    mapsLink: "https://www.google.com/maps?q=Baguio+Museum"
  },
  {
    title: "Check Out the BenCab Museum",
    description:
      "No cultural tour of Baguio is complete without a visit to the iconic BenCab Museum, founded by national artist Benedicto Cabrera. Overlooking a lush forest and farm, the museum houses both modern art and indigenous Cordilleran artifacts, blending tradition with contemporary expression. Beyond the galleries, there’s a café, eco-trails, and a garden that make it easy to spend a half-day exploring the intersection of art, heritage, and nature.",
    image: Bencab,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Fees: P120 - P150",
    mapsLink: "https://www.google.com/maps?q=Baguio+BenCab"
  },
  {
    title: "Walk Through the Igorot Stone Kingdom",
    description:
      "A recent cultural destination gaining popularity, the Igorot Stone Kingdom is a terraced stone fortress inspired by legends and native Igorot craftsmanship. Built using traditional stone-laying techniques, it tells stories of Cordilleran mythology and heroism through sculptures, stonework, and viewing decks. It’s a blend of myth, heritage, and architecture — visually striking and rich with symbolic meaning.",
    image: IgorotStone,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Fees: P80 - P100",
    mapsLink: "https://www.google.com/maps?q=Baguio+Igorot+Stone+Kingdom"
  },
  {
    title: "Discover Traditional Weaving at Easter Weaving Room",
    description:
      "Established in the early 1900s, Easter Weaving Room is one of the oldest cultural institutions in Baguio dedicated to preserving traditional weaving techniques. Inside, you’ll find weavers working on colorful fabrics using backstrap looms, creating intricate designs passed down for generations. Visitors can observe the process, learn about the symbols in the patterns, and shop for beautifully crafted woven items like bags, shawls, and blankets — all made on-site.",
    image: Weaving,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Fees: P150 - P200",
    mapsLink: "https://www.google.com/maps?q=Baguio+Easter+Weaving+Inc"
  },
  {
    title: "Join a Woodcarving Workshop in Asin Road",
    description:
      "Along Asin Road, you’ll find rows of artisan workshops where skilled woodcarvers transform blocks of wood into intricate sculptures, tribal masks, and furniture. The craft is a vital part of Ifugao and Kankanaey heritage. Some shops even offer short classes where visitors can try their hand at basic carving. It’s a tactile way to engage with Baguio’s creative soul — and you walk away with a handmade piece of culture.",
    image: Woodcarving,
    hours: "Unknown",
    fees: "Fees: Unknown",
    mapsLink: "https://www.google.com/maps?q=Baguio+Woodcarvers+Village"
  },
  {
    title: "Try Moma (Betel Nut) from Local Vendors",
    description:
      "If you're feeling adventurous, trying moma (betel nut) offers a raw, immersive experience of Cordilleran tradition. Commonly chewed by elders in the highlands, moma is a mixture of betel leaf, areca nut, lime powder, and sometimes tobacco. It’s known for its red-staining effect on the mouth — and a strong, bitter flavor that’s not for everyone. Sold by roadside vendors or local markets, trying moma is more than a taste test — it’s a glimpse into ancestral customs still alive today.",
    image: Moma,
    hours: "Open 4:00 AM - 6:00 PM",
    fees: "Price: P10 - P100",
    mapsLink: "https://www.google.com/maps?q=Baguio+Public+Market"
  },
  {
    title: "Join a Tadek Dance at a Cultural Event",
    description:
      "One of the most iconic expressions of Cordilleran culture is the Tadek dance, a traditional courtship and celebration dance often performed during festivals and gatherings. Characterized by rhythmic gongs and graceful, circular movements, Tadek embodies unity, joy, and gratitude. Visitors can often witness or join in during cultural shows or at Tam-awan Village. There’s something deeply connecting about joining the dance — it’s a celebration that transcends words.",
    image: Tadek,
    hours: "N/A",
    fees: "N/A",
    mapsLink: "https://www.google.com/maps?q=Baguio+"
  },
    {
    title: "Witness or Attend a Traditional Cordilleran Wedding",
    description:
      "If you’re lucky enough to be invited to a Cordilleran wedding, you’re in for a deeply meaningful and memorable experience. These weddings are not just about two individuals — they’re a sacred union between clans, celebrated with rituals, native music, woven garments, and communal feasting. The bride and groom may wear traditional attire, often adorned with intricate beadwork and woven textiles that represent their tribe. Elders perform blessings, pigs or chickens are offered in thanksgiving, and the community dances the Tadek in celebration. While not a tourist activity you can schedule, some cultural centers or village tours offer ceremonial reenactments for guests. It’s a rare chance to feel the depth of indigenous love, family, and community values in Baguio’s highland culture.",
    image: Wedding,
    hours: "N/A",
    fees: "N/A",
    mapsLink: "https://www.google.com/maps?q=Baguio+"
  },
];

const Culture = () => {
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
        <div class="banner-image-culture"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation">
        <button className="nav-button" onClick={() => navigate("/")}>
          Home
        </button>
        <i className="arrow" data-feather="arrow-right-circle"></i>
        <button className="nav-button active">Culture</button>
      </div>

      {/* Page Title */}
      <h1>Discover Baguio’s Rich Culture and Traditions</h1>
      <p className="desc">Baguio isn’t just a city in the mountains — it’s a cultural melting pot where tradition and creativity thrive side by side. From indigenous dances and handcrafted wood carvings to spiritual spaces and colorful festivals, Baguio offers a glimpse into the soul of the Cordilleras. Whether you're joining a local ritual, learning about tribal heritage, or simply walking through a market filled with handmade goods, every cultural experience in Baguio tells a story. Dive deeper, and you’ll find that the city’s charm is rooted not just in its sights, but in its people and traditions.</p>

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

export default Culture;