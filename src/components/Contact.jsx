import React from "react";
import { IoIosMail, IoIosCall, IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import GetStarted from "./GetStarted";

const Contact = () => {
  return (
    <section className="lg:px-32 py-8 pb-32 px-8 contactBackground-image ipad:px-16">
      <h1 className="lg:text-4xl text-center font-semibold text-3xl">
        Contact Us
      </h1>
      <div className="pb-16">
        <div className="lg:flex lg:gap-64 lg:mt-24 font-semibold lg:items-center sm:pt-12 md:flex md:items-center md:gap-8 md:mt-20">
          <div className="border border-black lg:py-12 lg:px-8 lg:w-3/5 w-full rounded-2xl p-8 sm:border-2">
            <form className="text-black">
              <div>
                <input
                  className="font-medium border border-black w-full mb-8 pl-5 pr-1 py-2 rounded-xl sm:border-2"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="border border-[#13150B] w-full mb-8 pl-5 pr-1 py-2 font-medium rounded-xl sm:border-2"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  className="border border-black w-full pl-3 pr-1 py-1 font-medium rounded-xl sm:border-2"
                  name="message"
                  rows={6}
                  cols={20}
                ></textarea>
              </div>
            </form>
            <button
              className="bg-darkGreen text-white w-full px-2 py-3 mt-8 rounded-xl"
              type="submit"
            >
              Send
            </button>
          </div>

          <div className="lg:-translate-x-20 text-white bg-lightGreen rounded-xl p-8 lg:pr-16 sm:mt-10 sm:text-center">
            <h1 className="lg:text-3xl mb-4 text-2xl">Contact Information</h1>

            <div className="flex gap-2 items-center mb-4 sm:justify-center">
              <div>
                <IoIosMail />
              </div>

              <p className="text-lg">cedarwittechnologies@gmail.com</p>
            </div>
            <div className="flex gap-2 items-center mb-4 sm:justify-center">
              <div>
                <IoIosCall />
              </div>
              <p className="text-sm">+234 7067318160</p>
            </div>
            <h1 className="text-xl mb-4">Socials</h1>

            <div className="flex lg:gap-4 sm:gap-8 items-center sm:justify-center">
              <div>
                <FaFacebook size={"1.5em"} />
              </div>
              <div>
                <FaXTwitter size={"1.5em"} />
              </div>
              <div>
                <IoLogoLinkedin size={"1.5em"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetStarted />
    </section>
  );
};

export default Contact;
