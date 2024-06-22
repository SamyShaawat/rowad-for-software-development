import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Web Development",
    description: "We provide modern web development solutions.",
    icon: "../images/servicesImages/WebDevelopment.png",
    comingSoon: false,
  },
  {
    id: 2,
    name: "Web Hosting",
    description: "Reliable and secure web hosting services.",
    icon: "../images/servicesImages/WebHosting.png",
    comingSoon: false,
  },
  {
    id: 3,
    name: "Digital Marketing",
    description:
      "Boost your online presence with our digital marketing services.",
    icon: "../images/servicesImages/DigitalMarketing.png",
    comingSoon: false,
  },
  {
    id: 4,
    name: "Mobile Development",
    description: "Coming Soon",
    icon: "../images/servicesImages/MobileDevelopment1.png",
    comingSoon: true,
  },
  {
    id: 5,
    name: "AI Chat Bots",
    description: "Coming Soon",
    icon: "../images/servicesImages/AIChatBot.png",
    comingSoon: true,
  },
];

const ServicesCards = () => {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate("/our-services");
  };

  return (
    <>
    <div className="bg-white-200">
      <section className="container mx-auto py-10 relative mt-1">
        <div>
          <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
            Explore Our Services
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-[0_4px_8px_0_rgba(251,138,2,0.7)] hover:-translate-y-1 cursor-pointer ${
                service.comingSoon ? "opacity-50" : ""
              }`}
            >
              <div className="flex justify-center mb-5">
                <img
                  src={service.icon}
                  alt={`${service.name} icon`}
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <h2 className="text-center text-xl font-semibold mb-2">
                {service.name}
              </h2>
              <p className="text-center text-gray-600 mb-4">
                {service.description}
              </p>
              {!service.comingSoon && (
                <div className="flex justify-end mt-5">
                  <button
                    className="btn-primary flex items-center"
                    onClick={handleReadMoreClick}
                  >
                    <FaArrowRight className="hover:translate-x-2 duration-300 " />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default ServicesCards;
