import React from "react";
import "../styles/Blog.scss";
import BurnhamPark from '../assets/Burnham-Park.jpg';
import CampJohnHay from '../assets/CampJohnHay.jpg';
import StrawberryFarm from '../assets/Strawberry-Farm.jpg';
import PanagbengaFestival from '../assets/Panagbenga.jpg';
import BaguioFood from '../assets/Baguio-Food.jpg';
import MinesViewPark from '../assets/MinesViewPark.png';

const Blog = () => {
  const posts = [
    {
      title: "Exploring the Beauty of Burnham Park",
      image: BurnhamPark,
      date: "01/15/2025",
      description: "Discover the lush greenery, boating experiences, and serene ambiance of Burnham Park in the heart of Baguio City."
    },
    {
      title: "A Walk Through History at Camp John Hay",
      image: CampJohnHay,
      date: "01/12/2025",
      description: "Learn about the rich history of Camp John Hay, a popular destination with scenic views and historic landmarks."
    },
    {
      title: "Strawberry Picking at La Trinidad",
      image: StrawberryFarm,
      date: "01/10/2025",
      description: "Enjoy a delightful experience of picking fresh strawberries at the famous farms near Baguio City."
    },
    {
      title: "The Vibrant Colors of the Panagbenga Festival",
      image: PanagbengaFestival,
      date: "01/08/2025",
      description: "Immerse yourself in the colorful and lively celebrations of Baguio's annual flower festival."
    },
    {
      title: "A Food Lover's Guide to Baguio City",
      image: BaguioFood,
      date: "01/06/2025",
      description: "Explore the local cuisine of Baguio, from traditional Cordillera dishes to popular street food."
    },
    {
      title: "Experience the Chill at Mines View Park",
      image: MinesViewPark,
      date: "01/03/2025",
      description: "Take in breathtaking views of the mountains and enjoy souvenir shopping at Mines View Park."
    }
  ];

  return (
    <div className="blog-container" id="blog">
      <h1>Blog</h1>
      <div className="posts-grid">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <img src={post.image} alt={post.title} />
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p className="post-date">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
