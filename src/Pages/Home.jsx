import React from "react";
import Hero from "../components/Hero";
import ClientsCarousel from "../components/ClientsCarousel";
import ServicesCards from "../components/ServicesCards";

const Home = () => {
  return (
    <>
      <Hero />
      <ClientsCarousel />
      <ServicesCards />
    </>
  );
};

export default Home;
