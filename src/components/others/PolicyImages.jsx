import { useState, useEffect } from "react";
// import { msPix, nigPix } from "../../assets";
import NDPR from "../../assets/NDPR.svg";
import NDPR_QR from "../../assets/NDPR_QR.svg";
import ISO_IEC_27001_T from "../../assets/ISO_IEC_27001_T.svg";
import ISO_IEC_27701_T from "../../assets/ISO_IEC_27701_T.svg";

const PolicyImages = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed flex items-center justify-end bottom-2 z-50 right-2 gap-2 transition-all duration-300"
                >
                    <img src={ISO_IEC_27701_T} alt="ISO_IEC_27701_T" className="w-[52px]"/>
                    <img src={ISO_IEC_27001_T} alt="ISO_IEC_27001_T" className="w-[52px]" />
                    <img src={NDPR} alt="NDPR" className="w-[52px]" />
                    <img src={NDPR_QR} alt="NDPR_QR" className="w-[52px]" />
                </button>
            )}
        </>
    );
};

export default PolicyImages;
