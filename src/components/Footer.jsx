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
            <img src="public/images/FooterLogo.svg" />
          </div>
          <p className="text-base text-sm">Bringing your ideas to reality</p>
        </div>
        <div>
          <h1 className="text-2xl text-darkGreen mb-4">Company</h1>
          <p className="mb-4 text-sm">About Us</p>
          <p className="mb-4 text-sm">OurServices</p>
          <p className="mb-4 text-sm">Portfolio</p>
          <p className="mb-4 text-sm">Contact Us</p>
        </div>
        <div>
          <h1 className="text-2xl text-darkGreen mb-4 ">Services</h1>
          <p className="mb-4 text-sm">Software development</p>
          <p className="mb-4 text-sm">Graphic Design</p>
          <p className="mb-4 text-sm">Production</p>
          <p className="mb-4 text-sm">digital marketing</p>
        </div>
        <div>
          <h1 className="text-2xl mb-4 text-darkGreen">Contact Information</h1>
          <div className="flex gap-2 items-center mb-4">
            <div>
              <IoIosMail />
            </div>
            <p className="text-sm">cedarwittechnologies@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center mb-4">
            <div>
              <IoIosCall />
            </div>
            <p className="text-sm">+234 7067318160</p>
          </div>
          <h1 className="text-2xl mb-4 text-darkGreen">Socials</h1>

          <div className="flex gap-4 items-center">
            <div>
              <FaFacebook size={"1em"} />
            </div>
            <div>
              <FaXTwitter size={"1em"} />
            </div>
            <div>
              <IoLogoLinkedin size={"1em"} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
