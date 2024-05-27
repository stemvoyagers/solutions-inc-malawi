import CTAContact from "../components/contact/CTAContact"
import ContactBody from "../components/contact/ContactBody"
import { useState, useEffect } from "react"
import { AiOutlineLoading } from "react-icons/ai"
import { Spinner } from "react-bootstrap"

const Contacts = () => {
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
            <CTAContact />
            <ContactBody />
        </div>
    )
}

export default Contacts
