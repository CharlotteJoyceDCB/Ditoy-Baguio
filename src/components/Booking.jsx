import React, { useState } from "react";
import "../styles/Booking.scss";

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState("Apartments");

  const renderForm = () => {
    switch (activeTab) {
      case "Apartments":
        return (
          <form>
            <div className="form-row">
              <label>Enter location / region</label>
              <input type="text" placeholder="Enter location / region" />
            </div>
            <div className="form-row">
              <div className="half-width">
                <label>Arrival</label>
                <input type="date" />
              </div>
              <div className="half-width">
                <label>Departure</label>
                <input type="date" />
              </div>
            </div>
            <div className="form-row">
                <div className="half-width">
                    <label>Rooms</label>
                    <input type="number" min="1" max="100" step="1"/>
                </div>
                <div className="half-width">
                    <label>Guests</label>
                    <input type="number" min="1" max="100" step="1"/>
                </div>
            </div>
            <button type="button">Find Apartments</button>
          </form>
        );
      case "Hotels":
        return (
          <form>
            <div className="form-row">
              <label>Enter location / region</label>
              <input type="text" placeholder="Enter location / region" />
            </div>
            <div className="form-row">
              <div className="half-width">
                <label>Arrival</label>
                <input type="date" />
              </div>
              <div className="half-width">
                <label>Departure</label>
                <input type="date" />
              </div>
            </div>
            <div className="form-row">
                <div className="half-width">
                    <label>Rooms</label>
                    <input type="number" min="1" max="100" step="1"/>
                </div>
                <div className="half-width">
                    <label>Guests</label>
                    <input type="number" min="1" max="100" step="1"/>
                </div>
            </div>
            <button type="button">Find Hotels</button>
          </form>
        );
      case "Car Rental":
        return (
          <form>
            <div className="form-row">
              <label>Pick-up location</label>
              <input type="text" placeholder="Pick-up location" />
            </div>
            <div className="form-row">
              <div className="half-width">
                <label>Pick Up Date</label>
                <input type="date" />
              </div>
              <div className="half-width">
                <label>Drop Off Date</label>
                <input type="date" />
              </div>
            </div>
            <div className="form-row">
              <div className="half-width">
                <label>Type of Car</label>
                <select>
                    <option value="motorcycle">Motorcycle</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="van">Van</option>
                </select>
              </div>
              <div className="half-width">
              <label>Number of Seats</label>
              <select>
                <option value="2">2 Seats</option>
                <option value="4">4 Seats</option>
                <option value="6">6 Seats</option>
                <option value="8">8 Seats</option>
              </select>
              </div>
            </div>
            <button type="button">Find Car Rental</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="booking-container">
      <div className="tabs">
        <button
          className={activeTab === "Apartments" ? "active" : ""}
          onClick={() => setActiveTab("Apartments")}
        >
          Apartments
        </button>
        <button
          className={activeTab === "Hotels" ? "active" : ""}
          onClick={() => setActiveTab("Hotels")}
        >
          Hotels
        </button>
        <button
          className={activeTab === "Car Rental" ? "active" : ""}
          onClick={() => setActiveTab("Car Rental")}
        >
          Car Rental
        </button>
      </div>
      <div className="form-container">{renderForm()}</div>
    </div>
  );
};

export default BookingForm;
