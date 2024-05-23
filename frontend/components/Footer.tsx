import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="/about">About Us</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <p>© {new Date().getFullYear()} CatTube. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;