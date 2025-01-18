import React from "react";
import "../styles/Events.scss";
import FurrACause from '../assets/Gig-Furr-A-Cause.jpg';
import IECEP from '../assets/Tech-Con-Ai.png';
import Rambakan from '../assets/Rambakan.jpg';
import HighlandWeddings from '../assets/Highland-Weddings.jpg';
import PanagbengaFest from '../assets/Panagbenga-Float-Parade.png';
import Panagbengascapes from '../assets/Panagbengascapes.png';
import BaguioBlooms from '../assets/Baguio-Blooms.jpg';
import PMA from '../assets/PMA.png';
const events = [
  {
    id: 1,
    dateTag: "18 Jan",
    image: FurrACause,
    title: "NOT VERY MEOWS: Gig Furr A Cause",
    location: "Canto Bogchi Joint",
  },
  {
    id: 2,
    dateTag: "18 Jan",
    image: IECEP,
    title: "IECEP CAR Chapter 2025 Convention & AGM: FUTURE TECHCON",
    location: "Hotel Veniz Session",
  },
  {
    id: 3,
    dateTag: "18 Jan",
    image: Rambakan,
    title: "RAMBAKAN GALA AND AWARDS NIGH",
    location: "Venus Parkview Hotel",
  },
  {
    id: 4,
    dateTag: "24-26 Jan",
    image: HighlandWeddings,
    title: "Highland Weddings: The Baguio City Bridal Fair",
    location: "SM City Baguio",
  },
  {
    id: 5,
    dateTag: "From 1 Feb",
    image: PanagbengaFest,
    title: "PANAGBENGA GRAND OPENING PARADE",
    location: "Baguio Cathedral",
  },
  {
    id: 6,
    dateTag: "1 Feb",
    image: Panagbengascapes,
    title: "PANAGBENGASCAPES: LANDSCAPING COMPETITION",
    location: "Burnham Park",
  },
  {
    id: 7,
    dateTag: "1-2 Feb",
    image: BaguioBlooms,
    title: "BAGUIO BLOOMS: A Market Encounter",
    location: "Session Road",
  },
  {
    id: 8,
    dateTag: "13 Feb",
    image: PMA,
    title: "PMA Grand Alumni Homecoming",
    location: "PMA",
  },
];

const App = () => {
  return (
    <div className="events-section" id="events">
      <div className="header">
        <h1>Events</h1>
        <a href="#">Show all &rarr;</a>
      </div>
      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div
              className="image"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <span className="date-tag">{event.dateTag}</span>
            </div>
            <div className="details">
              <h3>{event.title}</h3>
              <p>{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;