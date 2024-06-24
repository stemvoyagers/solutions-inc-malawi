import { Link } from "react-router-dom";
import { officeSpace } from "../../assets";
import arrow_down from "../../assets/arrow_down.svg";

const CTAServices = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative py-[15%] md:py-[15%] lg:py-[15%] xl:py-[15%] w-full z-1 px-4 md:px-0"
      style={{
        backgroundImage: `url(${officeSpace})`,
        position: "relative",
      }}
    >
      <div className="text-white max-w-screen-xl mx-auto z-10  h-full md:top-0 flex justify-start items-end text-left">
        <div className="ml-9 text-left text-shadow-lg mb-[15%]">
          <div className="text-[50%] md:text-[150%]  md:mb-4 translate-y-20">
            Secure Your Future With Advanced Biometrics Solution
          </div>
        </div>
        
        <Link to="#section-1">
          <div
            className="absolute top-[80%] left-0 right-0 mx-auto flex justify-center
                 items-center text-white font-bold mt-1  rounded-full"
          >
            <div className="rounded-full p-3 animate-bounce">
              <img src={arrow_down} className="w-6 h-auto" />
            </div>
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
