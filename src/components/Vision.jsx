import { aboutUs } from "../assets"
import { circular } from "../assets"
import Cards from "./Cards"

const Vision = () => {
    return (
        <div className="relative bg-white overflow-x-hidden bg-cover bg-center grid md:py-20 md:px-8 p-8"
        style={{
                backgroundImage: `url(${circular})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-95"></div>
                {/*
            <div className="mt-8 overflow-x-hidden text-white z-10">
                <div className="flex flex-col md:flex-row gap-4 md:gap-12" >
                    <div id="div1" className={` group  md:w-[50%] flex items-center`}>
                        <img className="md:h-fit object-cover relative m-0 p-0 cover rounded-xl" src={aboutUs} alt="img1" />
                    </div>

                <div className = "flex flex-col md:w-[50%] gap-4 md:gap-16 justify-center items-center">
                    <div className={` flex flex-col justify-center text-center text-white'
                            }`} >
                        <p className="text-xl md:text-5xl font-bold">Our Mission</p>
                        <p className="text-sm md:text-2xl mt-2 text-center px-2">To create a service-based company which drives innovation, technology and economic development for our customers while building a growing and sustainable business model that provides value and a sense of pride to everyone.
                        </p>
                    </div>

                    <div className={`overflow-x-hidden  flex flex-col justify-center text-white  z-50 text-center md:mb-0'
                            }`} >
                        <p className="text-xl md:text-5xl font-bold">Our Vision</p>
                        <p className="text-sm md:text-2xl text-center mt-2 px-2">To be a Leading, Competent and Dependable Information Communication and Technology Solutions and Services Provider.
                        </p>
                    </div>

</div>

                </div>
            </div> */}

<Cards />
        </div>
    )
}

export default Vision
