// src/pages/Vacancies.jsx

const Vacancies = () => {
  return (
    <div className="py-16 bg-white px-4 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center mt-24 mb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Volunteer Opportunities
        </h1>
        
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <svg 
            className="mx-auto h-16 w-16 text-gray-400 mb-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          
          <p className="text-lg text-gray-600 mb-2">
            No vacancies at the moment.
          </p>
          <p className="text-gray-500">
            Check back soon for new volunteer opportunities with Reach Out to Girls!
          </p>
        </div>

      </div>
    </div>
  );
};

export default Vacancies;