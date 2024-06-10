import { Link } from "react-router-dom";
import {FaPhone, FaEnvelope } from "react-icons/fa";

const ContactSubscribe = () => {
  return (
     <div className="flex flex-col md:flex-row justify-between items-center w-full p-10 md:p-20 bg-slate-100 gap-8 md:gap-0 mt-12 md:mt-0">
    
        <div className=" flex flex-col items-center md:items-start">
          <h3 className="font-bold md:text-3xl">Reach Out to Us?</h3>

          <Link to = "contactUs"><p className="opacity-75 md:my-3">Contact Us</p></Link>

          <div className="flex flex-row gap-1 items-center">
            <p>
              <FaPhone className="rotate-90 gap-1" />
            </p>
            <p className="opacity-75">+234 900 0000 000</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <p>
              <FaPhone className="rotate-90 gap-1" />
            </p>
            <p className="opacity-75">+234 800 0000 000</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <p>              <FaEnvelope />
            </p>
            <p className="opacity-75 ">info@identikointegratedsolutions.com</p>
          </div>
        </div>

        <div className=" flex flex-col items-center md:items-start md:ml-[20%]">        
          <h3 className="font-bold md:text-3xl">Want To Know More About<br/> Our Careers Section?</h3>
          <p className="hidden md:block opacity-75 md:my-3">An Avenue to harness your skills and stand out</p>        
           <Link to = "/career"> <span className="cursor-pointer text-[#003997] underline">Click here to proceed to career page</span></Link>
        </div>
      </div>
    
  );
};

export default ContactSubscribe;
