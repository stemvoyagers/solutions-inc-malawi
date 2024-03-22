import { face } from "../assets";

const CTAContact = () => {
    return (
        <div className="bg-black pt-[4%] pb-[4%]">
            <div className="flex items-center justify-between h-fit gap-x-20">
                <div className="font-semibold text-3xl md:text-md mb-2 text-white" >
                    CONTACT US
                </div>

                <div>
                    <img className="h-52 md:h-[50%] left-0 border rounded-lg border:bg-black" src={face} alt="img1" />
                </div>
            </div>
        </div>
    );
};

export default CTAContact;
