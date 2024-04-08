import { useNavigate } from "react-router-dom/dist";
import { home2 } from "../../assets";
import { useState, useEffect } from "react";

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
        <div className="w-full shadow-2xl px-4 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-screen-xl mx-auto text-center mt-12 items-center justify-center">
                <div className="text-center text-black">
                    <p className="text-md md:text-2xl mt-8  font-bold">OUR SERVICES</p>
                    <p className="text-xs md:text-sm">Our solutions are all about simplification and optimisation </p>
                </div>

                <div className="max-w-screen-xl mx-auto py-10 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pr-4 md:pr-12">
                {[...Array(8)].map((_, idx) => (
                        <div key={idx} id={`div${idx + 1}`} className={`group cursor-pointer border rounded-md relative overflow-hidden bg-white p-8
                        text-center transition-opacity scroll-smooth delay-${idx * 100} ${isVisible[idx] ? 'opacity-100' : 'opacity-0'
          }`} >
                            <img
                                className="w-fit h-32 object-cover group-hover:scale-110 duration-500 rounded-md mb-4 mx-auto"
                                src={home2}
                                alt="heroImg"
                            />
                            <p className="text-md md:text-xl mt-2 text-[#001049] font-bold">SERVICE TITLE</p>
                            <p className="text-xs md:text-sm text-justify mt-2">
                                Our solutions provide a wide selection of customizable functionality for our clients.
                                From the private sector for employee enrollment to the public sector.
                            </p>
                        <p className="text-[#D85012] mt-4" onClick={handleClick}>Learn more <span className="font-bold">{'>'} </span> </p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesBody;
