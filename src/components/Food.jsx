import React,  { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import "../styles/Food.scss";
import feather from 'feather-icons';
import FarmersDaughterRestaurant from "../assets/Food/FarmersDaughterRestaurant.jpg";
import StrawberryTaho from "../assets/Food/StrawberryTaho.jpg";
import Tsokolateria from "../assets/Food/Tsokolateria.jpg";
import Cafebytheruins from "../assets/Food/cafebytheruins.jpg";
import Choco from "../assets/Food/choco.jpg";
import Coffee from "../assets/Food/coffee.jpg";
import GoodTaste from "../assets/Food/good-taste.jpg";
import Icecream from "../assets/Food/icecream.jpg";
import Longganisa from "../assets/Food/longganisa.jpg";
import Pinikpikan from "../assets/Food/pinikpikan.jpg";
import UbeJam from "../assets/Food/ubejam.jpg";
import Vizcos from "../assets/Food/vizcos-strawberry-shortcake.jpeg";
import Vegetables from "../assets/Food/Vegetables.jpg";
import StreetFood from "../assets/Food/streetfood.jpg";

const places = [
  {
    title: "Pinikpikan",
    description:
      "This traditional Cordilleran dish is not just a meal—it's a cultural immersion. Pinikpikan is a chicken soup that involves a ceremonial preparation by indigenous communities, traditionally believed to bless the food. While modern versions skip the ritualistic aspects, the result is still a flavorful broth with smoked chicken, ginger, and sometimes etag (salted pork). Its unique taste comes from the slight charring of the chicken, giving the soup a smoky depth that's both hearty and healing. Eating pinikpikan in Baguio connects you to the roots of the region and its rich highland heritage.",
    image: Pinikpikan,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Price Range: P200 - P500",
    mapsLink: "https://www.google.com/maps?q=Baguio+"
  },
  {
    title: "Baguio Longganisa",
    description:
      "Unlike the sweeter longganisa varieties in other regions of the Philippines, Baguio’s version leans more garlicky, tangy, and intensely savory. This native sausage is often enjoyed with garlic fried rice and a sunny-side-up egg—a classic “longsilog” breakfast that’ll fuel you for a day of hiking or sightseeing. The sausages are often made by small-scale producers and sold at the public market, and many versions include a hint of sourness from native spices and natural vinegar curing. Every bite is bold, fragrant, and unmistakably local.",
    image: Longganisa,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Price Range: P75 - P120",
    mapsLink: "https://www.google.com/maps?q=Baguio+Public+Market"
  },
  {
    title: "Ube Jam from Good Shepherd",
    description:
      "No food trip to Baguio is complete without lining up for the famed ube jam at Good Shepherd Convent. Lovingly made by nuns and local women as part of a livelihood program, this purple yam jam is smooth, thick, and full of deep, earthy sweetness. It contains no artificial flavors—just pure ube, condensed milk, and patience. Perfect as a spread or spooned straight from the jar, it’s a comforting taste of home. Buying from Good Shepherd also supports their mission of funding scholarships, so it’s delicious food for a good cause.",
    image: UbeJam,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Price Range: P400 - P500",
    mapsLink: "https://www.google.com/maps?q=Baguio+Good+Shepherd+Convent"
  },
  {
    title: "Sagada Coffee",
    description:
      "Coffee lovers, rejoice—Baguio is one of the best places to experience Sagada coffee, harvested from the nearby mountainous regions of the Cordillera. Often served in cozy cafes around the city or sold as fresh grounds in the market, this Arabica variety has a rich, slightly nutty flavor with chocolatey undertones and low acidity. Whether you sip it hot on a foggy morning at Camp John Hay or take home a bag as a souvenir, Sagada coffee offers a soulful caffeine fix that’s as complex and inviting as the region itself.",
    image: Coffee,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Price Range: P250 - P500",
    mapsLink: "https://www.google.com/maps?q=Baguio+"
  },
  {
    title: "Strawberry Ice Cream",
    description:
      "If you’re visiting during strawberry season (typically November to May), you’ll find strawberry ice cream almost everywhere—from market stalls to park vendors. But what sets Baguio’s version apart is that it’s often made with real, chunky strawberries and fresh cream, not just artificial flavoring. It’s light, tangy, and subtly sweet, offering a cool counterbalance to the crisp mountain air. Grab a cone while strolling around Mines View Park or after a hearty meal—this treat tastes like summer in a cold city.",
    image: Icecream,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Price Range: P25 - P60",
    mapsLink: "https://www.google.com/maps?q=Baguio+"
  },
  {
    title: "Strawberry Taho",
    description:
      "One of Baguio’s most iconic street snacks, strawberry taho is a delightful twist on the traditional silken tofu treat. As vendors roam the cool mountain streets calling out “Tahooo!”, you’ll be handed a warm cup filled with soft tofu, chewy sago (tapioca pearls), and generously topped with a vibrant, homemade strawberry syrup and chunks of real berries. The strawberries come straight from the nearby farms of La Trinidad, giving this version a uniquely fresh and fruity edge. It’s a comforting, sweet experience—especially magical when enjoyed in Burnham Park on a misty morning.",
    image: StrawberryTaho,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Price Range: P50",
    mapsLink: "https://www.google.com/maps?q=Baguio+"
  },
  {
    title: "Fresh Vegetables from the Baguio Market",
    description:
      "Baguio is often called the “Salad Bowl of the Philippines” for a reason. Thanks to its high elevation and cooler climate, it produces some of the freshest, most flavorful vegetables in the country. Take a walk through the Baguio Public Market and you’ll see an explosion of colors—crisp lettuce, deep orange carrots, green bell peppers, and more. Many local restaurants serve salads or stir-fries made with just-picked produce, and you can buy bundles to take home for a real farm-fresh taste that’s hard to beat.",
    image: Vegetables,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Price Range: Price may vary",
    mapsLink: "https://www.google.com/maps?q=Baguio+Public+Market"
  },
  {
    title: "Baguio Night Market Street Food",
    description:
      "BAs the sun sets and the fog thickens, Harrison Road transforms into Baguio’s most vibrant (and budget-friendly) food adventure: the Baguio Night Market. It’s not just about bargain clothes and vintage finds—it’s also a street food paradise. Food here is fast, flavorful, and fun—perfect for capping off a chilly night. And the best part? Most snacks cost under ₱50, making it easy to try a little bit of everything. It’s chaotic, charming, and completely unforgettable.",
    image: StreetFood,
    hours: "Open 9:00 PM - 2:00 AM",
    fees: "Price Range: Price may vary",
    mapsLink: "https://www.google.com/maps?q=Baguio+Night+Market"
  },
  {
    title: "Good Taste Restaurant",
    description:
      "Now on to the restaurants that make Baguio a true foodie's delight. Ask anyone who’s been to Baguio for a food recommendation, and chances are they’ll mention Good Taste—and for good reason. This place is legendary. Known for serving hearty Filipino-Chinese meals in generous portions at very affordable prices, it’s no surprise that both branches are constantly filled with families, students, travelers, and even delivery drivers looking for their next satisfying meal.  The service is fast despite the crowd, and the menu caters to both solo eaters and big groups, making it the go-to spot for affordable, belly-filling meals after a day of exploring Session Road or Burnham Park.",
    image: GoodTaste,
    hours: "Open 6:00 AM - 10:00 PM",
    fees: "Price Range: P200 - P1000",
    mapsLink: "https://www.google.com/maps?q=Baguio+Good+Taste"
  },
  {
    title: "Vizco’s Strawberry Shortcake",
    description:
      "Mention Baguio to any foodie, and Vizco’s Strawberry Shortcake is bound to come up. This beloved dessert is a beautiful stack of light chiffon layers, airy whipped cream, and fresh strawberries that burst with natural sweetness. Unlike heavy or overly sugary cakes, Vizco’s keeps it balanced and refreshing. The best part? The strawberries are never frozen—they’re hand-picked daily from local farms, giving the cake an authentic farm-to-table quality. Whether you're dining in or bringing a box home, it's the kind of dessert that instantly feels like a celebration.",
    image: Vizcos,
    hours: "Open 7:00 AM - 10:00 PM",
    fees: "Price Range: P200 - P400",
    mapsLink: "https://www.google.com/maps?q=Baguio+Vizco's"
  },
  {
    title: "Cafe by the Ruins",
    description:
      "Few places capture Baguio’s creative spirit like Cafe by the Ruins. A true icon of the city, the café has long been a meeting place for artists, writers, tourists, and food lovers. Although the original structure was damaged by fire in 2017, the newly rebuilt space retains the same soulful energy that made it beloved in the first place—only now, it blends rustic elegance with a renewed sense of purpose. The menu is an eclectic mix of Filipino classics, local ingredients, and modern twists. Their Baguio Bagnet is a standout—crispy, savory, and served with mountain rice and local veggies. Their camote bread, ensalada, and fresh salads made with strawberries or edible flowers from nearby farms are all equally delightful. ",
    image: Cafebytheruins,
    hours: "Open 7:00 AM - 9:00 PM",
    fees: "Price Range: P400 - P600",
    mapsLink: "https://www.google.com/maps?q=Baguio+Cafe+By+The+Ruins"
  },
  {
    title: "Choco-late de Batirol",
    description:
      "Tucked away in a garden café near Camp John Hay is a hidden gem that serves Choco-late de Batirol—a traditional Filipino hot chocolate made the old-fashioned way. Using a “batirol” (wooden whisk) to blend pure tablea (cacao tablets), the result is a thick, rustic drink with a gritty texture and rich chocolate flavor. It’s often served in ceramic mugs, surrounded by lush greenery, making for a peaceful and nostalgic merienda experience. Some versions are infused with flavors like cinnamon, orange, or almond, but the classic will always warm you to the core.",
    image: Choco,
    hours: "Open 8:00 AM - 9:00 PM",
    fees: "Price Range: P200 - P400",
    mapsLink: "https://www.google.com/maps?q=Baguio+Choco-late+De+Batirol"
  },
  {
    title: "Farmer’s Daughter Restaurant",
    description:
      "Located near Tam-Awan Village, Farmer’s Daughter is a hidden gem offering rustic dishes made from time-honored Cordilleran recipes. Expect hearty servings of smoked meats, native vegetables, and rich stews. The simple hut-style architecture and fresh mountain air create an authentic countryside dining experience, perfect for those seeking something off the usual tourist trail.",
    image: FarmersDaughterRestaurant,
    hours: "Open 9:30 AM - 4:30 PM",
    fees: "Price Range: P200 - P400",
    mapsLink: "https://www.google.com/maps?q=Baguio+Farmer's+Daughter+Restaurant"
  },
  {
    title: "Tsokolateria",
    description:
      "Perched along Upper Session Road, Tsokolateria specializes in artisanal cacao-based dishes and drinks. Their menu is creative, with hot tsokolate served in different intensities, and local dishes drizzled or infused with rich chocolate. Try the cacao-glazed adobo or the bibingka waffle — it’s a deliciously modern take on",
    image: Tsokolateria,
    hours: "Open 8:00 AM - 10:00 PM",
    fees: "Price Range: P200 - P500",
    mapsLink: "https://www.google.com/maps?q=Baguio+Tsokolateria"
  },
];

const Food = () => {
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
        <div class="banner-image-food"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation">
        <button className="nav-button" onClick={() => navigate("/")}>
          Home
        </button>
        <i className="arrow" data-feather="arrow-right-circle"></i>
        <button className="nav-button active">Food</button>
      </div>

      {/* Page Title */}
      <h1>Must-try foods and restaurants in Baguio</h1>
      <p className="desc">There’s something undeniably magical about Baguio City. Maybe it’s the cool mountain air, the scent of pine in the breeze, or the way the fog settles over the hills like a cozy blanket. But for those who’ve wandered its streets and sat down at its tables, the real magic lies in its food. Here, meals aren't just about nourishment—they're about culture, comfort, and community.</p>

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

export default Food;