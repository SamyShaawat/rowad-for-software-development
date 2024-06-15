import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const clients = [
  { id: 1, name: "Client 1", logo: "/path/to/logo1.png" },
  { id: 2, name: "Client 2", logo: "/path/to/logo2.png" },
  { id: 3, name: "Client 3", logo: "/path/to/logo3.png" },
  { id: 4, name: "Client 4", logo: "/path/to/logo4.png" },
  { id: 5, name: "Client 5", logo: "/path/to/logo5.png" },
  { id: 6, name: "Client 6", logo: "/path/to/logo6.png" },
  { id: 7, name: "Client 7", logo: "/path/to/logo7.png" },
  { id: 8, name: "Client 8", logo: "/path/to/logo8.png" },
  { id: 9, name: "Client 9", logo: "/path/to/logo9.png" },
  { id: 10, name: "Client 10", logo: "/path/to/logo10.png" },
  { id: 11, name: "Client 11", logo: "/path/to/logo11.png" },
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
        <h2 className="text-3xl font-semibold text-center mb-6">Our Clients</h2>
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} className="px-4">
              <div
                className="bg-white p-6 rounded-full h-32 w-32 mx-auto flex items-center justify-center cursor-pointer"
                onClick={handleLogoClick}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-24 w-24 rounded-full"
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
            Read more
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ClientsCarousel;
