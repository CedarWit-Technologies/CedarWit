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
      <main className="background-image pb-16">
        <Navbar />
        <Hero />
      </main>
      <About />
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
