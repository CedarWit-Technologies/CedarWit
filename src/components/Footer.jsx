import React from "react";
import { IoIosMail, IoIosCall, IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-lightGreen text-white px-32 py-8 text-lg font-semibold">
      <div className="grid grid-cols-4">
        <div>
          <div className="mb-2">
            {" "}
            <img src="images/FooterLogo.svg" />
          </div>
          <p className="text-base">Bringing your ideas to reality</p>
        </div>
        <div>
          <h1 className="text-2xl text-darkGreen ">Company</h1>
          <p className="mb-4 ">About Us</p>
          <p className="mb-4 ">OurServices</p>
          <p className="mb-4 ">Portfolio</p>
          <p className="mb-4 ">Contact Us</p>
        </div>
        <div>
          <h1 className="text-2xl text-darkGreen mb-4 ">Services</h1>
          <p className="mb-4 ">Software development</p>
          <p className="mb-4 ">Graphic Design</p>
          <p className="mb-4 ">Production</p>
          <p className="mb-4 ">digital marketing</p>
        </div>
        <div>
          <h1 className="text-2xl mb-4 text-darkGreen">Contact Information</h1>
          <div className="flex gap-2 items-center mb-4">
            <div>
              <IoIosMail />
            </div>
            <p>cedarwittechnologies@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center mb-4">
            <div>
              <IoIosCall />
            </div>
            <p>+234 7067318160</p>
          </div>
          <h1 className="text-2xl mb-4 text-darkGreen">Socials</h1>

          <div className="flex gap-4 items-center">
            <div>
              <FaFacebook size={"1.2em"} />
            </div>
            <div>
              <FaXTwitter size={"1.2em"} />
            </div>
            <div>
              <IoLogoLinkedin size={"1.2em"} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
