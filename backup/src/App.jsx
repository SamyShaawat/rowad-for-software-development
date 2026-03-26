import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import offset from "./../node_modules/aos/src/js/libs/offset";

function App() {
  useEffect(() => {
    // Add the padding class to the body element
    document.body.classList.add("pt-24");

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("pt-24");
    };
  }, []);

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
