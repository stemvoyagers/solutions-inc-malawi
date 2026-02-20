/* eslint-disable react/prop-types */
// src/components/Header.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { salalogo } from "../../assets";
import { MdMenu, MdClose, MdArrowDropDown } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  };

  const solutionsItems = [
    { name: "SoilSmart", url: "https://www.solutionsincmwsoilsmart.online/" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileSolutionsOpen(false);
  }, [window.location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm overflow-hidden">
      <div className="px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={handleClick} className="focus:outline-none">
            <img
              src={salalogo}
              alt="Solutions Inc Logo"
              className="h-14 w-auto max-w-[160px] rounded-md"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 gap-20">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/projects">Projects</NavLink>

          {/* Solutions Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button
              className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#096E6A] transition-colors focus:outline-none"
              aria-expanded={isSolutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <MdArrowDropDown
                className={`text-lg transition-transform duration-200 ${
                  isSolutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50 transition-all duration-200 ease-out origin-top ${
                isSolutionsOpen
                  ? "opacity-100 scale-y-100 visible"
                  : "opacity-0 scale-y-95 invisible"
              }`}
            >
              {solutionsItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#096E6A] hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <MdClose className="text-2xl" />
          ) : (
            <MdMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-200 bg-opacity-40 z-40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 h-screen w-[80%] max-w-[300px] bg-white text-gray-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden">
            <div className="flex justify-between items-center p-5 border-b">
              <span className="text-lg font-bold text-gray-800 -ml-8"><img src={salalogo} alt="Logo" className="h-12 w-auto" /></span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Close menu"
              >
                <MdClose className="text-2xl" />
              </button>
            </div>

            <div className="py-4">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/about-us" onClick={() => setIsMenuOpen(false)}>
                About Us
              </MobileNavLink>
              <MobileNavLink to="/blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </MobileNavLink>
              <MobileNavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </MobileNavLink>

              {/* Mobile Solutions Accordion */}
              <div className="border-t border-gray-200 mt-2">
                <button
                  className="w-full flex justify-between items-center py-4 px-6 font-medium text-left"
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  aria-expanded={isMobileSolutionsOpen}
                >
                  <span>Solutions</span>
                  <MdArrowDropDown
                    className={`text-lg transition-transform duration-200 ${
                      isMobileSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isMobileSolutionsOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {solutionsItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3 px-8 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileSolutionsOpen(false);
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

// Desktop NavLink
const NavLink = ({ to, children }) => {
  const isActive = window.location.pathname === to;
  return (
    <Link
      to={to}
      className={`relative font-medium text-gray-700 hover:text-[#096E6A] transition-colors ${
        isActive ? "text-[#096E6A]" : ""
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#096E6A] rounded-full" />
      )}
    </Link>
  );
};

// Mobile NavLink
const MobileNavLink = ({ to, children, onClick }) => {
  const isActive = window.location.pathname === to;
  return (
    <Link
      to={to}
      className={`block py-4 px-6 font-medium ${
        isActive
          ? "bg-[#096E6A] text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;