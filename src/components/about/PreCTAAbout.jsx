import { Link } from "react-router-dom";
import { off6 } from "../../assets";

const PreCTAAbout = () => {
    return (
        <div className="bg-repeat bg-center h-fit relative pb-[4%] pt-[4%] w-full z-1"
        style={{
            backgroundImage: `url(${off6})`,
            position: 'relative',
        }}
    >
        <div className="absolute inset-0 bg-black opacity-0"></div>


            <div className="max-w-screen-xl mx-auto grid md:grid-cols-1 gap-y-10 text-center px-4 md:px-8 lg:px-12 xl:px-16">
                <div className="flex flex-col items-center justify-center text-[#001049] z-10">
                    <h2 className="font-bold text-[150%] md:text-[300%] mt-4 md:mt-0 mb-2  ">
                        Pioneering Biometric <br />
                        Excellence For  <br />
                        Unparalleled Data  <br />
                        Protection
                    </h2>
                    <p className="text-xs md:text-xl mb-[4%] font-bold">
                        Identiko specializes in identity management technology, verification,
                        and digital identity solutions.
                    </p>

                    <div className="flex gap-[10%] text-center text-xs md:text-xl w-full justify-center mb-4 md:mb-0 items-center">
                        <button className="bg-[#001049] hover:bg-[#ffffff] text-[#ffffff] hover:text-[#001049] border border-[#001049] rounded-full px-4 py-2 md:p-3 pl-2 pr-2">Learn more</button>
                       
                       <Link to = '/contactUs'> 
                       <button className="bg-[#001049] hover:bg-[#ffffff] text-[#ffffff] hover:text-[#001049] border border-[#001049] rounded-full px-4 py-2 md:p-3">Contact Us</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreCTAAbout;
