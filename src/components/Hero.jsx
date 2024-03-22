import { useNavigate } from "react-router-dom/dist";
import { home2 } from "../assets";

const Hero = () => {
    const navigate = useNavigate()
    const handleClick = () => {
      if (window.location.pathname !== "/service") {
        navigate("/service");
      }
    };

    return (
        <div>
            <div className="text-center text-white">
                <p className="text-2xl mt-8  font-bold">OUR SERVICES</p>
                <p className="text-sm">Our solutions are all about simplification and optimisation </p>
            </div>

            <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-[6%] pr-12">
                <div className="group cursor-pointer rounded-md relative overflow-hidden  w-[120%] h-[130%] bg-white p-8 grid-cols-1 text-center" >
                    <img
                        className="w-fit h-[50%]  object-cover group-hover:scale-110 duration-500 rounded-md"
                        src={home2}
                        alt='heroImg'
                    />
                    <p className="text-[103%] mt-8 text-[#0F90CA] font-bold">IDENTITY BASED SOLUTIONS </p>
                    <p className="text-sm text-justify mt-2">Our enrolment solutions provide a wide
                        selection of customizable functionality
                        for our clients. From the private sector for
                        employee enrolment to the public sector </p>
                        <p className="text-[#D85012] mt-4">Learn more <span className="font-bold"> {'>'} </span> </p>
                </div>
                <div className="group cursor-pointer rounded-md relative overflow-hidden w-[120%] h-[130%] bg-white p-8 grid-cols-1 text-center" >
                    <img
                        className="w-fit h-[50%]  object-cover group-hover:scale-110 duration-500 rounded-md"
                        src={home2}
                        alt='heroImg'
                    />
                    <p className="text-[103%] mt-8 text-[#0F90CA] font-bold">ENROLMENT OPERATIONS</p>
                    <p className="text-sm text-justify mt-2">Our enrolment solutions provide a wide
                        selection of customizable functionality
                        for our clients. From the private sector for
                        employee enrolment to the public sector </p>
                        <p className="text-[#D85012] mt-4">Learn more <span className="font-bold"> {'>'} </span> </p>
                </div>
                <div className="group cursor-pointer rounded-md relative overflow-hidden  w-[120%] h-[130%] bg-white p-8 grid-cols-1 text-center" >
                    <img
                        className="w-fit h-[50%]  object-cover group-hover:scale-110 duration-500 rounded-md"
                        src={home2}
                        alt='heroImg'
                    />
                    <p className="text-[103%] mt-8 text-[#0F90CA] font-bold">IDENTITY MANG. SOLUTIONS</p>
                    <p className="text-sm text-justify mt-2">Our enrolment solutions provide a wide
                        selection of customizable functionality
                        for our clients. From the private sector for
                        employee enrolment to the public sector </p>
                    <p className="text-[#D85012] mt-4">Learn more <span className="font-bold">{'>'} </span> </p>
                </div>

                <div className="group cursor-pointer rounded-md relative overflow-hidden  w-[120%] h-[130%] bg-white p-8 grid-cols-1 text-center" >
                    <img
                        className="w-fit h-[50%]  object-cover group-hover:scale-110 duration-500 rounded-md"
                        src={home2}
                        alt='heroImg'
                    />
                    <p className="text-[103%] mt-8 text-[#0F90CA] font-bold">SOFTWARE APPLICATION SERVICES</p>
                    <p className="text-sm text-justify mt-2">Our enrolment solutions provide a wide
                        selection of customizable functionality
                        for our clients. From the private sector for
                        employee enrolment to the public sector </p>
                        <p className="text-[#D85012] mt-4">Learn more <span className="font-bold">{'>'} </span> </p>
                </div>                
            </div>
            
            <div className="text-center mt-[8%]">
            <button className="bg-[#0F90CA] border rounded-full w-fit p-3 text-white" onClick={handleClick}>See all services {'⇾'}</button>
            </div>
        </div>
    );
};

export default Hero;
