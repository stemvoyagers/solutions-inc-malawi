
import { LandingVid } from "../../assets";
import { Link } from "react-router-dom";

const CTAHome = () => {

    return (

        <div className="h-screen overflow-hidden relative">
            <video className="h-40 md:h-auto w-screen min-w-full min-h-full relative m-0 p-0" src={LandingVid} autoPlay loop muted alt="img1" />

            <div className=" absolute md:z-50 font-bold text-[50%] md:text-[300%] mb-2 text-white w-full h-full md:top-0 flex items-center justify-center">
                <p className="text-center text-shadow-lg"> Identiko Is Your One-Stop Shop For Digital <br />
                    Identity, Verification, And Technology Solutions</p>


                <Link to="#section-1">
                    <div className="absolute bottom-0 left-0 right-0 mx-auto flex justify-center
                 items-center mb-20 text-white font-bold  rounded-full">
                        <p className="bg-[#003997] rounded-full p-4 animate-bounce">↡</p>
                    </div>
                </Link>
            </div>



        </div>

    );
};

export default CTAHome;
