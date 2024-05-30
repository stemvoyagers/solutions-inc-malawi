import { useNavigate } from "react-router-dom/dist";
import { useState, useEffect } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";

const ServicesBody = () => {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(Array(8).fill(false));
    
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const topOffset = Array.from({length: 8}, (_, i) =>
                document.getElementById(`div${i + 1}`).getBoundingClientRect().top 
            )
          
          setIsVisible(topOffset.map(top => top < windowHeight));
         
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    
    const handleClick = () => {
        if (window.location.pathname !== "/service") {
            navigate("/service");
        }
    };

    return (
        <div id="section-1" className="w-full px-4 md:px-8 lg:px-12 xl:px-16 mb-20">
            <div className="max-w-screen-xl mx-auto text-center mt-12 items-center justify-center">
                <div className="text-center text-black">
                    <p className="text-md md:text-3xl mt-20  font-bold">OUR SERVICES</p>
                    <p className="text-xs md:text-sm">Our solutions are all about simplification and optimisation </p>
                </div>

                <div className="max-w-screen-xl mx-auto py-10 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center">
                {[...Array(8)].map((_, idx) => (
                        <div key={idx} id={`div${idx + 1}`} onClick={handleClick} className={`group cursor-pointer border duration-500 rounded-md relative overflow-hidden bg-white
                        hover:text-[#003997] shadow-md hover:shadow-xl p-8
                        grid-cols-1 text-center transition-all scroll-smooth ${isVisible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[0%]'
          }`}  >
                            <AiFillEyeInvisible className="w-full h-16" />
                            <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 font-bold">ENROLMENT SERVICES</p>
                        <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 hover:text-[#000000]">Our solutions are all about
                            simpl Our solutions are all about simplificationification
                        </p>
                       
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesBody;
