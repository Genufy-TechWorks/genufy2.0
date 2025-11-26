import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import sflogo from "../assets/img/SF-img.png";

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
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null); // Reference for mobile menu
  const buttonRef = useRef(null); // Reference for hamburger button

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  const handleContactClick = (e) => {
    if (e) e.preventDefault();
    setIsOpen(false);

    if (location.pathname === "/") {
      const element = document.getElementById("contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-11">
      <div className="pt-4 px-7 pb-4">
        <div className="flex justify-between items-center relative z-50">
          <div className="flex gap-5 items-center">
            <a href="/">
              <img src={logo} className="w-[200px]" alt="Genufy TechWorks logo" />
            </a>
            <div className="hidden lg:block">
              <img src={sflogo} className="w-[60px]" alt="SF-logo" />
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:block mt-5">
            <ul className="flex flex-row gap-10">
              {navItems.map((item, index) => (
                <li className="nav-item flex flex-col text-xl leading-5" key={index}>
                  {item.url === "/#contact" ? (
                    <a
                      href="/#contact"
                      onClick={handleContactClick}
                      className="text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#85E669] hover:to-[#2CBDA7] relative pb-2"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink
                      to={item.url}
                      key={index}
                      className={({ isActive }) =>
                        `relative pb-2 text-xl leading-5 ${
                          isActive
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-[#85E669] to-[#2CBDA7]"
                            : "text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#85E669] hover:to-[#2CBDA7]"
                        } ${
                          !isActive
                            ? `after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                               after:bg-gradient-to-r after:from-[#85E669] after:to-[#2CBDA7] 
                               after:transition-all after:duration-500 hover:after:w-full`
                            : ""
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            ref={buttonRef}
            className="lg:hidden flex items-center p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div
            ref={menuRef} // 👈 Reference here
            className="absolute w-full z-[10] bg-white px-2 pt-10 pb-5 flex flex-col items-center gap-8 shadow-[0_4px_0_0] shadow-green-300"
          >
            {navItems.map((item, index) =>
              item.url === "/#contact" ? (
                <a
                  href="/#contact"
                  key={index}
                  onClick={() => {
                    handleContactClick();
                    // setIsOpen(false);
                  }}
                  className="block text-xl md:text-2xl leading-[29px] text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#85E669] hover:to-[#2CBDA7]"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  to={item.url}
                  key={index}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-xl md:text-2xl leading-[29px] ${
                      isActive && item.url !== "/#contact"
                        ? "bg-gradient-to-r from-[#85E669] to-[#2CBDA7] bg-clip-text text-transparent"
                        : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
