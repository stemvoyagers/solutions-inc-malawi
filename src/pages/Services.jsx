import CTAServices from "../components/services/CTAServices"
// import ServicesBody from "../components/services/ServicesBody"
import { useState, useEffect } from "react"
import { identiko_logo } from "../assets";
import ServiceA from "../components/services/ServiceA";
import ServiceB from "../components/services/ServiceB";
import ServiceC from "../components/services/ServiceC";
import ServiceD from "../components/services/ServiceD";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000)
  }, [])

  return isLoading ? (
    <div className="loading-state flex justify-center items-center min-h-screen" >
      <img src={identiko_logo} alt="identikoImg" className="w-14 animate-bounce" />
    </div>
  ) : (
    <div>
      <CTAServices />
      {/* <ServicesBody /> */}

      <ServiceA />
      <ServiceB/>
      <ServiceC/>
      {/* <ServiceD/> */}
    </div>
  )
}

export default Services
