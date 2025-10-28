import { FaLightbulb, FaHandsHelping, FaChartLine } from "react-icons/fa";

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
          background: "linear-gradient(135deg, #f0f9f8 0%, #e8f4f2 100%)",
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
                borderLeft: "4px solid transparent",
                borderTop: "4px solid #E8B504",
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
