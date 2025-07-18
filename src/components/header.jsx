import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import "./header.scss";

const navItems = [
  { name: "Home", url: "/" },
  { name: "Services", url: "services" },
  { name: "About ", url: "about" },
  { name: "Products", url: "products" },
  { name: "Our Values", url: "values" },
  { name: "Contact Us", url: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-white fixed top-0 left-0 right-0 z-11">
        <div className="pt-4 px-7 pb-4">
          <div className="flex justify-between">
            {/* Logo */}
            <img
              src={logo}
              className="genufy-logo"
              alt="Genufy TechWorks logo"
            />

            {/* Desktop Menu - hidden on mobile, shown on md and up */}
            <nav className="hidden lg:block mt-5">
              <ul className="flex flex-row gap-10">
                {navItems.map((item, index) => (
                  <li
                    className="nav-item flex flex-col font-semibold text-xl leading-5"
                    key={index}
                  >
                    <NavLink
                      to={item.url}
                      key={index}
                      className={({ isActive }) =>
                        `pb-2 ${
                          isActive && item.url !== "/#contact"
                            ? "bg-gradient-to-r from-[#85E669] to-[#2CBDA7] bg-clip-text text-transparent"
                            : ""
                        }`
                      }
                      onClick={() => {
                        if (item.url === "/#contact") {
                          setTimeout(() => {
                            const element = document.getElementById("contact");
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }, 100);
                        }
                      }}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Hamburger Button - shown on mobile, hidden on md and up */}
            <button
              className="lg:hidden flex items-center p-2"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - conditionally shown based on isOpen state */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="absolute w-[100%] z-[10] bg-white px-2 pt-10 pb-3 flex flex-col items-center gap-8 shadow-[0_4px_0_0] shadow-green-300">
              {navItems.map((item, index) => (
                <NavLink
                  to={item.url}
                  onClick={(e) => {
                    toggleMenu();
                    if (item.url === "/#contact") {
                      e.preventDefault();
                      window.location.href = "/#contact";
                    }
                  }}
                  key={index}
                  className={({ isActive }) =>
                    `block font-bold text-xl md:text-2xl leading-[29px] ${
                      isActive && item.url !== "/#contact"
                        ? "bg-gradient-to-r from-[#85E669] to-[#2CBDA7] bg-clip-text text-transparent"
                        : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
        {/* <div class="h-[2px] bg-gradient-to-r from-[#90eb61] to-[#24baac] shadow-md shadow-[rgba(0,0,0,0.25)]"></div> */}
      </header>
    </div>
  );
};

export default Header;
