import { Link } from "react-router-dom";
import { editedContact } from "../../assets";
// import { AiOutlineArrowDown } from "react-icons/ai";
import arrow_down from "../../assets/arrow_down.svg";

const CTAContact = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover relative py-[1%] md:py-[4%] w-full z-1"
      style={{
        backgroundImage: `url(${editedContact})`,
        position: "relative",
      }}
    >
      <div className="text-white  mx-auto mt-28 mb-28 z-10 ">
        <div className="group gap-10 z-10 flex flex-col justify-center items-center textmax-w-screen-xl-center">
          <div className="text-[300%] md:mb-2 mt-40 font-bold text-shadow-lg ">
            Reach Out To Us
          </div>
          <Link to="#section-1">
            <div
              className="absolute bottom-24 mt-20 left-0 right-0 mx-auto flex justify-center
                 items-center text-white font-bold  rounded-full animate-bounce"
            >
              <img src={arrow_down} className="w-6 h-auto" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTAContact;
