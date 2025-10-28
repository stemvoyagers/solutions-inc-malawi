const CTAPrivacy = () => {
  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFBE0B", "#FB5607"];

  return (
    <div className="relative w-full py-[4%] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-2"
        style={{
          background: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]}, ${colors[4]})`,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-2"
        style={{
          background: `linear-gradient(to right, ${colors[4]}, ${colors[3]}, ${colors[2]}, ${colors[1]}, ${colors[0]})`,
        }}
      ></div>

      <div
        className="absolute top-0 left-0 h-full w-2"
        style={{
          background: `linear-gradient(to bottom, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]}, ${colors[4]})`,
        }}
      ></div>

      <div
        className="absolute top-0 right-0 h-full w-2"
        style={{
          background: `linear-gradient(to bottom, ${colors[4]}, ${colors[3]}, ${colors[2]}, ${colors[1]}, ${colors[0]})`,
        }}
      ></div>

      <div className="max-w-screen-xl mx-auto flex items-center justify-center py-4 relative z-10">
        <div className="font-semibold text-[120%] md:text-[200%] text-black text-center px-4">
          Privacy Policy for Solutions Inc
        </div>
      </div>
    </div>
  );
};

export default CTAPrivacy;
