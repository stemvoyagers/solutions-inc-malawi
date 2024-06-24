
import {useState} from "react"
import { useNavigate } from "react-router-dom/dist";
import tech_solution from "../../assets/services_icon/tech_solution.svg";
import enrollment_services from "../../assets/services_icon/enrollment_services.svg";
import software_application from "../../assets/services_icon/software_application.svg";
import identity_solution from "../../assets/services_icon/identity_solution.svg";
import { card1, card2, card3, card4, no1, no2, no3, no4 } from "../../assets";


const services = [

  {
    id: "div1",
    image: no1,
    img: identity_solution,
    title: "IDENTITY-BASED SOLUTION",
    description: "Reliable ID systems verify identities across fields",
    details: "A reliable identification system is key in different fields for ID verification solutions like health insurance, border control, online authentication, voter verification, license checks, benefit administration, and entitlement checks for social security and healthcare while also validating the document holder's identity.",
    bgImg: card2
  },
  {
    id: "div2",
    image: no2,
    img: software_application,
    title: "SOFTWARE APPLICATION",
    description: "Transforming businesses with robust, scalable, agile apps",
    details: "Through the years, we have helped by in transforming businesses by building robust and scalable apps. Our enterprise application services employ tested agile methodologies to provide innovative solutions.",
    bgImg: card4
  },
  {
    id: "div3",
    image: no3,
    img: tech_solution,
    title: "TECH SOLUTION",
    description: "Customizable, seamless enrollment solutions with high-quality data",
    details: "Solutions for identification and access management regulate resource access by controlling user Identity data. The strength of the identification system depends on having a reliable User ID verification solution integrated into it",
    bgImg: card3
  },
  {
    id: "div4",
    image: no4,
    img: enrollment_services,
    title: "ENROLMENT SERVICES",
    description: "Transforming Your Vision with Innovative Tech Solutions",
    details: "Our mobile, fixed, and online enrollment solutions provide fully customizable capabilities for enrollments in the public and private sectors. Our solutions guarantee seamless enrollments, high-quality data capture, and minimal delays because they include hardware, software, and services.",
    bgImg: card1
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleClick = () => {
    if (window.location.pathname !== "/our-services") {
    navigate("/our-services");
    }
    };

  // const handleServiceClick = (service) => {
  //   setSelectedService(service);
  //   setShowModal(true);
  // };

  const handleModalClose  = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div id="section-1" className="w-full">
      <div className="max-w-screen-xl mx-auto text-center items-center justify-center">
        <div className="text-center text-black">
          <p className="text-xl md:text-3xl mt-12 md:mt-24  font-bold"> OUR SERVICES </p>
          <p className="text-xs md:text-xl"> Our solutions are all about simplification and optimization </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-10 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2%] md:gap-[2%]  pl-12 md:pl-12 pr-12 md:pr-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              id={service.id}
              className="group cursor-pointer border rounded-md relative hover:scale-110 flex flex-col items-center 
                        overflow-hidden bg-[#ffffff] shadow-md hover:shadow-xl p-8 grid-cols-1 
                        text-center duration-500"
                        
              
                        // onClick={() => handleServiceClick(service)}
               >
               <div className={`card-bg absolute bg-cover bg-center bg-no-repeat inset-0 transition-opacity duration-500 ${service.id}`}
               style={{ backgroundImage: `url(${service.bgImg})` }}>
               </div>
                <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500"></div>

                <img src={service.img} className="w-20 z-10 group-hover:filter group-hover:invert group-hover:brightness-0" alt={service.title} />
                <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 font-bold z-10 group-hover:text-white"> {service.title} </p>
                <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 z-10 group-hover:text-white"> {service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center md:mt-2 mb-24">
          <button
            className="text-[#003997] hover:text-white shadow-md border rounded-full w-fit p-3 bg-[#ffffff] hover:bg-[#003997]"
            onClick={handleClick} >
            See all services {"⇾"}
          </button>
        </div>   
      </div>

      {showModal && selectedService && (
        <div className="fixed top-10 left-0 right-0 md:w-full text-white mx-auto bg-[#003997] bg-opacity-95 z-50 flex items-center justify-center">
          <div className="p-8 rounded-md shadow-md grid grid-cols-1">
            <h2 className="text-xl font-bold mb-4 text-center">{selectedService.title}</h2>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-[20%] mx-auto mb-4"
            />
            <p className="text-sm text-balance">{selectedService.details}</p>
            <button
              className="bg-white text-[#970000] border rounded-full p-2 mt-4 w-fit hover:scale-110"
              onClick={handleModalClose}
            >
              Close
            </button>
          </div>
        </div>
      )}



      <style>
        {`
        .card-bg{
          opacity: 0;
        }
        .group:hover .card-bg{
          opacity: 1;
        }
        #div1.card-bg{
          background-image: url(${card1});
        }
        #div2.card-bg{
          background-image: url(${card2});
        }
        #div3.card-bg{
          background-image: url(${card3});
        }
        #div4.card-bg{
          background-image: url(${card4});
        }
        `}
      </style>    

    </div>
  );
};


export default Hero;