import CTAAbout from "../components/about/CTAAbout"
import Mission from "../components/about/Mission"
import PreCTAAbout from "../components/about/PreCTAAbout"
import Partners from "../components/about/Partners"
import { useState, useEffect } from "react"
import { identiko_logo } from "../assets";

const About = () => {
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
      <PreCTAAbout />
      <CTAAbout />
      <Mission />
      <Partners />
    </div>
  )
}

export default About
