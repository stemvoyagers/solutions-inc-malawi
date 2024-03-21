import { robot } from "../assets";

const CTAAbout = () => {
    return (
        <div className="bg-[#001049] pt-[4%] pb-[4%]">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between h-fit gap-x-20">
                <div className="font-semibold text-[200%] md:text-md mb-2 text-white" >
                Lorem ipsum dolor sit <br/> amet consectetur. <br/>Vulputate eget fames sit <br/> sed justo sagittis. Velit.
                </div>

                <div>
                    <img className="h-52 md:h-[50%] left-0 border rounded-lg border:bg-black" src={robot} alt="img1" />
                </div>
            </div>
        </div>
    );
};

export default CTAAbout;
