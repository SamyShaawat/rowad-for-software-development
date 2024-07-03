import React from "react";

const WhatWeDo = () => {
  return (
    <>
      {/* What We Do Section */}
      <div className="bg-white">
        <section className="container  min-h-[320px] flex mt-6 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center mt-10 mb-10">
            {/* Image Section */}
            <div className="order-1 sm:order-2 relative">
              <div data-aos="slide-left" data-aos-delay="200">
                <img
                  src="../images/aboutImages/what-we-do.jpg"
                  alt="WhoWeAre"
                  className="rounded-3xl h-64 w-96"
                />
              </div>
            </div>
            {/* Text Content Section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-30 mb-7">
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-3xl sm:text-4xl font-semibold"
              >
                What We Do
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-slate-600 text-lg sm:text-xl "
              >
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
