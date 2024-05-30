import { cisco, hp, idemia, lenovo, microsoft, neuro, veritas, vmware } from "../../assets"

const Partners = () => {
    return (
        <div className="mb-12 mt-20 text-center">
         <div className="relative">
                    <div className="absolute w-full border-b-2 bg-[#003997]  rounded-full mb-4" style={{ top: "51%" }}></div>
                </div>
            <div className="flex flex-col items-center justify-center align-middle gap-2 ml-[6%] md:ml-[0%] mr-[4%] md:mr-[0%]">
                <div className="font-bold text-xl md:text-3xl mt-12">Our Partners</div>
                <span className="text-sm md:text-md">We bring together a team of 1st class world partners to
                    provide our clients with top grade services in all aspects 
                    of our solutions</span>
                <div className="grid grid-cols-3 md:grid-cols-4 ml-[8%] md:ml-[0%] mr-[4%] md:mr-[0%] gap-2 mt-4 text-center items-center justify-center">
                    <img src={veritas} alt="msImg" className="w-[50%] md:w-[100%]"/>
                    <img src={microsoft} alt="msImg" className="w-[50%] md:w-[100%]"/>
                    <img src={cisco} alt="nigImg" className="w-[50%] md:w-[100%]"/>
                    <img src={vmware} alt="msImg" className="w-[50%] md:w-[100%]"/>
                    <img src={lenovo} alt="msImg" className="w-[50%] md:w-[100%]"/>
                    <img src={idemia} alt="nigImg" className="w-[50%] md:w-[100%]"/>
                    <img src={hp} alt="msImg" className="w-[50%] md:w-[60%] h-[50%] md:h-[80%]"/>
                    <img src={neuro} alt="msImg" className="w-[50%] md:w-[100%]" />                   
                </div>
            </div>
        </div>
    )
}

export default Partners
