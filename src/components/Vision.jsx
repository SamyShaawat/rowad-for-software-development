import React from "react";

const Vision = () => {
  return (
    <>
      {/* Vision Section */}
      <div className="bg-gray-200">
        <section className="container min-h-[355px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center mt-10 mb-10">
            {/* Text Content Section */}
            <div className="space-y-5 order-1 sm:order-2 xl:pr-30">
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-3xl sm:text-4xl font-semibold"
              >
                Our Vision
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-slate-600 text-lg sm:text-xl"
              >
                To be a global leader in digital solutions, known for our
                innovation, quality, and customer-centric approach. We envision
                a world where every business can achieve its full potential
                through the power of technology.
              </p>
            </div>
            {/* Image Section */}
            <div className="order-2 sm:order-1 relative">
              <div data-aos="slide-right" data-aos-delay="200">
                <img
                  src="../images/aboutImages/our-vision.jpg"
                  alt="WhoWeAre"
                  className="rounded-full h-72 w-72"
                  width="288" // Explicit width
                  height="288" // Explicit height
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vision;
