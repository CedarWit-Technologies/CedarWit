import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import OurPortfolio from "../components/OurPortfolio";
import ClientReviews from "../components/ClientReviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="text-darkGreen px-32 py-8">
      {/* delete the div below this when you've pulled to your pc */}
      <div>
        hey there, i'm all set up.
        <Button>Anu is blue</Button>
      </div>
      {/* delete the div above this when you've pulled to your pc */}

      <Navbar />
      <Hero />
      <About />
      <Services />
      <OurPortfolio />
      <ClientReviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
