import React from "react";

const Mission = () => {
  return (
    <>
      <div className="bg-white">
        {/* Mission Section */}
        <section className="container  min-h-[355px] flex mt-10 sm:mt-0">
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
            <div className="space-y-5 order-2 sm:order-1 xl:pr-30">
              <h1 className="text-3xl sm:text-4xl font-semibold">
                Our Mission
              </h1>
              <p className="text-slate-600 text-lg sm:text-xl">
                Our mission is to empower businesses with cutting-edge digital
                solutions that drive growth and success. We strive to deliver
                exceptional value through our expertise, innovation, and
                commitment to excellence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Mission;
