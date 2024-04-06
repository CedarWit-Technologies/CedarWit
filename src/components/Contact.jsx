import React from "react";
import { IoIosMail, IoIosCall, IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="px-32 py-8 contactBackground-image">
      <h1 className="text-4xl text-center font-semibold">Contact Us</h1>
      <div className="pb-16">
        <div className="flex gap-64  mt-24 font-semibold items-center">
          <div className="border border-black p-8 w-2/5 ">
            <form className="text-black">
              <div>
                <input
                  className="border border-black w-full mb-8 p-1"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="border border-[#13150B] w-full mb-8 p-1"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  className="border border-black w-full p-1"
                  name="message"
                  rows={6}
                  cols={20}
                >
                  {" "}
                </textarea>
              </div>
            </form>
            <button
              className="bg-darkGreen text-white w-full p-2 mt-8"
              type="submit"
            >
              Send
            </button>
          </div>
          <div>
            <h1 className="text-2xl mb-4">Contact Information</h1>
            <div className="flex gap-2 items-center mb-4">
              <div>
                <IoIosMail />
              </div>
              <p className="text-black">cedarwittechnologies@gmail.com</p>
            </div>
            <div className="flex gap-2 items-center mb-4">
              <div>
                <IoIosCall />
              </div>
              <p className="text-black">+234 7067318160</p>
            </div>
            <h1 className="text-2xl mb-4">Socials</h1>

            <div className="flex gap-4 items-center">
              <div>
                <FaFacebook size={"2em"} />
              </div>
              <div>
                <FaXTwitter size={"2em"} />
              </div>
              <div>
                <IoLogoLinkedin size={"2em"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
