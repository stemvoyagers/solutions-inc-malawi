// import { useState } from "react"
import { useNavigate } from "react-router-dom/dist";
import tech_solution from "../../assets/services_icon/tech_solution.svg";
import software_application from "../../assets/services_icon/software_application.svg";
import identity_solution from "../../assets/services_icon/identity_solution.svg";
import { card1, card2, card3, card4, no1, no2, no3 } from "../../assets";

const services = [
  {
    id: "div1",
    image: no1,
    img: identity_solution,
    title: "Identity & Security Solutions",
    description:
      "Comprehensive identity and security services safeguard personal and organizational data. We provide advanced biometric and verification solutions to ensure secure and reliable identity management.",
    bgImg: card2,
  },
  {
    id: "div2",
    image: no2,
    img: software_application,
    title: "Software & IT Solutions",
    description:
      "Innovative software and IT services streamline operations and enhance efficiency. From development to integration, we deliver robust solutions tailored to your business needs, ensuring security and scalability.",
    bgImg: card4,
  },
  {
    id: "div3",
    image: no3,
    img: tech_solution,
    title: "SmartCity & Surveillance Solutions",
    description:
      "Tailored managed services and smart solutions optimize business processes and customer experiences. We offer specialized support to enhance operational efficiency and meet unique organizational needs.",
    bgImg: card3,
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (window.location.pathname !== "/our-services") {
      navigate("/our-services");
    }
  };

  return (
    <div id="section-1" className="w-full mt-16">
      <div className="max-w-screen-xl mx-auto text-center items-center justify-center">
        <div className="text-center text-black">
          <p className="text-xl md:text-3xl font-bold"> OUR SERVICES </p>
          <p className="text-base md:text-xl">
            {" "}
            Empowering Your Business with Innovative Solutions and Expert Support{" "}
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-10 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2%] md:gap-[2%]  px-12 md:px-12 place-items-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              id={service.id}
              className="w-[100%] group cursor-pointer border rounded-md relative h-fit flex flex-col items-center
                        overflow-hidden bg-[#ffffff] shadow-md hover:shadow-xl
                        grid-cols-1
                        text-center duration-500 pb-20 pt-20"
            >
              <div
                className={`card-bg absolute bg-cover bg-center bg-no-repeat inset-0 transition-opacity duration-500 ${service.id}`}
                style={{ backgroundImage: `url(${service.bgImg})` }}
              ></div>
              <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500"></div>


              <img
                src={service.img}
                className=" title w-20 z-10 group-hover:filter group-hover:invert group-hover:brightness-0 mt-[-40px] mb-20 group-hover:text-white  group-hover:translate-y-[-300%]"
                alt={service.title}
              />
              <p className="absolute description text-balance text-sm md:text-xl mt-16 mb-12 md:mb-0 font-bold z-10 group-hover:text-white group-hover:translate-y-[-500%]
              md:group-hover:translate-y-[-300%]">
                {" "}
                {service.title}{" "}
              </p>
              <p className="absolute description md:pl-20 md:pr-20 text-center  text-sm md:text-md mt-28 mb-12 md:mb-10 z-10 group-hover:text-white w-fit group-hover:w-full group-hover:translate-y-[-60%] group-hover:text-overflow-ellipsis">
                {service.description}
                {/* <span className="hidden group-hover:inline">{service.description.slice(service.description.indexOf(" ", 50))}</span> */}
              </p>
            </div>
          ))}
        </div>


        <div className="text-center md:mt-2 mb-24">
          <button
            className="text-[#003997] hover:text-white shadow-md border rounded-full w-fit p-3 bg-[#ffffff] hover:bg-[#003997]"
            onClick={handleClick}
          >
            See all services {"⇾"}
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes slide-up{
           from{
            transform: translateY(100%);
            opacity: 0
            }
             to{
            transform: translateY(0%);
              opacity: 1
            }
          }
          .animate-slide-up {
          animation: slide-up 2s ease-out;
        }

        .group:hover img{
          opacity: 1;
        }

         .group:hover .title{
          transform: translateY(0)
          transition: transform 0.5s ease-in-out
        }

          .group:hover .description{
          transform: translateY(100%)
          transition: transform 0.5s ease-in-out
        }

       .details {
          opacity: 0;
          transform: translateY(20px);
        }

          .group:hover .details{
          transform: translateY(0)
          transition: transform 0.5s ease-in-out
          opacity: 1;
        }

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

         .title {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          transition: all 1s ease-in-out;
        }

        .description {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          transition: all 1s ease-in-out;
        }

        .group:hover .description {
        -webkit-line-clamp:unset;
        max-height: 500px;
        overflow: visible
        }
        `}
      </style>
    </div>
  );
};

export default Hero;
