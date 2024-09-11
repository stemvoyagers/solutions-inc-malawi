import { recognition, circular } from "../../assets";
import image1 from "../../assets/mrs_doreen.png"
import image2 from "../../assets/olaoluwa.png"
import { MdArrowRight } from "react-icons/md";

const CTAAbout = () => {
    return (
        // <div id = "section-1" className="relative bg-white pt-[4%] pb-[4%] w-full  bg-cover bg-center"
        // style={{
        //     backgroundImage: `url(${circular})`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //   }}>
        //    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-90"></div>

        //     <div className="relative max-w-screen-xl mx-auto mt-4 md:mt-0 mb-4 md:mb-0 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-x-20 px-4 md:px-0 font-bold z-10">
        //         <div className="flex justify-evenly md:w-[40%] font-semibold text-[100%] md:text-[200%] mb-2 text-black z-10 text-center md:text-left" >
        //         We are specialized in all of our services, we give not just the set piece but the masterpiece.
        //         </div>

        //         <div>
        //             <img className="h-52 md:h-96 rounded-xl " src={recognition} alt="img1" />
        //         </div>
        //     </div>
        // </div>
        <div className="flex w-full h-[80vh] pt-12 bg-black">
      {/* Text and Button Section */}
      <div className="w-1/2 p-10 text-white ml-10 pl-48 mt-10">
        <h1 className="text-3xl font-bold mb-4">We are specialized in all of our services, we give not just the set piece but the masterpiece</h1>
        <p className="mb-6">Our expertise spans software development, infrastructure management, data analytics, and a wide range of IT solutions, including smart city initiatives, identity management, and cloud computing.</p>
        <button className="bg-white text-blue-500 font-bold py-3 px-4 flex gap-1 items-center">Learn more <MdArrowRight className="w-8 h-8"/></button>

      </div>


<div className="w-1/2 relative max-w-sm mx-auto p-1">
      {/* First Image */}
      <img src={image1} alt="Primary Image" className="relative w-full" style={{ maxWidth: '80%' }}/>

      {/* Overlay Container for Second Image */}
      <div className="absolute inset-0 flex justify-end items-end p-4 transform -translate-x-4 translate-y-4 sm:translate-x-2 sm:translate-y-[-25px]">
        {/* Blue Background with second image */}
        <div className='bg-blue-500 max-w-full h-[50%] w-[70%] absolute transform -translate-x-4 translate-y-4 sm:-translate-x-[20px] sm:translate-y-[-20px]' />
        <img src={image2} alt="Overlay Image" className="max-w-full h-auto z-1" style={{ maxWidth: '80%' }} />
      </div>
    </div>


    </div>
    );
};

export default CTAAbout;
