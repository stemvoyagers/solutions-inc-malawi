import { sala8 } from "../../assets";

const CTAHome = () => {
  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFBE0B", "#FB5607"];

  return (
    <div
      className="relative h-[40vh] lg:h-[70vh] w-full bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${sala8})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#096E6A]/70"></div>

      <div
        className="absolute top-0 left-0 w-full h-2 z-20"
        style={{
          background: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]}, ${colors[4]})`,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-2 z-20"
        style={{
          background: `linear-gradient(to right, ${colors[4]}, ${colors[3]}, ${colors[2]}, ${colors[1]}, ${colors[0]})`,
        }}
      ></div>
      <div
        className="absolute top-0 left-0 h-full w-2 z-20"
        style={{
          background: `linear-gradient(to bottom, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]}, ${colors[4]})`,
        }}
      ></div>
      <div
        className="absolute top-0 right-0 h-full w-2 z-20"
        style={{
          background: `linear-gradient(to bottom, ${colors[4]}, ${colors[3]}, ${colors[2]}, ${colors[1]}, ${colors[0]})`,
        }}
      ></div>

      <div className="absolute text-3xl lg:text-5xl text-white w-full h-full flex items-end justify-start px-4 lg:px-9 pb-[22%] lg:pb-[15%] z-10">
        <p className="font-extrabold text-shadow-xl max-w-[60%] lg:max-w-none animate-slide-up">
          Solution Inc: Where Innovation meets Impact
        </p>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CTAHome;
