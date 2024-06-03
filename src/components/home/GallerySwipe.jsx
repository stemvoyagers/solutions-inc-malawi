
import { five, four, three } from '../../assets';

const GallerySwipe = () => {

  return (
    <div className=' overflow-x-hidden overflow-y-hidden flex flex-col items-center'>
     
        <h2 className=" text-center text-xl md:text-3xl font-bold text-black mt-12 md:mb-12">Our Featured Works</h2>
     
          <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mb-20'>
            <img src ={five} alt = "fiveImg" className='w-[55%] md:w-[25%] rounded-md' />
            <img src ={four} alt = "fourImg" className='w-[55%] md:w-[25%] rounded-md' />
            <img src ={three} alt = "threeImg" className='w-[55%] md:w-[25%] rounded-md' />
          </div>
    </div>
  );
};

export default GallerySwipe;
