import React, { useState } from "react";
import "../index.css"; // Ensure you have this for Tailwind CSS
import clients from "../data/clients";

const ClientsPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 4; // Two rows, three columns each

  // Calculate indices for slicing clients array
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white">
      <section className="container  ">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex items-center justify-center text-5xl text-secondary mt-10 mb-10"
        >
          Our Clients
        </h1>

        <div className="px-1 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            {currentClients.map((client) => (
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                key={client.id}
                className="bg-white rounded-lg shadow-lg p-6 relative hover:shadow-[0_4px_8px_0_rgba(251,138,2,0.7)] hover:-translate-y-1 cursor-pointer "
              >
                <div className="absolute top-0 right-0 p-3 m-4 bg-white gap-5 rounded-full mx-auto flex h-32 w-32">
                  <img
                    src={client.logo}
                    alt={client.name}
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    className="rounded-xl"
                  />
                </div>
                <div className="absolute top-12 left-0 pr-3 m-4 text-center font-semibold xl:text-2xl md:text-xl  text-slate-700  lg:text-left lg:flex-1">
                  {client.name}
                </div>
                <div className="mt-32 text-left mb-10">
                  <p>{client.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 mb-4 text-center">
                  <button
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/70"
                    onClick={() => window.open(client.linkWebsite, "_blank")}
                  >
                    View Website
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="400"
            className="mt-4 flex justify-center"
          >
            {Array.from(
              { length: Math.ceil(clients.length / clientsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`mx-1 px-4 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-secondary/90 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPagination;
