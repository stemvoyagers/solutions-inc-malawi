// import {
//   sala1,
//   sala10,
//   sala14,
//   sala15,
//   sala2,
//   sala3,
//   sala7,
//   sala8,
//   sala9,
// } from "../../assets";

// const partners1 = [
//   { logo: sala1, alt: "msImg" },
//   { logo: sala2, alt: "msImg" },
//   { logo: sala3, alt: "n_logo" },
//   { logo: sala7, alt: "n_logo" },
//   { logo: sala8, alt: "n_logo" },
//   { logo: sala9, alt: "n_logo" },
//   { logo: sala10, alt: "msImg" },
//   { logo: sala14, alt: "n_logo" },
//   { logo: sala15, alt: "msImg" },
// ];

// const Partners = () => {
//   return (
//     <div className="mb-12 text-center overflow-hidden pt-28 md:pt-32 lg:pt-40">
//       <div className="flex flex-col items-center justify-center align-middle gap-3 ml-[6%] md:ml-[0%] mr-[4%] md:mr-[0%] mb-20">
//         <div className="mt-2 text-3xl md:text-4xl font-bold text-[#E8B504]">
//           Featured Events and Works
//         </div>
//         <span className="text-xl md:text-2xl text-justify md:w-[55%]">
//           To deliver exceptional results for you, we forge powerful alliances.
//           By collaborating with premier specialists, we enhance our service and
//           product portfolio, ensuring you get innovative, battle-tested
//           solutions that drive growth
//         </span>
//         <div className="w-full mt-8 text-center overflow-hidden relative">
//           <div className="marquee">
//             <div className="marquee-content">
//               {partners1.concat(partners1).map((partner, index) => (
//                 <div
//                   key={index}
//                   className="flex justify-center items-center mx-4 md:mx-6"
//                 >
//                   <img
//                     src={partner.logo}
//                     alt={partner.alt}
//                     className="h-60 lg:h-96 w-auto object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
//           .marquee {
//             display: flex;
//             overflow: hidden;
//             position: relative;
//             width: 100%;
//           }
//           .marquee-content {
//             display: flex;
//             animation: marquee 40s linear infinite;
//             min-width: max-content;
//           }
//           @keyframes marquee {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(calc(-100% / 2));
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Partners;



import {
  sala1,
  sala10,
  sala14,
  sala15,
  sala2,
  sala3,
  sala7,
  sala8,
  sala9,
} from "../../assets";

const partners1 = [
  { logo: sala1, alt: "Event or Partner 1" },
  { logo: sala2, alt: "Event or Partner 2" },
  { logo: sala3, alt: "Event or Partner 3" },
  { logo: sala7, alt: "Event or Partner 4" },
  { logo: sala8, alt: "Event or Partner 5" },
  { logo: sala9, alt: "Event or Partner 6" },
  { logo: sala10, alt: "Event or Partner 7" },
  { logo: sala14, alt: "Event or Partner 8" },
  { logo: sala15, alt: "Event or Partner 9" },
];

const Partners = () => {
  return (
    <div className="mb-16 md:mb-24 text-center overflow-hidden pt-24 md:pt-32 lg:pt-40 relative">
      {/* Subtle background accent */}
      <div 
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          background: 'radial-gradient(circle at top right, #E8B504 0%, transparent 30%), radial-gradient(circle at bottom left, #096E6A 0%, transparent 40%)',
          opacity: 0.03,
        }}
      ></div>

      <div className="flex flex-col items-center justify-center px-4 md:px-6 max-w-4xl mx-auto">
        {/* Gold title with underline */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#E8B504] mb-6 relative">
          Featured Events and Works
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#096E6A] rounded-full"></span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          To deliver exceptional results for you, we forge powerful alliances. By collaborating with premier specialists, we enhance our service and product portfolio, ensuring you get innovative, battle-tested solutions that drive growth.
        </p>
      </div>

      {/* Marquee container */}
      <div className="w-full mt-16 px-4 md:px-8">
        <div className="marquee-container overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-[#096E6A]/10 shadow-lg">
          <div className="marquee">
            <div className="marquee-content">
              {partners1.concat(partners1).map((partner, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center mx-4 md:mx-8 py-8"
                >
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="h-48 md:h-64 lg:h-80 xl:h-96 w-auto object-contain rounded-xl shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .marquee-container {
          position: relative;
        }
        .marquee {
          display: flex;
          width: 100%;
        }
        .marquee-content {
          display: flex;
          animation: marquee 50s linear infinite;
          min-width: max-content;
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;