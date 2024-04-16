import { Link } from "react-router-dom";
import { useState } from "react";
import { identikoWeb } from "../../assets";
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
    <div className="overflow-x-hidden bg-white top-0 flex items-center border-b border-[#EDEFF2] justify-between px-8 py-4">


      <div>
        <img
          src={identikoWeb}
          alt="webImg"
          className="w-[50%] max-w-[200px] cursor-pointer"
          onClick={handleClick || setIsMenuOpen(false)}        
        />
      </div>

      <div className="hidden md:flex items-center">
        <div className="flex justify-between items-center gap-28 -translate-x-[40%]">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>

        <div className="text-sm text-[#001049] bg-[#ffffff] hover:bg-[#001049] hover:text-[#ffffff] border border-[#001049] rounded-full pl-8 pr-8 pt-2 pb-2 flex justify-end">
          <NavLink to="/contactUs" className="text-sm text-[#001049] bg-[#ffffff] hover:text-[#ffffff] hover:bg-[#001049] border border-[#001049] rounded-full pl-8 pr-8 pt-2 pb-2 flex justify-end">Contact Us</NavLink>
        </div>

      </div>

      <div className="md:hidden cursor-pointer">
        {isMenuOpen ? (
          <MdClose
            onClick={() => setIsMenuOpen(false)}
            className="text-[#352214] text-xl"
          />
        ) : (
          <MdMenu
            onClick={() => setIsMenuOpen(true)}
            className="text-[#352214] text-xl"
          />
        )}
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white z-50 border-b border-[#001049]">
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
  return (
    <div className="cursor-pointer duration-300">
      <p className="text-sm text-blue hover:bg-[#001049] hover:text-white pl-4 pr-4 pt-2 pb-2 rounded-full">
        <Link to={to}>{children}</Link>
      </p>
    </div>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  return (
    <div className="p-4 cursor-pointer z-20 duration-300 bg-[#ffffff]" onClick={onClick}>
      <p className="text-xs text-[#001049] border z-20 rounded-full pl-4 pr-4 pt-2 pb-2 flex items-center justify-center">
        <Link to={to}>{children}</Link>
      </p>
    </div>
  );
};

export default Header;
