import CTAAbout from "../components/about/CTAAbout"
import Mission from "../components/about/Mission"
import PreCTAAbout from "../components/about/PreCTAAbout"
import Partners from "../components/about/Partners"
import { useState, useEffect } from "react"
import { identiko_logo } from "../assets";

const About = () => {
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
      <PreCTAAbout />
      <CTAAbout />
      <Mission />
      <Partners />
    </div>
  )
}

export default About
