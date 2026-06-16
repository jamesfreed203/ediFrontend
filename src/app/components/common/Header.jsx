'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Resources', href: '/resources' },
    { name: 'Support & Services', href: '/support-services' },
    { name: 'Partners', href: '/partners' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <>
      {/* Mobile Menu Component */}
      <MobileMenu />

      {/* Desktop Header */}
      <header
        className={`site-header fixed top-0 left-0 w-full bg-white border-b border-[#cfdde5] z-[9998] transition-all duration-300 ${
          isScrolled ? 'shadow-md py-3' : 'py-5'
        }`}
      >
        <div className="grid-container max-w-[75.625rem] mx-auto px-4 sm:px-6">
          <div className="navbar flex justify-between items-center">
            {/* Logo */}
            <div className="brand shrink-0">
              <Link href="/" className="text-2xl font-bold text-[#1b3e51]">
                test logo
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="primary-navigation hidden lg:flex flex-col items-end">
              {/* Top Menu */}
              <ul className="top-menu flex items-center list-none m-0 p-0 mb-5 gap-1">
                <li>
                  <Link
                    className="header-nav-phone-number text-[#1b3e51] text-xs font-normal px-3 py-0.5 border-r border-[#cfdde5] hover:text-[#f44414] transition-colors"
                    href="tel:+18778523500"
                  >
                    (877) 852-3500
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-[#1b3e51] text-xs font-normal px-3 py-0.5 border-r border-[#cfdde5] hover:text-[#f44414] transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`}
                    target='_blank'
                    className="text-[#1b3e51] text-xs font-normal px-3 py-0.5 hover:text-[#f44414] transition-colors"
                  >
                    Login Here
                  </a>
                </li>
              </ul>

              {/* Main Menu */}
              <ul className="menu dropdown flex items-center list-none m-0 p-0 gap-1">
                {navItems.map((item) => (
                  <li key={item.name} className="menu-item group relative">
                    <Link
                      href={item.href}
                      className="flex items-center px-3 py-2 text-[#1b3e51] font-semibold text-base hover:text-[#f44414] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="menu-item search-btn">
                  <a
                    href="/search"
                    className="block w-5 h-5 px-3 py-2 bg-no-repeat bg-center bg-contain opacity-70 hover:opacity-100 transition-opacity"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.625 15.875L13.875 12.125C14.7188 10.875 15.1562 9.3125 14.9375 7.625C14.5312 4.75 12.1875 2.4375 9.34375 2.0625C5.09375 1.53125 1.5 5.125 2.03125 9.375C2.40625 12.2188 4.71875 14.5625 7.59375 14.9688C9.28125 15.1875 10.8438 14.75 12.125 13.9062L15.8438 17.6562C16.3438 18.125 17.125 18.125 17.625 17.6562C18.0938 17.1562 18.0938 16.375 17.625 15.875ZM4.46875 8.5C4.46875 6.3125 6.25 4.5 8.46875 4.5C10.6562 4.5 12.4688 6.3125 12.4688 8.5C12.4688 10.7188 10.6562 12.5 8.46875 12.5C6.25 12.5 4.46875 10.7188 4.46875 8.5Z' fill='%231b3e51'/%3E%3C/svg%3E\")",
                    }}
                  >
                    <span className="sr-only">Search</span>
                  </a>
                </li>
                <li className="menu-item button ml-2">
                  <a
                    href="/get-started-with-jitterbit"
                    className="inline-flex items-center justify-center bg-[#f44414] text-white text-center no-underline cursor-pointer transition-all duration-300 text-sm font-semibold py-2 px-5 rounded-[3.125rem] h-10 hover:bg-[#CB333A]"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[73px] lg:h-[89px]" />
    </>
  );
}