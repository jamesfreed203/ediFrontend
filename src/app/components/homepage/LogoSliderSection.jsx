'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const LogoSliderSection = () => {
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  // Logo data for first slider (left to right)
  const logosRow1 = [
    { src: '/assets/logos/Salesforce.png', alt: 'Salesforce', name: 'Salesforce' },
    { src: '/assets/logos/NetSuite.png', alt: 'NetSuite', name: 'NetSuite' },
    { src: '/assets/logos/SAP.png', alt: 'SAP', name: 'SAP' },
    { src: '/assets/logos/Shopify.png', alt: 'Shopify', name: 'Shopify' },
    { src: '/assets/logos/BigCommerce.png', alt: 'BigCommerce', name: 'BigCommerce' },
    { src: '/assets/logos/BMC-Helix.png', alt: 'BMC Helix', name: 'BMC Helix' },
    { src: '/assets/logos/Workday.png', alt: 'Workday', name: 'Workday' },
    { src: '/assets/logos/ShipStation.png', alt: 'ShipStation', name: 'ShipStation' },
    { src: '/assets/logos/Epicor.png', alt: 'Epicor', name: 'Epicor' },
    { src: '/assets/logos/MS-Dynamics-365.png', alt: 'MS Dynamics 365', name: 'MS Dynamics 365' },
    { src: '/assets/logos/Sage.png', alt: 'Sage', name: 'Sage' },
    { src: '/assets/logos/Coupa.png', alt: 'Coupa', name: 'Coupa' },
    { src: '/assets/logos/AWS.png', alt: 'Amazon AWS', name: 'Amazon AWS' },
    { src: '/assets/logos/Google-Ads.png', alt: 'Google Ads', name: 'Google Ads' },
  ];

  // Logo data for second slider (right to left)
  const logosRow2 = [
    { src: '/assets/logos/HubSpot.png', alt: 'HubSpot', name: 'HubSpot' },
    { src: '/assets/logos/Adobe.png', alt: 'Adobe', name: 'Adobe' },
    { src: '/assets/logos/Google-Analytics.png', alt: 'Google Analytics', name: 'Google Analytics' },
    { src: '/assets/logos/Box.png', alt: 'Box', name: 'Box' },
    { src: '/assets/logos/DocuSign.png', alt: 'DocuSign', name: 'DocuSign' },
    { src: '/assets/logos/GitHub.png', alt: 'GitHub', name: 'GitHub' },
    { src: '/assets/logos/Jira.png', alt: 'Jira', name: 'Jira' },
    { src: '/assets/logos/Marketo.png', alt: 'Marketo', name: 'Marketo' },
    { src: '/assets/logos/MS-Advertising.png', alt: 'Microsoft Advertising', name: 'Microsoft Advertising' },
    { src: '/assets/logos/OpenAI.png', alt: 'OpenAI', name: 'OpenAI' },
    { src: '/assets/logos/QuickBooks.png', alt: 'QuickBooks', name: 'QuickBooks' },
    { src: '/assets/logos/Slack.png', alt: 'Slack', name: 'Slack' },
    { src: '/assets/logos/Square.png', alt: 'Square', name: 'Square' },
    { src: '/assets/logos/Snowflake.png', alt: 'Snowflake', name: 'Snowflake' },
    { src: '/assets/logos/Zendesk.png', alt: 'Zendesk', name: 'Zendesk' },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedRow1 = [...logosRow1, ...logosRow1, ...logosRow1];
  const duplicatedRow2 = [...logosRow2, ...logosRow2, ...logosRow2];

  useEffect(() => {
    // Animation for first slider (left to right)
    const slider1 = slider1Ref.current;
    if (slider1) {
      let position = 0;
      const speed = 0.5; // pixels per frame
      
      const animate = () => {
        position -= speed;
        if (Math.abs(position) >= (logosRow1.length * 240)) {
          position = 0;
        }
        if (slider1) {
          slider1.style.transform = `translate3d(${position}px, 0px, 0px)`;
        }
        requestAnimationFrame(animate);
      };
      
      const animation = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animation);
    }
  }, [logosRow1.length]);

  useEffect(() => {
    // Animation for second slider (right to left)
    const slider2 = slider2Ref.current;
    if (slider2) {
      let position = -3600;
      const speed = -0.5; // pixels per frame (negative for opposite direction)
      
      const animate = () => {
        position -= speed;
        if (Math.abs(position) >= (logosRow2.length * 240)) {
          position = 0;
        }
        if (slider2) {
          slider2.style.transform = `translate3d(${position}px, 0px, 0px)`;
        }
        requestAnimationFrame(animate);
      };
      
      const animation = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animation);
    }
  }, [logosRow2.length]);

  return (
    <section className="jitterbitScrollLogo py-12 md:py-16 opacity-0 animate-fadeIn bg-white" style={{ backgroundImage: "url('/assets/images/Jitterbit-logo-BG-2x.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '45%' }}>
      <div className="max-w-[75.625rem] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="text-center">
            <header className="mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b3e51] mb-4">
                Seamlessly integrate with <span className="text-[#f44414]">thousands</span> of applications.
              </h2>
              <h4 className="text-lg md:text-xl text-[#1b3e51] font-normal max-w-4xl mx-auto">
                <span className="text-[#7c97a2]">
                  Connect your SaaS, on-premise and cloud applications in just days. Our drag-and-drop pre-built connectors make streamlining workflows and creating end-to-end process automation virtually effortless.
                </span>
              </h4>
            </header>
          </div>
        </div>

        {/* Logo Sliders */}
        <div className="relative mt-8">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-14 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-14 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* First Slider - Left to Right */}
          <div className="overflow-hidden mb-12 md:mb-16">
            <div
              ref={slider1Ref}
              className="flex whitespace-nowrap"
              style={{ willChange: 'transform' }}
            >
              {duplicatedRow1.map((logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-[200px] mx-5"
                >
                  <div className="bg-white/73 rounded-full border-2 border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-200 py-3 px-4">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-[73px] w-auto mx-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Slider - Right to Left */}
          <div className="overflow-hidden">
            <div
              ref={slider2Ref}
              className="flex whitespace-nowrap"
              style={{ willChange: 'transform' }}
            >
              {duplicatedRow2.map((logo, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-[200px] mx-5"
                >
                  <div className="bg-white/73 rounded-full border-2 border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-200 py-3 px-4">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-[73px] w-auto mx-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-fill-mode: forwards;
          animation-duration: 2s;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default LogoSliderSection;