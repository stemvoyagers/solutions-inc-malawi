import { useNavigate } from "react-router-dom/dist";
import { useState } from "react";
import { enrollment_services, identity_solution, software_application, tech_solution } from "../../assets";

const servicesData = [
    {
        no: 1, image: tech_solution,
        title: 'TECH SOLUTIONS', description: 'Our solutions are all about simpl Our solutions are all about mplificationification',

    },
    {
        no: 2, image: enrollment_services,
        title: 'ENROLMENT SERVICES', description: 'Our solutions are all about simpl Our solutions are all about simplificationification',

    },
    {
        no: 3, image: identity_solution,
        title: 'IDENTITY SOLUTIONS', description: ' Our solutions are all about simpl Our solutions are all about simplificationification',

    },
    {
        no: 4, image: software_application,
        title: 'SOFTWARE APPLICATION', description: 'Our solutions are all about simpl Our solutions are all about',
    },
    {
        no: 5, image: identity_solution,
        title: 'SWEET SERVICES', description: 'Our solutions are all about sweetness and delight',
    },
    {
        no: 6, image: software_application,
        title: 'DOERR SERVICES', description: 'Our solutions are all about innovation and excellence',
    },

    {
        no: 7, image: software_application,
        title: 'ENROLMENT SERVICES', description: 'Our solutions are all about simplification and optimization',
    },
    {
        no: 8, image: software_application,
        title: 'SWEET SERVICES', description: 'Our solutions are all about sweetness and delight',
    },
    {
        no: 9, image: identity_solution,
        title: 'DOERR SERVICES', description: 'Our solutions are all about innovation and excellence',
    },
    {
        no: 10, image: identity_solution,
        title: 'ENROLMENT SERVICES', description: 'Our solutions are all about simplification and optimization',
    },
    {
        no: 11, image: tech_solution,
        title: 'SWEET SERVICES', description: 'Our solutions are all about sweetness and delight',
    },
    {
        no: 12, image: tech_solution,
        title: 'DOERR SERVICES', description: 'Our solutions are all about innovation and excellence',
    },
    {
        no: 13,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: software_application,
    },
    {
        no: 14,
        title: 'ENROLMENT SERVICES',
        description: 'Our solutions are all about simplification and optimization',
        image: tech_solution,
    },
    {
        no: 15,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: enrollment_services,
    },
    {
        no: 16,
        title: 'DOERR SERVICES',
        description: 'Our solutions are all about innovation and excellence',
        image: software_application,
    },
    {
        no: 17,
        title: 'ENROLMENT SERVICES',
        description: 'Our solutions are all about simplification and optimization',
        image: identity_solution,
    },
    {
        no: 18,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: identity_solution,
    },
    {
        no: 19,
        title: 'DOERR SERVICES',
        description: 'Our solutions are all about innovation and excellence',
        image: software_application,
    },

    {
        no: 20,
        title: 'ENROLMENT SERVICES',
        description: 'Our solutions are all about simplification and optimization',
        image: software_application,
    },
    {
        no: 21,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: software_application,
    },
    {
        no: 22,
        title: 'DOERR SERVICES',
        description: 'Our solutions are all about innovation and excellence',
        image: identity_solution,
    },
    {
        no: 23,
        title: 'ENROLMENT SERVICES',
        description: 'Our solutions are all about simplification and optimization',
        image: identity_solution,
    },
    {
        no: 24,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: tech_solution,
    },
    {
        no: 25,
        title: 'DOERR SERVICES',
        description: 'Our solutions are all about innovation and excellence',
        image: tech_solution,
    },
    {
        no: 26,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: software_application.svg,
    },
    {
        no: 27,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: tech_solution,
    },
    {
        no: 28,
        title: 'DOERR SERVICES',
        description: 'Our solutions are all about innovation and excellence',
        image: tech_solution,
    },
    {
        no: 29,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: software_application.svg,
    },
    {
        no: 30,
        title: 'SWEET SERVICES',
        description: 'Our solutions are all about sweetness and delight',
        image: software_application.svg,
    },

];

const ServicesBody = () => {
    const navigate = useNavigate()
    const [numServices, setNumServices] = useState(12);

    const handleShowMore = () => {
        setNumServices(servicesData.length);
    };

    const handleShowLess = () => {
        setNumServices(12);
    };

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
                            className={`cursor-pointer border duration-500 rounded-md relative overflow-hidden bg-white
                                        hover:text-[#003997] shadow-md hover:shadow-xl p-8
                                           grid-cols-1 text-center transition-all scroll-smooth`}  >
                            <div className=" flex justify-center"> <img src={service.image} className="w-20" /> </div>
                            <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 font-bold">{service.title}</p>
                            <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 hover:text-[#000000]">{service.description} </p>

                        </div>
                    ))}                   
                </div>

                <div className="mb-20">
                        <div className="flex justify-center items-center">
                            {numServices === 12 ? (
                                <button onClick={handleShowMore} className="text-[#003997]  border hover:text-white rounded-full w-fit p-3 bg-[#ffffff] hover:bg-[#003997]">Show More</button>
                            ) : (
                                <button onClick={handleShowLess} className="bg-[#ffffff] text-[#003997] border hover:bg-[#003997] rounded-full w-fit p-3 hover:text-white">Show Less</button>
                            )}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ServicesBody;
