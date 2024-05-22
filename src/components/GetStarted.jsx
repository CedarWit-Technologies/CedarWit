import React, { useContext } from "react";
import Transition from "./Transition";
import { useNavigate } from "react-router-dom";
import { PageContext } from "./PageContext";

const GetStarted = () => {
  const navigate = useNavigate();
  const { page, setPage } = useContext(PageContext);

  const goToContact = () => {
    if (page !== "landing") {
      navigate("/", { state: { to: "contact" } });
    } else {
      navigate("/", {});
      const el = document.getElementById("contact");
      el.scrollIntoView();
    }
  };
  return (
    <Transition>
      <div className="bg-darkGreen text-white text-center lg:px-32 lg:py-8 mt-8 p-8 rounded-2xl">
        <h1 className="lg:text-4xl text-3xl font-semibold mb-4">Get Started</h1>
        <p className="mb-4 lg:text-xl tab:text-xl font-normal">
          At Cedarwit, we're committed to transforming your ideas and market
          concepts into successful outcomes through software development,
          marketing strategies, and other essential services. Our dedicated
          team, equipped with diverse skill sets ensures that your vision is
          realized effectively.
        </p>
        <button
          onClick={goToContact}
          className="bg-lightGreen px-8 py-2 rounded-xl text-white text-md lg:text-lg tab:text-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-custom3"
        >
          Contact Us
        </button>
      </div>
    </Transition>
  );
};
export default GetStarted;
