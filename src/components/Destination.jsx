import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Destination.scss";
import NatureImage from '../assets/Nature.jpg';
import ActivitiesImage from '../assets/Activities.jpg';
import CultureImage from '../assets/Culture.jpg';
import FoodImage from '../assets/Food.png';
import EventsImage from '../assets/Events & Festivities.jpg';
import ReligiousImage from '../assets/Religious & Spiritual.jpg';

const Destination = () => {
  const destinations = [
    {
      title: "Nature",
      image: NatureImage,
      link: "#",
    },
    {
      title: "Activities",
      image: ActivitiesImage,
      link: "#",
    },
    {
      title: "Culture",
      image: CultureImage,
      link: "#",
    },
    {
      title: "Food",
      image: FoodImage,
      link: "#",
    },
    {
      title: "Events & Festivities",
      image: EventsImage,
      link: "#",
    },
    {
      title: "Religious & Spiritual",
      image: ReligiousImage,
      link: "#",
    },
  ];

  return (
    <div className="destination" id="destination">
      <h2 className="heading">Things to do</h2>
      <p className="description">
        From the cool breeze and scenic mountain views to the vibrant culture
        and bustling markets, Baguio is a haven for adventurers, food lovers,
        and those seeking peace amidst nature. Ditoy Baguio: Here, your
        adventure begins. Plan your trip today and experience the magic of
        Baguio!
      </p>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          375: { slidesPerView: 1},
          600: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="swiper-container"
      >
        {destinations.map((item, index) => (
          <SwiperSlide key={index} className="card">
            <img src={item.image} alt={item.title} className="image" />
            <div className="info">
              <h3 className="title">{item.title}</h3>
              <a href={item.link} className="link">
                Explore →
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Destination;
