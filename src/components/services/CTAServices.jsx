
import { off2 } from "../../assets";

const CTAServices = () => {
    return (
        <div className="bg-repeat bg-center relative py-4 md:py-0 w-full z-1 px-4 md:px-0"
            style={{
                backgroundImage: `url(${off2})`,
                position: 'relative',
            }}
        >          
            <div className="text-white max-w-screen-xl mx-auto mt-20 mb-20 z-10 ">
                <div className="group gap-10 z-10 flex flex-col justify-center items-center text-center">
                    <div className="font-semibold text-[150%] md:text-[300%] md:mb-2 ">
                        Secure Your Future <br />
                        With Advanced Biometrics Solution
                    </div> 
                    <div className="text-sm md:text-xl w-fit text-center">
                        Zone is a regulated Blockchain network that enables<br/> 
                        payments and acceptance of digital currencies. We are <br/>
                        building one global network to pay anyone, through any  <br/>
                        means, in any currency.
                    </div>                   
                </div>
            </div>
        </div>
    );
};

export default CTAServices;


  {/* <div className="absolute inset-0 bg-[#ffffff] opacity-0"></div> */}
