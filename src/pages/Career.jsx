import CTACareer from "../components/career/CTACareer"
import CareerBody from "../components/career/CareerBody"
import { useState, useEffect } from "react"
import { AiOutlineLoading } from "react-icons/ai"
import { Spinner } from "react-bootstrap"

const Career = () => {
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
      <CTACareer/>  
      <CareerBody/>    
    </div>
  )
}

export default Career
