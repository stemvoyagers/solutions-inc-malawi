import AServiceBody from "../components/a-service/AServiceBody"
import CTAAService from "../components/a-service/CTAAService"
import { useState, useEffect } from "react"
import { AiOutlineLoading } from "react-icons/ai"
import { Spinner } from "react-bootstrap"

const AService = () => {
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
            <CTAAService />
            <AServiceBody />
        </div>
    )
}

export default AService
