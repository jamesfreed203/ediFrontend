"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
      {/* Hamburger */}
      <button
        className="mobile-menu-trigger"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`off-canvas ${isOpen ? "active" : ""}`}>
        <button
          className="off-canvas-close"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        <div className="mobile-support-content-container">
          <a
            className="header-nav-phone-number-mobile"
            href="tel:+18778523500"
          >
            (877) 852-3500
          </a>

          <div className="contact-support">
            <a href="mailto:test@test.com">
              Contact Support
            </a>
          </div>
        </div>

        <ul className="mobile-menu">
          <li>
            <a href="#">Products</a>
          </li>

          <li>
            <a href="#">Solutions</a>
          </li>

          <li>
            <a href="#">Resources</a>
          </li>

          <li>
            <a href="#">Support & Services</a>
          </li>

          <li>
            <a href="#">Partners</a>
          </li>

          <li>
            <a href="/search">Search</a>
          </li>

          <li className="menu-btn">
            <a href="#">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}