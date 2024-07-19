
import { circular, bg } from "../../assets";

const CTAService = () => {
    return (
        <div className="bg-repeat bg-center relative py-4 md:py-0 w-full z-1 px-4 md:px-0"
            style={{
                backgroundImage: `url(${bg})`,
                position: 'relative',
            }}
        >

            <div className="absolute inset-0 bg-[#003997] opacity-95"></div>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-20 mt-10 mb-10 z-10 justify-between items-center">
                <div className="group text-white gap-10 z-10">
                    <h2 className="font-semibold text-[200%] md:text-[300%] mb-2 text-white ">
                        Mobile Application <br />
                        Services
                    </h2> <br /> <br />
                    <p className="text-sm md:text-xl">
                        Zone is a regulated Blockchain network that enables payments and acceptance of
                        digital currencies. We are building one global network to pay anyone, through
                        any means, in any currency..
                    </p>
                    
                </div>

                <div className="group z-10">
                    <img className="h-52 md:h-96 w-full" src={circular} alt="img1" />
                </div>
            </div>
        </div>
    );
};

export default CTAService;
