import React from "react";
import { Helmet } from "react-helmet";
import ContactUsCard from "../components/ContactUsCard";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Rowad For Software Development | Contact Us</title>
      </Helmet>
      <ContactUsCard />;
    </>
  );
};

export default Contact;
