import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "black",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        zIndex: 1,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 mb-8 mt-4 overflow-hidden">
        <div className="flex flex-col items-center align-middle gap-2 md:gap-4">
          <Link to="/privacy-policy">
            <span className="cursor-pointer">Privacy Policy</span>
          </Link>
          <div className="flex gap-8 cursor-pointer">
            <a href="https://www.facebook.com/SolutionsInMw/">
              <div className="rounded-full border border-white p-2">
                <FaFacebook />{" "}
              </div>
            </a>

            <a href="https://www.linkedin.com/in/solutions-inc-3561b138b/">
              <div className="rounded-full border border-white p-2">
                <FaLinkedin />{" "}
              </div>{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center align-middle gap-2 md:gap-3">
          <div className="font-bold text-md md:text-xl">Get In Touch</div>
          <span className="flex items-center gap-2 cursor-pointer">
            <MdOutlineCall />
            <a href={`tel:+265994682891`}>
              <span>+265 994 682 891</span>
            </a>
          </span>
        </div>

        <div className="flex flex-col items-center align-middle gap-2 md:gap-4">
          <span className="flex items-center gap-2 cursor-pointer">
            <MdOutlineEmail />
            <a href={`mailto:info@solutionsincmw.com`}>
              <span>info@solutionsincmw.com</span>
            </a>
          </span>

          <span className="flex items-center gap-2 cursor-pointer">
            <span>Area 49/2/4A, Lilongwe, Malawi</span>
          </span>
        </div>
      </div>
      ©Copyright 2025 - All rights reserved | Solution Inc
    </div>
  );
};

export default Footer;
