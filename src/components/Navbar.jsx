import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import pImg from "../assets/photo-1498050108023-c5249f4df085.jpg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));

  return (
    <nav className="bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-black text-white px-3 py-1 rounded-xl font-bold text-lg">
              MJ
            </div>
            <h1 className="text-xl font-bold text-gray-800">
              My Website
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/"
              className="text-gray-700 hover:text-black transition font-medium"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-gray-700 hover:text-black transition font-medium"
            >
              About
            </a>

            <a
              href="/services"
              className="text-gray-700 hover:text-black transition font-medium"
            >
              Services
            </a>

            <a
              href="/contact"
              className="text-gray-700 hover:text-black transition font-medium"
            >
              Contact
            </a>

            {
              isLogin ? (
                <div className="flex items-center justify-center">
                  <img
                    src={pImg}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-red-500 cursor-pointer shadow-md"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link to="/login">
                    <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition cursor-pointer">
                      Login
                    </button>
                  </Link>

                  <Link to="/register">
                    <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition cursor-pointer">
                      Register
                    </button>
                  </Link>
                </div>

)
            }
            <button onClick={() => localStorage.clear()}>Sign out</button>

            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <Menu size={28} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-5">
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
            <a
              href="/"
              className="text-gray-700 hover:text-black font-medium"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-gray-700 hover:text-black font-medium"
            >
              About
            </a>

            <a
              href="/services"
              className="text-gray-700 hover:text-black font-medium"
            >
              Services
            </a>

            <a
              href="/contact"
              className="text-gray-700 hover:text-black font-medium"
            >
              Contact
            </a>

            <button className="bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}