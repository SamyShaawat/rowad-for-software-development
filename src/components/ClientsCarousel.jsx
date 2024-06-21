import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const clients = [
  {
    id: 1,
    name: "Kadmar Group",
    logo: "../images/clientsImages/KadmarGroup.png",
  },
  { id: 2, name: "Beit", logo: "../images/clientsImages/Beit.png" },
  { id: 3, name: "EGL", logo: "../images/clientsImages/EGL.png" },
  { id: 4, name: "BCME", logo: "../images/clientsImages/BCME.png" },
  { id: 5, name: "IMG", logo: "../images/clientsImages/IMG.png" },
  {
    id: 6,
    name: "MackeanLawFirm",
    logo: "../images/clientsImages/MackeanLawFirm.png",
  },
  { id: 7, name: "NofaFloors", logo: "../images/clientsImages/NofaFloors.png" },
  { id: 8, name: "SmartSystem", logo: "../images/clientsImages/SmartSystem.png" },
  { id: 9, name: "Taiba", logo: "../images/clientsImages/Taiba.png" },
  { id: 10, name: "ProkenChemicals", logo: "../images/clientsImages/ProkenChemicals.png" },
  { id: 11, name: "MalakAlReem", logo: "../images/clientsImages/MalakAlReem.png" },
  { id: 12, name: "CSI", logo: "../images/clientsImages/CSI.png" },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaAngleRight className="text-3xl text-gray-700 hover:text-gray-900" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaAngleLeft className="text-3xl text-gray-700 hover:text-gray-900" />
    </div>
  );
};

const ClientsCarousel = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/our-clients");
  };

  const handleReadMoreClick = () => {
    navigate("/our-clients");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200">
      <section className="container mx-auto py-10 relative mt-5">
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          Our Clients
        </h2>
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} className="px-4 my-7 ">
              <div
                className="bg-white p-3 rounded-full h-32 w-32 scale-100 mx-auto flex items-center justify-center cursor-pointer duration-300 hover:scale-110 "
                onClick={handleLogoClick}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="rounded-xl "
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-11">
          <button
            className="btn-primary flex items-center"
            onClick={handleReadMoreClick}
          >
            View more
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ClientsCarousel;
