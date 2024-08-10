import React from "react";
import { Helmet } from "react-helmet-async";
import ServicesPage from "../components/ServicesPage";

const Services = () => {
  const currentUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Rowad | Our Services</title>
        <meta
          name="description"
          content="Explore our range of digital solutions, including web hosting, development, and marketing strategies. Discover how Rowad can help grow your business."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <ServicesPage />
    </>
  );
};

export default Services;
