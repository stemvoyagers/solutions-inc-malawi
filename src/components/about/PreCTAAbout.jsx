import { Link } from "react-router-dom";
import { aboutUsPic } from "../../assets";


const PreCTAAbout = () => {
    return (
        <div className="bg-no-repeat bg-center bg-cover relative py-[12%] md:py-[12%] lg:py-[14%] xl:py-[19%] w-full z-1"
            style={{
                backgroundImage: `url(${aboutUsPic})`,
                position: 'relative',
            }}
        >
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-1 gap-y-10 md:gap-y-12 lg:gap-y-14 xl:gap-y-16 text-center px-4 md:px-8 lg:px-12 xl:px-16">
                <div className="flex flex-col items-center justify-center text-[#ffffff] z-10">
                    <h2 className="font-bold text-[150%] md:text-[300%] mt-4 md:mt-0 mb-2 shadow">
                        Pioneering Biometric Excellence For  <br />
                        Unparalleled Data Protection
                    </h2>
                    <p className="text-xs md:text-xl mb-[4%] font-bold bg:shadow">
                        Identiko specializes in identity management technology, verification,
                        and digital identity solutions.
                    </p>

                    <div className="flex gap-[10%] text-center text-xs md:text-[120%] w-full justify-center mb-4 md:mb-0 items-center">
                    <button className="text-[#003997] hover:text-white border rounded-full w-fit p-3 bg-[#ffffff] hover:bg-[#003997]" >Learn More {'⇾'}</button>
              
                        <Link to='/contactUs'>
                        <button className="bg-[#003997] hover:bg-white border border-[#003997] rounded-full w-fit p-3 text-[#ffffff] hover:text-[#003997]" >Contact Us {'⇾'}</button>
                  </Link>

                    </div>

                    <Link to="#section-1">
                        <div className="absolute bottom-0 left-0 right-0 mx-auto flex justify-center
                 items-center mb-20 text-white font-bold  rounded-full">
                            <p className="bg-[#003997] rounded-full p-4 animate-bounce">↡</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PreCTAAbout;
