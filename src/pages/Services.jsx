import CTAServices from "../components/services/CTAServices"
import ServicesBody from "../components/services/ServicesBody"
import { useState, useEffect } from "react"
import { AiOutlineLoading } from "react-icons/ai"
import { Spinner } from "react-bootstrap"

const Services = () => {
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
      <CTAServices />
      <ServicesBody />
    </div>
  )
}

export default Services
