import { Link } from "react-router-dom";
import { editedContact } from "../../assets";
// import { AiOutlineArrowDown } from "react-icons/ai";
import arrow_down from "../../assets/arrow_down.svg";

const CTAContact = () => {
  return (
    <div
      className="bg-no-repeat bg-center md:bg-cover relative py-[14%] md:py-[14%] lg:py-[14%] xl:py-[14%] w-full z-1 px-14 md:px-0"
      style={{
        backgroundImage: `url(${editedContact})`,
        position: "relative",
      }}
    >
      <div className="text-black max-w-screen-xl mx-auto z-10  h-full md:top-0 flex justify-start items-end text-left">
        <div className="ml-9 text-left text-shadow-lg mb-[15%]">
          <div className="text-[50%] md:text-[250%]  md:mb-4 translate-y-72">
            Connect With Us          </div>
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
    </div>
  );
};

export default CTAContact;
