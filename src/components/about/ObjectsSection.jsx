const ObjectsSection = () => {
  const objects = [
    {
      title: "PROMOTING INNOVATION AND LOCAL SOLUTIONS FOR SOCIAL PROGRESS",
      description:
        "We encourage creativity and innovation to develop and apply practical solutions that address local challenges. This involves building innovations and entrepreneurial, research and experimentation, and scaling up community-driven ideas that contribute to long-term social and economic advancement.",
    },
    {
      title: "ADVANCING SUSTAINABLE PRACTICES IN HEALTH, AGRICULTURE, EDUCATION, AND TECHNOLOGY",
      description:
        "We promote environmentally sustainable and socially responsible practices across multiple sectors to protect natural resources and enhance community well-being. This includes leading in ideation and implementation of climate-smart agriculture solutions, supporting digital transformation in education, and integrating sustainability principles into local health and technology initiatives.",
    },
    {
      title: "EMPOWERING COMMUNITIES THROUGH CAPACITY BUILDING AND SKILLS DEVELOPMENT",
      description:
        "We strengthen community capacity across Malawi by transferring knowledge and developing practical skills for active participation in sustainable development. This includes organizing community training programs, supporting leadership development, and fostering self-reliance through inclusive participation in local initiatives.",
    },
    {
      title: "STRENGTHENING KNOWLEDGE AND INFORMATION MANAGEMENT SYSTEMS",
      description:
        "We enhance evidence-based decision-making by improving data collection, knowledge sharing, and information management systems. This includes developing community data hubs, supporting open access to local information, and building institutional capacity for data-driven planning, monitoring, and accountability.",
    },
    {
      title: "PROVIDING TRAINING FOR LIVELIHOOD IMPROVEMENT AND ECONOMIC EMPOWERMENT",
      description:
        "We deliver targeted training in digital skills, agriculture, crafts, and other income-generating areas to promote self-reliance and job creation. This includes supporting youth and women entrepreneurs, building local training centers, and fostering partnerships that link training outcomes to market opportunities.",
    },
  ];

  return (
    <div className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-[#f8fdfc]">
      <div className="max-w-6xl mx-auto">
       
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#096E6A] mb-4">
           Objectives
          </h1>
          <div className="w-20 h-1 bg-[#E8B504] mx-auto rounded-full"></div>         
        </div>

       
        <div className="space-y-10 md:space-y-14">
          {objects.map((obj, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row items-start gap-6 md:gap-8 p-6 rounded-xl border border-[#096E6A]/20 bg-white hover:shadow-lg transition-shadow duration-300"
            >
           
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#096E6A] flex items-center justify-center">
                <span className="text-white font-bold text-lg">0{idx + 1}</span>
              </div>

          
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#096E6A] mb-3 group-hover:text-[#E8B504] transition-colors">
                  {obj.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ObjectsSection;