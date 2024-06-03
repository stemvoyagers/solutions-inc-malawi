import { Link } from "react-router-dom";
import { aCareer } from "../../assets";
import arrow_down from "../../assets/arrow_down.svg";
// import { AiOutlineArrowDown } from "react-icons/ai";

const CTACareer = () => {
  return (
    <div
      className="bg-no-repeat bg-left relative py-[12%] md:py-[6%] w-full z-1 px-4 md:px-0"
      style={{
        backgroundImage: `url(${aCareer})`,
        position: "relative",
      }}
    >
      <div className="text-white max-w-screen-xl mx-auto mt-28 mb-28 z-10 ">
        <div className="group gap-10 z-10 flex flex-col justify-center items-center text-center">
          <div className="text-[300%] md:mb-2 mt-40 font-bold text-shadow-lg ">
            Career
          </div>
        </div>
        <Link to="#section-1">
          <div
            className="absolute bottom-4 left-0 right-0 mx-auto flex justify-center
                 items-center mb-20 text-white font-bold  rounded-full animate-bounce"
          >
            <img src={arrow_down} className="w-6 h-auto" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CTACareer;
