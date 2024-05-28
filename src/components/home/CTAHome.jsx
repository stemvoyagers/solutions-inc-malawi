
import { Sunset } from "../../assets";

const CTAHome = () => {

    return (
        <div className="h-screen overflow-hidden relative">

            <video className="h-40 md:h-auto w-screen min-w-full min-h-full object-cover relative m-0 p-0 cover" src={Sunset} autoPlay loop muted alt="img1" />
            <div className=" absolute md:z-50 font-bold text-[50%] md:text-[300%] mb-2 text-white w-full h-full md:top-0 flex items-center justify-center">
               <p className="text-center"> Identiko Is A One-Stop Shop For Digital <br/>
                Identity, Verification, And Technology Solutions</p>
            </div>
        </div>
    );
};

export default CTAHome;
