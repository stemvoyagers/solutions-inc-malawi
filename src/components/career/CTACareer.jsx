import { Link } from "react-router-dom";
import { anocar } from "../../assets";
import arrow_down from "../../assets/arrow_down.svg";

const CTACareer = () => {
  return (
    <div
      className="bg-no-repeat bg-cover relative h-screen w-full z-1"
      style={{
        backgroundImage: `url(${anocar})`,
        backgroundPosition: 'center',
        position: "relative",
      }}
    >

      <div className="h-screen flex justify-start items-center ">
        <div className="text-[50%] md:text-[250%] ml-8 translate-y-44 text-white">
          Career
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

export default CTACareer;