import { contactIde } from "../../assets";

const CTAContact = () => {
    return (
        <div className="bg-no-repeat bg-center bg-cover relative md:py-[12%] w-full z-1"
            style={{
                backgroundImage: `url(${contactIde})`,
                position: 'relative',
            }}
        >

            <div className="text-[#ffffff] max-w-screen-xl mx-auto mt-[20%]  z-10 ">
                <div className="group  z-10 flex flex-col justify-start items-start">
                    <div className="text-[150%] md:text-[300%] md:mb-2 font-bold ">
                        Contact Us  
                    </div>
                    <div className="text-sm md:text-xl w-fit text-start">
                        At Identiko, we value your passion and we have you covered<br />
                        payments and acceptance of digital currencies. We are <br />
                        building one global network to pay anyone, through any  <br />
                        means, in any currency.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTAContact;
