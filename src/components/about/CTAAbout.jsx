import { robot } from "../../assets";

const CTAAbout = () => {
    return (
        <div className="bg-[#001049] pt-[4%] pb-[4%] w-full">

            <div className="max-w-screen-xl mx-auto mt-4 md:mt-0 mb-4 md:mb-0 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-x-20 px-4 md:px-0">
                <div className="font-semibold text-[100%] md:text-[200%] mb-2 text-white z-10 text-center md:text-left" >
                    Lorem ipsum dolor sit <br /> amet consectetur. <br />Vulputate eget fames sit <br /> sed justo sagittis. Velit.
                </div>

                <div>
                    <img className="h-52 md:h-64 border rounded-lg border:bg-black" src={robot} alt="img1" />
                </div>
            </div>
        </div>
    );
};

export default CTAAbout;
