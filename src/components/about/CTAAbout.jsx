import { recognition, circular } from "../../assets";

const CTAAbout = () => {
    return (
        <div id = "section-1" className="relative bg-white pt-[4%] pb-[4%] w-full  bg-cover bg-center" 
        style={{
            backgroundImage: `url(${circular})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
           <div className="absolute top-0 left-0 w-full h-full bg-white opacity-90"></div>       

            <div className="relative max-w-screen-xl mx-auto mt-4 md:mt-0 mb-4 md:mb-0 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-x-20 px-4 md:px-0 font-bold z-50">
                <div className="flex justify-evenly md:w-[40%] font-semibold text-[100%] md:text-[200%] mb-2 text-black z-10 text-center md:text-left" >
                    We are specilized in all of  our services, we give not just the setpiece in our services  but masterpiece
                </div>

                <div>
                    <img className="h-52 md:h-96 rounded-xl " src={recognition} alt="img1" />
                </div>
            </div>
        </div>
    );
};

export default CTAAbout;
