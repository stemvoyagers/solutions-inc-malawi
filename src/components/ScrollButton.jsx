import { useState, useEffect } from "react";
import { MdNorth } from "react-icons/md";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 720) {
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
          className="fixed bottom-5 right-5 bg-[#1F6FE2] hover:bg-[#335f9c] text-white hover:text-white p-2 rounded-full shadow-md transition-all duration-300"
        >
          <MdNorth />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
