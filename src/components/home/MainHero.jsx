import { useState, useEffect } from "react";
import aboutUs from "../../assets/aboutUs.jpg";
import heroImage from "../../assets/heroImage.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";

const MainHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const slides = [
    { image: aboutUs, text: "Your Trusted Experts in Identity & ICT Solutions" },
    { image: heroImage, text: "Cutting-Edge Technology for Public & Private Sectors" },
    { image: slide3, text: "Dedicated to Excellence in Identity & ICT" },
    { image: slide4, text: "Expert Technology Solutions for Secure Identification" },
  ];

  const duplicatedSlides = slides.concat(slides);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (currentSlide === slides.length) {
      const timeoutId = setTimeout(() => {
        setCurrentSlide(0);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const loadImages = () => {
      const promises = slides.map(slide => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
        });
      });
      Promise.all(promises).then(() => setLoading(false));
    };
    loadImages();
  }, [slides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden w-full h-auto bg-[#edebe8]">
      <div className="w-full relative">
        <div
          style={{
            transform: `translateX(-${(currentSlide % slides.length) * 100}vw)`,
            transition: currentSlide === slides.length ? "none" : "transform 1s ease",
          }}
          className="w-fit h-full flex transition-transform duration-1000 ease-out"
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="relative w-screen flex items-center justify-center"
            >
              {loading ? (
                <div className="w-full h-64 md:h-96 lg:h-[600px] bg-gray-300 animate-pulse"></div>
              ) : (
                <img className="w-full h-64 md:h-96 lg:h-[600px] object-cover" src={slide.image} alt={`img-${index}`} />
              )}
              <div className="absolute z-30 flex flex-col items-center justify-center text-center w-full h-full bg-black bg-opacity-50">
                <p
                  className={`text-white font-bold text-xl md:text-5xl text-shadow-xl transform animate-slide-up`}
                  key={`${index}-${currentSlide}`}
                >
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3"
          onClick={nextSlide}
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        <style>
          {`
          @keyframes slide-up {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0%);
              opacity: 1;
            }
          }
          .animate-slide-up {
            animation: slide-up 2s ease-out;
          }
          `}
        </style>
      </div>
    </div>
  );
};

export default MainHero;
