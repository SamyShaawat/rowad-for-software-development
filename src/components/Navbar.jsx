import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnMaximize = () => {
    if (window.innerWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", closeMenuOnMaximize);
    return () => {
      window.removeEventListener("resize", closeMenuOnMaximize);
    };
  }, [isMenuOpen]);

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/about-us", title: "About Us" },
    { path: "/services", title: "Services" },
    { path: "/projects", title: "Projects" },
    { path: "/contact-us", title: "Contact Us" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        {/* logo */}
        <a href="/" className="flex items-center gap-3 text-2xl  text-black font-semibold">
          <img src="../images/smallLogo.png" alt="" className="h-10  rounded-l"/>
          <span className="text-blue">R<span className="text-primary">owad</span> </span>
        </a>

        {/* nav items for large devices */}
        <ul className="hidden lg:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        

        {/* mobile menu */}
        <div className="lg:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* mobile menu items */}
      <div
        className={`px-4 bg-blue py-5 rounded-xl ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active-black" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
 
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
