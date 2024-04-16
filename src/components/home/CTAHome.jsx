

import { useState, useEffect } from "react";
import { finger } from "../../assets";
import Hero from "./Hero";

const CTAHome = () => {
    const [typedText, setTypedText] = useState('')

    const textToType = `Identiko is a one-stop shop for digital 
  identity, verification, and technology solutions`;
    const typingSpeed = 100;

    useEffect(() => {
        let index = 0
        const typingInterval = setInterval(() => {

            setTypedText(textToType.substring(0, index + 1));
            index++

        }, typingSpeed);
        //         // }, repeatDelay);

        return () => clearInterval(typingInterval);
    }, [textToType]);
    return (
        <div className="w-full bg-center relative bg-[#001049] px-4 md:px-0 pb-8 md:pb-[4%] pt-8 md:pt-[4%]">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 h-fit gap-y-10 justify-between items-center">
                <div className="group text-white gap-20 z-10">
                    <h2 className="font-semibold text-[150%] md:text-[250%] mb-2 text-white animate-type">
                        {typedText} <span className="inline-block w-3 h-3 bg-white"></span>
                    </h2>
                    <br /> <br />
                    <p className="text-sm md:text-xl">
                        Identiko specializes in identity management technology, verification,
                        and digital identity solutions. Our ICT professionals are experts in
                        biometrics, identity management systems, and system integration. We
                        provide secure identification solutions for private and public
                        organizations, and we collaborate with leading technology companies
                        to provide efficient and dependable technology products and services
                        are crafted by skilled artisans right here in Nigeria.
                    </p>
                </div>

                <div className="group z-10">
                    <img className="h-66 md:h-auto w-full" src={finger} alt="img1" />
                </div>
            </div>
            <Hero />

        </div>


    );
};

export default CTAHome;
