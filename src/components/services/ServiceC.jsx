const services = [
    {
        title: "Managed Services & Outsourcing",
        description: "Modern businesses need advanced technology to thrive, but managing data growth, apps, multiclouds, and cyberthreats is challenging. Our Managed Services and Outsourcing provide expert support to handle these tasks, optimizing your IT environment and supporting innovation",
    },
    {
        title: "Smart Customer Experience Solutions",
        description: "Customer expectations are evolving rapidly, pushing organizations to adapt. As consumers go digital-first, we offer advanced AI and contact center analytics to enhance customer experience, identify key touchpoints, and use data analytics for improved business results",
    },
    // {
    //     title: "E-government Services Platform",
    //     description: "",
    // },
    // {
    //     title: "Smart City/Campus Services",
    //     description: "",
    // },
    // {
    //     title: "Smart Customer Experience Solutions",
    //     description: "",
    // },
    // {
    //     title: "Workplace Modernization Solution",
    //     description: "",
    // },
    {
        title: "Prisons/Correctional Facility Management",
        description: "Jail ID uses multi-biometric technologies to verify inmates and visitors, confirming identities during booking, release, transfers, and visits. It integrates with NEC's security management for centralized access control, CCTV, and alarm monitoring",
    },
];

const ServiceC = () => {
    return (
        <div id="section-1" className="w-full mt-[20%] md:mt-[5%]">
            <div className="max-w-screen-xl mx-auto text-center items-center justify-center  px-2 md:px-0">
                <div className="text-center text-black">
                    <p className="text-xl md:text-3xl font-bold"> MANAGED SERVICES AND SMARTCITY SOLUTIONS </p>
                    <p className="text-xs md:text-xl md:ml-40 md:mr-40 text-center flex justify-center items-center">
                        {" "}
                        We offer specialized support to enhance operational efficiency and meet unique organizational needs {" "}
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

export default ServiceC;
