import { Link } from "react-router-dom";
import { LandingVid, circular } from "../../assets";

const AboutHome = () => {

    return (

        <div className="relative w-full mx-auto h-fit pt-[6%] pb-[6%] flex flex-col md:flex-row justify-center items-center mt-20 mb-20  bg-cover bg-center"
            style={{
                backgroundImage: `url(${circular})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-95"></div>
            <div className={` relative md:w-1/2  ml-[4%]`}>
                <video src={LandingVid} autoPlay loop muted className="bg-no-repeat bg-center shadow-xl h-full md:h-auto bg:cover bg:center min-w-full min-h-full relative m-0 p-0" />
            </div>
            <div className={`md:w-1/2 bg-white text-black gap-10 ml-6 mr-[4%] p-6 items-center z-50`}>
                <h2 className="font-semibold text-sm md:text-4xl md:mb-4">
                    Who We Are
                </h2>
                <p>
                    <p className="text-balance transform animate-slide-up">Identiko leads in Identity management innovation, with a dedicated team experienced in Identity Management Systems, Biometrics, ICT Consultancy, and System Integration. We provide secure identification solutions for private and public sectors, partnering with top technology firms to deliver reliable services. Our expertise spans over two decades, serving industries like banking, security, FMCGs, construction, and telecommunications.
                    </p><br /><br />
                    <Link to='/about-us'>

                        <button className="w-fit hover:text-[#003a97b3] text-[#003997]">Read More  {'⇾'}</button>
                    </Link>
                </p>
            </div>
            <style>{`@keyframes slide-up{ from{ transform: translateY(100%); opacity: 0 } to{ transform: translateY(0%); opacity: 1 }} .animate-slide-up {animation: slide-up 2s ease-out;`} </style>
        </div>
    );
};

export default AboutHome;
