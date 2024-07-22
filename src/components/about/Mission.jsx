import { circular } from "../../assets"

const services = [
    {
        title: "Growth",
        description: "We never stop learning, encouraging wisdom and excitement at work to help us grow and enjoy every moment",
    },
    {
        title: "Respect",
        description: "We treat everyone with respect and honor, regardless of position or background, and are committed to social responsibility",
    },
    {
        title: "Innovation",
        description: "We focus on exceptional quality and constantly strive to improve, ensuring better products and services every time",
    },
    {
        title: "Teamwork",
        description: "We build a collaborative, trustworthy, and respectful workplace, fostering synergy through teamwork",
    },
    {
        title: "Service",
        description: "We are dedicated to providing quality experiences for our clients, nurturing relationships to contribute to their success",
    },
    {
        title: "Integrity",
        description: "We adhere to the highest ethical standards, ensuring honesty and transparency in all our actions",
    },
];


const Mission = () => {

    return (
        <div className="relative bg-white pb-[8%] pt-[4%] overflow-x-hidden bg-cover bg-center"
            style={{
                backgroundImage: `url(${circular})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-95"></div>

            <div className="relative max-w-screen-xl mx-auto mt-4 md:mt-0 px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center items-center gap-y-10 text-center z-50">

                <h2 className="font-semibold text-xl md:text-3xl md:mb-2 mt-0">
                    Our Core Values
                </h2>


                <div className="w-full mx-auto py-10 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[2%] md:pl-12 md:pr-12">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            id={service.id}
                            className="group cursor-pointer border rounded-md relative flex flex-col
                        overflow-hidden bg-[#014c98] text-[#ffffff] shadow-md hover:shadow-xl
                        text-center justify-center duration-500 h-48 p-4"
                        >
                            <p className="absolute description top-5 md:top-10 text-balance text-sm md:text-md mb-12 md:mb-0 font-bold z-10">
                                {" "}
                                {service.title}{" "}
                            </p>
                            <p className="absolute description mt-16 left-0 right-0 text-justify pl-6 pr-6 text-sm md:text-md mb-12 md:mb-10 z-10  w-fit">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`@keyframes slide-up{ from{ transform: translateY(100%); opacity: 0 } to{ transform: translateY(0%); opacity: 1 }} .animate-slide-up {animation: slide-up 2s ease-out;`} </style>
        </div>
    )
}
export default Mission
