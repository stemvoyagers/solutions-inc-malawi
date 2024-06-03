import { Link } from "react-router-dom";
import { officeSpace } from "../../assets";
import arrow_down from "../../assets/arrow_down.svg";
// import { AiOutlineArrowDown } from "react-icons/ai";

const CTAServices = () => {
  return (
    <div
      className="bg-no-repeat bg-left relative py-[12%] md:py-[12%] w-full z-1 px-4 md:px-0"
      style={{
        backgroundImage: `url(${officeSpace})`,
        position: "relative",
      }}
    >
      <div className="text-white max-w-screen-xl mx-auto mt-40 mb-20 z-10 ">
        <div className="group gap-10 z-10 flex flex-col justify-center items-center text-center translate-y-20">
          <div className="text-[100%] md:text-[100%]  md:mb-2 text-white ">
            Secure Your Future <br />
            With Advanced Biometrics Solution
          </div>
        </div>
        <Link to="#section-1">
          <div
            className="absolute bottom-20 left-0 right-0 mx-auto flex justify-center
                 items-center mt-4 text-white font-bold  rounded-full animate-bounce"
          >
            <img src={arrow_down} className="w-6 h-auto" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CTAServices;

{
  /* <div className="absolute inset-0 bg-[#ffffff] opacity-0"></div> */
}
