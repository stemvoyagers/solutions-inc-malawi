import { aboutUs } from "../assets"
import { circular } from "../assets"

const Vision = () => {
    return (
        <div className="relative bg-white pb-[8%] pt-[4%] overflow-x-hidden bg-cover bg-center grid p-20"
        style={{
                backgroundImage: `url(${circular})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-95"></div>
            <div className="mt-8 overflow-x-hidden text-white z-50">
                <div className="flex flex-col md:flex-row  gap-12" >
                    <div id="div1" className={` group  md:w-[50%]`}>
                        <img className="md:h-fit object-cover relative m-0 p-0 cover rounded-xl" src={aboutUs} alt="img1" />
                    </div>

                <div className = "flex flex-col md:w-[50%] gap-4 justify-center items-center">
                    <div className={` flex flex-col justify-center text-center text-white'
                            }`} >
                        <p className="text-xl md:text-2xl font-bold">Our Mission</p>
                        <p className="text-xs md:text-xl text-justify mt-2">From the private sector for
                            employee enrolment to the public sector Our enrolment solutions provide a wide
                            selection of customizable functionality for our clients. From the private sector for
                            employee enrolment to the public sector
                        </p>
                    </div>

                    <div className={`overflow-x-hidden  flex flex-col justify-center text-white  z-50 text-center mb-16 md:mb-0'
                            }`} >
                        <p className="text-xl md:text-2xl font-bold">Our Vision</p>
                        <p className="text-xs md:text-xl text-justify mt-2">Our enrolment solutions provide a wide
                            Our enrolment solutions provide a wide
                            selection of customizable functionality for our clients. From the private sector for
                            employee enrolment to the public sector
                        </p>
                    </div>

</div>

                </div>
            </div>

           
        </div>
    )
}

export default Vision