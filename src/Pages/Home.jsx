import React from "react";
import { Helmet } from 'react-helmet';
import HomeHero from "../components/HomeHero";
import ClientsCarousel from "../components/ClientsCarousel";
import ServicesCards from "../components/ServicesCards";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rowad For Software Development</title>
      </Helmet>
      <HomeHero />
      <ClientsCarousel />
      <ServicesCards />
    </>
  );
};

export default Home;
