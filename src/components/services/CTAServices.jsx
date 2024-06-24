import { Link } from "react-router-dom";
import { officeSpace } from "../../assets";
import arrow_down from "../../assets/arrow_down.svg";

const CTAServices = () => {
  return (
    <div
      className="bg-no-repeat bg-cover relative h-screen w-full z-1"
      style={{
        backgroundImage: `url(${officeSpace})`,
        backgroundPosition: 'center',
        position: "relative",
      }}
    >

      <div className="h-screen flex justify-start items-center ">
        <div className="text-[50%] md:text-[250%] ml-8 text-white">
          Secure Your Future With Advanced Biometrics Solution
        </div>
      </div>

      <Link to="#section-1">
        <div
          className="absolute top-[75%] left-0 right-0 flex justify-center
                 items-center text-white"
        >
          <div className="animate-bounce">
            <img src={arrow_down} className="w-6 h-auto" />
          </div>
        </div>
      </Link>

    </div>
  );
};

export default CTAServices;

{
  /* <div className="absolute inset-0 bg-[#ffffff] opacity-0"></div> */
}
