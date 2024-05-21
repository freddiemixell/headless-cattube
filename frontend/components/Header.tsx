import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="flex items-center" href="/">
          <Image src="/images/logo.webp" alt="Logo" className="mr-4" width={100} height={150}/>
          <span className="sr-only">CatTube</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Community</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Shop</Link></li>
            <li><Link href="#" className="hover:text-gray-300">About us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;