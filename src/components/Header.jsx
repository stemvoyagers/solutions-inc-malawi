
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
    <header>
      <div
        className="max-w-screen-xl bg-white top-0 flex items-center border-b border-[#EDEFF2] justify-between" >

       

         <div> <img src={identikoWeb} alt="webImg" className={`w-[30%] mx-auto cursor-pointer`} onClick={handleClick} /></div>
          <div className="flex justify-center gap-10 items-center">            
              <div
                className="p-4 cursor-pointer duration-300"
                style={{ color: "#352214", fontSize: "8px" }} >
                  <p className="text-sm text-[blue]">
                    <Link to="/about">
                      About Us
                    </Link>
                  </p>
              </div>

              <div
                className="p-4 cursor-pointer duration-300"
                style={{ color: "#352214", fontSize: "8px" }}>               
                  <p className="text-sm text-[blue]">
                    <Link to="/service">
                      Services
                    </Link>
                  </p>                
              </div>

              <div
                className="p-4 cursor-pointer duration-300"
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
     


    </header>
  );
};

export default Header;
