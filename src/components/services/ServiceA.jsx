
const services = [
    {
        title: "Biometric Solution",
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
        title: "Demographic Data Harmonization",
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
];

const ServiceA = () => {
    return (
        <div id="section-1" className="w-full mt-[10%] md:mt-[5%]">
            <div className="w-full mx-auto text-center items-center justify-center px-4 md:px-0">
                <div className="text-center text-black flex flex-col gap-1">
                    <p className="text-xl md:text-3xl font-bold"> ADVANCED TECHNOLOGY & SECURE SYSTEM </p>
                    <p className="text-sm md:text-xl md:ml-40 md:mr-40 text-center flex justify-center items-center">
                        {" "}
                        We provide advanced biometric and verification solutions to ensure secure and reliable identity management{" "}
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

export default ServiceA;
