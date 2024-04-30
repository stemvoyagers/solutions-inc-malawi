import { off7 } from "../../assets";

const CTAAbout = () => {
    return (
        <div className="bg-white pt-[4%] pb-[4%] w-full">       

            <div className="max-w-screen-xl mx-auto mt-4 md:mt-0 mb-4 md:mb-0 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-x-20 px-4 md:px-0">
                <div className="font-semibold text-[100%] md:text-[200%] mb-2 text-[#001049] z-10 text-center md:text-left" >
                    We are specilized in all of <br /> our services, we give <br />not just the setpiece in our services <br /> but masterpiece
                </div>

                <div>
                    <img className="h-52 md:h-96 " src={off7} alt="img1" />
                </div>
            </div>
        </div>
    );
};

export default CTAAbout;
