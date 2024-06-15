import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Add the padding class to the body element
    document.body.classList.add("pt-24");

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("pt-24");
    };
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
