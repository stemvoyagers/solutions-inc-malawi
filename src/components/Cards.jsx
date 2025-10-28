import { sala11, sala12, sala13, sala5 } from "../assets";

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, bgColor, borderColor }) => {
  return (
    <div className="relative max-w-sm w-full mx-auto md:mb-7 mt-20 md:mt-20">
      <div
        className={`absolute inset-0 ${bgColor} transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6`}
      />
      <div className="relative z-10 bg-white p-6 sm:p-8 shadow-lg h-full flex flex-col justify-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center mb-4">
          <span
            className={`w-8 h-1 sm:w-12 sm:h-1 block mr-3 ${borderColor}`}
          />
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg tracking-widest">
          {description}
        </p>
      </div>
    </div>
  );
};

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-2 relative z-10 p-2 bg-[#E8B504]">
      <img src={sala5} alt="" />
      <img src={sala11} alt="" />
      <img src={sala12} alt="" />
      <img src={sala13} alt="" />
    </div>
  );
};

const Cards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8">
      <Card
        title="Our Vision"
        description="To create a world where business and social good are intrinsically linked, leading to empowered communities and sustainable development. We envision a future where our model of social entrepreneurship inspires other businesses to adopt similar practices, amplifying our impact."
        bgColor="bg-[#47BDD9]"
        borderColor="bg-[#47BDD9]"
      />
      <div className="relative max-w-sm w-full mx-auto md:mb-7 mt-20">
        <div className="absolute inset-0 bg-[#E8B504] transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6" />
        <ImageGrid />
      </div>

      <Card
        title="Our Mission"
        description="To provide high-quality products and innovative services that not only meet market needs but also drive social progress. By empowering individuals with skills, resources, and opportunities, we aim to build resilient communities capable of sustaining their growth and development."
        bgColor="bg-[#47BDD9]"
        borderColor="bg-[#47BDD9]"
      />
    </div>
  );
};

export default Cards;
