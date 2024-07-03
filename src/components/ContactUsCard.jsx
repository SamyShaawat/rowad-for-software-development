import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaFax,
  FaLocationDot,
} from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const ContactUsCard = () => {
  return (
    <div className="bg-white">
      <section className="container">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex items-center justify-center text-5xl text-secondary mt-10 mb-10"
        >
          Contact Us
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
          {/* Image Section */}
          <div className="order-1 sm:order-2 relative">
            <div data-aos="zoom-in" data-aos-delay="400">
              {/* <dotlottie-player
                src="https://lottie.host/485d2939-ada0-480f-8c9e-cb6b2ae2d54a/DHREysNKSu.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player> */}
              <img
                src="../images/contactImages/contactus.png"
                alt=""
                className="rounded-full scale-100 duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
          </div>

          <div
            data-aos="slide-right"
            data-aos-delay="300"
            className="space-y-5 order-2 sm:order-1 mb-1"
          >
            <div className="bg-gray-800 text-white p-6 h-auto items-center justify-center text-left rounded-lg shadow-lg max-w-xl  mx-auto hover:shadow-[0_4px_8px_0_rgba(31,41,55,0.7)]  cursor-pointer duration-300 hover:scale-105">
              <p className="mb-8">
                <h1 className=" text-3xl mb-3">
                  R<span className="text-secondary">O</span>WAD For Software
                  Development
                </h1>{" "}
                We specialize in reliable and secure website hosting, developing
                and deploying high-quality, responsive websites, and creating
                innovative digital marketing strategies.
              </p>
              <div className="mb-4">
                <div className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-3">
                  <FaLocationDot className="text-xl sm:text-2xl" />
                  <span>584 El-Horreya Road, Gleem Alexandria, Egypt</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-3">
                  <IoMail className="text-xl sm:text-2xl" />
                  <span>info@rowad.com</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-3">
                  <MdPhone className="text-xl sm:text-2xl" />
                  <span>+20 109 1539396</span>
                </div>
              </div>
              <div className="mb-10">
                <div className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-3">
                  <FaFax className="text-xl sm:text-2xl" />
                  <span>+203 425 7786</span>
                </div>
              </div>

              <div className="flex text-center gap-4 mt-2">
                <a href="#" className="scale-100 hover:scale-110 duration-300">
                  <FaFacebook className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a href="#" className="scale-100 hover:scale-110 duration-300">
                  <FaInstagram className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a href="#" className="scale-100 hover:scale-110 duration-300">
                  <FaLinkedin className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a href="#" className="scale-100 hover:scale-110 duration-300">
                  <FaXTwitter className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsCard;
