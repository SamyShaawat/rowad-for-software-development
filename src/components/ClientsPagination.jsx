import React, { useState } from "react";
import "../index.css"; // Ensure you have this for Tailwind CSS

const clients = [
    {
      id: 1,
      name: "Kadmar Group",
      logo: "../images/clientsImages/KadmarGroup.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem necessitatibus cupiditate laudantium iste? Officia deserunt saepe at assumenda? Dolorem, debitis. Rem, ratione vel odio delectus velit ducimus blanditiis laborum.",
      linkWebsite: "https://www.kadmargroup.com"
    },
    {
      id: 2,
      name: "Beit",
      logo: "../images/clientsImages/Beit.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem necessitatibus cupiditate laudantium iste? Officia deserunt saepe at assumenda? Dolorem, debitis. Rem, ratione vel odio delectus velit ducimus blanditiis laborum.",
      linkWebsite: "https://www.beit.com"
    },
    {
      id: 3,
      name: "EGL",
      logo: "../images/clientsImages/EGL.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem necessitatibus cupiditate laudantium iste? Officia deserunt saepe at assumenda? Dolorem, debitis. Rem, ratione vel odio delectus velit ducimus blanditiis laborum.",
      linkWebsite: "https://www.egl.com"
    },
    {
      id: 4,
      name: "BCME",
      logo: "../images/clientsImages/BCME.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem necessitatibus cupiditate laudantium iste? Officia deserunt saepe at assumenda? Dolorem, debitis. Rem, ratione vel odio delectus velit ducimus blanditiis laborum.",
      linkWebsite: "https://www.bcme.com"
    },
    {
      id: 5,
      name: "IMG",
      logo: "../images/clientsImages/IMG.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem necessitatibus cupiditate laudantium iste? Officia deserunt saepe at assumenda? Dolorem, debitis. Rem, ratione vel odio delectus velit ducimus blanditiis laborum.",
      linkWebsite: "https://www.img.com"
    },
    {
      id: 6,
      name: "MackeanLawFirm",
      logo: "../images/clientsImages/MackeanLawFirm.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem necessitatibus cupiditate laudantium iste? Officia deserunt saepe at assumenda? Dolorem, debitis. Rem, ratione vel odio delectus velit ducimus blanditiis laborum.",
      linkWebsite: "https://www.mackeanlawfirm.com"
    },
    {
      id: 7,
      name: "NofaFloors",
      logo: "../images/clientsImages/NofaFloors.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem necessitatibus cupiditate laudantium iste? Officia deserunt saepe at assumenda? Dolorem, debitis. Rem, ratione vel odio delectus velit ducimus blanditiis laborum.",
      linkWebsite: "https://www.nofafloors.com"
    },
    {
      id: 8,
      name: "SmartSystem",
      logo: "../images/clientsImages/SmartSystem.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem necessitatibus cupiditate laudantium iste? Officia deserunt saepe at assumenda? Dolorem, debitis. Rem, ratione vel odio delectus velit ducimus blanditiis laborum.",
      linkWebsite: "https://www.smartsystem.com"
    },
    {
      id: 9,
      name: "Taiba",
      logo: "../images/clientsImages/Taiba.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem necessitatibus cupiditate laudantium iste? Officia deserunt saepe at assumenda? Dolorem, debitis. Rem, ratione vel odio delectus velit ducimus blanditiis laborum.",
      linkWebsite: "https://www.taiba.com"
    },
    {
      id: 10,
      name: "ProkenChemicals",
      logo: "../images/clientsImages/ProkenChemicals.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem necessitatibus cupiditate laudantium iste? Officia deserunt saepe at assumenda? Dolorem, debitis. Rem, ratione vel odio delectus velit ducimus blanditiis laborum.",
      linkWebsite: "https://www.prokenchemicals.com"
    },
    {
      id: 11,
      name: "MalakAlReem",
      logo: "../images/clientsImages/MalakAlReem.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem necessitatibus cupiditate laudantium iste? Officia deserunt saepe at assumenda? Dolorem, debitis. Rem, ratione vel odio delectus velit ducimus blanditiis laborum.",
      linkWebsite: "https://www.malakalreem.com"
    },
    {
      id: 12,
      name: "CSI",
      logo: "../images/clientsImages/CSI.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem necessitatibus cupiditate laudantium iste? Officia deserunt saepe at assumenda? Dolorem, debitis. Rem, ratione vel odio delectus velit ducimus blanditiis laborum.",
      linkWebsite: "https://www.csi.com"
    },
  ];
  
const ClientsPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 6; // Two rows, three columns each

  // Calculate indices for slicing clients array
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white">
      <section className="container min-h-[320px] ">
        <h1 className="flex items-center justify-center text-5xl text-secondary mt-10">
          Our Clients
        </h1>
      
      <div className="px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentClients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-lg shadow-lg p-6 relative hover:shadow-[0_4px_8px_0_rgba(251,138,2,0.7)] hover:-translate-y-1 cursor-pointer"
            >
              <div className="absolute top-0 left-5 m-4 bg-white p-3 rounded-full h-32 w-32  mx-auto flex     ">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="rounded-xl"
                />
              </div>
              <div className="absolute top-11 right-5 m-4 text-2xl text-slate-700">
                {client.name}
              </div>
              <div className="mt-28 text-center mb-10">
                <p>{client.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 mb-4 text-center">
                <button
                  className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/70"
                  onClick={() => window.open(client.website, "_blank")}
                >
                  View Website
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
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
