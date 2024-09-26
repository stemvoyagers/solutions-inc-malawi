import tech_solution from "../../assets/services_icon/tech_solution.svg";
import software_application from "../../assets/services_icon/software_application.svg";
import identity_solution from "../../assets/services_icon/identity_solution.svg";
import { card1, card2, card3, card4, no1, no2, no3 } from "../../assets";

const services = [

  {
    id: "1",
    img: tech_solution,
    title: "Biometric Solution",
    description:
            "Biometric identification has evolved beyond security to mainstream applications, offering reliable, convenient recognition through physiological or behavioral traits. Driven by technological advances and growing security needs, Identiko provides innovative biometric solutions across various industries for identity management and authentication",
    bgImg: card1,
  },
  {
    id: "2",
    img: tech_solution,
    title: "Identity-Based Solution",
        description:
            "A strong identification system requires robust ID verification for benefits administration, health insurance, border control, online authentication, voter and driving license checks, and social security entitlement. Each case demands precise validation of the document holder’s identity",
    bgImg: card2,
  },
  {
    id: "3",
    img: tech_solution,
    title: "State National ID & Civic Registration",
    description:
        "Security is a priority for governments, and unique identity verification is crucial to prevent identity theft and ensure fair resource allocation. Our solution offers customizable systems—enrolment, data cleansing, deduplication, and databases—to support effective civil registration and societal security",
    bgImg: card3,
  },
  {
    id: "4",
    img: tech_solution,
    title: "Enrolment Services",
    description: "Our enrollment solutions offer customizable features for private and public sectors. Mobile, fixed, and online options include all necessary hardware, software, and services to ensure smooth enrollment, accurate data capture, and minimal delays",
    bgImg: card1,
  },
  {
    id: "5",
    img: tech_solution,
    title: "Demographic Data Harmonization",
        description: "We address unorganized, duplicated, and fragmented identity data affecting sectors and governments. Our innovative solutions integrate multiple databases into a single, adaptable identity database, eliminating duplicates and meeting diverse functional requirements",
    bgImg: card2,
  },
  {
    id: "6",
    img: tech_solution,
    title: "ABIS (Civil & Criminal) Solution",
        description: "An Automated Biometric Identification System (ABIS) ensures unique identity and prevents fraud for citizens, employees, voters, and more. A well-functioning ABIS is crucial for identity verification projects and integrates with other systems relying on verified identities",
    bgImg: card3,
  },
  {
    id: "7",
    img: tech_solution,
    title: "Foundational Civil Registration",
        description: "A reliable, centralized citizens' register is essential for modern societies, aiding efficient services and equal development. It serves as the main source for citizen identification, containing basic details, civil status, family connections, and service eligibility",
    bgImg: card1,
  },
  {
    id: "8",
    img: tech_solution,
    title: "Card Production & Personalization",
        description: "Identiko offers secure identity document issuance using advanced cryptographic algorithms for data encryption. We produce high-security multifunctional cards suitable for national ID cards, passports, driver’s licenses, health cards, visas, voter cards, and more",
    bgImg: card2,
  },
  {
    id: "9",
   img: tech_solution,
   title: "Identity Verification Solution",
   description: "A robust identification system relies on integrated ID verification for benefits, health insurance, border control, and more. Identiko offers comprehensive verification solutions, including biometrics and mobile options, ensuring accurate, flexible identity checks in any condition",
    bgImg: card3,
  },
];

const ServiceA = () => {

  return (
    <div id="section-1" className="w-full mt-16">
      <div className="max-w-screen-xl mx-auto text-center items-center justify-center">
      <div className="text-center text-black flex flex-col gap-1">
                    <p className="text-xl md:text-3xl font-bold"> ADVANCED TECHNOLOGY & SECURE SYSTEM </p>
                    <p className="text-sm md:text-xl md:ml-40 md:mr-40 text-center flex justify-center items-center">
                        {" "}
                        We provide advanced biometric and verification solutions to ensure secure and reliable identity management{" "}
                    </p>
                </div>

        <div className="max-w-screen-xl mx-auto py-10 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2%] md:gap-[2%] px-3 md:px-12 place-items-center">
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
              <p className="absolute description text-balance text-base md:text-lg mt-16 mb-12 md:mb-0 font-bold z-10 group-hover:text-white group-hover:translate-y-[-380%]
              md:group-hover:translate-y-[-350%]">
                {" "}
                {service.title}{" "}
              </p>
              <p className="absolute description md:px-8 text-center px-10 text-base md:text-md mt-28 mb-12 md:mb-10 z-10 group-hover:text-white w-fit group-hover:w-full group-hover:translate-y-[-60%] group-hover:text-overflow-ellipsis">
                {service.description}
                {/* <span className="hidden group-hover:inline">{service.description.slice(service.description.indexOf(" ", 50))}</span> */}
              </p>
            </div>
          ))}
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

export default ServiceA;
