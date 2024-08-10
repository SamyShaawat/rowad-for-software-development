import React from "react";
import { Helmet } from "react-helmet-async";
import HomeHero from "../components/HomeHero";
import ClientsCarousel from "../components/ClientsCarousel";
import ServicesCards from "../components/ServicesCards";

const Home = () => {
  const currentUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Rowad For Software Development</title>
        <meta
          name="description"
          content="Rowad provides innovative software solutions including web development, hosting, and digital marketing. Partner with us for your digital growth needs."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <HomeHero />
      <ClientsCarousel />
      <ServicesCards />
    </>
  );
};

export default Home;
