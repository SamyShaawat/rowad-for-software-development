import React from "react";

const AboutHero = () => {
  return (
    <>
      {/* Hero About Section */}
      <div className="bg-white">
        <section className="container mt-10 sm:mt-0">
          <h1
            data-aos="zoom-in"
            data-aos-delay="100"
            className="flex items-center justify-center text-5xl text-secondary mt-10"
          >
            About Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/* Image Section */}
            <div className="order-1 sm:order-2 relative">
              <div data-aos="zoom-in" data-aos-delay="500">
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
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className=" text-3xl sm:text-4xl font-semibold text-slate-800"
              >
                R<span className="text-secondary">O</span>WAD For Software
                Development
              </h1>
              <h3
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-slate-500 text-xl sm:text-2xl font-semibold"
              >
                Transforming Ideas into Reality
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-slate-600 text-lg sm:text-xl"
              >
                We are your partner in digital growth providing digital
                solutions, specializing in reliable and secure web hosting,
                website development and deployment, and innovative digital
                marketing strategies. Our commitment to excellence drives us to
                craft high-quality, responsive websites tailored to meet your
                business objectives and deploy cutting-edge marketing tactics to
                boost your online presence. At Rowad Tech, we empower your
                digital journey by delivering solutions that help you thrive in
                the online world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutHero;
