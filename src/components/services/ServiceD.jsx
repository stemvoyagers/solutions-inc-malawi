const services = [
];

const ServiceD = () => {
    return (
        <div id="section-1" className="w-full mt-[20%] md:mt-[5%]">
            <div className="max-w-screen-xl mx-auto text-center items-center justify-center px-2 md:px-0">
                <div className="text-center text-black">
                    <p className="text-xl md:text-3xl font-bold"> SURVEILLANCE AND MONITORING SOLUTION </p>
                    <p className="text-xs md:text-xl md:ml-40 md:mr-40 text-center flex justify-center items-center">
                    {" "}
                        Our solutions include electronic voting, traffic management, and IoT-enabled systems to maintain safety and control{" "}
                    </p>
                </div>

                <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-12">
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
