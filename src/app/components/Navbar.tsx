'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            SheTech
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-indigo-600">
              Events
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <Link href="/" className="block text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-indigo-600">
            About
          </Link>
          <Link href="/events" className="block text-gray-700 hover:text-indigo-600">
            Events
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
