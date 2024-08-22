const services = [
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
    {
        title: "Prisons/Correctional Facility Management",
        description: "Jail ID uses multi-biometric technologies to verify inmates and visitors, confirming identities during booking, release, transfers, and visits. It integrates with NEC's security management for centralized access control, CCTV, and alarm monitoring",
    },
];

const ServiceC = () => {
    return (
        <div id="section-1" className="w-full mt-[10%] md:mt-[5%]">
            <div className="w-full mx-auto text-center items-center justify-center  px-4 md:px-0">
                <div className="text-center text-black flex flex-col gap-1">
                    <p className="text-xl md:text-3xl font-bold">URBAN INNOVATION & SURVEILLANCE SOLUTION</p>
                    <p className="text-sm md:text-xl md:ml-40 md:mr-40 text-center flex justify-center items-center">
                        {" "}
                        We offer specialized support to enhance operational efficiency and meet unique organizational needs {" "}
                    </p>
                </div>

                <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-12">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            id={service.id}
                            className="group cursor-pointer border rounded-lg relative flex flex-col overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-64 p-6"
                        >
                            <div className="flex flex-col items-center justify-start h-full space-y-4">
                                <p className="text-lg font-bold text-center text-gray-900">{service.title}</p>
                                <p className="text-sm text-center text-gray-700 px-4">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default ServiceC;
