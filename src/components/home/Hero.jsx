const Hero = () => {
  const services = [
    {
      title: "Public & Environmental Health and ICT",
      description:
        "At Solutions Inc., we recognize the trans-formative power of information and communication technologies (ICT) in enhancing public health. Our initiatives in this area are designed to leverage the latest technological advancements to improve health outcomes and promote environmental sustainability.",
    },
    {
      title: "Data & Information Management for Decision Making",
      description:
        "Effective data management is crucial for any organisation aiming to make informed decisions and achieve operational excellence. Solutions Inc. offers comprehensive data and information management services to help organizations harness the power of their data.",
    },
    {
      title: "Smart Agriculture and Value Addition",
      description:
        "Agriculture is the backbone of many communities, and at Solutions Inc., we aim to revolutionize this sector through the integration of smart technologies. Our programs in smart agriculture and value addition are designed to boost productivity, improve sustainability, and increase the economic value of agricultural products.",
    },
    {
      title: "Digital Skills Training",
      description:
        "In today's digital age, ICT skills are essential for personal and professional growth. Solutions Inc. offers comprehensive training programs designed to enhance digital literacy and technical skills. Our ICT courses cover a wide range of topics, including basic computer skills, software development, networking, cybersecurity, and more.",
    },
    {
      title: "Workspace",
      description:
        "Innovation thrives in environments that foster creativity and collaboration. Solutions Inc. provides dedicated workspace for innovators, offering a conducive environment for entrepreneurs, startups, and creative professionals to work, meet, and collaborate. Our workspaces are equipped with modern amenities, including high-speed internet, meeting rooms, and collaborative areas, designed to inspire creativity and facilitate networking.",
    },
    {
      title: "Woodwork and Crafting",
      description:
        "At Solutions Inc., we pride ourselves on offering bespoke woodwork products crafted with precision and care. Our skilled artisans create unique and custom pieces tailored to our customers' specifications, ensuring each product is a work of art that meets the highest standards of quality and craftsmanship. From furniture and home decor to personalized gifts and custom installations, our woodwork products are designed to add elegance and functionality to any space.",
    },
  ];

  return (
    <div
      id="section-1"
      className="w-full pt-[12%] lg:pt-[8%] pb-[6%] px-4 md:px-0 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0c1a1a 0%, #092b28 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, #E8B504 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, #39C2B0 0%, transparent 20%)
          `,
        }}
      ></div>

      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        <p className="text-[#E8B504] text-lg md:text-xl font-medium mb-2"></p>

        <div className="text-[#E8B504] w-[90%] mx-auto font-bold mb-12">
          <p className="text-3xl md:text-4xl lg:text-5xl tracking-wide drop-shadow-[0_0_10px_rgba(232,181,4,0.4)]">
            OUR SERVICES
          </p>
          <div className="w-24 h-1 bg-[#E8B504] mx-auto mt-4 rounded-full opacity-70"></div>
        </div>

        <div className="max-w-screen-xl mx-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-3 md:px-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group cursor-pointer border border-[#096E6A]/30 rounded-xl relative h-full flex flex-col
                        overflow-hidden text-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500
                        bg-gradient-to-b from-[#0d2220] to-[#0a1a18]"
            >
              <div className="absolute inset-0 bg-[#096E6A] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"></div>

              <div className="p-6 md:p-8 flex flex-col h-full justify-between">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#E8B504] group-hover:text-white transition-colors duration-300 text-center">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E8B504] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
