import CTAAbout from "../components/about/CTAAbout"
import Mission from "../components/about/Mission"
import PreCTAAbout from "../components/about/PreCTAAbout"
import Partners from "../components/about/Partners"
import { useState, useEffect } from "react"
import { AiOutlineLoading } from "react-icons/ai"
import { Spinner } from "react-bootstrap"

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])

  return isLoading ? (
    <div className="loading-state flex justify-center items-center min-h-screen" >
      <Spinner animation="border" role="status">
        <AiOutlineLoading className="animate-spin" />
      </Spinner>
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
