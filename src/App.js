import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Destination from "./components/Destination";
// Explore Cards
import Nature from "./components/Nature";
import Activities from "./components/Activities";
// import Culture from "./components/Culture";
// import Food from "./components/Food";
// import Festivities from "./components/Festivities";
// import Religious from "./components/Religious";
// End of Explore Cards
import Booking from "./components/Booking";
import Parallax from "./components/ParallaxImage";
import Events from "./components/Events";
import DitoyBaguio from "./components/DitoyBaguio";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarOnPages = ["/nature", "/food", "/activities", "/religious"];

  return (
    <div className="App">
      {!hideNavbarOnPages.includes(location.pathname) && <Navbar />}
      {children}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Destination />
                <Parallax />
                <Blog />
                <Events />
                <Booking />
                <DitoyBaguio />
              </>
            }
          />

          {/* Nature Page (Navbar Hidden) */}
          <Route path="/nature" element={<Nature />} />
          <Route path="/activities" element={<Activities />} />

          {/* Other Routes */}
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;