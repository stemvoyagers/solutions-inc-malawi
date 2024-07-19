import AServiceBody from "../components/a-service/AServiceBody"
import CTAAService from "../components/a-service/CTAAService"
import { useState, useEffect } from "react"
import { identiko_logo } from "../assets";

const AService = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, [])

    return isLoading ? (
        <div className="loading-state flex justify-center items-center min-h-screen" >
        <img src={identiko_logo} alt="identikoImg" className="w-14 animate-bounce" />
      </div>
    ) : (
        <div>
            <CTAAService />
            <AServiceBody />
        </div>
    )
}

export default AService
