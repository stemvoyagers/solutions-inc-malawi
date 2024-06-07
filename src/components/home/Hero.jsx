
import { useNavigate } from "react-router-dom/dist";
import tech_solution from "../../assets/services_icon/tech_solution.svg";
import enrollment_services from "../../assets/services_icon/enrollment_services.svg";
import software_application from "../../assets/services_icon/software_application.svg";
import identity_solution from "../../assets/services_icon/identity_solution.svg";
import { hp, idemia, microsoft, veritas } from "../../assets";

const services = [
  {
    id: "div1",
    img: tech_solution,
    title: "TECH SOLUTIONS",
    description: "Our solutions are all about simplification imitation",
    bgImg: veritas
  },
  {
    id: "div2",
    img: enrollment_services,
    title: "ENROLMENT SERVICES",
    description: "Our solutions are all about simplification imitation",
    bgImg: hp
  },
  {
    id: "div3",
    img: identity_solution,
    title: "IDENTITY SOLUTIONS",
    description: "Our solutions are all about simplification imitation",
    bgImg: microsoft
  },
  {
    id: "div4",
    img: software_application,
    title: "SOFTWARE APPLICATION",
    description: "Our solutions are all about simplification imitation",
    bgImg: idemia
  },
];

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.location.pathname !== "/services") {
      navigate("/services");
    }
  };

  const handleAClick = () => {
    if (window.location.pathname !== "/service") {
      // navigate("/service");
    }
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
              className={`border rounded-md relative flex flex-col items-center 
             overflow-hidden bg-white shadow-md hover:shadow-xl p-8 grid-cols-1 text-center 
             hover:bg-cover hover:bg-center hover:bg-no-repeat 
             hover:bg-[url('${service.bgImg}')]`}
  onClick={handleAClick}
               >
                <div className="absolute inset-0 bg-[#003997] opacity-0 hover:opacity-75 transition-opacity duration-500"></div>
  <img src={service.img} className="w-20" />
  <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 font-bold"> {service.title} </p>
  <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0"> {service.description}</p>
</div>
          ))}
        </div>

        <div className="text-center md:mt-2 mb-24">
          <button
            className="bg-[#003997] hover:bg-white border rounded-full w-fit p-3 text-[#ffffff] hover:text-[#003997]"
            onClick={handleClick} >
            See all services {"⇾"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;