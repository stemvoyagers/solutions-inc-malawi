import { useNavigate } from "react-router-dom/dist";
import { home2 } from "../../assets";
import { useState, useEffect } from "react";

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
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto text-center items-center justify-center">
                <div className="text-center text-white">
                    <p className="text-md md:text-2xl mt-8  font-bold">OUR SERVICES</p>
                    <p className="text-xs md:text-xl">Our solutions are all about simplification and optimisation </p>
                </div>

                <div className="max-w-screen-xl mx-auto py-10 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[7%] md:gap-[6%] pr-12">
                    <div id="div1" className={`group cursor-pointer rounded-md relative duration-500
                    overflow-hidden  w-[120%] h-[130%] bg-white p-8 grid-cols-1 text-center transition-all scroll-smooth ${isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[100%]'
                        }`} >
                        <img
                            className="w-fit h-[50%] object-cover group-hover:scale-110 duration-500 rounded-md"
                            src={home2}
                            alt='heroImg'
                        />
                        <p className="text-md md:text-xl mt-8 text-[#001049] font-bold">IDENTITY BASED SOLUTIONS </p>
                        <p className="text-xs md:text-sm text-justify mt-2">Our enrolment solutions provide a wide
                            selection of customizable functionality
                            for our clients. From the private sector for
                            employee enrolment to the public sector </p>
                        <p className="text-[#001049] mt-4" onClick={handleAClick}>Learn more <span className="font-bold"> {'>'} </span> </p>
                    </div>
                    <div id="div2" className={`group cursor-pointer rounded-md relative 
                    overflow-hidden w-[120%] h-[130%] bg-white p-8 grid-cols-1 text-center duration-500 transition-all scroll-smooth ${isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[100%]'
                        }`} >
                        <img
                            className="w-fit h-[50%] object-cover group-hover:scale-110 duration-500 rounded-md"
                            src={home2}
                            alt='heroImg'
                        />
                        <p className="text-md md:text-xl mt-8 text-[#001049] font-bold">ENROLMENT OPERATIONS</p>
                        <p className="text-xs md:text-sm text-justify mt-2">Our enrolment solutions provide a wide
                            selection of customizable functionality
                            for our clients. From the private sector for
                            employee enrolment to the public sector </p>
                        <p className="text-[#001049] mt-4" onClick={handleAClick}>Learn more <span className="font-bold"> {'>'} </span> </p>
                    </div>
                    <div id="div3" className={`group cursor-pointer rounded-md relative 
                    overflow-hidden  w-[120%] h-[130%] bg-white p-8 grid-cols-1 text-center duration-500 transition-all scroll-smooth ${isVisible3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'
                        }`} >
                        <img
                            className="w-fit h-[50%] object-cover group-hover:scale-110 duration-500 rounded-md"
                            src={home2}
                            alt='heroImg'
                        />
                        <p className="text-md md:text-xl mt-8 text-[#001049] font-bold">IDENTITY MANG. SOLUTIONS</p>
                        <p className="text-xs md:text-sm text-justify mt-2">Our enrolment solutions provide a wide
                            selection of customizable functionality
                            for our clients. From the private sector for
                            employee enrolment to the public sector </p>
                        <p className="text-[#001049] mt-4" onClick={handleAClick}>Learn more <span className="font-bold">{'>'} </span> </p>
                    </div>

                    <div id="div4" className={`group cursor-pointer rounded-md relative overflow-hidden  w-[120%] h-[130%] bg-white p-8 grid-cols-1 
                    text-center transition-all scroll-smooth duration-500 ${isVisible4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'
                        }`} >
                        <img
                            className="w-fit h-[50%] object-cover group-hover:scale-110 duration-500 rounded-md"
                            src={home2}
                            alt='heroImg'
                        />
                        <p className="text-md md:text-xl mt-8 text-[#001049] font-bold">SOFTWARE APPLICATION</p>
                        <p className="text-xs md:text-sm text-justify mt-2">Our enrolment solutions provide a wide
                            selection of customizable functionality
                            for our clients. From the private sector for
                            employee enrolment to the public sector </p>
                        <p className="text-[#001049] mt-4" onClick={handleAClick}>Learn more <span className="font-bold">{'>'} </span> </p>
                    </div>
                </div>

                <div className="text-center mt-[24%] md:mt-[12%]">
                    <button className="bg-[#001049] hover:bg-white border rounded-full w-fit p-3 text-[#ffffff] hover:text-[#001049]" onClick={handleClick}>See all services {'⇾'}</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
