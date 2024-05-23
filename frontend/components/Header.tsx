import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-red-500 text-white p-4 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.webp" alt="Logo" className="mr-4" width={100} height={150}/>
          <span className="sr-only">CatTube</span>
        </Link>
        <button onClick={toggleMenu} className="md:hidden">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {/* Mobile Menu */}
        <nav className={`${isOpen ? 'block' : 'hidden'} md:hidden fixed inset-y-0 right-0 w-64 bg-red-500 p-4 transition-transform duration-300 ease-in-out z-50`}>
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/community" className="hover:text-gray-300">Community</Link></li>
            <li><Link href="/shop" className="hover:text-gray-300">Shop</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About us</Link></li>
          </ul>
        </nav>
        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/community" className="hover:text-gray-300">Community</Link></li>
            <li><Link href="/shop" className="hover:text-gray-300">Shop</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;