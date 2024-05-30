import { Link } from "react-router-dom";
import { aCareer } from "../../assets";

const CTACareer = () => {
    return (
        <div className="bg-no-repeat bg-cover relative py-[12%] md:py-[6%] w-full z-1 px-4 md:px-0"
            style={{
                backgroundImage: `url(${aCareer})`,
                position: 'relative',
            }}
        >

            <div className="text-white max-w-screen-xl mx-auto mt-28 mb-28 z-10 ">
                <div className="group gap-10 z-10 flex flex-col justify-center items-center text-center">
                    <div className="text-[300%] md:mb-2 font-bold ">
                        Career 
                    </div>
                    <div className="hidden md:block text-sm md:text-xl w-fit text-center">
                        Zone is a regulated Blockchain network that enables<br />
                        payments and acceptance of digital currencies. We are <br />
                        building one global network to pay anyone, through any  <br />
                        means, in any currency.
                    </div>
                </div>
                <Link to="#section-1">
                    <div className="absolute bottom-0 left-0 right-0 mx-auto flex justify-center
                 items-center md:mb-20 text-white font-bold  rounded-full">
                        <p className="bg-[#003997] rounded-full p-4 animate-bounce">↡</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CTACareer;
