import CTAContact from "../components/contact/CTAContact"
import ContactBody from "../components/contact/ContactBody"
import { useState, useEffect } from "react"
import { identiko_logo } from "../assets";
import Map from "../components/others/Map"

const ContactPage = () => {
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
            <CTAContact />
            <ContactBody />
            <Map />
        </div>
    )
}

export default ContactPage
