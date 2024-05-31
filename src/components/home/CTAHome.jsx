import { AiOutlineArrowDown } from "react-icons/ai";
import { LandingVid } from "../../assets";
import { Link } from "react-router-dom";
import arrow_down from "../../assets/arrow_down.svg";

const CTAHome = () => {
  return (
    <div className="h-full md:h-screen overflow-hidden relative">
      <video
        className="h-40 md:h-auto bg:cover bg:center min-w-full min-h-full relative m-0 p-0"
        src={LandingVid}
        autoPlay
        loop
        muted
        alt="img1"
      />

      <div className=" absolute md:z-50 text-[50%] md:text-[150%] ml-[6%] text-left mt-32 text-white w-full h-full md:top-0 flex items-center justify-start">
        <div className="text-start text-shadow-lg">
          <p> Identiko Is Your One-Stop Shop For Digital </p>
          <p> Identity, Verification, And Technology Solutions</p>{" "}
        </div>
      </div>

      <Link to="#section-1">
        <div
          className="absolute bottom-24 left-0 right-0 mx-auto hidden md:flex justify-center
                 items-center text-white font-bold rounded-full"
        >
          <div className="border-4 rounded-full p-3 animate-bounce">
            {/* <AiOutlineArrowDown />{" "} */}
            <img src={arrow_down} className="w-6 h-auto" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CTAHome;
