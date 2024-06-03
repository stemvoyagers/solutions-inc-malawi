import { useNavigate } from "react-router-dom/dist";
import { useState, useEffect } from "react";
import { enrollment_services, identity_solution, software_application, tech_solution } from "../../assets";

const servicesData = [
    {
        no: 1,
        title: 'TECH SOLUTIONS',
        description: 'Our solutions are all about simpl Our solutions are all about mplificationification',
        image: tech_solution,
    },
    {
        no: 2,
        title: 'ENROLMENT SERVICES',
        description: 'Our solutions are all about simpl Our solutions are all about simplificationification',
        image: enrollment_services,
    },
    {
        no: 3,
        title: 'IDENTITY SOLUTIONS',
        description: ' Our solutions are all about simpl Our solutions are all about simplificationification',
        image: identity_solution,
    },
    {
        no: 4,
        title: 'SOFTWARE APPLICATION',
        description: 'Our solutions are all about simpl Our solutions are all about',
        image: software_application,
    },
    {
        no: 5,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: identity_solution,
    },
    {
        no: 1,
        title: 'DOERR SERVICES',
        description: 'Our solutions are all about innovation and excellence',
        image: software_application,
    },

    {
        no: 1,
        title: 'ENROLMENT SERVICES',
        description: 'Our solutions are all about simplification and optimization',
        image: software_application,
    },
    {
        no: 1,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: software_application,
    },
    {
        no: 1,
        title: 'DOERR SERVICES',
        description: 'Our solutions are all about innovation and excellence',
        image: identity_solution,
    },
    {
        no: 1,
        title: 'ENROLMENT SERVICES',
        description: 'Our solutions are all about simplification and optimization',
        image: identity_solution,
    },
    {
        no: 1,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: tech_solution,
    },
    {
        no: 1,
        title: 'DOERR SERVICES',
        description: 'Our solutions are all about innovation and excellence',
        image: tech_solution,
    },
    {
        no: 1,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: software_application,
    },
    {
        no: 1,
        title: 'ENROLMENT SERVICES',
        description: 'Our solutions are all about simplification and optimization',
        image: tech_solution,
    },
    {
        no: 2,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: enrollment_services,
    },
    {
        no: 3,
        title: 'DOERR SERVICES',
        description: 'Our solutions are all about innovation and excellence',
        image: software_application,
    },
    {
        no: 1,
        title: 'ENROLMENT SERVICES',
        description: 'Our solutions are all about simplification and optimization',
        image: identity_solution,
    },
    {
        no: 1,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: identity_solution,
    },
    {
        no: 1,
        title: 'DOERR SERVICES',
        description: 'Our solutions are all about innovation and excellence',
        image: software_application,
    },

    {
        no: 1,
        title: 'ENROLMENT SERVICES',
        description: 'Our solutions are all about simplification and optimization',
        image: software_application,
    },
    {
        no: 1,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: software_application,
    },
    {
        no: 1,
        title: 'DOERR SERVICES',
        description: 'Our solutions are all about innovation and excellence',
        image: identity_solution,
    },
    {
        no: 1,
        title: 'ENROLMENT SERVICES',
        description: 'Our solutions are all about simplification and optimization',
        image: identity_solution,
    },
    {
        no: 1,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: tech_solution,
    },
    {
        no: 1,
        title: 'DOERR SERVICES',
        description: 'Our solutions are all about innovation and excellence',
        image: tech_solution,
    },
    {
        no: 1,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: software_application.svg,
    },
    
    




];

const ServicesBody = () => {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(Array(30).fill(false));
    const [numServices, setNumServices] = useState(12);

    const handleShowMore = () => {
        setNumServices(servicesData.length);
    };

    const handleShowLess = () => {
        setNumServices(12);
    };

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const topOffset = Array.from({ length: 12 }, (_, i) =>
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
        <div id="section-1" className="w-full px-4 md:px-8 lg:px-12 xl:px-16 mb-2">
            <div className="max-w-screen-xl mx-auto text-center mt-12 items-center justify-center">
                <div className="text-center text-black">
                    <p className="text-md md:text-3xl mt-20  font-bold">OUR SERVICES</p>
                    <p className="text-xs md:text-sm">Our solutions are all about simplification and optimisation </p>
                </div>

                <div className="max-w-screen-xl mx-auto py-10 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center justify-center">
                    {servicesData.slice(0, numServices).map((service, idx) => (

                        <div key={idx}
                            id={`div${idx + 1}`}
                            onClick={handleClick}
                            className={`group cursor-pointer border duration-500 rounded-md relative overflow-hidden bg-white
                                        hover:text-[#003997] shadow-md hover:shadow-xl p-8
                                           grid-cols-1 text-center transition-all scroll-smooth ${isVisible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[0%]'
                                }`}  >
                            <img src={service.image} className="w-20" />
                            <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 font-bold">{service.title}</p>
                            <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 hover:text-[#000000]">{service.description} </p>

                        </div>
                    ))}

                    <div className="flex justify-center items-center text-center md:mt-2 mb-2">
                        {numServices === 12 ? (
                            <button onClick={handleShowMore} className="bg-[#003997] hover:bg-white rounded-full w-fit p-3 text-[#ffffff] hover:text-[#003997]">Show More</button>
                        ) : (
                            <button onClick={handleShowLess} className="bg-[#970000] hover:bg-white rounded-full w-fit p-3 text-[#ffffff] hover:text-[#970000]">Show Less</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesBody;
