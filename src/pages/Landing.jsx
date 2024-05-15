import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import OurPortfolio from "../components/OurPortfolio";
import ClientReviews from "../components/ClientReviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ServiceContext } from "../components/ServiceContext.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Landing = () => {
  const [opened, setOpened] = useState(0);
  const handleClick = (index) => {
    setOpened(index);
  };

  const location = useLocation();
  const to = location.state ? location.state.to : null;

  useEffect(() => {
    if (to !== null) {
      const el = document.getElementById(to);
      el ? el.scrollIntoView({ behavior: "smooth" }) : null;
      
    } else {
      return;
    }
  }, [location.state]);

  return (
    <ServiceContext.Provider value={{ opened, handleClick }}>
      <div className="text-darkGreen relative overflow-hidden">
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
        <Hero />
        <About />
        <Services />
        <OurPortfolio />
        <div className="px-28 py-20 sm:px-0 ipad:px-10">
          <ClientReviews />
        </div>
        <Contact />
        <Footer />
      </div>
    </ServiceContext.Provider>
  );
};

export default Landing;
