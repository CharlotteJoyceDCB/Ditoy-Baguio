import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Destination from "./components/Destination";
import Booking from "./components/Booking";
import Parallax from "./components/ParallaxImage";
import Events from "./components/Events";
import DitoyBaguio from "./components/DitoyBaguio";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

// import Parallax from './components/ParallaxImage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Destination />
      <Parallax />
      <Blog />
      <Events />
      <Booking />
      <DitoyBaguio />
      <Footer />
    </div>
  );
}

export default App;
