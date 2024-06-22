import React from "react";
import HomeHero from "../components/HomeHero";
import ClientsCarousel from "../components/ClientsCarousel";
import ServicesCards from "../components/ServicesCards";

const Home = () => {
  return (
    <>
      <HomeHero />
      <ClientsCarousel />
      <ServicesCards />
    </>
  );
};

export default Home;
