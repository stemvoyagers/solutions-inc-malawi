// src/pages/Blog.jsx


const Blog = () => {
  return (
    <div className="py-20 bg-white px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 mt-14">
          Our Blog
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Stories, updates, and insights.
        </p>
        <div className="bg-[#4ECDC4] border border-gray-200 rounded-xl p-8 max-w-md mx-auto">
          <svg
            className="mx-auto h-16 w-16 text-white mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <p className="text-black text-2xl font-bold">COMING SOON</p>
        </div>
      
      </div>
    </div>
  );
};

export default Blog;