import { Link } from "react-router-dom";

const PreCTAAbout = () => {
    return (
        <div className="bg-[#001049] pb-[4%] pt-[4%]">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-1 gap-y-10 text-center">
                <div className="flex flex-col items-center justify-center text-white">
                    <h2 className="font-bold text-[400%] md:text-md mb-2 text-[#D85012] ">
                        Pioneering Biometric <br />
                        Excellence for  <br />
                        Unparalleled Data  <br />
                        Protection
                    </h2>
                    <p className="text-[8px] md:text-sm mb-[4%]">
                        Identiko specializes in identity management technology, verification,
                        and digital identity solutions.
                    </p>

                    <div className="flex gap-[10%] text-center w-full justify-center items-center">
                        <button className="bg-[#0F90CA] border rounded-full p-3 text-white">Learn more {'⇾'}</button>
                       <Link to = '/contactUs'> <button className="bg-[#D85012] border rounded-full p-3 text-white">Contact Us {'⇾'}</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreCTAAbout;
