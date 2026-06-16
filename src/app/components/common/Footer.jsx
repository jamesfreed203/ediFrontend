'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const footerColumns = [
    {
      title: 'Jitterbit',
      links: [
        { name: 'Jitterbit AI', href: 'https://www.jitterbit.com/ai/' },
        { name: 'Solutions', href: 'https://www.jitterbit.com/solutions/' },
        { name: 'Roles', href: 'https://www.jitterbit.com/roles/' },
        { name: 'Applications', href: 'https://www.jitterbit.com/applications/' },
        { name: 'Industries', href: 'https://www.jitterbit.com/industries/' },
        { name: 'Request Trial', href: 'https://www.jitterbit.com/harmony/ipaas-trial/' },
        { name: 'Harmony Login', href: 'https://apps.na-east.jitterbit.com/identity/login', target: '_blank' },
        { name: 'Contact Us', href: 'https://www.jitterbit.com/contact-us/' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { name: 'Harmony Platform', href: 'https://www.jitterbit.com/harmony/' },
        { name: 'Jitterbit iPaaS', href: 'https://www.jitterbit.com/product/ipaas/' },
        { name: 'Jitterbit EDI', href: 'https://www.jitterbit.com/product/edi/' },
        { name: 'Jitterbit API Manager', href: 'https://www.jitterbit.com/product/api-manager/' },
        { name: 'Jitterbit MCP', href: 'https://www.jitterbit.com/product/mcp/' },
        { name: 'Jitterbit App Builder', href: 'https://www.jitterbit.com/product/app-builder/' },
        { name: 'Marketplace', href: 'https://www.jitterbit.com/products/marketplace/' },
        { name: 'Management Console', href: 'https://www.jitterbit.com/product/management-console/' },
        { name: 'Pricing', href: 'https://www.jitterbit.com/harmony/pricing/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Resource Center', href: 'https://www.jitterbit.com/resources/' },
        { name: 'Blogs', href: '/resources/type/blog/' },
        { name: 'Case Studies', href: '/resources/type/case-study/' },
        { name: 'Solution Sheets', href: '/resources/type/solution-sheet/' },
        { name: 'White Papers', href: '/resources/type/white-paper/' },
        { name: 'Webinars', href: '/resources/type/webinar/' },
        { name: 'Testimonials', href: '/resources/type/testimonial/' },
        { name: 'Demos', href: '/resources/type/demo/' },
      ],
    },
    {
      title: 'Partners',
      links: [
        { name: 'Partners Overview', href: 'https://www.jitterbit.com/partners/' },
        { name: 'Global Strategic Partners', href: 'https://www.jitterbit.com/partners/global-strategic-partners/' },
        { name: 'Partner with Jitterbit', href: 'https://www.jitterbit.com/partner-program/' },
        { name: 'Refer a Lead', href: 'https://www.jitterbit.com/partner-refer-a-lead/' },
      ],
    },
    {
      title: 'Support & Services',
      links: [
        { name: 'Professional Services', href: 'https://www.jitterbit.com/service/professional-services/' },
        { name: 'Enhanced Services', href: 'https://www.jitterbit.com/service/enhanced-services/' },
        { name: 'Agentic AI Services', href: 'https://www.jitterbit.com/service/agentic-ai-services/' },
        { name: 'Customer Support', href: 'https://www.jitterbit.com/support/' },
        { name: 'Premier Support', href: 'https://www.jitterbit.com/premier-support/' },
        { name: 'Documentation', href: 'https://docs.jitterbit.com/', target: '_blank' },
        { name: 'Training & Certification', href: 'https://www.jitterbit.com/training-certification/' },
        { name: 'Community Forum', href: 'https://community.jitterbit.com/s/', target: '_blank' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Why Jitterbit', href: 'https://www.jitterbit.com/why-jitterbit/' },
        { name: 'Leadership', href: 'https://www.jitterbit.com/leadership/' },
        { name: 'Press Releases', href: 'https://www.jitterbit.com/resources/type/press-release/' },
        { name: 'Promotions', href: 'https://www.jitterbit.com/promotions/' },
        { name: 'Careers & Culture', href: 'https://www.jitterbit.com/careers/' },
      ],
    },
  ];

  const footerLinks = [
    { name: '© 2026 Jitterbit', href: '#' },
    { name: 'Jitterbit Privacy Policy', href: 'https://www.jitterbit.com/privacy-policy/' },
    { name: 'Security', href: 'https://www.jitterbit.com/security/' },
    { name: 'Manage My Personal Data', href: 'https://na2.hs-data-privacy.com/request/I1M03kUuRMVceLUqC8lYWQ', target: '_blank' },
    { name: 'Sitemap', href: 'https://www.jitterbit.com/sitemap/' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://x.com/jitterbit', icon: '/assets/social-icons/icon-x-white.png' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/jitterbit/', icon: '/assets/social-icons/icon-linkedin.png' },
    { name: 'YouTube', href: 'https://www.youtube.com/jitterbit', icon: '/assets/social-icons/icon-youtube.png' },
    { name: 'Facebook', href: 'https://www.facebook.com/jitterbit', icon: '/assets/social-icons/icon-facebook.png' },
    { name: 'Instagram', href: 'https://www.instagram.com/jitterbitintegration/', icon: '/assets/social-icons/icon-instagram.png' },
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-content bg-[#1b3e51] py-12 md:py-16">
        <div className="max-w-[75.625rem] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Logo Column */}
            <div className="lg:col-span-2 footer-logo">
              <a href="https://www.jitterbit.com" className="block">
                <img
                  src="/wp-content/uploads/icon-white-jitterbit.svg"
                  alt="Jitterbit"
                  className="w-auto h-12"
                />
              </a>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {footerColumns.map((column, idx) => (
                  <ul key={idx} className="space-y-3">
                    <li className="text-white font-semibold text-base mb-2 font-['Roboto_Slab']">
                      {column.title}
                    </li>
                    {column.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="menu-item">
                        <a
                          href={link.href}
                          target={link.target || '_self'}
                          rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                          className="text-[#cfdde5] text-xs font-normal hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            {/* Footer Bottom Links */}
            <div className="lg:col-span-9">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {footerLinks.map((link, idx) => (
                  <li key={idx}>
                    {link.name === '© 2026 Jitterbit' ? (
                      <span className="text-[#cfdde5] text-xs">{link.name}</span>
                    ) : (
                      <a
                        href={link.href}
                        target={link.target || '_self'}
                        rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                        className="text-[#cfdde5] text-xs hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
                <li>
                  <button
                    id="ot-sdk-btn"
                    className="ot-sdk-show-settings text-[#cfdde5] text-xs hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer"
                  >
                    Cookies Settings
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="lg:col-span-3">
              <ul className="flex justify-start lg:justify-end gap-5">
                {socialLinks.map((social, idx) => (
                  <li key={idx}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity duration-300"
                    >
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="w-6 h-6"
                      />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;