// const services = [
//   {
//     title: "Innovation",
//     description:
//       "Constantly seeking and implementing new ideas and technologies to solve social challenges",
//   },
//   {
//     title: "Impact",
//     description:
//       "Ensuring that every initiative and product contributes positively to society",
//   },
//   {
//     title: "Empowerment",
//     description:
//       "Equipping individuals and communities with the tools and knowledge to improve their lives",
//   },
// ];

// const Mission = () => {
//   return (
//     <div className="relative bg-white pb-[6%] pt-[6%] overflow-x-hidden bg-cover bg-center">
//       <div className="absolute top-0 left-0 w-full h-full bg-white opacity-95"></div>
//       <>
//         <div className="relative max-w-screen-xl mx-auto mt-4 md:mt-0 px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center items-center gap-y-10 text-center z-10">
//           <h2 className="font-semibold text-3xl md:text-4xl md:mb-2 mt-16 md:mt-2 text-[#E8B504]">
//             {" "}
//             Our Core Values{" "}
//           </h2>
//           <div className="flex flex-col w-96 md:w-full md:grid md:grid-cols-6 gap-4 justify-items-center">
//             <div className="col-span-2 border rounded-lg p-20 overflow-hidden bg-[#D45862] text-white shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-2">{services[0].title}</h3>
//               <p className="text-xl">{services[0].description}</p>
//             </div>
//             <div className="col-span-2 border rounded-lg p-20 overflow-hidden bg-[#39C2B0] text-white shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-2">{services[1].title}</h3>
//               <p className="text-xl">{services[1].description}</p>
//             </div>
//             <div className="col-span-2 border rounded-lg p-20 overflow-hidden bg-[#47BDD9] text-white shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-2">{services[2].title}</h3>
//               <p className="text-xl">{services[2].description}</p>
//             </div>
//           </div>
//         </div>
//       </>
//       <style>{`@keyframes slide-up { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0%); opacity: 1; } } .animate-slide-up { animation: slide-up 2s ease-out; }`}</style>
//     </div>
//   );
// };

// export default Mission;


import { FaLightbulb, FaHandsHelping, FaChartLine } from 'react-icons/fa';

const Mission = () => {
  const values = [
    {
      icon: <FaLightbulb className="text-4xl md:text-5xl" />,
      title: "Innovation",
      description:
        "Constantly seeking and implementing new ideas and technologies to solve social challenges",
    },
    {
      icon: <FaHandsHelping className="text-4xl md:text-5xl" />,
      title: "Empowerment",
      description:
         "Equipping individuals and communities with the tools and knowledge to improve their lives",
    },
    {
      icon: <FaChartLine className="text-4xl md:text-5xl" />,
      title: "Impact",
      description:
         "Ensuring that every initiative and product contributes positively to society",
    },
  ];

  return (
    <div className="relative py-20 md:py-28 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #f0f9f8 0%, #e8f4f2 100%)',
        }}
      ></div>

      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16 z-10">
     
        <div className="text-center mb-4">
          <p className="text-[#096E6A] font-medium text-lg md:text-xl">
            Upscaling Farmers Through our Ever Vibrant Zeal
          </p>
        </div>

        <h2 className="font-bold text-3xl md:text-4xl text-[#096E6A] mb-16 text-center">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-white border border-[#096E6A]/10 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              style={{
                borderLeft: '4px solid transparent',
                borderTop: '4px solid #E8B504',
              }}
            >
              <div className="mb-6 text-[#096E6A] group-hover:text-[#E8B504] transition-colors duration-300">
                {value.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#096E6A] mb-4">
                {value.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;