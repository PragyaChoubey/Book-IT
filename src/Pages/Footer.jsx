import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-transparent text-black py-10 mt-16  shadow-[0_-3px_8px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">BookStore</h2>
          <p className="text-black-400">
            Discover the world’s best tech books. Learn, explore and grow with our curated library.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-black-300">
            <li><NavLink to="/Home" className="hover:text-orange-400">Home</NavLink></li>
            <li><NavLink to="/Category" className="hover:text-orange-400">Category</NavLink></li>
            <li><NavLink to="/About" className="hover:text-orange-400">About</NavLink></li>
            <li><NavLink to="/Contact" className="hover:text-orange-400">Contact</NavLink></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-black-300">
            <li><NavLink to="/Web" className="hover:text-orange-400">Web Development</NavLink></li>
            <li><NavLink to="/Ai" className="hover:text-orange-400">AI & Machine Learning</NavLink></li>
            <li><NavLink to="/Js" className="hover:text-orange-400">Javascript</NavLink></li>
            <li><NavLink to="/Python" className="hover:text-orange-400">Python</NavLink></li>
             <li><NavLink to="/Category" className="hover:text-orange-400">React</NavLink></li>
               <li><NavLink to="/Mongodb" className="hover:text-orange-400">Mongodb</NavLink></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex  space-x-4 text-2xl">
            <a href="#" className="hover:text-orange-400"><FaFacebook /></a>
            <a href="#" className="hover:text-orange-400"><FaInstagramSquare /></a>
            <a href="#" className="hover:text-orange-400"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-400"><FaLinkedin /></a>
          </div>
        </div>
      </div> 

      {/* Bottom text */}
      <div className="text-center text-black-500 mt-10 border-t border-orange-200 pt-5">
        © {new Date().getFullYear()} BookStore. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
