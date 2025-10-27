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

const Hero = () => {
  return (
    <div
      id="section-1"
      className="w-full pt-[16%] lg:pt-[10%] pb-[6%] px-4 md:px-0 bg-black"
    >
      <div className="max-w-screen-xl mx-auto text-center items-center justify-center">
        <div className="text-center text-[#E8B504] w-[90%] mx-auto font-bold">
          <p className="text-2xl md:text-3xl mb-1"> OUR SERVICES </p>
        </div>

        <div className="max-w-screen-xl mx-auto  py-10 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[2%] md:gap-[4%] px-3 md:px-12 place-items-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              id={service.id}
              className="w-[100%] group cursor-pointer bg-black  border rounded-md relative h-[100%] flex flex-col items-center
                        overflow-hidden text-[#ffffff]  shadow-md hover:shadow-3xl hover:scale-105 transition-all duration-300
                        grid-cols-1
                        text-center pb-20 pt-20"
            >
              <p
                className="description text-2xl md:text-2xl z-10 text-[#E8B504] font-bold mb-4 md:mb-6
             "
              >
                {" "}
                {service.title}{" "}
              </p>
              <p className="description md:px-8 text-justify px-10 text-lg md:text-xl mt-8 mb-8 md:mb-8 z-10  w-fit group-hover:w-full  ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
