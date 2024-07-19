import { MdCheckCircleOutline } from "react-icons/md"
import { circular } from "../../assets"

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
                    Our Primary Pillars
                </h2>

                <p className="md:w-[40%] text-sm md:text-sm pr-4 md:pr-0">
                    Identiko specializes in identity management technology, verification,
                    and digital identity solutions. Our ICT professionals are experts in
                    biometrics, identity management systems, and system integration.
                    Our enrolment solutions provide a wide
                    selection of customizable functionality
                    for our clients.
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[6%] md:gap-[10%] md:mt-8 transform animate-slide-up">
                    <div className={`bg-[#707070] text-white hover:scale-110 rounded-xl overflow-hidden border shadow-md p-16 md:p-8'
                        }`} >
                        <p className="text-md md:text-xl -mt-2 md:mt-8  font-bold">Quality Solutions</p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Reliability <span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Availability<span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Serviceability<span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mb-16 md:mb-0 mt-2 md:mt-4 flex items-center justify-between">Durability<span><MdCheckCircleOutline /></span></p>
                    </div>

                    <div className={`bg-[#014C98] text-white hover:scale-110 duration-500 rounded-xl overflow-hidden shadow-xl p-12 md:p-8 border'
                        }`} >
                        <p className="text-md md:text-xl -mt-2 md:mt-8  font-bold">Quality Delivery</p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">On-time Delivery <span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Seamless<span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Secure<span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify  mb-16 md:mb-0 mt-2 md:mt-4 flex items-center justify-between">Extensive Support<span><MdCheckCircleOutline /></span></p>
                    </div>

                    <div className={`bg-[#0F90CA]  text-white hover:scale-110 duration-500 rounded-xl overflow-hidden shadow-md p-12 md:p-8 border'
                        }`} >
                        <p className="text-md md:text-xl -mt-2 md:mt-8 font-bold">Quality Results</p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Measurable Results <span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Optimization<span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify mt-2 md:mt-4 flex items-center justify-between">Satisfaction<span><MdCheckCircleOutline /></span></p>
                        <p className="text-xs md:text-sm text-justify  mb-16 md:mb-0 mt-2 md:mt-4 flex items-center justify-between">Innovation<span><MdCheckCircleOutline /></span></p>
                    </div>
                </div>
            </div>
            <style>{`@keyframes slide-up{ from{ transform: translateY(100%); opacity: 0 } to{ transform: translateY(0%); opacity: 1 }} .animate-slide-up {animation: slide-up 2s ease-out;`} </style>
        </div>
    )
}
export default Mission