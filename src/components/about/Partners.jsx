import {microsoftL, neuroL, veritasL, vmL,
  ciscoL, hpL, huaweiL, idemiaL, lenovoL, } from "../../assets";

const partners1 = [
  { logo: microsoftL, alt: "msImg" },
  { logo: neuroL, alt: "msImg" },
  // { logo: nimcL, alt: "nigImg" },
  // { logo: sterlingL, alt: "msImg" },
  { logo: veritasL, alt: "msImg" },
  { logo: ciscoL, alt: "msImg" },
  { logo: vmL, alt: "msImg" },
];

const partners2 = [
  { logo: hpL, alt: "msImg" },
  { logo: huaweiL, alt: "msImg" },
  { logo: idemiaL, alt: "nigImg" },
  // { logo: lagosL, alt: "msImg" },
  // { logo: interswitchL, alt: "msImg" },
  { logo: lenovoL, alt: "msImg" },
];

const Partners = () => {
  return (
    <div className="mb-12 mt-12 text-center overflow-hidden">
      <div className="flex flex-col items-center justify-center align-middle gap-2 ml-[6%] md:ml-[0%] mr-[4%] md:mr-[0%]">
        <div className="font-bold text-xl md:text-3xl mt-12">Our Partners</div>
        <span className="text-sm md:text-xl text-center md:w-[45%]">
        We collaborate with industry-leading partners to create innovative solutions that surpass customer expectations and contribute to their overall business success across our comprehensive services and product portfolio.
        </span>
        <div className="w-full mt-4 text-center overflow-hidden relative">
          <div className="marquee">
            <div className="marquee-content reverse gap-6">
              {partners1.concat(partners1).map((partner, index) => (
                <div key={index} className="flex md:p-3 md:gap-4 justify-center items-center">
                  <img src={partner.logo} alt={partner.alt} className="w-24 md:w-[100%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full mt-4 text-center overflow-hidden relative">
          <div className="marquee">
            <div className="marquee-content gap-6">
              {partners2.concat(partners2).map((partner, idx) => (
                <div key={idx} className="flex md:p-3 gap-4 justify-center items-center">
                  <img src={partner.logo} alt={partner.alt} className="w-24 md:w-[100%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .marquee {
            display: flex;
            overflow: hidden;
            position: relative;
            width: 250%;
          }
          .marquee-content {
            display: flex;
            animation: marquee 70s linear infinite;
          }
          .marquee-content.reverse {
            display: flex;
            animation-direction: reverse;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Partners;
