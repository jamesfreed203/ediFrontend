"use client";

import Link from "next/link";

export default function Header() {
  return (
    <div className="off-canvas-content" role="main">
      <header className="site-header hero-unit-light">
        <div className="grid-container navbar">
          <div className="grid-x grid-margin-x align-justify align-middle">
            {/* Logo */}
            <div className="brand cell shrink grid-x align-middle">
              <Link href="/">test logo</Link>
            </div>

            {/* Navigation */}
            <nav className="primary-navigation cell shrink grid-x align-middle">
              {/* Top Menu */}
              <ul className="top-menu show-for-large">
                <li>
                  <a
                    className="header-nav-phone-number"
                    href="tel:+18778523500"
                  >
                    (877) 852-3500
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.jitterbit.com/contact-us/"
                    target="_self"
                  >
                    Contact Us
                  </a>
                </li>

                <div
                  className="gtranslate_wrapper"
                  id="gt-wrapper-26398450"
                ></div>

                <li>
                  <a
                    href="https://apps.na-east.jitterbit.com/identity/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Harmony Login
                  </a>
                </li>
              </ul>

              {/* Main Menu */}
              <ul className="menu dropdown show-for-large">
                <li className="menu-item">
                  <a href="https://www.jitterbit.com/products/">
                    Products
                  </a>
                </li>

                <li className="menu-item">
                  <a href="https://www.jitterbit.com/solutions/">
                    Solutions
                  </a>
                </li>

                <li className="menu-item">
                  <a href="https://www.jitterbit.com/resources/">
                    Resources
                  </a>
                </li>

                <li className="menu-item">
                  <a href="https://www.jitterbit.com/support-services/">
                    Support & Services
                  </a>
                </li>

                <li className="menu-item">
                  <a href="https://www.jitterbit.com/partners/">
                    Partners
                  </a>
                </li>

                <li className="menu-item search-btn">
                  <a href="/search/">Search</a>
                </li>

                <li className="menu-item button">
                  <a href="https://www.jitterbit.com/get-started-with-jitterbit/">
                    Get Started
                  </a>
                </li>
              </ul>

              {/* Mobile Menu */}
              <div className="mobile-header hide-for-large">
                <a
                  href="/search/"
                  className="mobile-search-btn-header"
                >
                  Search
                </a>

                <div
                  className="hamburger"
                  aria-expanded="false"
                  aria-controls="offCanvas"
                >
                  <button
                    className="hamburger-button"
                    type="button"
                  >
                    <span className="hide">Menu toggle</span>

                    <span className="hamburger-line hamburger-line1"></span>
                    <span className="hamburger-line hamburger-line2"></span>
                    <span className="hamburger-line hamburger-line3"></span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}