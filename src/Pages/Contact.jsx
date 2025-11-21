import React from 'react'

const Contact = () => {
  return (
    <div className="px-6 md:px-20 py-16">

      {/* ⭐ Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          Have any questions? We’d love to hear from you!
        </p>
      </div>

      {/* ⭐ Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

        {/* Email */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl  hover:-translate-y-1 border-[#E8DCC5] transition-all duration-300 hover:shadow-pink-200">
          <h3 className="text-xl font-bold mb-3">📧 Email Us</h3>
          <p className="text-gray-600">choubeypragya2@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl  hover:-translate-y-1 border-[#E8DCC5] transition-all duration-300 hover:shadow-pink-200">
          <h3 className="text-xl font-bold mb-3">📞 Call Us</h3>
          <p className="text-gray-600">+91 98765 .......</p>
        </div>

        {/* Location */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl  hover:-translate-y-1 border-[#E8DCC5] transition-all duration-300 hover:shadow-pink-200">
          <h3 className="text-xl font-bold mb-3">📍 Visit Us</h3>
          <p className="text-gray-600">India — Online Platform</p>
        </div>
      </div>

      {/* ⭐ Contact Form */}
      <div className="bg-white p-10 rounded-2xl shadow-md shadow-gray-200 max-w-3xl mx-auto hover:shadow-xl  border-[#E8DCC5] transition-all duration-300 hover:shadow-pink-200">

        <h2 className="text-3xl font-semibold mb-6 text-center">Send Us a Message</h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">Your Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-200"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Your Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">Your Message</label>
            <textarea
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-200"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-200 text-gray-500 py-3 rounded-xl font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  )
}

export default Contact
