// components/Header.tsx
"use client";
 
import { Search, Menu, ChevronRight, X } from "lucide-react";  
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-3 lg:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero-section"  className="cursor-pointer">
            <img
              src="/logo.svg"  
              alt="Think 10x and Grow  "
              width={200}
              height={200}
              className="w-32 lg:w-60" 
            />
          </a>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <button aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search className="w-5 h-5 text-white cursor-pointer" />
            </button>

            {/* Contact Us Button */}
            <a
              href="#contact-section"
              className="bg-yellow-400 text-black px-3 lg:px-5 py-2 lg:py-5 rounded-full font-semibold hover:bg-yellow-500 transition flex text-xs lg:text-base"
            >
              Contact Us <ChevronRight className="w-4 md:m-5 md:h-5 h-4 text-black" />
            </a>

            {/* Hamburger Menu */}
            <button aria-label="Menu" className="cursor-pointer"  onClick={() => setSidebarOpen(true)}>
              <Menu className="w-7 h-7 text-yellow-400" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-[60] flex flex-col items-center justify-center p-6">
          <button
            className="absolute top-5 right-5 text-white cursor-pointer"
            onClick={() => setSearchOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-4 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              autoFocus
            />
          </div>
        </div>
      )}

       {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-yellow-500 z-[70] p-6 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-black cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>

        {/* Sidebar Content */}
        <nav className="mt-16 space-y-6 text-black text-lg flex flex-col font-bold">
          <a href="#hero-section" onClick={() => setSidebarOpen(false)}>About the Podcast</a>
          <a href="#about-section" onClick={() => setSidebarOpen(false)}>About the Host</a>
          <a href="#episodes-section" onClick={() => setSidebarOpen(false)}>Latest Episode</a>
          <a href="#contact-section" onClick={() => setSidebarOpen(false)}>Contact us</a>
        </nav>
      </div>
 
    </> 
  );
}
