import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
    <div className="overflow-x-hidden top-0 flex items-center  text-[#000000]  justify-between px-8 py-3.5 border-b">
      <Link to="/">
        <div>
          <img
            src={logoPicu}
            alt="webImg"
            className="w-[70%] max-w-[200px] cursor-pointer rounded-lg"
            onClick={handleClick || setIsMenuOpen(false)}
          />
        </div>
      </Link>

      <div className="hidden md:flex items-center justify-center">
        <div className="flex justify-center items-center gap-20 ">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/career">Career</NavLink>

          <div className="border p-2 cursor-pointer rounded-md text-[#ffffff] bg-[#000000]  hover:bg-[#000000d7]  flex justify-end duration-300 delay-100 transition-transform">
            <NavLink to="/contactUs">Contact Us</NavLink>
          </div>
        </div>
      </div>

      <div className="md:hidden cursor-pointer">
        {isMenuOpen ? (
          <MdClose
            onClick={() => setIsMenuOpen(false)}
            className="text-[#000000] text-xl"
          />
        ) : (
          <MdMenu
            onClick={() => setIsMenuOpen(true)}
            className="text-[#000000] text-xl"
          />
        )}
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden absolute top-[14%] left-20 right-0 z-50 border-b bg-[#000000] transition delay-150 duration-300 ease-in-out"
          style={{ maxHeight: isMenuOpen ? "300px" : "0" }}
        >
          <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>
            {" "}
            About Us{" "}
          </MobileNavLink>
          <MobileNavLink to="/services" onClick={() => setIsMenuOpen(false)}>
            {" "}
            Services{" "}
          </MobileNavLink>
          <MobileNavLink to="/career" onClick={() => setIsMenuOpen(false)}>
            {" "}
            Career{" "}
          </MobileNavLink>
          <MobileNavLink to="/contactUs" onClick={() => setIsMenuOpen(false)}>
            {" "}
            Contact Us{" "}
          </MobileNavLink>
        </div>
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
      // onClick={() => setActive(true)}
      className="relative h-fit w-fit cursor-pointer"
    >
      <Link to={to} className={`${active ? "font-bold" : ""} relative`}>
        {children}
        {to !== "/contactUs" && (
          <span
            style={{
              transform: open ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-8 -left-2 -right-2 h-1 origin-left 
                          rounded-full bg-[#000000] transition-transform duration-300 ease-out"
          />
        )}
      </Link>
    </div>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  return (
    <div
      className="p-4 cursor-pointer hover:bg-white text-[#ffffff] hover:text-[#000000] z-20 duration-300 bg-[#000000]"
      onClick={onClick}
    >
      <p className="text-xs z-20 rounded-full flex items-center justify-center">
        <Link to={to}>{children}</Link>
      </p>
    </div>
  );
};

export default Header;

// const NavLink = ({ to, children }) => {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState(false);
//   const currentUrl = window.location.pathname;

//   useEffect(() => {
//     if (currentUrl === to) {
//       setActive(true);
//     } else {
//       setActive(false);
//     }
//   }, [currentUrl, to]);

//   return (
//     <div
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//       // onClick={() => setActive(true)}
//       className="relative h-fit w-fit cursor-pointer">
//       <Link
//         to={to}
//         className={`${active ? "font-bold" : ""} relative text-[#003997]`}>
//         {children}
//         {(to !== "/contactUs" && (open || active)) && (

//           <span
//             style={{
//               transform: active ? "scaleX(1)" : open ? "scaleX(1)" : "scaleX(0)"
//             }}
//             className="absolute -bottom-8 -left-2 -right-2 h-1 origin-left
//                           rounded-full bg-[#003997] transition-transform duration-300 delay-100 ease-in-out"
//           />
//         )}
//       </Link>
//     </div>
//   );
// };
