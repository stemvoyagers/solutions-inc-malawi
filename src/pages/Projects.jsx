// src/pages/Projects.jsx


const Projects = () => {
  return (
    <div className="py-20 bg-white px-4">
      <div className="max-w-2xl mx-auto text-center">
       
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 mt-14">
          Our Projects
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore our initiatives in education, ICT, health, men and women`s empowerment in Malawi.
        </p>
        <div className="bg-[#FF6B6B] border border-gray-500 rounded-xl p-8 max-w-md mx-auto">
          <svg
            className="mx-auto h-16 w-16 text-black mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <p className="text-black text-2xl font-bold">COMING SOON</p>
        </div>
     
      </div>
    </div>
  );
};

export default Projects;