import React from "react";
import { Helmet } from "react-helmet-async";
import ContactUsCard from "../components/ContactUsCard";
const Contact = () => {
  const currentUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Rowad | Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Rowad For Software Development for top-notch software and web development services. Contact us today for inquiries and support."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <ContactUsCard />;
    </>
  );
};

export default Contact;
