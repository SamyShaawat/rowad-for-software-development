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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";

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
              <img
                src="../images/contactImages/contactus.png"
                alt="Contact Us"
                className="rounded-full scale-100 duration-300 hover:scale-105 cursor-pointer"
                width="400" // Specify the width of the image
                height="400" // Specify the height of the image
              />
            </div>
          </div>

          <div
            data-aos="slide-right"
            data-aos-delay="300"
            className="space-y-5 order-2 sm:order-1 mb-1"
          >
            <div className="bg-gray-800 text-white p-6 h-auto items-center justify-center text-left rounded-lg shadow-lg max-w-xl mx-auto hover:shadow-[0_4px_8px_0_rgba(31,41,55,0.7)] cursor-pointer duration-300 hover:scale-105">
              <p className="mb-8">
                <h1 className="text-3xl mb-3">
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
                  <a
                    href="https://www.google.com/maps/place/Smart+System+LLC/@31.2391182,29.9597572,18z/data=!4m6!3m5!1s0x14f5c48ffef6c8a7:0x38b1014148770fe9!8m2!3d31.2395127!4d29.9637939!16s%2Fg%2F11b6d6m9lz?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    584 El-Horreya Road, Gleem Alexandria, Egypt
                  </a>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-3">
                  <IoMail className="text-xl sm:text-2xl" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@rowad.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    info@rowad.com
                  </a>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-3">
                  <MdPhone className="text-xl sm:text-2xl" />
                  <a href="tel:+201091539396"                     target="_blank"
                    rel="noopener noreferrer">+20 109 1539 396</a>
                </div>
              </div>

              <div className="flex text-center gap-4 mt-2">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@rowad.com"
                  className="scale-100 hover:scale-110 duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailIcon className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a
                  href="https://wa.me/201091539396"
                  className="scale-100 hover:scale-110 duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/samyshaawat/"
                  className="scale-100 hover:scale-110 duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
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
