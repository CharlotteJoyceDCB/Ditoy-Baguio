import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Destination from "./components/Destination";
import Booking from "./components/Booking";
import Parallax from "./components/ParallaxImage";
// import Parallax from './components/ParallaxImage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Destination />
      <Parallax />
      <Booking />
    </div>
  );
}

export default App;
