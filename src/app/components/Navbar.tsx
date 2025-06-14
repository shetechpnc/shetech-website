'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/logo.png" alt="SheTech Logo" width={40} height={40} />
            <span><Link href="/" className="text-xl font-semibold text-pink-600">SheTech</Link></span>
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/pages/events" className="text-gray-700 hover:text-pink-600">Events</Link>
            <Link href="/pages/faq" className="text-gray-700 hover:text-pink-600">FAQ</Link>
            <Link href="/pages/gallery" className="text-gray-700 hover:text-pink-600">Gallery</Link>
            <Link href="/pages/contact" className="text-gray-700 hover:text-pink-600">Contact</Link>
            <Link href="/pages/teams" className="text-gray-700 hover:text-pink-600">Our Teams</Link>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <Link href="/pages/events" className="block text-gray-700 hover:text-pink-600">Events</Link>
          <Link href="/pages/faq" className="block text-gray-700 hover:text-pink-600">FAQ</Link>
          <Link href="/pages/gallery" className="block text-gray-700 hover:text-pink-600">Gallery</Link>
          <Link href="/pages/contact" className="block text-gray-700 hover:text-pink-600">Contact</Link>
          <Link href="/pages/teams" className="block text-gray-700 hover:text-pink-600">Our Teams</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
