// src/pages/Vacancies.jsx
import { Link } from "react-router-dom";

const roles = [
  {
    id: 1,
    title: "Financial Record-Keeping Assistant",
    description: "Maintain accurate and up-to-date financial records for all RoG transactions, including donations, expenses, and grants.",
  },
  {
    id: 2,
    title: "Volunteer Contributions & Donations Tracker",
    description: "Monitor, categorize, and log incoming contributions from volunteers, partners, and individual donors to ensure transparency and accountability.",
  },
  {
    id: 3,
    title: "Financial Documentation & Admin Support",
    description: "Assist with preparing financial reports, organizing receipts, filing documentation, and supporting audit readiness.",
  }
];

const Vacancies = () => {
  return (
    <div className="py-16 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Volunteer Opportunities
          </h1>
          {/* <p className="text-gray-600 text-lg">
            Join Reach Out to Girls and make a real difference in the lives of girls in Malawi.
          </p> */}
        </div>

        {/* Three Role Cards */}
        <div className="space-y-8">
          {roles.map((role) => (
            <div
              key={role.id}
              className="bg-[#f7e193] rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                <h2 className="text-xl md:text-2xl font-bold text-black">{role.title}</h2>
                <span className="bg-white text-black text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
                  Remote · Voluntary
                </span>
              </div>
              <p className="text-black mb-6">{role.description}</p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 mb-6">
                <p className="font-medium text-gray-800">
                  📝 <strong>Apply by 27th Feb 2026</strong>
                </p>
              </div>

              <div className="text-center">
                <a
                  href="https://forms.gle/NZgZifBovHfvJmtMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition shadow-md"
                >
                  Apply Now →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-700">
          <p>
            Not the right fit?{" "}
            <Link to="/contact" className="text-purple-600 hover:underline font-medium">
              Let us know
            </Link>{" "}
            — we’d love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;