

import { finger } from "../assets";
import Hero from "./Hero";

const CTAHome = () => {
    return (
        <div className="bg-[#001049] pb-[4%] pt-[4%]">
            <div className="max-w-screen-xl mx-auto grid  h-fit md:grid-cols-2 gap-y-10 gap-x-20">             
                <div className="group text-white gap-20 ">
                    <h2 className="font-semibold text-[300%] md:text-md mb-2 text-[#D85012] ">
                        Identiko is a one-stop <br />
                        shop for digital  <br />
                        identity, verification, and  <br />
                        technology solutions
                    </h2> <br /> <br />
                    <p className="w-[100%] text-[8px] md:text-xl pr-4 md:pr-0">
                        Identiko specializes in identity management technology, verification,
                        and digital identity solutions. Our ICT professionals are experts in
                        biometrics, identity management systems, and system integration. We
                        provide secure identification solutions for private and public
                        organizations, and we collaborate with leading technology companies
                        to provide efficient and dependable technology products and services
                        are crafted by skilled artisans right here in Nigeria.
                    </p>
                </div>

                <div className="group">
                    <img className="h-52 md:h-[100%] left-0" src={finger} alt="img1"/>
                </div>
                
            </div>

            <Hero/>
            
            
        </div>
        

    );
};

export default CTAHome;
