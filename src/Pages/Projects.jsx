import React from "react";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const currentUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Rowad | Projects</title>
        <meta name="description" content=""/>
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <div className="container bg-white min-h-[355px] flex mt-10 sm:mt-0 ">
        Projects
      </div>
    </>
  );
};

export default Projects;
