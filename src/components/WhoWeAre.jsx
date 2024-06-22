import React from "react";

const WhoWeAre = () => {
  return (
    <>
      {/* Who We Are Section */}
      <div className="bg-gray-200">
        <section className="container  min-h-[300px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/* Image Section */}
            <div className="order-2 sm:order-1 relative">
              <div >
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
            <div className="space-y-5 order-2 sm:order-1 xl:pr-30 mb-7">
              <h1 className="text-3xl sm:text-4xl font-semibold">
                Who We Are
              </h1>
              <p className="text-slate-600 text-lg sm:text-xl">
                We are a team of dedicated professionals committed to delivering
                top-notch digital solutions to our clients. With a rich history
                of innovation and excellence, we have transformed numerous ideas
                into successful projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhoWeAre;
