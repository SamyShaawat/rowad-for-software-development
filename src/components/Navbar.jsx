import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnMaximize = useCallback(() => {
    if (window.innerWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("resize", closeMenuOnMaximize);
    return () => {
      window.removeEventListener("resize", closeMenuOnMaximize);
    };
  }, [closeMenuOnMaximize]);

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/about-us", title: "About Us" },
    { path: "/our-services", title: "Our Services" },
    { path: "/our-clients", title: "Our Clients" },
    { path: "/projects", title: "Projects" },
    { path: "/contact-us", title: "Contact Us" },
  ];

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-6">
          {/* logo */}
          <a
            href="/"
            className="flex items-center gap-3 text-2xl text-black font-semibold "
          >
            <img
              src="../images/rowadLogo.png"
              alt=""
              className="logonavbar rounded-sm"
            />

          </a>

          {/* nav items for large devices */}
          <ul className="hidden lg:flex gap-12">
            {navItems.map(({ path, title }) => (
              <li
                key={path}
                className="text-base text-primary hover:text-blue duration-300"
              >
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
                className="text-base text-white/85 first:text-white py-1 hover:text-primary duration-300"
              >
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-black" : "")}
                  onClick={handleCloseMenu}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
