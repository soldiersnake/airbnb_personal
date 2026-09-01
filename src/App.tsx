import Header from "./components/Header";
import Hero from "./components/Hero";
import HowToGetThere from "./components/HowToGetThere";
import Wifi from "./components/Wifi";
import HouseRules from "./components/HouseRules";
import Listings from "./components/Listings";
import Attractions from "./components/Attractions";
import RecommendationForm from "./components/RecommendationForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-sand-50">
      <Header />
      <main>
        <Hero />
        <HowToGetThere />
        <Wifi />
        <HouseRules />
        <Listings />
        <Attractions />
        <RecommendationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
