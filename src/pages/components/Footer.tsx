// components/Footer.tsx
"use client";
 

import { socials } from "../../data/content";


import { FaTiktok, FaXTwitter } from "react-icons/fa6";  

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Social Icons Row */} 
        <div className="max-w-full md:max-w-[1400px]  mx-auto px-3 md:px-6  py-6 flex justify-between items-center  space-x-6 md:space-x-10">
      {socials.map(({ name, href, icon: Icon }) => (
        <a key={name} href={href} target="_blank">
          <Icon className="w-6 h-6 hover:text-yellow-400 transition" />
        </a>
      ))}
    </div> 

      {/* Bottom Row */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© Think and Grow 10X - All rights reserved</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/privacy-policy" className="hover:text-yellow-400">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms" className="hover:text-yellow-400">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
