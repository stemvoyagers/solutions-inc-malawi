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

        <div className="relative w-full mx-auto h-fit  pt-[8%] pb-[8%] flex flex-col md:flex-row justify-center items-center mt-20 mb-20  bg-cover bg-center" 
        style={{
            backgroundImage: `url(${circular})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
           <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85"></div>
            <div id="div1" className={` relative md:w-1/2  ml-[6%] mr-[6%] duration-500 transition-all scroll-smooth delay-300 ${isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[100%]'}`}>
                <img src={contactIde} className="bg-no-repeat bg-center mb-2 z-1 shadow-xl rounded-md" />
                {/* <img src={contactIde} className="bg-no-repeat bg-center z-1 shadow-xl rounded-md" /> */}
            </div>
            <div id="div2" className={`w-1/2 bg-white text-black gap-10 ml-6 p-12 items-center duration-500 transition-all scroll-smooth delay-300 ${isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'}`}>
                <h2 className="font-semibold text-sm md:text-4xl md:mb-2  ">
                    Who We Are
                </h2>
                <p>
                    <p className="text-xs md:text-4xl pr-4 md:pr-0 py-4 md:py-0">
                        Our Company is<br/> here to help you.</p>  

                    <p>We may also collect information you provide us including but not limited to
                        information on web form
                    </p><br/><br/>
                    <Link to = '/about'> 
                   
                    <button className="w-fit hover:text-[#003a97b3] text-[#003997]">Read More  {'⇾'}</button>
                  </Link>


                </p>
            </div>

        </div>
    );
};

export default AboutHome;
