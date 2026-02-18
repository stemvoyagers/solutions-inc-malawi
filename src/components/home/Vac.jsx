// Vac.jsx
const Vac = () => {
  return (
    <div className="px-4 bg-[#f7e193] text-center py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#f7e193] border-orange-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
             <h1 className="text-3xl md:text-4xl font-bold text-black mb-8">
              Vacancy
            </h1>
           
            <p className="text-black mb-4 md:mb-0 text-base md:text-lg">
              Help empower girls in Malawi! We`re looking for a Finance & Admin Assistant <br/>(remote, voluntary).
            </p>
          </div>
          <a
            href="/vacancies"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition whitespace-nowrap"
          >
            View Opportunity 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vac;