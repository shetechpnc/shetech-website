'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/logo.png" alt="SheTech Logo" width={80} height={80} />
        
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-[#333333] text-base font-medium">
            <a href="#events" onClick={(e) => scrollTo(e, '#events')} className="hover:text-[#DD47A3] transition">Events</a>
            <a href="#faq" onClick={(e) => scrollTo(e, '#faq')} className="hover:text-[#DD47A3] transition">FAQ</a>
            <a href="#gallery" onClick={(e) => scrollTo(e, '#gallery')} className="hover:text-[#DD47A3] transition">Gallery</a>
            <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="hover:text-[#DD47A3] transition">Contact</a>
            <a href="#teams" onClick={(e) => scrollTo(e, '#teams')} className="hover:text-[#DD47A3] transition">Our Teams</a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#333333] focus:outline-none text-2xl"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow text-[#333333] text-base">
          <a href="#events" onClick={(e) => scrollTo(e, '#events')} className="block hover:text-[#DD47A3] transition">Events</a>
          <a href="#faq" onClick={(e) => scrollTo(e, '#faq')} className="block hover:text-[#DD47A3] transition">FAQ</a>
          <a href="#gallery" onClick={(e) => scrollTo(e, '#gallery')} className="block hover:text-[#DD47A3] transition">Gallery</a>
          <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="block hover:text-[#DD47A3] transition">Contact</a>
          <a href="#teams" onClick={(e) => scrollTo(e, '#teams')} className="block hover:text-[#DD47A3] transition">Our Teams</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
