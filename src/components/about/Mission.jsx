import { MdCheckCircleOutline } from "react-icons/md"
import { useState, useEffect } from "react";
import { aboutUs } from "../../assets";
import {circular} from "../../assets"

const Mission = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const top1 = document.getElementById('div1').getBoundingClientRect().top;
            const top2 = document.getElementById('div2').getBoundingClientRect().top;
            const top3 = document.getElementById('div3').getBoundingClientRect().top;
            const top4 = document.getElementById('div4').getBoundingClientRect().top;
            const top5 = document.getElementById('div5').getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            setIsVisible1(top1 < windowHeight);
            setIsVisible2(top2 < windowHeight);
            setIsVisible3(top3 < windowHeight);
            setIsVisible4(top4 < windowHeight);
            setIsVisible5(top5 < windowHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="relative bg-white pb-[8%] pt-[4%] overflow-x-hidden bg-cover bg-center" 
        style={{
            backgroundImage: `url(${circular})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
           <div className="absolute top-0 left-0 w-full h-full bg-white opacity-85"></div>
           
            <div className="relative max-w-screen-xl mx-auto mt-4 md:mt-0 px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center items-center gap-y-10 text-center z-50">

                <h2 className="font-semibold text-xl md:text-3xl md:mb-2 mt-0">
                    Our Primary Pillars
                </h2>

                <p className="md:w-[40%] text-sm md:text-sm pr-4 md:pr-0">
                    Identiko specializes in identity management technology, verification,
                    and digital identity solutions. Our ICT professionals are experts in
                    biometrics, identity management systems, and system integration.
                    Our enrolment solutions provide a wide
                    selection of customizable functionality
                    for our clients.
                    Our ICT professionals are experts in
                    biometrics, identity management systems, and system integration.
                    Our enrolment solutions provide a wide
                    selection of customizable functionality
                    for our clients.  </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[6%] md:gap-[10%] md:mt-8">
                    <div id="div1" className={`bg-yellow-500 text-white hover:scale-110 rounded-xl overflow-hidden border shadow-md p-16 md:p-8 duration-500 transition-all scroll-smooth ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'
                        }`} >
                        <p className="text-md md:text-xl -mt-2 md:mt-8  font-bold">Quality Solutions</p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Reliability <span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Availability<span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Serviceability<span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mb-16 md:mb-0 mt-2 md:mt-4 flex items-center justify-between">Durability<span><MdCheckCircleOutline /></span></p>
                    </div>

                    <div id="div2" className={`bg-[#0F90CA]  text-white hover:scale-110 duration-500 rounded-xl overflow-hidden shadow-xl p-12 md:p-8 border transition-all scroll-smooth ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'
                        }`} >
                        <p className="text-md md:text-xl -mt-2 md:mt-8  font-bold">Quality Delivery</p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">On-time Delivery <span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Seamless<span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Secure<span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify  mb-16 md:mb-0 mt-2 md:mt-4 flex items-center justify-between">Extensive Support<span><MdCheckCircleOutline /></span></p>
                    </div>

                    <div id="div3" className={`bg-green-500 text-white hover:scale-110 duration-500 rounded-xl overflow-hidden shadow-md p-12 md:p-8 border transition-all scroll-smooth ${isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'
                        }`} >
                        <p className="text-md md:text-xl -mt-2 md:mt-8 font-bold">Quality Results</p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Measurable Results <span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Optimization<span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Satisfaction<span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify  mb-16 md:mb-0 mt-2 md:mt-4 flex items-center justify-between">Innovation<span><MdCheckCircleOutline /></span></p>
                    </div>
                </div>


                <div className="mt-8 overflow-x-hidden">
                    <div className="flex flex-col md:flex-row  gap-12" >
                        <div id="div1" className={` group  md:w-[80%] duration-500 transition-all scroll-smooth delay-300 ${isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[100%]'}`}>
                            <img className="md:h-fit object-cover relative m-0 p-0 cover rounded-xl" src={aboutUs} alt="img1" />
                        </div>

                        <div id="div4" className={`md:w-[70%] text-center bg-black duration-500 text-white p-6 md:p-20 transition-all delay-500 scroll-smooth ${isVisible4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[100%]'
                            }`} >
                            <p className="text-xl md:text-2xl font-bold">Our Misson</p>
                            <p className="text-xs md:text-sm text-justify mt-2">From the private sector for
                                employee enrolment to the public sector Our enrolment solutions provide a wide
                                selection of customizable functionality for our clients. From the private sector for
                                employee enrolment to the public sector
                            </p>
                        </div>

                       
                    </div>
                </div>

                <div className="mt-8 overflow-x-hidden">
                    <div className="flex flex-col-reverse md:flex-row  gap-12" >
                        

                        <div id="div5" className={`overflow-x-hidden md:w-[70%] bg-black  text-white p-6 md:p-20 text-center mb-16 md:mb-0 duration-700 transition-all delay-200 scroll-smooth ${isVisible5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'
                            }`} >
                            <p className="text-xl md:text-2xl font-bold">Our Vision</p>
                            <p className="text-xs md:text-sm text-justify mt-2">Our enrolment solutions provide a wide
                                 Our enrolment solutions provide a wide
                                selection of customizable functionality for our clients. From the private sector for
                                employee enrolment to the public sector
                            </p>
                        </div>
                        <div id="div1" className={` group  md:w-[80%] duration-500 transition-all scroll-smooth delay-300 ${isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[100%]'}`}>
                            <img className="md:h-auto  object-cover relative m-0 p-0 cover rounded-xl" src={aboutUs} alt="img1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mission