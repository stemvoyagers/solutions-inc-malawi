// import { recognition, circular } from "../../assets";
import image1 from "../../assets/mrs_doreen.png"
import image2 from "../../assets/olaoluwa.png"
// import { MdArrowRight } from "react-icons/md";

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
        <div className="flex flex-col-reverse w-full h-[95vh] md:h-[80vh] md:pt-12 bg-black md:flex-row place-content-start px-4 border-0">
      {/* Text and Button Section */}
      <div className="pl-4 pr-4 md:pl-52 md:pr-20 md:w-1/2 text-white md:ml-10 mt-28 md:mt-10">
        <h1 className="text-xl md:text-3xl font-extrabold md:font-bold mb-3 md:mb-4">We are specialized in all of our services, we give not just the set piece but the masterpiece</h1>
        <p className="mb-6 text-sm">Our expertise spans software development, infrastructure management, data analytics, and a wide range of IT solutions, including smart city initiatives, identity management, and cloud computing.</p>
        <button className="bg-white text-blue-500 font-bold py-3 px-4 flex gap-1 items-center">Learn more {'⇾'}</button>

      </div>


<div className="md:w-1/2 relative max-w-sm md:py-1 md:px-1 py-3 pl-[15%] md:ml-14">
      {/* First Image */}
      <img src={image1} alt="Primary Image" className="relative w-[55%] md:w-full" style={{ maxWidth: '80%'}}/>

      {/* Overlay Container for Second Image */}
      <div className="absolute inset-0 flex justify-end items-end p-4 transform -translate-x-10 translate-y-24 sm:translate-x-2 sm:translate-y-[-25px]">
        {/* Blue Background with second image */}
        <div className='bg-blue-500 max-w-full h-[67%] w-[44%] md:h-[50%] md:w-[70%] absolute transform -translate-x-2 -translate-y-4 sm:-translate-x-[20px] sm:translate-y-[-20px]' />
        <img src={image2} alt="Overlay Image" className="w-[50%] md:w-full z-1" style={{ maxWidth: '80%' }} />
      </div>
    </div>


    </div>
    );
};

export default CTAAbout;
