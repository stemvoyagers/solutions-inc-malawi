import { Link } from "react-router-dom";
import { AboutVid } from "../../assets";


const PreCTAAbout = () => {
    return (
        <div className="h-full md:h-screen overflow-hidden relative">
            <video className="h-40 md:h-auto bg:cover bg:center min-w-full min-h-full relative m-0 p-0" src={AboutVid} autoPlay loop muted alt="img1" />

            <div className=" absolute md:z-50 text-[50%] md:text-[150%]  text-center mt-32 text-white w-full h-full md:top-0 flex items-center justify-center">
                <div className="text-center text-shadow-lg">
                    <p> Pioneering Biometric Excellence For </p>
                    <p> Unparalleled Data Protection</p> </div>
            </div>
            <Link to="#section-1">
                <div className="absolute bottom-16 left-0 right-0 mx-auto hidden md:flex justify-center
                 items-center text-white rounded-full">
                    <p className="bg-[#ffffff] border text-[#003997] rounded-full p-3 w-fit animate-bounce">Learn More ↓ </p>
                </div>

               
            </Link>
        </div>

    );
};

export default PreCTAAbout;


{/* <AiOutlineArrowDown /> */}