import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import PopularSection from "./components/PopularSection";
import TopSellersSection from "./components/TopSellersSection";
import ExploreSection from "./components/ExploreSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <div className="background-effects">
        <div className="background-blue" />
        <div className="background-purple" />
      </div>

      <div className="app-content">

        <Navbar />

        <main>
          <HeroSection />
          <Partners />
          <PopularSection />
          <TopSellersSection />
          <ExploreSection />
          <CTASection />
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default App;