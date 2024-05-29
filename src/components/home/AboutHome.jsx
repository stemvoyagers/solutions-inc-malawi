import { Link } from "react-router-dom";
import { contactIde } from "../../assets";
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

        <div className="w-full mx-auto h-fit flex flex-col md:flex-row justify-center items-center mb-20">
            <div id="div1" className={` md:w-[50%] ml-[6%] mr-[6%] duration-500 transition-all scroll-smooth delay-300 ${isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[100%]'}`}>
                <img src={contactIde} className="bg-no-repeat bg-center z-1 shadow-xl rounded-md" />
            </div>
            <div id="div2" className={`bg-white text-black gap-10 pt-4 md:pt-10 items-center md:w-[40%] text-left ml-[6%] mr-[6%] justify-start duration-500 transition-all scroll-smooth delay-300 ${isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'}`}>
                <h2 className="font-semibold text-sm md:text-4xl md:mb-2  ">
                    About Us
                </h2>
                <p>
                    <p className="text-xs md:text-4xl pr-4 md:pr-0 py-4 md:py-0">
                        Our Company is<br/> here to help you.</p>  

                    <p>We may also collect information you provide us including but not limited to
                        information on web form
                    </p><br/><br/>
                    <Link to = '/aboutUs'> 
                       <button className="hover:bg-[#003997] bg-[#ffffff] hover:text-[#ffffff] text-[#003997] border border-[#003997] rounded-full px-4 py-2 md:p-3">Read  Us</button></Link>


                </p>
            </div>

        </div>
    );
};

export default AboutHome;
