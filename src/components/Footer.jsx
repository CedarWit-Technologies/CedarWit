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
          <h1 className="text-2xl text-darkerGreen font-bold mb-6">Company</h1>
          <p className="mb-6 text-base">About Us</p>
          <p className="mb-6 text-base">OurServices</p>
          <p className="mb-6 text-base">Portfolio</p>
          <p className="mb-6 text-base">Contact Us</p>
        </div>
        <div>
          <h1 className="text-2xl text-darkerGreen font-bold mb-6 ">Services</h1>
          <p className="mb-6 text-base">Software development</p>
          <p className="mb-6 text-base">Graphic Design</p>
          <p className="mb-6 text-base">Production</p>
          <p className="mb-6 text-base">digital marketing</p>
        </div>
        <div>
          <h1 className="text-2xl mb-6 text-darkerGreen font-bold">Contact Information</h1>
          <div className="flex gap-2 items-center mb-6">
            <div>
              <IoIosMail />
            </div>
            <p className="text-base">cedarwittechnologies@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center mb-6">
            <div>
              <IoIosCall />
            </div>
            <p className="text-base">+234 7067318160</p>
          </div>
          <h1 className="text-2xl mb-2 text-darkerGreen font-bold">Socials</h1>

          <div className="flex gap-4 items-center">
            <div>
              <FaFacebook size={"1.25em"} />
            </div>
            <div>
              <FaXTwitter size={"1.25em"} />
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
