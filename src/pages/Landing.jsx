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
    <div className="text-darkGreen relative overflow-hidden">
      <div className="absolute top-0 w-full ">
        {" "}
        <Navbar />
      </div>
      <div className="background-image bg-blue-500">
        <Hero />
      </div>

      <div className="bg-yellow-500">
        <About />
      </div>
      <Services />
      <OurPortfolio />
      <div className="px-28 py-20">
        <ClientReviews />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
