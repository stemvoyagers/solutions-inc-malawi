import { Link } from "react-router-dom";
import { officeSpace } from "../../assets";
import arrow_down from "../../assets/arrow_down.svg";

const CTAServices = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative py-[12%] md:py-[12%] lg:py-[12%] xl:py-[12%] w-full z-1 px-4 md:px-0"
      style={{
        backgroundImage: `url(${officeSpace})`,
        position: "relative",
      }}
     >
      <div className="text-white max-w-screen-xl mx-auto z-10 m h-full top-0 md:top-0 lg:top-0 xl:top-0 flex justify-start items-end text-left">
        <div className="ml-9 text-left text-shadow-lg mb-[15%]">
          <div className="text-[50%] md:text-[150%]  md:mb-4 translate-y-56">
            Secure Your Future With Advanced Biometrics Solution
          </div>
        </div>
        
        <Link to="#section-1">
          <div
            className="absolute top-[70%] left-0 right-0 mx-auto flex justify-center
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
