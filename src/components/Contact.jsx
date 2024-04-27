import React from "react";
import { IoIosMail, IoIosCall, IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import GetStarted from "./GetStarted";
import Transition from "./Transition";

const Contact = () => {
  return (
    <Transition>
      <section
        id="contact"
        className="lg:px-32 py-8 pb-32 sm:px-4 contactBackground-image ipad:px-16"
      >
        <h1 className="lg:text-4xl tab:text-4xl text-center font-semibold text-3xl">
          Contact Us
        </h1>
        <div className="pb-16">
          <div className="lg:flex lg:justify-between lg:gap-24 lg:mt-24 font-semibold lg:items-center sm:pt-12 md:flex md:items-center md:gap-8 md:mt-20">
            <div className="border border-black lg:py-12 lg:px-8 lg:w-1/2 w-full rounded-2xl p-8 sm:border-2 ipad:mb-8 lg:pt-14 lg:pb-7 tab:w-1/2">
              <form className="text-black ">
                <div>
                  <input
                    className="font-medium border border-black w-full mb-8 pl-5 pr-1 py-2 rounded-xl sm:border-2"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="lg:pb-6">
                  <input
                    className="border border-[#13150B] w-full mb-8 pl-5 pr-1 py-2 font-medium rounded-xl sm:border-2"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <textarea
                    className="border border-[#13150B] w-full pl-3 pr-1 py-1 font-medium rounded-xl sm:border-2 resize-none"
                    name="message"
                    rows={7}
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

            <div className=" text-white bg-lightGreen rounded-xl p-8  sm:mt-10 sm:text-center lg:w-2/5 tab:w-1/2">
              <h1 className="lg:text-2xl mb-4 text-xl">Contact Information</h1>

              <div className="flex gap-2 items-center mb-4 sm:justify-center">
                <div>
                  <IoIosMail />
                </div>

                <p className="text-md">cedarwittechnologies@gmail.com</p>
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
    </Transition>
  );
};

export default Contact;
