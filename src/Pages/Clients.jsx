import React from "react";
import { Helmet } from "react-helmet";
import ClientsPagination from "../components/ClientsPagination";

const Clients = () => {
  return (
    <>
      <Helmet>
        <title>Rowad For Software Development | Our Clients</title>
      </Helmet>
      <ClientsPagination />
    </>
  );
};

export default Clients;
