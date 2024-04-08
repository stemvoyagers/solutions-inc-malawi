import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MyPhoto } from './MyPhoto'
import { jideAgbaje } from '../../assets';
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
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='bg-white overflow-x-hidden overflow-y-hidden flex items-center'>
      <div id="div1"
        className={`w-1/2 bg-white transition-opacity delay-700 ${isVisible1 ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <h2 className=" text-center text-sm md:text-2xl font-bold text-black pt-12">OUR EVENT GALLERY</h2>
        <Slider {...settings}>
          {MyPhoto.map((PhotoLink, index) => (
            <div key={index}>
              <img src={PhotoLink} alt={`Slide ${index + 1}`} className="mx-auto flex flex-col md:flex-row md:grid md:w-[80%] h:[100%] mt-2 mb-12 rounded-xl" />
            </div>
          ))}
        </Slider>
      </div>
      <div id="div2"
        className={`w-1/2 bg-black transition-opacity delay-1000 ${isVisible2 ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <h2 className=" text-center text-sm md:text-2xl font-bold text-white pt-12">WORD FROM THE BOSS</h2>

        <img src={jideAgbaje} alt='bossPic' className="mx-auto w-[50%] h:[50%] mt-2  rounded-full" />
        <p className=" text-center text-xs md:text-smtext-sm font-bold text-white ">Just keep doing what you love, reward is near</p>
        <p className=" text-center text-xs md:text-sm font-bold text-white mb-4">If you do not relent on your dreams, you will actualize it</p>

      </div>
    </div>
  );
};

export default GallerySwipe;
