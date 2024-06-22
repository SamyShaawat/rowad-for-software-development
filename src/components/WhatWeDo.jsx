import React from "react";

const WhatWeDo = () => {
  return (
    <>
      {/* What We Do Section */}
      <div className="bg-white">
        <section className="container  min-h-[320px] flex mt-6 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center">
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
            <div className="space-y-5 order-2 sm:order-1 xl:pr-30 mb-7">
              <h1 className="text-3xl sm:text-4xl font-semibold">
                What We Do
              </h1>
              <p className="text-slate-600 text-lg sm:text-xl ">
                Our services range from web development and digital marketing to
                custom software solutions. We aim to help businesses grow by
                providing the tools and expertise they need to succeed in the
                digital world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatWeDo;
