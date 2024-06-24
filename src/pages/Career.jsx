import CTACareer from "../components/career/CTACareer"
import CareerBody from "../components/career/CareerBody"
import { useState, useEffect } from "react"
import { identiko_logo } from "../assets";

const Career = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLoading = () => {
      setIsLoading(true);      
    };

    window.addEventListener("beforeunload", handleLoading);
    return () => {
      window.removeEventListener("beforeunload", handleLoading);
    };
  }, []);

  return isLoading ? (
    <div className="loading-state flex justify-center items-center min-h-screen" >
       <img src={identiko_logo} alt="identikoImg" className="w-14 animate-bounce" />
    </div>
  ) : (
    <div>
      <CTACareer />
      <CareerBody />
    </div>
  )
}

export default Career
