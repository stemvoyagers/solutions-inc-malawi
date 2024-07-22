
const services = [
    {
        title: "Biometric Solutions",
        description:
            "Biometric identification has evolved beyond security to mainstream applications, offering reliable, convenient recognition through physiological or behavioral traits. Driven by technological advances and growing security needs, Identiko provides innovative biometric solutions across various industries for identity management and authentication",
    },
    {
        title: "Identity-Based Solution",
        description:
            "A strong identification system requires robust ID verification for benefits administration, health insurance, border control, online authentication, voter and driving license checks, and social security entitlement. Each case demands precise validation of the document holder’s identity",
    },
    {
        title: "State National ID & Civic Registration",
        description:
            "Security is a priority for governments, and unique identity verification is crucial to prevent identity theft and ensure fair resource allocation. Our solution offers customizable systems—enrolment, data cleansing, deduplication, and databases—to support effective civil registration and societal security",
    },
    {
        title: "Enrolment Services",
        description: "Our enrollment solutions offer customizable features for private and public sectors. Mobile, fixed, and online options include all necessary hardware, software, and services to ensure smooth enrollment, accurate data capture, and minimal delays",
    },
    {
        title: "Demographic Data Harmonized",
        description: "We address unorganized, duplicated, and fragmented identity data affecting sectors and governments. Our innovative solutions integrate multiple databases into a single, adaptable identity database, eliminating duplicates and meeting diverse functional requirements",
    },
    {
        title: "ABIS (Civil & Criminal) Solution",
        description: "An Automated Biometric Identification System (ABIS) ensures unique identity and prevents fraud for citizens, employees, voters, and more. A well-functioning ABIS is crucial for identity verification projects and integrates with other systems relying on verified identities",
    },
    {
        title: "Foundational Civil Registration",
        description: "A reliable, centralized citizens' register is essential for modern societies, aiding efficient services and equal development. It serves as the main source for citizen identification, containing basic details, civil status, family connections, and service eligibility",
    },
    {
        title: "Card Production & Personalization",
        description: "Identiko offers secure identity document issuance using advanced cryptographic algorithms for data encryption. We produce high-security multifunctional cards suitable for national ID cards, passports, driver’s licenses, health cards, visas, voter cards, and more",
    },
    {
        title: "Identity Verification Solution",
        description: "A robust identification system relies on integrated ID verification for benefits, health insurance, border control, and more. Identiko offers comprehensive verification solutions, including biometrics and mobile options, ensuring accurate, flexible identity checks in any condition",
    },
    // {
    //     title: "Mobile Verification Services",
    //     description: "",
    // },
    // {
    //     title: "E-passport Solutions",
    //     description: "",
    // },
    // {
    //     title: "Drivers License Services",
    //     description: "",
    // },
    // {se
    //     title: "Border Control Services",
    //     description: "",
    // },
    // {
    //     title: "Criminal Database Services",
    //     description: "",
    // },
    // {
    //     title: "Security & Access Control",
    //     description: "",
    // },
];

const ServiceA = () => {
    return (
        <div id="section-1" className="w-full mt-[20%] md:mt-[5%]">
            <div className="max-w-screen-xl mx-auto text-center items-center justify-center px-2 md:px-0">
                <div className="text-center text-black">
                    <p className="text-xl md:text-3xl font-bold"> IDENTITY AND SECURITY SOLUTIONS </p>
                    <p className="text-xs md:text-xl md:ml-40 md:mr-40 text-center flex justify-center items-center">
                        {" "}
                        We provide advanced biometric and verification solutions to ensure secure and reliable identity management{" "}
                    </p>
                </div>

                <div className="max-w-screen-xl mx-auto md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-[2%]  md:pl-12 md:pr-12">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            id={service.id}
                            className="group cursor-pointer border rounded-md relative flex flex-col 
                        overflow-hidden bg-[#ffffff] shadow-md hover:shadow-xl 
                        text-center duration-500 h-56 p-4"
                        >
                            <p className="absolute description text-balance text-sm md:text-md mb-12 md:mb-0 font-bold z-10">
                                {" "}
                                {service.title}{" "}
                            </p>
                            <p className="absolute description mt-4 left-0 right-0 text-justify pl-6 pr-6 text-sm md:text-md mb-12 md:mb-10 z-10  w-fit">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceA;
