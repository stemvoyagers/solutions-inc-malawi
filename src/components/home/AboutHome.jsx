import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LandingVid, circular } from '../../assets';

const SkeletonLoader = () => {
  return (
    <div className="relative w-full h-full bg-gray-300 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
    </div>
  );
};

const AboutHome = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div
      className="relative w-full mx-auto h-fit pt-[6%] pb-[6%] flex flex-col md:flex-row justify-center items-center mt-20 md:mb-2 mb-0 bg-cover bg-center gap-4 md:gap-0"
      style={{
        backgroundImage: `url(${circular})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-95"></div>
      <div className="relative md:w-1/2 md:ml-[4%]">
        {isLoading && <SkeletonLoader />}
        <video
          src={LandingVid}
          autoPlay
          loop
          muted
          onLoadedData={handleLoadedData}
          className={`w-[80vw] bg-no-repeat shadow-xl h-full lg:h-[385px] bg-cover bg-center min-w-full min-h-full relative m-0 p-0 ${isLoading ? 'hidden' : 'block'}`}
        />
      </div>
      <div className="md:w-1/2 bg-white text-black lg:gap-10 ml-6 mr-[4%] p-6 z-10 lg:h-[385px] flex flex-col items-start justify-center">
        <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl">Who We Are</h2>
        <p className='flex flex-col'>
          <p className="text-balance transform animate-slide-up text-sm sm:text-base text-justify">
          At Identiko, we are at the forefront of IT solutions, specializing in innovative access management and advanced technology integration. Our dedicated team brings extensive experience in Access Management Systems, Biometrics, ICT Consultancy, and System Integration. We offer comprehensive IT solutions designed to meet the diverse needs of both private and public sectors, ensuring secure and efficient systems. <br />

By partnering with leading technology firms, we deliver cutting-edge services that drive digital transformation. With over two decades of expertise, we proudly serve a range of industries, including banking, security, FMCGs, construction, and telecommunications, providing tailored solutions that enhance operational efficiency and security.
          </p>
          <br />
          <Link to='/about-us'>
            <button className="w-fit hover:text-[#003a97b3] text-[#003997]">Learn More {'⇾'}</button>
          </Link>
        </p>
      </div>
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0%);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AboutHome;
