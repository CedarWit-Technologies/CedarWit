import React from "react";
import { IoIosMail, IoIosCall, IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-lightGreen text-white lg:px-32 lg:py-8 text-lg font-semibold p-6 tab:px-28 tab:py-8 md:px-28 md:py-8">
      <div className="grid sm:grid-cols-4 lg:flex lg:justify-between md:flex md:flex-wrap tab:flex tab:justify-between md:justify-between">
        <div className="sm:col-span-3 sm:mb-16 md:mb-12 lg:col-span-1">
          <div className="mb-2 ">
            {" "}
            <img
              className="sm:w-36 sm:mb-4 w-40 md:w-48"
              src="images/FooterLogo.svg"
            />
          </div>
          <p className="text-xs sm:text-sm ">Bringing your ideas to reality</p>
        </div>
        <div className="sm:col-span-2 ">
          <h1 className="text-2xl text-darkerGreen font-bold mb-6">Company</h1>
          <p className="mb-6 text-sm">About Us</p>
          <p className="mb-6 text-sm">OurServices</p>
          <p className="mb-6 text-sm">Portfolio</p>
          <p className="mb-6 text-sm">Contact Us</p>
        </div>
        <div className="sm:col-span-2 ">
          <h1 className="text-2xl text-darkerGreen font-bold mb-6 ">
            Services
          </h1>
          <p className="mb-6 text-sm">Software development</p>
          <p className="mb-6 text-sm">Graphic Design</p>
          <p className="mb-6 text-sm">Production</p>
          <p className="mb-6 text-sm">digital marketing</p>
        </div>
        <div className="sm:col-span-4 ">
          <h1 className="text-2xl mb-6 text-darkerGreen font-bold">
            Contact Information
          </h1>
          <div className="flex gap-2 items-center mb-6 ">
            <div>
              <IoIosMail />
            </div>
            <a href="mailto: info@cedarwittechnologies.com?cc:info@cedarwittechnologies.com">
              <p className="text-sm">info@cedarwittechnologies@gmail.com</p>
            </a>
          </div>
          <div className="flex gap-2 items-center mb-6">
            <div>
              <IoIosCall />
            </div>
            <p className="text-sm">+234 7067318160</p>
          </div>
          <h1 className="text-2xl mb-2 text-darkerGreen font-bold">Socials</h1>

          <div className="flex gap-4 items-center">
            <div>
              <a href="https://www.facebook.com/share/w7YzCy636McnEEfa/?mibextid=qi2Omg">
                <FaFacebook size={"1.25em"} />
              </a>
            </div>
            <div>
              <a href="https://x.com/CedarWitTech?t=AjmovdfUYlq6fNjkOPUERA&s=09">
                <FaXTwitter size={"1.25em"} />
              </a>
            </div>
            <div>
              <IoLogoLinkedin size={"1.25em"} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
