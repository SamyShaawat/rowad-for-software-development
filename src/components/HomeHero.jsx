import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/about-us");
  };

  return (
    <>
      <div>
        <section className="container bg-white min-h-[400px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/* Image Section */}
            <div className="order-1 sm:order-2 relative">
              <div>
                <dotlottie-player
                  src="https://lottie.host/4c6d0011-7cb8-4a0c-9f3d-11455d4e7641/sJe7fsJVQM.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></dotlottie-player>
              </div>
            </div>
            {/* Text Content Section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-30 ">
              <h1 className=" text-3xl sm:text-4xl font-semibold">R<span className="text-secondary">O</span>WAD  For Software Development</h1>
              <h3 className="text-slate-500 text-xl sm:text-2xl font-semibold">
              Transforming Ideas into Reality
              </h3>
              <p className="text-slate-600 text-lg sm:text-xl">
              We are your partner in digital growth providing digital solutions, specializing in reliable and secure web hosting, website development and deployment, and innovative digital marketing strategies. 
              </p>
              <button
                className="btn-primary flex items-center md:mb-5"
                onClick={handleReadMoreClick}
              >
                Read more
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeHero;
