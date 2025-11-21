import React from 'react'

const About = () => {
  return (
  <div className="px-6 md:px-20 py-16">
      
      {/* ⭐ Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Our Book Hub
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Discover. Learn. Grow — Your one-stop destination for tech & programming books.
        </p>
      </div>

      {/* ⭐ Story / Intro Section */}
      <div className="bg-white p-8 rounded-2xl shadow-md border-[#E8DCC5]  hover:shadow-pink-200 mb-16 hover:shadow-md hover:scale-[1.01] transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4">Our Purpose</h2>
        <p className="text-gray-700 leading-relaxed">
          We created this platform with one goal: to make learning simple and accessible.
          Whether you're exploring Web Development, AI, Python, MongoDB or any other tech stack,
          our website helps you discover the best books — fast and effortlessly.
          <br /><br />
          Instead of searching multiple websites, you get everything in one clean, modern interface
          powered by dynamic APIs and smooth UI design.
        </p>
      </div>

      {/* ⭐ Features Section */}
      <h2 className="text-3xl font-bold text-center mb-10">What Makes Us Special</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1  border-[#E8DCC5] transition-all duration-300 hover:shadow-pink-200">
          <h3 className="text-xl font-bold mb-3">📚 Smart Categories</h3>
          <p className="text-gray-600">
            Choose from curated sections like Javascript, AI, Python, Web, MongoDB, and more.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1  border-[#E8DCC5] transition-all duration-300 hover:shadow-pink-200">
          <h3 className="text-xl font-bold mb-3">💡 Developer-Friendly</h3>
          <p className="text-gray-600">
            Designed for learners, developers, and students who want clean UI and fast results.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1  border-[#E8DCC5] transition-all duration-300 hover:shadow-pink-200">
          <h3 className="text-xl font-bold mb-3">🎨 Modern UI/UX</h3>
          <p className="text-gray-600">
            Smooth animations, responsive layout, and elegant design using Tailwind CSS.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1  border-[#E8DCC5] transition-all duration-300 hover:shadow-pink-200">
          <h3 className="text-xl font-bold mb-3">🔍 Detailed Book Info</h3>
          <p className="text-gray-600">
            View details, previews, authors and book descriptions without leaving the page.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1  border-[#E8DCC5] transition-all duration-300 hover:shadow-pink-200">
          <h3 className="text-xl font-bold mb-3">🚀 Constant Updates</h3>
          <p className="text-gray-600">
            We continuously add new categories, features, and improvements.
          </p>
        </div>

      </div>

      {/* ⭐ Final Footer Message */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          To empower learners with the right knowledge, delivered through beautiful design,
          powerful technology, and effortless user experience.
        </p>
      </div>

    </div>
  )
}

export default About
