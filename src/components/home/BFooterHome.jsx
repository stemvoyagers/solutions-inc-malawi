import { sala7 } from "../../assets";
const BFooterHome = () => {
  return (
    <div className="w-full mx-auto h-[50%] flex flex-col lg:flex-row justify-center items-center mt-8 mb-20 lg:pl-48 lg:pr-48">
      <div
        className={`bg-white text-black lg:gap-10 pt-4 lg:pt-10 items-center lg:w-[40%] text-left ml-[6%] mr-[6%] justify-start duration-500 transition-all scroll-smooth delay-300 
         `}
      >
        <h2 className="text-3xl lg:text-3xl md:mb-2 text-center lg:text-justify font-bold mb-4">
          About Us
        </h2>
        <p className="text-lg lg:text-2xl text-justify mb-12 lg:mb-0">
          Solutions Inc. is a dynamic social enterprise that bridges the gap
          between business success and social responsibility. Our mission is to
          harness the power of a for-profit business model to drive positive
          social change. By reinvesting our profits into community-focused
          initiatives, we aim to create a sustainable cycle of empowerment and
          development.
          <br />
          <br />
          At Solutions Inc., we believe that business can be a powerful force
          for good. Our approach involves delivering high-quality products and
          services while simultaneously addressing pressing social issues. This
          dual focus allows us to create lasting value for our customers, our
          community, and our stakeholders. .
        </p>
      </div>
      <div
        className={` md:w-[50%] duration-500 transition-all scroll-smooth  `}
      >
        <img
          src={sala7}
          className="bg-no-repeat bg-center z-1 shadow-xl rounded-md size-[100%] lg:size-[90%]"
        />
      </div>
    </div>
  );
};

export default BFooterHome;
