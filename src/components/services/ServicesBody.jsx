import { useState } from "react";
import {
  no1,
  no10,
  no11,
  no12,
  no3,
  no2,
  no4,
  no5,
  no6,
  no7,
  no8,
  no9, card1, card2, card3, card4,
} from "../../assets";

const servicesData = [
  {
    no: 1,
    image: no1,
    bgImg: card2,
    title: "Identity Based Solution",
    description:
      "Our solutions are all about simpl Our solutions are all about",
    details:
      "Our solutions are all about simplification imitation Our solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitation",
  },
  {
    no: 2,
    image: no2,
    bgImg: card1,
    title: "Software Application services",
    description:
      "Our solutions are all about simpl Our solutions are all about",
    details:
      "Our solutions are all about simplification imitation Our solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitation",
  },
  {
    no: 3,
    image: no3,
    title: "Demographic Data Harmonized",
    description:
      " Our solutions are all about simpl Our solutions are all about",
    details:
      "Our solutions are all about simplification imitation Our solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitation",
  },
  {
    no: 4,
    image: no4,
    bgImg: card3,
    title: "ABIS (Civil & Criminal) Solution",
    description:
      "Our solutions are all about simpl Our solutions are all about",
    details:
      "Our solutions are all about simplification imitation Our solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitation",
  },
  {
    no: 5,
    image: no5,
    bgImg: card4,
    title: "Foundational Civil Registration",
    description: "Our solutions are all about sweetness and delight",
    details:
      "Our solutions are all about simplification imitation Our solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitation",
  },
  {
    no: 6,
    image: no6,
    bgImg: card2,
    title: "Card Production & Personalization",
    description: "Our solutions are all about innovation and excellence",
    details:
      "Our solutions are all about simplification imitation Our solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitation",
  },

  {
    no: 7,
    image: no7,
    bgImg: card1,
    title: "Identity Verification Solution",
    description: "Our solutions are all about simplification and optimization",
    details:
      "Our solutions are all about simplification imitation Our solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitation",
  },
  {
    no: 8,
    image: no8,
    bgImg: card4,
    title: "Mobile verification services",
    description: "Our solutions are all about sweetness and delight",
    details:
      "Our solutions are all about simplification imitation Our solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitation",
  },
  {
    no: 9,
    bgImg: card2,
    image: no9,
    title: "Electronic Voting Solution",
    description: "Our solutions are all about innovation and excellence",
    details:
      "Our solutions are all about simplification imitation Our solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitation",
  },
  {
    no: 10,
    bgImg: card3,
    image: no10,
    title: "Traffic Management Systems",
    description: "Our solutions are all about simplification and optimization",
    details:
      "Our solutions are all about simplification imitation Our solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitation",
  },
  {
    no: 11,
    image: no11,
    bgImg: card2,
    title: "Electronic Surveilance",
    description: "Our solutions are all about sweetness and delight",
    details:
      "Our solutions are all about simplification imitation Our solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitation",
  },
  {
    no: 12,
    image: no12,
    bgImg: card1,
    title: "IOT and electronic sensor",
    description: "Our solutions are all about innovation and excellence",
    details:
      "Our solutions are all about simplification imitation Our solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitationOur solutions are all about simplification imitation",
  },
  
];

const ServicesBody = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [numServices, setNumServices] = useState(12);

  const handleShowMore = () => {
    setNumServices(servicesData.length);
  };

  const handleShowLess = () => {
    setNumServices(12);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div id="section-1" className="w-full px-4 md:px-8 lg:px-12 xl:px-16 mb-2">
      <div className="max-w-screen-xl mx-auto text-center mt-12 items-center justify-center">
        <div className="text-center text-black">
          <p className="text-md md:text-3xl mt-20  font-bold">OUR SERVICES</p>
          <p className="text-xs md:text-sm">
            Our solutions are all about simplification and optimisation{" "}
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-10 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center justify-center">
          {servicesData.slice(0, numServices).map((service, idx) => (
            <div
              key={idx}
              id={`div${idx + 1}`}
              className={`group cursor-pointer border rounded-md relative hover:scale-110 flex flex-col items-center 
                        overflow-hidden bg-[#ffffff] shadow-md hover:shadow-xl p-8 grid-cols-1 
                        text-center duration-500`}
            >
              <div className={`card-bg absolute bg-cover bg-center bg-no-repeat inset-0 transition-opacity duration-500 ${service.id}`}
                style={{ backgroundImage: `url(${service.bgImg})` }}>
              </div>
              <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500"></div>

              <img src={service.image} className="w-20 z-10 group-hover:filter group-hover:invert group-hover:brightness-0" alt={service.title} />
              <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 font-bold z-10 group-hover:text-white"> {service.title} </p>
              <p className="text-sm md:text-md md:mt-8 mb-12 md:mb-0 z-10 group-hover:text-white"> {service.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="flex justify-center items-center">
            {numServices === 12 ? (
              <button
                onClick={handleShowMore}
                className="text-[#003997]  border hover:text-white rounded-full w-fit p-3 bg-[#ffffff] hover:bg-[#003997]"
              >
                Show More
              </button>
            ) : (
              <button
                onClick={handleShowLess}
                className="bg-[#ffffff] text-[#003997] border hover:bg-[#003997] rounded-full w-fit p-3 hover:text-white"
              >
                Show Less
              </button>
            )}
          </div>
        </div>

        {showModal && selectedService && (
          <div className="fixed top-10 left-0 right-0 md:w-full text-white mx-auto bg-[#003997] bg-opacity-95 z-50 flex items-center justify-center">
            <div className="p-8 rounded-md shadow-md grid grid-cols-1">
              <h2 className="text-xl font-bold mb-4 text-center">
                {selectedService.title}
              </h2>
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-48 mx-auto mb-4"
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
      </div>


      <style>
        {`
        .group:hover img{
          opacity: 0;
        }
         .group:hover .title{
          transform: translateY(-100%)
          transition: transform 0.5s ease-in-out
        }
          .group:hover .description{
          transform: translateY(-100%)
          transition: transform 0.5s ease-in-out
        }
          .group:hover .details{
          transform: translateY(-100%)
          transition: transform 0.5s ease-in-out
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
        `}
      </style>


    </div>
  );
};

export default ServicesBody;
