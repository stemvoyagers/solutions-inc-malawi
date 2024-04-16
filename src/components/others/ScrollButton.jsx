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
          className="fixed bottom-5 z-50 right-5 bg-black border hover:bg-[#001049d7] text-white hover:text-white p-3 rounded-full shadow-md transition-all duration-300"
        >
          <MdNorth />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
