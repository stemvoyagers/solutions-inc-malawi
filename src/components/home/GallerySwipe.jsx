import { lagg, nimc, las } from '../../assets';

const GallerySwipe = () => {
  const projects = [
    {
      img: lagg,
      title: 'LAGOS STATE MINISTRY OF YOUTH & SOCIAL DEVELOPMENT',
      description: 'MYSD Engagement portal',
    },
    {
      img: nimc,
      title: 'NATIONAL IDENTITY MANAGEMENT COMMISION',
      description: 'ABIS Upgrade and Support',
    },
    {
      img: las,
      title: 'LAGOS STATE RESIDENTS’ REGISTRATION AGENCY',
      description: 'Lagos Resident Smart ID CARD',
    },
  ];

  return (
    <div className='overflow-x-hidden overflow-y-hidden flex flex-col items-center mb-4'>
      <h2 className="text-center text-xl md:text-3xl font-bold text-black mt-12 mb-2">OUR FEATURED WORKS</h2>
      <span className="text-sm md:text-xl text-center md:w-[47%]">
      Explore some of our top projects, showcasing our expertise and innovation in software and identity solutions.
        </span>
      <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-12 p-12'>
        {projects.map((project, idx) => (
          <div key={idx} className = "shadow-md hover:shadow-xl hover:scale-110 transition-all scroll-smooth">
            <div>
              <img src={project.img} alt='projectImg' className='w-full h-[50%]' />
            </div>
            <div className='bg-white border rounded-b-md p-2 w-full h-40'>
              <p className='font-bold mt-4 mb-2 w-[90%]'>{project.title}</p>
              <p className='mb-4'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySwipe;
