"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full py-1 sticky top-0 bg-white z-50 border-b border-gray-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Pan Canada Group"
            width={200}
            height={40}
            className="h-[3rem] w-auto"
          />
        </Link>
        
        <div className="flex gap-8">
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
      </div>
    </nav>
  );
}
