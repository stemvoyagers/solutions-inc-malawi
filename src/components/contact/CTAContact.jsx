import { Link } from "react-router-dom";
import { editedContact } from "../../assets";

const CTAContact = () => {
    return (
        <div className="bg-no-repeat bg-center bg-cover relative py-[1%] md:py-[4%] w-full z-1"
            style={{
                backgroundImage: `url(${editedContact})`,
                position: 'relative',
            }}
        >        

            <div className="text-white max-w-screen-xl mx-auto mt-28 mb-28 z-10 ">
                <div className="group gap-10 z-10 flex flex-col justify-center items-center text-center">
                    <div className="text-[300%] md:mb-2 mt-40 font-bold ">
                        Contact Us  
                    </div>
                    <Link to="#section-1">
                    <div className="absolute bottom-0 left-0 right-0 mx-auto flex justify-center
                 items-center mb-20 text-white font-bold  rounded-full">
                        <p className="bg-[#003997] rounded-full p-4 animate-bounce">↡</p>
                    </div>
                </Link>
                   
                </div>

            </div>
        </div>
    );
};

export default CTAContact;
