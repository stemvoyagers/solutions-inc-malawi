import microsoftL from "../../assets/partners/microsoftL.png";
import neuroL from "../../assets/partners/neuroL.png";
import veritasL from "../../assets/partners/veritasL.png";
import vmL from "../../assets/partners/vmL.png";
import ciscoL from "../../assets/partners/ciscoL.png";
import hpL from "../../assets/partners/hpL.png";
import huaweiL from "../../assets/partners/huaweiL.png";

import sterlingL from "../../assets/partners/sterlingL.png";
import n_logo from "../../assets/partners/n_logo.png";
import telpoL from "../../assets/partners/telpoL.png";
import veeamL from "../../assets/partners/veeamL.png";
import lasrraL from "../../assets/partners/lasrraL.jpg";
import aratekL from "../../assets/partners/aratekL.png";
import checkPointL from "../../assets/partners/checkPointL.png";

import idemiaL from "../../assets/partners/idemiaL.png";
import lenovoL from "../../assets/partners/lenovoL.png";
import awsL from "../../assets/partners/awsL.png";
import ibmL from "../../assets/partners/ibmL.png";
import msAzureL from "../../assets/partners/msAzureL.png";
// import aratekL from "../../assets/partners/aratekL.png";
// import checkPointL from "../../assets/partners/checkPointL.png";

const partners1 = [
  { logo: microsoftL, alt: "msImg" },
  { logo: neuroL, alt: "msImg" },
  { logo: n_logo, alt: "n_logo" },
  { logo: sterlingL, alt: "msImg" },
  { logo: veritasL, alt: "msImg" },
  { logo: ciscoL, alt: "msImg" },
  { logo: vmL, alt: "msImg" },
  { logo: checkPointL, alt: "checkPointLogo" },
  { logo: awsL, alt: "awsLogo" },
  { logo: msAzureL, alt: "msAzureLogo" },
];

const partners2 = [
  { logo: hpL, alt: "msImg" },
  { logo: huaweiL, alt: "msImg" },
  { logo: idemiaL, alt: "nigImg" },
  { logo: telpoL, alt: "telpo" },
  { logo: veeamL, alt: "veeam" },
  { logo: lenovoL, alt: "msImg" },
  { logo: lasrraL, alt: "lassraLogo" },
  { logo: aratekL, alt: "aratekLogo" },
  { logo: ibmL, alt: "ibmLogo" },
];

const Partners = () => {
  return (
    <div className="mb-12 md:mt-7 text-center overflow-hidden">
      <div className="flex flex-col items-center justify-center align-middle gap-3 ml-[6%] md:ml-[0%] mr-[4%] md:mr-[0%]">
        <div className="mt-7 text-xl md:text-3xl font-bold">OUR PARTNERS</div>
        <span className="text-base md:text-xl text-center md:w-[55%]">
        We collaborate with industry-leading partners to create innovative solutions that surpass customer expectations and contribute to their overall business success across our comprehensive services and product portfolio.
        </span>
        <div className="w-full mt-2 text-center overflow-hidden relative">
  <div className="marquee">
    <div className="marquee-content reverse">
      {partners1.concat(partners1).map((partner, index) => (
        <div key={index} className="flex md:p-1 md:gap-4 justify-center items-center mr-2 ml-2 md:mr-5 md:ml-5">
          <img
            src={partner.logo}
            alt={partner.alt}
            className="h-14 object-contain"
            // Ensures uniform height and proper aspect ratio
          />
        </div>
      ))}
    </div>
  </div>
</div>

<div className="w-full -mt-1 md:mt-7 text-center overflow-hidden relative">
  <div className="marquee">
    <div className="marquee-content">
      {partners2.concat(partners2).map((partner, index) => (
        <div key={index} className="flex md:p-1 md:gap-4 justify-center items-center mr-2 ml-2 md:mr-5 md:ml-5">
          <img
            src={partner.logo}
            alt={partner.alt}
            className="h-14 object-contain"
            // Ensures uniform height and proper aspect ratio
          />
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
