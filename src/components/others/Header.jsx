import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { identiko } from "../../assets";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <div className="overflow-x-hidden top-0 flex items-center text-black shadow-sm justify-between px-8 py-2 bg-white relative z-50">
      <div className="flex items-center gap-4">
        <div className="md:hidden cursor-pointer z-50">
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
            src={identiko}
            alt="webImg"
            className="w-[65%] max-w-[200px] cursor-pointer rounded-lg ml-4"
            onClick={handleClick || (() => setIsMenuOpen(false))}
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <div className="flex justify-center items-center gap-12">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/our-services">Services</NavLink>
          <NavLink to="/career-page">Career</NavLink>
          <div className="border p-2 cursor-pointer rounded-md text-white bg-black hover:bg-opacity-90 flex justify-end duration-300">
            <NavLink to="/contact-us">Contact Us</NavLink>
          </div>
        </div>
      </div>

      {/* Background Blur and Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div
            className="md:hidden fixed top-0 left-0 h-screen w-[30vw] bg-black text-white z-50 transform translate-x-[-100%] transition-transform duration-500 ease-in-out"
            style={{ transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)" }}
          >
            {/* Close Button at the Top */}
            <div className="flex justify-end p-4">
              <MdClose
                className="text-3xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
            <div>
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink to="/our-services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
              <MobileNavLink to="/career-page" onClick={() => setIsMenuOpen(false)}>Career</MobileNavLink>
              <MobileNavLink to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</MobileNavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const NavLink = ({ to, children }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const currentUrl = window.location.pathname;

  useEffect(() => {
    if (currentUrl === to) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [currentUrl, to]);

  return (
    <div
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
  className="relative h-fit w-fit cursor-pointer"
>
  <Link
    to={to}
    className={`${active ? "font-bold" : ""} relative`}
  >
    {children}
    <span
      style={{
        transform: active || open ? "scaleX(1)" : "scaleX(0)",
      }}
      className="absolute -bottom-1 left-0 h-1 w-full bg-black rounded-full transition-transform duration-300 origin-left"
    />
  </Link>
</div>

  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  const currentUrl = window.location.pathname;

  return (
    <div
      className={`py-4 cursor-pointer hover:bg-white  hover:text-black duration-300 ${
        currentUrl === to ? "font-extrabold border-white border-r-4" : "font-light"
      }`}
      onClick={onClick}
    >
      <p className="text-center">
        <Link to={to}>{children}</Link>
      </p>
    </div>
  );
};

export default Header;
