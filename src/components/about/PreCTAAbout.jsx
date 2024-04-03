import { Link } from "react-router-dom";
import { bg } from "../../assets";

const PreCTAAbout = () => {
    return (
        <div className="bg-repeat bg-center h-fit relative pb-[4%] pt-[4%] w-full z-1"
        style={{
            backgroundImage: `url(${bg})`,
            position: 'relative',
        }}
    >
        <div className="absolute inset-0 bg-black opacity-80"></div>


            <div className="max-w-screen-xl mx-auto grid md:grid-cols-1 gap-y-10 text-center px-4 md:px-8 lg:px-12 xl:px-16">
                <div className="flex flex-col items-center justify-center text-white z-10">
                    <h2 className="font-bold text-[150%] md:text-[300%] mt-4 md:mt-0 mb-2 text-[#D85012] ">
                        Pioneering Biometric <br />
                        Excellence for  <br />
                        Unparalleled Data  <br />
                        Protection
                    </h2>
                    <p className="text-xs md:text-sm mb-[4%]">
                        Identiko specializes in identity management technology, verification,
                        and digital identity solutions.
                    </p>

                    <div className="flex gap-[10%] text-center text-xs md:text-auto w-full justify-center mb-4 md:mb-0 items-center">
                        <button className="bg-[#0F90CA] border rounded-full p-2 md:p-3 text-white">Learn more {'⇾'}</button>
                       <Link to = '/contactUs'> <button className="bg-[#D85012] border rounded-full p-2 md:p-3 text-white">Contact Us {'⇾'}</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreCTAAbout;
