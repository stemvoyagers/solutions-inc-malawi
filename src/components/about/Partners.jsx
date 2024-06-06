import { cisco, hp, idemia, lenovo, microsoft, neuro, veritas, vmware } from "../../assets"

const partners1 = [
    { logo: veritas, alt: "msImg" },
    { logo: microsoft, alt: "msImg" },
    { logo: cisco, alt: "nigImg" },
    { logo: vmware, alt: "msImg" },

  ]

  const partners2 = [   
    { logo: lenovo, alt: "msImg" },
    { logo: idemia, alt: "nigImg" },
    { logo: hp, alt: "msImg" },
    { logo: neuro, alt: "msImg" },
  ]
  
  const Partners = () => {
    return (
      <div className="mb-12 md:mt-20 text-center overflow-hidden">
        <div className="flex flex-col items-center justify-center align-middle gap-2 ml-[6%] md:ml-[0%] mr-[4%] md:mr-[0%]">
          <div className="font-bold text-xl md:text-3xl mt-12">Our Partners</div>
          <span className="text-sm md:text-xl text-center md:w-[40%]">We bring together a team of 1st class world partners to provide our clients with top grade services in all aspects of our solutions</span>
          <div className="grid ml-[8%] md:ml-[0%] mr-[4%] md:mr-[0%] gap-2 mt-4 text-center items-center justify-center">
            <div id="me1" className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center text-center scroll-snap-x animate-scroll-x-180 infinite duration-10000 px-none" style={{ willChange: 'transform' }}>
              {partners1.map((partner, index) => (
                <div key={index} className="card p-3">
                  <img src={partner.logo} alt={partner.alt} className="w-[50%] md:w-[100%]" />
                </div>
              ))}
            </div>
            <div id="me2" className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center text-center  scroll-snap-x animate-scroll-x-180-neg infinite duration-10000 px-none" style={{ willChange: 'transform'}}>
              {partners2.map((partner, index) => (
                <div key={index} className="card p-3">
                  <img src={partner.logo} alt={partner.alt} className="w-[50%] md:w-[70%] text-center justify-center items-center" />
                </div>
              ))}
            </div>
          </div>
        </div>

            <style>
            {`
          .animate-scroll-x-180 {
            animation: scroll-x-180 10s linear infinite;
          }
          .animate-scroll-x-180-neg {
            animation: scroll-x-180-neg 10s linear infinite;
          }
          @keyframes scroll-x-180 {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          @keyframes scroll-x-180-neg {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          
        `}
      </style>
        </div>
    )
}

export default Partners
