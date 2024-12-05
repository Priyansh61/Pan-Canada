"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full py-2 sticky top-0 bg-white z-50 border-b border-gray-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Pan Canada Group"
            width={200}
            height={40}
            className="h-[3rem] w-auto"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Links (Desktop) */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/"
            className={`text-gray-600 hover:text-black ${
              pathname === '/' ? 'border-b-2 border-blue-600 text-black' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`text-gray-600 hover:text-black ${
              pathname === '/about-us' ? 'border-b-2 border-blue-600 text-black' : ''
            }`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`text-gray-600 hover:text-black ${
              pathname === '/services' ? 'border-b-2 border-blue-600 text-black' : ''
            }`}
          >
            Services
          </Link>
          <Link
            href="/teams"
            className={`text-gray-600 hover:text-black ${
              pathname === '/teams' ? 'border-b-2 border-blue-600 text-black' : ''
            }`}
          >
            Teams
          </Link>
          <Link
            href="/contact"
            className={`text-gray-600 hover:text-black ${
              pathname === '/contact' ? 'border-b-2 border-blue-600 text-black' : ''
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Links (Mobile) */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link
                href="/"
                onClick={toggleMenu}
                className={`text-gray-600 hover:text-black ${
                  pathname === '/' ? 'border-b-2 border-blue-600 text-black' : ''
                }`}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={toggleMenu}
                className={`text-gray-600 hover:text-black ${
                  pathname === '/about-us' ? 'border-b-2 border-blue-600 text-black' : ''
                }`}
              >
                About Us
              </Link>
              <Link
                href="/services"
                onClick={toggleMenu}
                className={`text-gray-600 hover:text-black ${
                  pathname === '/services' ? 'border-b-2 border-blue-600 text-black' : ''
                }`}
              >
                Services
              </Link>
              <Link
                href="/teams"
                onClick={toggleMenu}
                className={`text-gray-600 hover:text-black ${
                  pathname === '/teams' ? 'border-b-2 border-blue-600 text-black' : ''
                }`}
              >
                Teams
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className={`text-gray-600 hover:text-black ${
                  pathname === '/contact' ? 'border-b-2 border-blue-600 text-black' : ''
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
