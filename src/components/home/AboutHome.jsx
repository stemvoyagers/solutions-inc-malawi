import { Link } from "react-router-dom";
import { contactIde, circular } from "../../assets";
import { useState, useEffect } from "react";

const AboutHome = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const top1 = document.getElementById('div1').getBoundingClientRect().top;
            const top2 = document.getElementById('div2').getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            setIsVisible1(top1 < windowHeight);
            setIsVisible2(top2 < windowHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <div className="relative w-full mx-auto h-fit pt-[6%] pb-[6%] flex flex-col md:flex-row justify-center items-center mt-20 mb-20  bg-cover bg-center"
            style={{
                backgroundImage: `url(${circular})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-95"></div>
            <div id="div1" className={` relative md:w-1/2  ml-[4%] duration-500 transition-all scroll-smooth delay-300 ${isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[100%]'}`}>
                <img src={contactIde} className="bg-no-repeat bg-center mb-2 z-1 shadow-xl" />
            </div>
            <div id="div2" className={`md:w-1/2 bg-white text-black gap-10 ml-6 p-12 items-center duration-500 transition-all scroll-smooth delay-300 ${isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'}`}>
                <h2 className="font-semibold text-sm md:text-4xl md:mb-4  ">
                    Who We Are
                </h2>
                <p>


                    <p className="text-balance">At the heart of Identiko lies a steadfast commitment to
                        innovation, reliability, integrity, and dedication. Our leadership
                        team brings over 20 years of unparalleled expertise, delivering
                        top-tier solutions across diverse industries such as banking,
                        security, breweries, FMCGs, construction, and
                        telecommunications. Their profound experience extends to
                        executing sensitive government projects at local, state, and
                        national levels, ensuring the highest standards of excellence and
                        security.
                    </p><br /><br />
                    <Link to='/about-us'>

                        <button className="w-fit hover:text-[#003a97b3] text-[#003997]">Read More  {'⇾'}</button>
                    </Link>


                </p>
            </div>

        </div>
    );
};

export default AboutHome;
