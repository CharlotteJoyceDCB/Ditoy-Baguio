import React, { useEffect } from "react";
import "../styles/DitoyBaguio.scss";
import Post1 from '../assets/SocialMedia/DitoyBaguioPost-1.jpg';
import Post2 from '../assets/SocialMedia/DitoyBaguioPost-2.jpg';
import Post3 from '../assets/SocialMedia/DitoyBaguioPost-3.jpg';
import Post4 from '../assets/SocialMedia/DitoyBaguioPost-4.jpg';
import Post5 from '../assets/SocialMedia/DitoyBaguioPost-5.jpg';
import Post6 from '../assets/SocialMedia/DitoyBaguioPost-6.jpg';
import Post7 from '../assets/SocialMedia/DitoyBaguioPost-7.jpg';
import Post8 from '../assets/SocialMedia/DitoyBaguioPost-8.jpg';
import Post9 from '../assets/SocialMedia/DitoyBaguioPost-9.webp';
import Post10 from '../assets/SocialMedia/DitoyBaguioPost-10.jpg';
import Post11 from '../assets/SocialMedia/DitoyBaguioPost-11.jpg';
import Post12 from '../assets/SocialMedia/DitoyBaguioPost-12.jpg';
import feather from 'feather-icons';

const images = [
  { id: 1, image: Post1, username: "@sa.baguio", location: "Session Road" },
  { id: 2, image: Post2, username: "@youroneandonny", location: "Bell Tower" },
  { id: 3, image: Post3, username: "@vanj_ghie", location: "Baguio Public Market" },
  { id: 4, image: Post4, username: "@lady.cy", location: "Burnham Park" },
  { id: 5, image: Post5, username: "@lady.cy", location: "Burnham Park" },
  { id: 6, image: Post6, username: "@wa_watusi", location: "Valley of Colors" },
  { id: 7, image: Post7, username: "@gelodagreat", location: "BenCab Museum" },
  { id: 8, image: Post8, username: "@itsesmeocampo", location: "BenCab Museum" },
  { id: 9, image: Post9, username: "@rexyjolly", location: "Lion's Head, Kennon Road" },
  { id: 10, image: Post10, username: "@arttomboc", location: "Cathedral of Our Lady of Atonement" },
  { id: 11, image: Post11, username: "@arttomboc", location: "Baguio Living Street" },
  { id: 12, image: Post12, username: "@yespho", location: "Yes Pho Vietnamese Cuisine" },
];

const DitoyBaguio = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="ditoy-baguio-container">
      <header>
        <h1>#DitoyBaguio</h1>
      </header>
      <div className="ditoy-baguio-grid">
        {images.map((image) => (
          <div key={image.id} className="ditoy-baguio-card">
            <img src={image.image} alt={`DitoyBaguio ${image.id}`} />
            <div className="overlay">
              <div className="overlay-content">
                <span className="username">
                  <i data-feather="instagram"></i> {image.username}
                </span>
                <span className="location">{image.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="load-more">Load More</button> */}
    </div>
  );
};

export default DitoyBaguio;
