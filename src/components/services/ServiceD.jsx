const services = [
    // {
    //     title: "Electronic Voting Solution",
    //     description: "",
    // },
    {
        title: "Traffic Management Systems",
        description: "Smart Traffic Management Systems (STMS) expand city capacity without new highways, reducing traffic jams, pollution, and delays. Our STMS integrates traffic cabinets and transportation systems to enhance citywide flow and safety, improving overall quality of life",
    },
    {
        title: "Electronic Surveillance",
        description: "Identiko provides electronic surveillance solutions with GPS tracking, cameras, and microphones. Our systems integrate these components to offer flexible, scalable solutions tailored to diverse project needs",
    },
    {
        title: "IOT and Electronic Sensor",
        description: "We provide IoT solutions for smart cities, using sensors and connected devices to improve traffic management, surveillance, waste disposal, and resource use, offering expert advice for tailored implementation to meet specific needs",
    },
    // {
    //     title: "Monitoring & Management",
    //     description: "",
    // },
];

const ServiceD = () => {
    return (
        <div id="section-1" className="w-full mt-[20%] md:mt-[5%]">
            <div className="max-w-screen-xl mx-auto text-center items-center justify-center px-2 md:px-0">
                <div className="text-center text-black">
                    <p className="text-xl md:text-3xl font-bold"> SURVEILLANCE AND MONITORING SOLUTIONS </p>
                    <p className="text-xs md:text-xl md:ml-40 md:mr-40 text-center flex justify-center items-center">
                    {" "}
                        Our solutions include electronic voting, traffic management, and IoT-enabled systems to maintain safety and control{" "}
                    </p>
                </div>

                <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
  {services.map((service, idx) => (
    <div
      key={idx}
      id={service.id}
      className="group cursor-pointer border rounded-lg relative flex flex-col overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-64 p-6"
    >
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <p className="text-lg font-bold text-center text-gray-900">{service.title}</p>
        <p className="text-sm text-justify text-gray-700 px-4">{service.description}</p>
      </div>
    </div>
  ))}
</div>

            </div>

        </div>
    );
};

export default ServiceD;
