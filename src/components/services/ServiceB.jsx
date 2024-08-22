
const services = [

  {
    title: "Software Development",
    description: "In a rapidly changing digital environment, off-the-shelf software often falls short. Our custom solutions address your unique challenges, streamlining operations and driving innovation with scalable, high-quality software that ensures seamless integration and long-term success",
  },
  {
    title: "Cloud Solution",
    description: "Modernize, migrate, manage, and optimize cloud infrastructure with multi-cloud strategies, automation, and top security practices. We guide you through your cloud journey, from migration to management, enhancing growth and value across your enterprise",
  },
  {
    title: "Cyber Security Solution",
    description: "The evolving cyber threat landscape poses risks that many companies can’t manage in-house. Our custom cybersecurity solutions protect your technology and data, ensuring business continuity and safeguarding against costly breaches and reputational damage with expert, tailored defense strategies",
  },
  {
    title: "Data Analytics",
    description: "Data is growing rapidly, and businesses must quickly derive insights from it. Our cost-effective Business Intelligence (BI) and Analytics services offer a solid foundation for actionable insights, enabling faster, informed decision-making and efficient data management",
  },
  {
    title: "Migrations & System Integration",
    description: "Enterprises often face information silos from various technology solutions. Identiko Solutions connects disparate systems, enabling seamless collaboration across teams without disrupting existing systems. Our integration services enhance delivery speed, reporting, and automation for efficient data synchronization and process management",
  },
  {
    title: "Workplace Modernization Solution",
    description: "Transforming the workplace requires a holistic strategy integrating technology, operations, culture, and employee experience. We provide cost-efficient, secure platforms that enhance mobility, productivity, collaboration, and security, empowering workers in a digitally advanced, automated environment",
  },
  {
    title: "Advanced Infrastructure Solution",
    description: "Today’s IT environments are complex, requiring interconnected systems that deliver secure, scalable, and resilient infrastructure. We design and implement effective IT solutions that meet real-world demands, expertly pairing top technologies to fit each client’s needs",
  },
  {
    title: "Network Modernization Solution",
    description: "Aging networks pose challenges like higher failure rates and compromised security, limiting responsiveness and business opportunities. Network modernization is crucial for digital transformation, as IT leaders seek agile, software-driven solutions to meet evolving demands and enhance network agility",
  },
  {
    title: "Managed Service & Outsourcing",
    description: "Modern businesses need advanced technology to thrive, but managing data growth, apps, multiclouds, and cyberthreats is challenging. Our Managed Services and Outsourcing provide expert support to handle these tasks, optimizing your IT environment and supporting innovation",
  },
  {
    title: "Smart Customer Experience Solutions",
    description: "Customer expectations are evolving rapidly, pushing organizations to adapt. As consumers go digital-first, we offer advanced AI and contact center analytics to enhance customer experience, identify key touchpoints, and use data analytics for improved business results",
  },
];

const ServiceB = () => {
  return (
    <div id="section-1" className="w-full mt-[10%] md:mt-[5%]">
      <div className="w-full mx-auto text-center items-center justify-center px-4 md:px-0">
        <div className="text-center text-black flex flex-col gap-1">
          <p className="text-xl md:text-3xl font-bold"> SOFTWARE & IT SOLUTION </p>
          <p className="text-sm md:text-xl md:ml-40 md:mr-40 text-center flex justify-center items-center">
            {" "}
            From development to integration, we deliver robust solutions tailored to your business needs{" "}
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

export default ServiceB;
