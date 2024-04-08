

import { useState, useEffect } from "react";
import { finger } from "../../assets";
import Hero from "./Hero";

const CTAHome = () => {
    const [typedText, setTypedText] = useState('')

    const textToType = `Identiko is a one-stop shop for digital 
  identity, verification, and technology solutions`;
    const typingSpeed = 100;
    // const repeatDelay = 2000;

    useEffect(() => {
        let index = 0
        const typingInterval = setInterval(() => {

            setTypedText(textToType.substring(0, index + 1));
            index++
            if (index === textToType.length) {
                // clearInterval(typingInterval);

                // setTimeout(() => {
                //     setTypedText('')
                    index = 0

                    // setInterval(() => {
                    //     setTypedText(textToType.substring(0, index + 1));
                    //     index++;
                    //     if (index === textToType.length) {
                    //         clearInterval(typingInterval);
                        }
                    }, typingSpeed);
        //         // }, repeatDelay);
        //     }
        // }, typingSpeed);
        return () => clearInterval(typingInterval);
    }, [textToType]);
    return (
        <div className="w-full bg-[#001049] px-4 md:px-0 pb-8 md:pb-[4%] pt-8 md:pt-[4%]">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 h-fit gap-y-10 gap-x-20">
                <div className="group text-white gap-20 ">
                    <h2 className="font-semibold text-[150%] md:text-[250%] mb-2 text-[#D85012] animate-type">
                        {typedText} <span className="inline-block w-3 h-3 bg-[#D85012]"></span>  
                    </h2>
                    <br /> <br />
                    <p className="text-sm md:text-xl pr-4 md:pr-0">
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
                    <img className="h-66 md:h-auto w-full left-0" src={finger} alt="img1" />
                </div>
            </div>
            <Hero />

        </div>


    );
};

export default CTAHome;
