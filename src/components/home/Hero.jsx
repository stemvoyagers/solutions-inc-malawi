import { useNavigate } from "react-router-dom/dist";
import { useState, useEffect } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";

const Hero = () => {
    const navigate = useNavigate()

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const top1 = document.getElementById('div1').getBoundingClientRect().top;
            const top2 = document.getElementById('div2').getBoundingClientRect().top;
            const top3 = document.getElementById('div3').getBoundingClientRect().top;
            const top4 = document.getElementById('div4').getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            setIsVisible1(top1 < windowHeight);
            setIsVisible2(top2 < windowHeight);
            setIsVisible3(top3 < windowHeight);
            setIsVisible4(top4 < windowHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        if (window.location.pathname !== "/services") {
            navigate("/services");
        }
    };

    const handleAClick = () => {
        if (window.location.pathname !== "/service") {
            navigate("/service");
        }
    };


    return (
        <div id="section-1" className="w-full">
            <div className="max-w-screen-xl mx-auto text-center items-center justify-center">
                <div className="text-center text-black">
                    <p className="text-xl md:text-3xl mt-12 md:mt-24  font-bold">OUR SERVICES</p>
                    <p className="text-xs md:text-xl">Our solutions are all about simplification and optimisation </p>
                </div>

                <div className="max-w-screen-xl mx-auto py-10 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2%] md:gap-[2%]  pl-12 md:pl-12 pr-12 md:pr-12">
                    <div id="div1" className={`group cursor-pointer relative duration-500 border rounded-md 
                        overflow-hidden bg-white hover:text-[#003997] shadow-md hover:shadow-xl p-8 grid-cols-1 text-center transition-all scroll-smooth 
                        ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[0%]'
                        }`} onClick={handleAClick}>
                        <AiFillEyeInvisible className="w-full  h-16" />
                        <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 font-bold">TECH SOLUTIONS </p>
                        <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 hover:text-[#000000]">Our solutions are all about
                            simpl Our solutions are all about simplificationification
                        </p>
                    </div>
                    <div id="div2" className={`group cursor-pointer border rounded-md relative 
                        overflow-hidden bg-[#ffffff] hover:text-[#003997] shadow-md hover:shadow-xl p-8 grid-cols-1 text-center duration-500 transition-all scroll-smooth ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[0%]'
                        }`} onClick={handleAClick}>

                        <AiFillEyeInvisible className="w-full h-16" />
                        <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 font-bold">ENROLMENT SERVICES</p>
                        <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 hover:text-[#000000]">Our solutions are all about
                            simpl Our solutions are all about simplificationification
                        </p>
                    </div>
                    <div id="div3" className={`group cursor-pointer border rounded-md relative 
                    overflow-hidden bg-[#ffffff] hover:text-[#003997] shadow-md hover:shadow-xl p-8 grid-cols-1 text-center duration-500 transition-all scroll-smooth ${isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[0%]'
                        }`} onClick={handleAClick} >

                        <AiFillEyeInvisible className="w-full  h-16" />
                        <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 font-bold">IDENTITY SOLUTIONS</p>
                        <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 hover:text-[#000000]">Our solutions are all about
                            simpl Our solutions are all about simplificationification
                        </p>
                    </div>

                    <div id="div4" className={`group cursor-pointer border rounded-md relative overflow-hidden bg-[#ffffff] hover:text-[#003997] shadow-md hover:shadow-xl p-8 grid-cols-1 
                    text-center transition-all scroll-smooth duration-500 ${isVisible4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[0%]'
                        }`} onClick={handleAClick}>

                        <AiFillEyeInvisible className="w-full h-16" />
                        <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 font-bold">SOFTWARE APPLICATION</p>
                        <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 hover:text-[#000000]">Our solutions are all about
                            simpl Our solutions are all about simplificationification
                        </p>
                    </div>
                </div>

                <div className="text-center md:mt-2 mb-24">
                    <button className="bg-[#003997] hover:bg-white border rounded-full w-fit p-3 text-[#ffffff] hover:text-[#003997]" onClick={handleClick}>See all services {'⇾'}</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
