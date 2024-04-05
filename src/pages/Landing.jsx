import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import OurPortfolio from "../Components/OurPortfolio";
import ClientReviews from "../Components/ClientReviews";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Landing = () => {
  return (
    <div className="text-darkGreen">
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
