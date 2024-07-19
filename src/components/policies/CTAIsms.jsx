import { bg } from "../../assets";

const CTAIsms = () => {
    return (
        <div className="bg-repeat bg-center relative pb-[4%] pt-[4%] w-full z-1"
            style={{
                backgroundImage: `url(${bg})`,
                position: 'relative',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-80"></div>


            <div className="max-w-screen-xl mx-auto mt-4 md:mt-0 mb-4 md:mb-0 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-x-20 px-4 md:px-0">
                <div className="font-semibold text-[150%] md:text-[200%] md:text-md mb-2 text-white z-10 text-center md:text-left" >
                    INTEGRATED MANAGEMENT <br /> <span>SYSTEM POLICY- (ISMS/PIMS)</span>
                </div>

                {/* <div className="hidden md:block z-10">
                    <img className="h-52 md:h-64 rounded-lg" src={face} alt="img1" />
                </div> */}
            </div>
        </div>
    );
};

export default CTAIsms;
