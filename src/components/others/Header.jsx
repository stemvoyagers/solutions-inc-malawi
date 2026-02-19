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

  return (
    <div className="overflow-hidden top-0 flex items-center text-black shadow-sm justify-between px-8 py-2 bg-white relative z-50">
      <div className="flex items-center gap-4">
        <div className="md:hidden cursor-pointer">
          {isMenuOpen ? (
            <MdClose
              onClick={() => setIsMenuOpen(false)}
              className="text-black text-2xl"
            />
          ) : (
            <MdMenu
              onClick={() => setIsMenuOpen(true)}
              className="text-black text-2xl"
            />
          )}
        </div>
        <Link to="/" className="flex items-center">
          <img
            src={salalogo}
            alt="Solutions Inc Logo"
            className="w-[65%] max-w-[200px] cursor-pointer rounded-lg ml-4"
            onClick={handleClick}
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <div className="flex justify-center items-center gap-12">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/projects">Projects</NavLink>




          <div
            className="relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Solutions</span>
              <MdArrowDropDown
                className={`transition-transform duration-300 ${
                  isSolutionsOpen ? "rotate-180" : ""
                }`}
              />
              <span
                style={{
                  transform: isSolutionsOpen ? "scaleX(1)" : "scaleX(0)",
                }}
                className="absolute -bottom-1 left-0 h-1 w-full bg-[#096E6A] rounded-full transition-transform duration-300 origin-left"
              />
            </div>

            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-[9999] transition-all duration-200 ease-out ${
                isSolutionsOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {solutionsItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#096E6A] hover:text-white transition-colors duration-200"
                  target={item.url.startsWith("http") ? "_blank" : "_self"}
                  rel={item.url.startsWith("http") ? "noopener noreferrer" : ""}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div
            className="md:hidden fixed top-0 left-0 h-screen w-[70vw] bg-[#096E6A] text-white z-50 transform transition-transform duration-300 ease-in-out"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <div className="flex justify-between items-center p-4 border-b border-white">
              <span className="text-lg font-bold">Menu</span>
              <MdClose
                className="text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            <div className="py-4">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/about-us"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </MobileNavLink>

               <MobileNavLink
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </MobileNavLink>
               <MobileNavLink
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </MobileNavLink>

              <div className="border-t border-white/20">
                <div
                  className="py-4 px-6 font-semibold flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setIsMobileSolutionsOpen(!isMobileSolutionsOpen)
                  }
                >
                  <span>Solutions</span>
                  <MdArrowDropDown
                    className={`transition-transform duration-300 ${
                      isMobileSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isMobileSolutionsOpen
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {solutionsItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      className="block py-3 px-8 text-sm hover:bg-white hover:text-black transition-colors duration-200 border-b border-white/10"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileSolutionsOpen(false);
                      }}
                      target={item.url.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        item.url.startsWith("http") ? "noopener noreferrer" : ""
                      }
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
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const NavLink = ({ to, children }) => {
  const [active, setActive] = useState(false);
  const currentUrl = window.location.pathname;

  useEffect(() => {
    setActive(currentUrl === to);
  }, [currentUrl, to]);

  return (
    <div className="relative cursor-pointer">
      <Link to={to} className={`${active ? "font-bold" : ""} relative`}>
        {children}
        <span
          style={{
            transform: active ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-1 left-0 h-1 w-full bg-[#096E6A] rounded-full transition-transform duration-300 origin-left"
        />
      </Link>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const MobileNavLink = ({ to, children, onClick }) => {
  const currentUrl = window.location.pathname;

  return (
    <div
      className={`py-4 px-6 cursor-pointer hover:bg-white hover:text-black duration-300 border-b border-white/20 ${
        currentUrl === to ? "font-extrabold bg-white text-black" : "font-light"
      }`}
      onClick={onClick}
    >
      <Link to={to} className="block">
        {children}
      </Link>
    </div>
  );
};

export default Header;
