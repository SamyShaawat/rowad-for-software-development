import React, { useState } from "react";
import "../index.css"; // Ensure you have this for Tailwind CSS

const clients = [
  {
    id: 1,
    name: "Kadmar Group",
    logo: "../images/clientsImages/KadmarGroup.png",
    description:
      "Kadmar Group offers a comprehensive range of services, including shipping, logistics, offshore support, and travel services. The company is committed to professionalism, efficiency, and quality, providing customized solutions to meet client needs. Kadmar Group serves various industries with specialized services such as vessel provision for the oil and gas industry and integrated supply chain management solutions. They focus on innovation and maintaining high standards to ensure customer satisfaction across their diverse service offerings.",
    linkWebsite: "https://kadmargroup.com",
  },
  {
    id: 2,
    name: "Beit Shipping and Logistics",
    logo: "../images/clientsImages/Beit.png",
    description:
      "Beit Shipping and Logistics provides comprehensive transportation and logistics services, including air, ocean, road, and train freight. They emphasize efficiency and global coverage, offering tailored solutions such as customs clearance and warehouse management. Beit Shipping ensures timely delivery and optimized supply chain management, catering to diverse industry needs with a strong focus on customer satisfaction.",
    linkWebsite: "http://beit-shipping.com",
  },
  {
    id: 3,
    name: "Egyptian Global Logistics (EGL)",
    logo: "../images/clientsImages/EGL.png",
    description:
      "Egyptian Global Logistics (EGL) is a leading provider of comprehensive shipping and logistics services in Egypt. They offer tailored solutions across air, ocean, and land freight, along with warehousing, distribution, and project cargo handling. EGL specializes in sectors like oil & gas, power, mining, and construction, ensuring efficient, cost-effective, and safe transport logistics. The company prides itself on its extensive network, innovative solutions, and strong client partnerships.",
    linkWebsite: "https://www.eglegypt.com",
  },
  {
    id: 4,
    name: "BC Marine Electronics (BCME)",
    logo: "../images/clientsImages/BCME.png",
    description:
      "BC Marine Electronics (BCME) specializes in GMDSS & NAVCOM services, ensuring compliance with maritime regulations. Founded in 2023 in British Columbia, BCME offers comprehensive services including radio surveys, compass servicing, maintenance contracts, VDR repairs, and satellite communication solutions. Their certified engineers provide high-quality, cost-effective solutions tailored to the needs of ship owners and managers, emphasizing reliability and adherence to international standards.",
    linkWebsite: "http://img-bcme.com",
  },
  {
    id: 5,
    name: "International Maritime Group (IMG)",
    logo: "../images/clientsImages/IMG.png",
    description:
      "IMG provides specialized technical marine services, focusing on GMDSS & NAVCOM systems. Established in 2012 in Ontario, Canada, the company serves ship owners, managers, classification societies, and flag states. IMG offers a range of services including navigation and communication equipment, safety systems, and voyage data recorders. They emphasize reliability, compliance, and quality in their service offerings.",
    linkWebsite: "https://img-ca.com",
  },
  {
    id: 6,
    name: "Mackean Law Firm",
    logo: "../images/clientsImages/MackeanLawFirm.png",
    description:
      "Mackean Law Firm is dedicated to seeking unconventional approaches to address clients' needs in a rapidly evolving marketplace. By combining a business-minded perspective with exceptional legal techniques, the firm ensures clients' satisfaction through Total Quality Management (TQM), which includes clearly defined needs, accurately determined targets, well-planned means, and defect-free performance.",
    linkWebsite: "https://www.mackeanlawfirm.com",
  },
  {
    id: 7,
    name: "Nofa Floors",
    logo: "../images/clientsImages/NofaFloors.png",
    description:
      "Nofa Floors, established in 1950, specializes in high-quality wood flooring. The company emphasizes the artistry of parquetry, offering a variety of patterns, borders, and accents. They provide tailored wood flooring solutions, focusing on innovation and maintaining traditional craftsmanship. Nofa Floors aims to bring the art of parquetry to modern spaces, ensuring aesthetic appeal and durability.",
    linkWebsite: "https://nofafloors.com",
  },
  {
    id: 8,
    name: "Smart System",
    logo: "../images/clientsImages/SmartSystem.png",
    description:
      "Smart System is a leading information technology company based in Egypt, Established in 2007, serving the MENA region and Africa. We offer advanced IT solutions to help customers innovate, improve efficiency, and achieve new levels of success. With over 15 years of experience and a highly qualified staff boasting over 25 years of combined expertise, Smart System has successfully supported numerous market leaders and reputable enterprises. Our commitment is to deliver high-quality services, products, and knowledge, fostering growth and maintaining leadership in the IT field.",
    linkWebsite: "https://smartsystemit.com",
  },
  {
    id: 9,
    name: "Taiba for Electrical Construction",
    logo: "../images/clientsImages/Taiba.png",
    description:
      "Taiba for Electrical Construction, established in 2008 in Egypt by Eng. Waleed Othman, specializes in electrical construction projects. They offer a wide range of services, including installation and maintenance of electrical systems for industrial and commercial facilities. The company is dedicated to achieving top certifications and adheres to high standards of quality and safety. Their portfolio includes projects in sectors such as steel production, fertilizer manufacturing, and solar energy.",
    linkWebsite: "http://taibaelec.com",
  },
  {
    id: 10,
    name: "Prokem Specialty Chemicals",
    logo: "../images/clientsImages/ProkenChemicals.png",
    description:
      "Prokem Specialty Chemicals provides a wide range of chemical products for various construction needs, including mortar admixtures, bonding agents, repair and corrosion inhibitors, waterproofing, and protective coatings. The company emphasizes high-quality products and services, timely delivery, and strong customer support. Prokem is committed to client satisfaction, offering innovative and effective solutions tailored to the construction industry.",
    linkWebsite: "https://prokemsc.com",
  },
  {
    id: 11,
    name: "Malak Al Reem Properties Development",
    logo: "../images/clientsImages/MalakAlReem.png",
    description:
      "Malak Al Reem Properties Development, based in Dubai and established in 2005, specializes in residential and commercial real estate across the Gulf region. They emphasize sophistication, high-quality finishes, and sustainability, with projects in Dubai, Sharjah, and Ajman. Their in-house wood factory ensures superior craftsmanship and attention to detail, setting them apart in the market.",
    linkWebsite: "https://malakalreem.com",
  },
  {
    id: 12,
    name: "Contracting & Services For Industry (CSI)",
    logo: "../images/clientsImages/CSI.png",
    description:
      "CSI specializes in construction and industrial services, focusing on new installations, plant revamp, and rehabilitation projects. They are committed to quality, safety, and client satisfaction through open communication and continuous innovation. CSI serves various industries, providing project support, mechanical, civil, electrical, painting, and insulation services. Their mission emphasizes honesty, integrity, and maintaining trust with clients.",
    linkWebsite: "https://csiegy.com",
  },

  {
    id: 13,
    name: "Egypt Medical (EGYMED)",
    logo: "../images/clientsImages/EgyptMedical.png",
    description:
      "EGYMED, established in 1994, specializes in providing medical, surgical, pharmaceutical, and laboratory products. Their offerings include silicone surgical implants, compression garments, wound care products, and biocompatible implants for craniofacial reconstruction. EGYMED aims to be a trusted provider of innovative healthcare and wellness solutions across Egypt and the Middle East, ensuring quality and reliability in their products and services.",
    linkWebsite: "http://www.egymed.com.eg/",
  },
];

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
        <h1 className="flex items-center justify-center text-5xl text-secondary mt-10 mb-10">
          Our Clients
        </h1>

        <div className="px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            {currentClients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-lg shadow-lg p-6 relative hover:shadow-[0_4px_8px_0_rgba(251,138,2,0.7)] hover:-translate-y-1 cursor-pointer"
              >
                <div className="absolute top-0 right-5 m-4 bg-white p-3 rounded-full h-32 w-32  mx-auto flex">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="rounded-xl"
                  />
                </div>
                <div className="absolute top-11 left-5 m-4 text-2xl text-slate-700">
                  {client.name}
                </div>
                <div className="mt-32 text-left mb-10">
                  <p>{client.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 mb-4 text-center">
                  <button
                    className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/70"
                    onClick={() => window.open(client.linkWebsite, "_blank")}
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
