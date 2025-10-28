const CTAPrivacy = () => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B', '#FB5607']; 

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

      {/* Left border */}
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




// const CTAPrivacy = () => {
//   return (
//     <div className="bg-repeat bg-center relative pb-[4%] pt-[4%] w-full z-1">
//       <div className="absolute inset-0 bg-[#096E6A]"></div>

//       <div className="max-w-screen-xl mx-auto flex items-center justify-center py-4">
//         <div className="font-semibold text-[120%] md:text-[200%] md:text-md mb-2 text-white z-10 text-center">
//           Privacy Policy for Solutions Inc 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CTAPrivacy;
