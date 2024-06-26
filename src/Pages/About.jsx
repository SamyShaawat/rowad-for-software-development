import React from "react";
import AboutHero from "../components/AboutHero";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Rowad For Software Development | About Us</title>
      </Helmet>
      <AboutHero />
      <WhoWeAre />
      <WhatWeDo />
      <Vision />
      <Mission />
    </>
  );
};

export default About;
