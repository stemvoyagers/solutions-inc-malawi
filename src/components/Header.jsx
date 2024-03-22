
import { Link } from "react-router-dom";
import { identikoWeb } from "../assets";
import { useNavigate } from "react-router-dom/dist";

const Header = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (window.location.pathname !== "/home") {
      navigate("/home");
    }
  };

  return (
      <div
        className="bg-white top-0 flex items-center border-b border-[#EDEFF2] justify-center gap-[25%]" >       

         <div> <img src={identikoWeb} alt="webImg" className={`w-[30%] translate-x-8 cursor-pointer`} onClick={handleClick} /></div>
          <div className="grid grid-cols-3 gap-10">            
              <div
                className="cursor-pointer duration-300"
                style={{ color: "#352214", fontSize: "8px" }} >
                  <p className="text-sm text-[blue]">
                    <Link to="/about">
                      About Us
                    </Link>
                  </p>
              </div>

              <div
                className="cursor-pointer duration-300"
                style={{ color: "#352214", fontSize: "8px" }}>               
                  <p className="text-sm text-[blue]">
                    <Link to="/service">
                      Services
                    </Link>
                  </p>                
              </div>

              <div
                className="cursor-pointer duration-300"
                style={{ color: "#352214", fontSize: "8px" }}>               
                  <p className="text-sm text-[blue]">
                    <Link to="/career">
                      Career
                    </Link>
                  </p>                
              </div>            
          </div>

          <div
            className="p-4 cursor-pointer duration-300"
            style={{ color: "#352214", fontSize: "8px" }}>           

              <p className="text-sm text-[blue] hover:bg-[blue] hover:text-white border rounded-lg pl-4 pr-4 pt-2 pb-2 flex justify-end">
                <Link to="/contactUs">
                  Contact Us
                </Link>
              </p>            
          </div>

        </div>
        
  );
};

export default Header;
