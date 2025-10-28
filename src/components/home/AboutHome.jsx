import { Link } from "react-router-dom";

const SkeletonLoader = () => {
  return (
    <div className="relative w-full h-full bg-gray-300 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
    </div>
  );
};

const AboutHome = () => {
  return (
    <div className="relative w-full mx-auto h-fit pt-[6%] pb-[6%] flex flex-col md:flex-row justify-center items-center mt-20 md:mb-2 mb-0 bg-cover bg-center gap-4 md:gap-0">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-95"></div>
      <div className="relative md:w-1/2 md:ml-[4%]">{<SkeletonLoader />}</div>
      <div className="md:w-1/2 bg-white text-black lg:gap-3 ml-6 mr-[4%] p-6 z-10 lg:h-[385px] flex flex-col items-start justify-center">
        <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl mb-2">
          About Us
        </h2>
        <p className="flex flex-col">
          <p className="text-balance transform animate-slide-up text-sm sm:text-base text-justify">
            Solutions Inc. is a dynamic social enterprise that bridges the gap
            between business success and social responsibility. Our mission is
            to harness the power of a for-profit business model to drive
            positive social change. By reinvesting our profits into
            community-focused initiatives, we aim to create a sustainable cycle
            of empowerment and development. <br />
            At Solutions Inc., we believe that business can be a powerful force
            for good. Our approach involves delivering high-quality products and
            services while simultaneously addressing pressing social issues.
            This dual focus allows us to create lasting value for our customers,
            our community, and our stakeholders.
          </p>
          <br />
          <Link to="/about-us">
            <button className="w-fit hover:text-[#003a97b3] text-[#003997]">
              Learn More {"⇾"}
            </button>
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
