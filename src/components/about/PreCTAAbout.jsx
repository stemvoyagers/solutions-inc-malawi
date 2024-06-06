import { Link } from "react-router-dom";
import { AboutVid } from "../../assets";
import arrow_down from "../../assets/arrow_down.svg";

const PreCTAAbout = () => {
    return (
        <div className="h-full md:h-screen overflow-hidden relative">
            <video className="h-40 md:h-auto bg:cover bg:center min-w-full min-h-full relative m-0 p-0" src={AboutVid} autoPlay loop muted alt="img1" />

            <div className=" absolute md:z-50 text-[50%] md:text-[150%]  ml-[6%] text-left mt-32 text-white w-full h-full md:top-0 flex items-center justify-start">
                <div className="text-left text-shadow-lg">
                    <p> Advancing Technology with Innovation, Since 2020 </p>
                </div>

               <Link to="#section-1" className="absolute bottom-60 left-1/2 -translate-x-1/2 -translate-y-1/2  hidden md:flex justify-center">
                    <p className="mr-40 animate-bounce text-center">  <img src={arrow_down} className="w-6 h-auto" /> </p>

                </Link>
            </div>

        </div>

    );
};

export default PreCTAAbout;
