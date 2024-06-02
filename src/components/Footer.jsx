import React, { useContext, useEffect } from "react";
import { IoIosMail, IoIosCall, IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { ServiceContext } from "./ServiceContext.jsx";
import { PageContext } from "./PageContext.jsx";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { opened, handleClick } = useContext(ServiceContext);
  const { page, setPage } = useContext(PageContext);
  const navigate = useNavigate();

  const goToAbout = () => {
    if (page !== "landing") {
      navigate("/", { state: { to: "about" } });
    } else {
      navigate("/", {});
      const el = document.getElementById("about");
      el.scrollIntoView();
    }
  };
  const goToOurServices = () => {
    if (page !== "landing") {
      navigate("/", { state: { to: "services" } });
    } else {
      navigate("/", {});
      const el = document.getElementById("services");
      el.scrollIntoView();
    }
  };
  const goToContact = () => {
    if (page !== "landing") {
      navigate("/", { state: { to: "contact" } });
    } else {
      navigate("/", {});
      const el = document.getElementById("contact");
      el.scrollIntoView();
    }
  };
  const goToPortfolio = () => {
    if (page !== "landing") {
      navigate("/portfolio", { state: { to: "portfolio" } });
    } else {
      navigate("/portfolio", { state: { to: "portfolio" } });
      const el = document.getElementById("portfolio");
      el.scrollIntoView();
    }
  };

  // Services
  const goToSoftwareServices = () => {
    if (page !== "landing") {
      navigate("/", { state: { to: "services" } });
    } else {
      navigate("/", {});
      const el = document.getElementById("services");
      el.scrollIntoView();
    }
  };
  const goToGraphicsServices = () => {
    if (page !== "landing") {
      navigate("/", { state: { to: "services" } });
    } else {
      navigate("/", {});
      const el = document.getElementById("services");
      el.scrollIntoView();
    }
  };
  const goToProdServices = () => {
    if (page !== "landing") {
      navigate("/", { state: { to: "services" } });
    } else {
      navigate("/", {});
      const el = document.getElementById("services");
      el.scrollIntoView();
    }
  };
  const goToMarketingServices = () => {
    if (page !== "landing") {
      navigate("/", { state: { to: "services" } });
    } else {
      navigate("/", { state: { to: opened } });
      const el = document.getElementById("services");
      el.scrollIntoView();
    }
  };

  return (
    <footer className="bg-lightGreen text-white lg:px-32 lg:py-8 text-lg font-semibold p-6 tab:py-8 md:px-16 md:py-8 sm:px-6 ipad:px-12">
      <div className="grid sm:grid-cols-4 lg:flex lg:justify-between md:flex md:flex-row md:gap-6 tab:flex tab:justify-between md:justify-between cursor-pointer">
        <div className="sm:col-span-3 sm:mb-10 md:mb-12 lg:col-span-1">
          <div className="mb-2">
            <img
              className="sm:w-36 sm:mb-4 w-40 md:w-48"
              src="images/FooterLogo.svg"
            />
          </div>
          <p className="text-xs sm:text-sm ">
            Leading Innovation, Inspiring Growth.
          </p>
        </div>
        <div className="sm:col-span-2">
          <h1 className="text-xl sm:text-2xl lg:text-2xl text-darkerGreen font-bold mb-6 tracking-wider font-heading">
            Company
          </h1>
          <p onClick={goToAbout} className="mb-6 text-sm">
            About Us
          </p>
          <p onClick={goToOurServices} className="mb-6 text-sm">
            Our Services
          </p>
          <p onClick={goToPortfolio} className="mb-6 text-sm">
            Portfolio
          </p>
          <p onClick={goToContact} className="mb-6 text-sm">
            Contact Us
          </p>
        </div>
        <div className="sm:col-span-2">
          <h1 className="text-xl sm:text-2xl lg:text-2xl text-darkerGreen font-bold mb-6 tracking-wider font-heading">
            Services
          </h1>
          <p
            onClick={() => {
              handleClick(0);
              goToSoftwareServices();
            }}
            className="mb-6 text-sm"
          >
            Software Development
          </p>
          <p
            onClick={() => {
              handleClick(1);
              goToGraphicsServices();
            }}
            className="mb-6 text-sm"
          >
            Graphic Design
          </p>
          <p
            onClick={() => {
              handleClick(2);
              goToProdServices();
            }}
            className="mb-6 text-sm"
          >
            Production
          </p>
          <p
            onClick={() => {
              handleClick(3);
              goToMarketingServices();
            }}
            className="mb-6 text-sm"
          >
            Digital Marketing
          </p>
        </div>
        <div className="sm:col-span-4">
          <h1 className="text-xl sm:text-2xl lg:text-2xl mb-6 text-darkerGreen font-bold tracking-wider font-heading">
            Contact Information
          </h1>
          <div className="flex gap-2 items-center mb-6 ">
            <div>
              <IoIosMail />
            </div>
            <a href="mailto: info@cedarwittechnologies.com?cc:info@cedarwittechnologies.com">
              <p className="text-sm">info@cedarwittechnologies.com</p>
            </a>
          </div>
          <div className="flex gap-2 items-center mb-6">
            <div>
              <IoIosCall />
            </div>
            <p className="text-sm">09024660504</p>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-2xl mb-2 text-darkerGreen font-bold tracking-wider font-heading">
            Socials
          </h1>

          <div className="flex gap-4 items-center">
            <div>
              <a href="https://www.facebook.com/share/w7YzCy636McnEEfa/?mibextid=qi2Omg">
                <FaFacebook size={"1.4em"} />
              </a>
            </div>
            <div>
              <a href="https://x.com/CedarWitTech?t=AjmovdfUYlq6fNjkOPUERA&s=09">
                <FaXTwitter size={"1.5em"} />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/cedarwit-technologies">
                <IoLogoLinkedin size={"1.5em"} />
              </a>
            </div>
            <div>
              <a href="https://wa.me/message/L53QV6CTNJJ6K1">
                <FaWhatsapp size={"1.5em"} />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/cedarwit_technologies?igsh=MThrbGFoeWMyMmhsaA==">
                <FaInstagram size={"1.5em"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
