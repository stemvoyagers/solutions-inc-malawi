import { careero } from "../../assets";
const CTACareer = () => {
  return (
    <div
      className="bg-no-repeat bg-cover relative h-[50vh] md:h-[70vh] w-full z-1"
      style={{
        backgroundImage: `url(${careero})`,
        backgroundPosition: 'top',
        position: "relative",
      }}
    >
      <div className=" absolute md:z-50 text-[50%] md:text-5xl text-left text-white w-full h-full md:top-8 flex items-end justify-start">
        <div className="hidden md:block ml-9 text-left font-extrabold text-shadow-xl mb-[15%] transform animate-slide-up">
          Join Our Team
        </div>
      </div>
      <style>{`@keyframes slide-up{ from{ transform: translateY(100%); opacity: 0 } to{ transform: translateY(0%); opacity: 1 }} .animate-slide-up {animation: slide-up 2s ease-out;`} </style>
    </div>
  );
};

export default CTACareer;
