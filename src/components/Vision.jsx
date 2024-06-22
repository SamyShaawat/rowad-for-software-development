import React from "react";

const Vision = () => {
  return (
    <>
      {/* Vision Section */}
      <div className="bg-gray-200">
        <section className="container  min-h-[355px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/* Text Content Section */}
            <div className="space-y-5 order-1 sm:order-2 xl:pr-30">
              <h1 className="text-3xl sm:text-4xl font-semibold">
                Our Vision
              </h1>
              <p className="text-slate-600 text-lg sm:text-xl">
                To be a global leader in digital solutions, known for our
                innovation, quality, and customer-centric approach. We envision
                a world where every business can achieve its full potential
                through the power of technology.
              </p>
            </div>
            {/* Image Section */}
            <div className="order-2 sm:order-1 relative">
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
          </div>
        </section>
      </div>
    </>
  );
};

export default Vision;
