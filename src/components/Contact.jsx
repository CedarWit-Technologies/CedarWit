import React from "react";
import { IoIosMail, IoIosCall, IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import GetStarted from "./GetStarted";

const Contact = () => {
  return (
    <section className="px-32 py-8 pb-32 contactBackground-image">
      <h1 className="text-4xl text-center font-semibold">Contact Us</h1>
      <div className="pb-16">
        <div className="flex gap-32  mt-24 font-semibold items-center">
          <div className="border border-black p-8 px-12 w-3/5 rounded-2xl pt-12">
            <form className="text-black">
              <div>
                <input
                  className="border border-black w-full mb-8 pl-5 pr-1 py-2 rounded-xl"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="border border-[#13150B] w-full mb-8 pl-5 pr-1 py-2 rounded-xl"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  className="border border-black w-full pl-3 pr-1 py-1 rounded-xl"
                  name="message"
                  rows={6}
                  cols={20}
                >
                  {" "}
                </textarea>
              </div>
            </form>
            <button
              className="bg-darkGreen text-white w-full px-2 py-3 mt-8 rounded-xl"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="text-white bg-lightGreen rounded-xl p-8 pr-16">
            <h1 className="text-xl mb-4">Contact Information</h1>
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
            <h1 className="text-xl mb-4">Socials</h1>

            <div className="flex gap-4 items-center">
              <div>
                <FaFacebook size={"1em"} />
              </div>
              <div>
                <FaXTwitter size={"1em"} />
              </div>
              <div>
                <IoLogoLinkedin size={"2em"} />
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
