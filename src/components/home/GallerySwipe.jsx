import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MyPhoto } from './MyPhoto'
import { useState, useEffect } from 'react';

const GallerySwipe = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top1 = document.getElementById('div1').getBoundingClientRect().top;
      const top2 = document.getElementById('div2').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setIsVisible1(top1 < windowHeight);
      setIsVisible2(top2 < windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='bg-white overflow-x-hidden overflow-y-hidden flex items-center'>
      <div id="div1 h-[100%]"
        className={`w-full md:w-full bg-white transition-all duration-500 scroll-smooth ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'
          }`}
      >
        <h2 className=" text-center text-sm md:text-3xl font-bold text-black pt-12">Our Featured Works</h2>
        <Slider {...settings}>
          {MyPhoto.map((PhotoLink, index) => (
            <div key={index}>
              <img src={PhotoLink} alt={`Slide ${index + 1}`} className="mx-auto p-3 flex flex-col md:flex-row md:grid md:w-[100%] h:[70%] mt-2 mb-12 rounded-3xl" />
            </div>
          ))}
        </Slider>
      </div>
      <div id="div2 h-[100%]"
        className={`hidden md:block w-1/2 bg-black transition-all duration-500  scroll-smooth ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'
          }`}
      >
      
       
      </div>
    </div>
  );
};

export default GallerySwipe;
