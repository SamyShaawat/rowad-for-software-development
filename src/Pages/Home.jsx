import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/about-us");
  };
  return (
    <>
      <main className="bg-white">
        <div className="container min-h-[620px] flex mt-10 sm:mt-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/* Image Section */}
            <div className="order-1 sm:order-2 relative">
              <div>
                <dotlottie-player
                  src="https://lottie.host/92a7e98b-a886-4bf2-acbb-0aa563b1fc6b/1kQf5PUGVC.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></dotlottie-player>
              </div>
            </div>
            {/* Text Content Section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <h1 className="text-3xl sm:text-4xl font-semibold">
                Transforming Ideas into{" "}
                <span className="text-blue">Reality</span>
              </h1>
              <h3 className="text-slate-500 text-xl sm:text-2xl font-semibold">
                Your Partner in Digital Growth
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis minima dolorem, at iure maiores vel quod excepturi
                quibusdam earum deserunt quo, ipsam cupiditate pariatur ipsum
                culpa accusamus beatae aperiam quasi?
              </p>
              <button className="btn-primary" onClick={handleReadMoreClick}>
                Read more
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
