import { useState, useEffect } from 'react';
// import { lagg, , las } from '../../assets';
import lasrra from '../../assets/lasrra.svg';
import nimc from '../../assets/nimc.svg';
import mysd from '../../assets/mysd.svg';

const GallerySwipe = () => {
  const [loading, setLoading] = useState(true);
  const projects = [
    {
      img: mysd,
      title: 'LAGOS STATE MINISTRY OF YOUTH & SOCIAL DEVELOPMENT',
      description: 'MYSD Engagement portal',
    },
    {
      img: nimc,
      title: 'NATIONAL IDENTITY MANAGEMENT COMMISSION',
      description: 'ABIS Upgrade and Support',
    },
    {
      img: lasrra,
      title: 'LAGOS STATE RESIDENTS’ REGISTRATION AGENCY',
      description: 'Lagos Resident Smart ID CARD',
    },
  ];

  useEffect(() => {
    // Simulate an API call or image loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set loading to false after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='overflow-x-hidden overflow-y-hidden flex flex-col items-center mb-4'>
      <h2 className="text-center text-xl md:text-3xl font-bold text-black mt-12 mb-2">
        {loading ? (
          <div className="h-8 bg-gray-300 animate-pulse w-3/4 md:w-1/2 mx-auto"></div>
        ) : (
          'OUR FEATURED WORKS'
        )}
      </h2>
      <span className="text-sm md:text-xl text-center md:w-[47%]">
        {loading ? (
          <div className="h-4 bg-gray-300 animate-pulse w-3/4 md:w-2/3 mx-auto mt-2"></div>
        ) : (
          'Explore some of our top projects, showcasing our expertise and innovation in software and identity solutions.'
        )}
      </span>
      <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-12 p-12'>
        {projects.map((project, idx) => (
          <div key={idx} className="shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 w-[30%] h-[330px] border rounded-lg">
            <div className='bg-white border rounded-lg overflow-hidden h-full flex flex-col items-center gap-1'>
              {loading ? (
                <div className="w-[280px] h-40 bg-gray-300 animate-pulse mt-4"></div>
              ) : (
                <img
                  src={project.img}
                  alt='projectImg'
                  className='w-[80%] h-40 object-cover mt-4'
                />
              )}
              <div className='p-4 flex flex-col justify-between w-full gap-2'>
                {loading ? (
                  <div className="h-4 bg-gray-300 animate-pulse w-3/4 mx-auto mt-2"></div>
                ) : (
                  <p className='text-lg font-bold text-gray-800 text-center'>{project.title}</p>
                )}
                {loading ? (
                  <div className="h-4 bg-gray-300 animate-pulse w-2/3 mx-auto mt-2"></div>
                ) : (
                  <p className='text-gray-600 mt-2 text-center'>{project.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySwipe;
