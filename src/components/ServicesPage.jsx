// src/components/ServicesPage.jsx
import React from "react";
import services from "../data/services";


const ServicesPage = () => {
  return (
    <div className="bg-white">
      <section className="container min-h-[740px]">
        <h1 className="flex items-center justify-center text-5xl text-secondary mt-10 mb-10">
          Our Services
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
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
                {service.expand}
              </p>
              {!service.comingSoon && (
                <div className="flex justify-end mt-5"></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
