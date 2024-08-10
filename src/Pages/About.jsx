import React from "react";
import AboutHero from "../components/AboutHero";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import { Helmet } from "react-helmet-async";

const About = () => {
  const currentUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Rowad | About Us</title>
        <meta
          name="description"
          content="Discover Rowad For Software Development's mission and vision. Learn how our innovative digital solutions can help your business thrive."
        />
        <link rel="canonical" href={currentUrl} />
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
