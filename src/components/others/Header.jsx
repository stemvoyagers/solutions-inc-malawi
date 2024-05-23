import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { logoPicu } from "../../assets";
import { useNavigate } from "react-router-dom/dist";
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
    <div className="overflow-x-hidden top-0 flex items-center text-[#003997] justify-between px-8 py-4">


      <div>
        <img
          src={logoPicu}
          alt="webImg"
          className="w-[50%] max-w-[200px] cursor-pointer rounded-lg"
          onClick={handleClick || setIsMenuOpen(false)}        
        />
      </div>

      <div className="hidden md:flex items-center justify-center">
        <div className="flex justify-center items-center gap-24 -translate-x-[60%]">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>

        <div className="text-sm hover:bg-[#003997] hover:text-[#003997] bg-[#ffffff] border border-[#003997] rounded-full pl-4 pr-4 pt-2 pb-2 flex justify-end">
          <NavLink to="/contactUs" className="text-sm rounded-full pl-8 pr-8 pt-2 pb-2 flex justify-end">Contact Us</NavLink>
        </div>

      </div>

      <div className="md:hidden cursor-pointer">
        {isMenuOpen ? (
          <MdClose
            onClick={() => setIsMenuOpen(false)}
            className="text-[#003997] text-xl"
          />
        ) : (
          <MdMenu
            onClick={() => setIsMenuOpen(true)}
            className="text-[#003997] text-xl"
          />
        )}
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 z-50 border-b bg-[#003997]">
          <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>
            About Us
          </MobileNavLink>
          <MobileNavLink to="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </MobileNavLink>
          <MobileNavLink to="/career" onClick={() => setIsMenuOpen(false)}>
            Career
          </MobileNavLink>
          <MobileNavLink to="/contactUs" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </MobileNavLink>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ to, children }) => {
  const [isActive, setIsActive] = useState(false);
  const location = window.location.pathname; 

  useEffect(() => {
    
    setIsActive(location === to);
  }, [location, to]); 

  const handleClick = () => {
    setIsActive(true); 
  };

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    
    if (location !== to) {
      setIsActive(false);
    }
  };


  
  return (
    <div className="cursor-pointer duration-300">
      <p
        className={`text-sm text-blue ${
          isActive ? "text-white bg-[#003997]" : "hover:bg-[#003997] hover:bottom-1 hover:text-white"
        } pl-4 pr-4 pt-2 pb-2 rounded-full`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <Link to={to}>{children}</Link>
      </p>
    </div>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  return (
    <div className="p-4 cursor-pointer z-20 duration-300 bg-[#003997]" onClick={onClick}>
      <p className="text-xs text-[#ffffff] border z-20 rounded-full pl-4 pr-4 pt-2 pb-2 flex items-center justify-center">
        <Link to={to}>{children}</Link>
      </p>
    </div>
  );
};

export default Header;