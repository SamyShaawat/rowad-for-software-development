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
import { NavLink } from "react-router-dom";
import links from "../data/links";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <>
      <div className="bg-black/90 text-slate-300 w-[auto] h-auto">
        <section className="container px-4">
          <div className="grid md:grid-cols-2 py-5">
            {/* Company Details */}
            <div data-aos="fade-up" data-aos-delay="300" className="py-8">
              <div className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                <a
                  href="/"
                  className="flex items-center gap-3 text-2xl text-black font-semibold"
                >
                  <h1 className="text-slate-300 footerlogo mb-3">
                    R<span className="text-secondary">O</span>WAD
                  </h1>
                </a>
              </div>
              <p className="text-sm">
                Welcome to{" "}
                <span className="font-semibold">
                  Rowad For Software Development
                </span>
                , your partner in digital growth. We specialize in reliable and
                secure web hosting, website development and deployment, and
                innovative digital marketing strategies.
              </p>
              <br />
              {/* Social Media handles */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="flex items-center gap-4 mt-2"
              >
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@rowad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scale-100 hover:scale-110 duration-300"
                >
                  <MailIcon className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/samyshaawat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scale-100 hover:scale-110 duration-300"
                >
                  <WhatsAppIcon className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/samyshaawat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scale-100 hover:scale-110 duration-300"
                >
                  <FaLinkedin className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 col-span-1 md:pl-10">
              {/* Site Navigation Column */}
              <div data-aos="fade-up" data-aos-delay="300">
                <div className="py-8">
                  <h1 className="text-xl font-bold mb-3">Site Navigation</h1>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary space-x-1 text-white/80"
                      >
                        <NavLink to={link.path}>{link.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Contact Column */}
              <div>
                <div data-aos="fade-up" data-aos-delay="500" className="py-8">
                  <h1 className="text-xl font-bold mb-3">Contact</h1>
                  <ul className="space-y-3">
                    <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
                      <FaLocationDot className="text-xl sm:text-2xl" />
                      <a
                        href="https://www.google.com/maps/place/Smart+System+LLC/@31.2391182,29.9597572,18z/data=!4m6!3m5!1s0x14f5c48ffef6c8a7:0x38b1014148770fe9!8m2!3d31.2395127!4d29.9637939!16s%2Fg%2F11b6d6m9lz?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        584 El-Horreya Road, Gleem Alexandria, Egypt
                      </a>
                    </li>
                    <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
                      <IoMail className="text-xl sm:text-2xl" />
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@rowad.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        info@rowad.com
                      </a>
                    </li>
                    <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
                      <MdPhone className="text-xl sm:text-2xl" />
                      <a
                        href="tel:+201091539396"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +20 109 1539396
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="border-t-2 border-gray-300/50 py-6 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <span>Copyright © 2024 </span>
              <a className="" href="/">
                Rowad
              </a>
              <span> All Rights Reserved</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
