
import CTAPrivacy from "../components/policies/CTAPrivacy"
import PrivacyBody from "../components/policies/PrivacyBody"
import { useState, useEffect } from "react"
import { identiko_logo } from "../assets";

const Privacy = () => {
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
            <CTAPrivacy />
            <PrivacyBody />
        </div>
    )
}

export default Privacy


