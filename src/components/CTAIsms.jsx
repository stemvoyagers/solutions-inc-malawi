import { face } from "../assets";

const CTAIsms = () => {
    return (
        <div className="bg-black pt-[4%] pb-[4%]">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between h-fit gap-x-20">
                <div className="font-semibold text-[200%] md:text-md mb-2 text-white" >
                    INTEGRATED MANAGEMENT <br/> <span>SYSTEM POLICY- (ISMS/PIMS)</span>
                </div>

                <div>
                    <img className="h-52 md:h-[50%] left-0 border rounded-lg border:bg-black" src={face} alt="img1" />
                </div>
            </div>
        </div>
    );
};

export default CTAIsms;
