// import { useNavigate } from "react-router-dom/dist";
import { useState } from "react";
import { no1, no10, no11, no12, no13, no14, no15, no17, no18, no19, no2, no20, no21, no23, no25, no27, no3, no4, no5, no6, no7, no8, no9 } from "../../assets";

const servicesData = [
    {
        no: 1, image: no1,
        title: 'Identity Based Solution', description: 'Our solutions are all about simpl Our solutions are all about',

    },
    {
        no: 2, image: no2,
        title: 'Software Application services', description: 'Our solutions are all about simpl Our solutions are all about',

    },
    {
        no: 3, image: no3,
        title: 'Demographic Data Harmonized', description: ' Our solutions are all about simpl Our solutions are all about',

    },
    {
        no: 4, image: no4,
        title: 'ABIS (Civil & Criminal) Solution', description: 'Our solutions are all about simpl Our solutions are all about',
    },
    {
        no: 5, image: no5,
        title: 'Foundational Civil Registration', description: 'Our solutions are all about sweetness and delight',
    },
    {
        no: 6, image: no6,
        title: 'Card Production & Personalization', description: 'Our solutions are all about innovation and excellence',
    },

    {
        no: 7, image: no7,
        title: 'Identity Verification Solution', description: 'Our solutions are all about simplification and optimization',
    },
    {
        no: 8, image: no8,
        title: 'Mobile verification services', description: 'Our solutions are all about sweetness and delight',
    },
    {
        no: 9, image: no9,
        title: 'Electronic Voting Solution', description: 'Our solutions are all about innovation and excellence',
    },
    {
        no: 10, image: no10,
        title: 'Traffic Management Systems', description: 'Our solutions are all about simplification and optimization',
    },
    {
        no: 11, image: no11,
        title: 'Electronic Surveilance', description: 'Our solutions are all about sweetness and delight',
    },
    {
        no: 12, image: no12,
        title: 'IOT x electronic sensor', description: 'Our solutions are all about innovation and excellence',
    },
    {
        no: 13,
        title: 'Monitoring & Management',
        description: 'Our solutions are all about sweetness and delight',
        image: no13,
    },
    {
        no: 14,
        title: 'Software Development',
        description: 'Our solutions are all about simplification and optimization',
        image: no14,
    },
    {
        no: 15,
        title: 'Software Integration Services',
        description: 'Our solutions are all about sweetness and delight',
        image: no15,
    },
    {
        no: 16,
        title: 'Software Application Services',
        description: 'Our solutions are all about innovation and excellence',
        image: no14,
    },
    {
        no: 17,
        title: 'State, National ID & Civil Registration',
        description: 'Our solutions are all about simplification and optimization',
        image: no17,
    },
    {
        no: 18,
        title: 'E-government Services Platform',
        description: 'Our solutions are all about sweetness and delight',
        image: no18,
    },
    {
        no: 19,
        title: 'Health Programs Services',
        description: 'Our solutions are all about innovation and excellence',
        image: no19,
    },

    {
        no: 20,
        title: 'Time & Attendance Services',
        description: 'Our solutions are all about simplification and optimization',
        image: no20,
    },
    {
        no: 21,
        title: 'Security & Access Control',
        description: 'Our solutions are all about sweetness and delight',
        image: no21,
    },
    {
        no: 22,
        title: 'E-passport Solutions',
        description: 'Our solutions are all about innovation and excellence',
        image: no2,
    },
    {
        no: 23,
        title: 'Drivers License Services',
        description: 'Our solutions are all about simplification and optimization',
        image: no23,
    },
    {
        no: 24,
        title: 'Border Control Services',
        description: 'Our solutions are all about sweetness and delight',
        image: no6,
    },
    {
        no: 25,
        title: 'Criminal Database Services',
        description: 'Our solutions are all about innovation and excellence',
        image: no25,
    },
    {
        no: 26,
        title: 'Prisons/Correctional Facility Management',
        description: 'Our solutions are all about sweetness and delight',
        image: no12,
    },
    {
        no: 27,
        title: 'Smart City/Campus Services',
        description: 'Our solutions are all about sweetness and delight',
        image: no27,
    },
    // {
    //     no: 28,
    //     title: 'DOERR SERVICES',
    //     description: 'Our solutions are all about innovation and excellence',
    //     image: tech_solution,
    // },
    // {
    //     no: 29,
    //     title: 'SWEET SERVICES',
    //     description: 'Our solutions are all about sweetness and delight',
    //     image: software_application.svg,
    // },
    // {
    //     no: 30,
    //     title: 'SWEET SERVICES',
    //     description: 'Our solutions are all about sweetness and delight',
    //     image: software_application.svg,
    // },

];

const ServicesBody = () => {
    // const navigate = useNavigate()
    const [numServices, setNumServices] = useState(12);

    const handleShowMore = () => {
        setNumServices(servicesData.length);
    };

    const handleShowLess = () => {
        setNumServices(12);
    };

    // const handleClick = () => {
    // //     if (window.location.pathname !== "/service") {
    // //         navigate("/service");
    // //     }
    // };

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
                            // onClick={handleClick}
                            className={`cursor-pointer border duration-500 rounded-md relative hover:scale-110 overflow-hidden bg-white 
                                        hover:text-[#003997] shadow-md hover:shadow-xl p-8
                                           grid-cols-1 text-center transition-all scroll-smooth`}  >
                            <div className=" flex justify-center"> <img src={service.image} className="w-[100%] h-40 group-hover:filter group-hover:[#003997]" alt={service.title}/> </div>
                            <p className="text-sm md:text-[17px] mt-4 md:mt-8 mb-2 md:mb-0 font-bold uppercase">{service.title}</p>
                            <p className="text-sm md:text-md md:mt-8 mb-2 md:mb-0">{service.description} </p>

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
