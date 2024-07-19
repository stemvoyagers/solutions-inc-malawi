import { useState, useEffect } from "react";
import { msPix, nigPix } from "../../assets";

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
                    <img src={msPix} alt="msPolicyImg" />
                    <img src={msPix} alt="msPolicyImg" />
                    <img src={nigPix} alt="msPolicyImg" />
                </button>
            )}
        </>
    );
};

export default PolicyImages;
