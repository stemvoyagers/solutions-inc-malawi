

import { bg } from "../../assets";

const CTAPrivacy = () => {
    return (
        <div className="bg-repeat bg-center relative pb-[4%] pt-[4%] w-full z-1"
            style={{
                backgroundImage: `url(${bg})`,
                position: 'relative',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>


            <div className="max-w-screen-xl mx-auto flex items-center justify-center py-4">
                <div className="font-semibold text-[120%] md:text-[200%] md:text-md mb-2 text-white z-10 text-center" >
                    PRIVACY POLICY
                </div>

                {/* <div className="hidden md:block z-10">
                    <img className="h-52 md:h-64 rounded-lg" src={face} alt="img1" />
                </div> */}
            </div>
        </div>


    );
};

export default CTAPrivacy;
