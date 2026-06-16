"use client";

import { useState, useEffect } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button - Right Side */}
      <button
        className="lg:hidden fixed top-5 right-5 z-[10001] border-none bg-transparent text-3xl cursor-pointer"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Off-Canvas - Slides from Right */}
      <div
        className={`fixed top-0 right-[-320px] w-[320px] h-screen bg-white z-[9999] transition-all duration-300 ease overflow-y-auto lg:hidden ${
          isOpen ? "!right-0" : ""
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute left-[15px] top-[15px] border-none bg-transparent text-3xl cursor-pointer"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Support Content */}
        <div className="p-6 border-b border-gray-200 mt-14">
          <a
            className="block mb-2.5 font-semibold text-[#1b3e51] no-underline hover:text-[#f44414] transition-colors"
            href="tel:+18778523500"
          >
            (877) 852-3500
          </a>

          <div className="contact-support">
            <a
              href="mailto:test@test.com"
              className="text-[#1b3e51] no-underline hover:text-[#f44414] transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>

        {/* Mobile Menu Items */}
        <ul className="list-none p-5 m-0">
          <li className="mb-4">
            <a
              href="#"
              className="text-[#1b3e51] no-underline hover:text-[#f44414] transition-colors block"
            >
              Products
            </a>
          </li>

          <li className="mb-4">
            <a
              href="#"
              className="text-[#1b3e51] no-underline hover:text-[#f44414] transition-colors block"
            >
              Solutions
            </a>
          </li>

          <li className="mb-4">
            <a
              href="#"
              className="text-[#1b3e51] no-underline hover:text-[#f44414] transition-colors block"
            >
              Resources
            </a>
          </li>

          <li className="mb-4">
            <a
              href="#"
              className="text-[#1b3e51] no-underline hover:text-[#f44414] transition-colors block"
            >
              Support & Services
            </a>
          </li>

          <li className="mb-4">
            <a
              href="#"
              className="text-[#1b3e51] no-underline hover:text-[#f44414] transition-colors block"
            >
              Partners
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/pricing"
              className="text-[#1b3e51] no-underline hover:text-[#f44414] transition-colors block"
            >
              Pricing
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/search"
              className="text-[#1b3e51] no-underline hover:text-[#f44414] transition-colors block"
            >
              Search
            </a>
          </li>

          <li className="menu-btn mt-6">
            <a
              href="#"
              className="inline-block border-2 border-[#f44414] text-[#f44414] py-2.5 px-6 rounded-[40px] hover:bg-[#f44414] hover:text-white transition-colors w-full text-center"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}