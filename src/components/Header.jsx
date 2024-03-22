
import { Link } from "react-router-dom";
import { identikoWeb } from "../assets";

const Header = () => {

  return (
    <header>
      <div
        className="max-w-screen-xl bg-white top-0" >

        <div className="flex items-center border-b border-[#EDEFF2] justify-between">
          <img src={identikoWeb} alt="webImg" className="w-[10%] ml-[2%]" />
          <div className="flex justify-center gap-10 items-center">
            <div className="grid grid-cols-3">
              <div
                className="p-4 cursor-pointer duration-300"
                style={{ color: "#352214", fontSize: "8px" }} >
                <div className="flex gap-1">
                  <p className="text-sm text-[blue]">
                    <Link to="/about">
                      About Us
                    </Link>
                  </p>
                </div>
              </div>

              <div
                className="p-4 cursor-pointer duration-300"
                style={{ color: "#352214", fontSize: "8px" }}>
                <div className="flex gap-2">
                  <p className="text-sm text-[blue]">
                    <Link to="/service">
                      Services
                    </Link>
                  </p>
                </div>
              </div>

              <div
                className="p-4 cursor-pointer duration-300"
                style={{ color: "#352214", fontSize: "8px" }}>
                <div className="flex gap-2">
                  <p className="text-sm text-[blue]">
                    <Link to="/career">
                      Career
                    </Link>
                  </p>
                </div>
              </div>
            </div>


          </div>
          <li
            className="p-4 cursor-pointer duration-300"
            style={{ color: "#352214", fontSize: "8px" }}>
            <div className="flex gap-2">

              <p className="text-sm text-[blue] hover:bg-[blue] hover:text-white border rounded-lg pl-4 pr-4 pt-2 pb-2 flex justify-end">
                <Link to="/contactUs">
                  Contact Us
                </Link>
              </p>
            </div>
          </li>

        </div>
      </div>


    </header>
  );
};

export default Header;
