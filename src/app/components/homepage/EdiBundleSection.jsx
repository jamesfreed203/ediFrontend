'use client';

const EdiBundleSection = () => {
  return (
    <section id="aiedi" className="bg-white py-12 md:py-16 mt-0" style={{ backgroundImage: "url('/assets/img/bg-matrix-wave-scaled.jpg')" }}>
      <div className="max-w-[75.625rem] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <div className="inner">
              {/* Header */}
              <header className="mb-6">
                <div className="preheadline text-[#f44414] font-semibold uppercase tracking-wide text-sm mb-2">
                  FOR NEW CUSTOMERS
                </div>
                <h2 className="headline text-3xl md:text-4xl font-bold text-[#1b3e51]">
                  Harmony EDI Bundle:<br />Simplify B2B Connectivity with Conversational EDI and Integration
                </h2>
              </header>

              {/* Description */}
              <div className="text-editor">
                <h3 className="text-xl md:text-2xl font-semibold text-[#1b3e51] mb-4">
                  Unify EDI and Application Integration in a Single Platform
                </h3>
                
                <p className="text-[#1b3e51] text-base mb-4">
                  By combining enterprise-grade EDI and iPaaS into a scalable platform, the <strong>Harmony EDI Bundle</strong> allows you to:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f44414] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#1b3e51]">
                      Tap into the complete power of the AI-infused, low-code Jitterbit Harmony platform (<a href="https://www.jitterbit.com/product/edi/" className="text-[#f44414] hover:text-[#CB333A] transition-colors">EDI</a> + <a href="https://www.jitterbit.com/product/ipaas/" className="text-[#f44414] hover:text-[#CB333A] transition-colors">iPaaS</a>) to quickly integrate cloud, on-prem and legacy systems.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f44414] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#1b3e51]">
                      Use natural language to manage day-to-day EDI tasks with <a href="https://demo.jitterbit.com/share/3hxv6zsfccgf" target="_blank" rel="noopener noreferrer" className="text-[#f44414] hover:text-[#CB333A] transition-colors">EDI AI Assistant</a> — which democratizes tasks, reduces complexity and delivers real-time insights.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f44414] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#1b3e51]">
                      60 hours of Jitterbit <a href="/service/agentic-ai-services/" className="text-[#f44414] hover:text-[#CB333A] transition-colors">Professional Services</a> to deploy faster and with minimal disruptions.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Buttons */}
          <div className="order-1 lg:order-2 text-center">
            <div className="inner">
              {/* Image */}
              <picture className="block mb-8">
                <img
                  width="340"
                  height="340"
                  src="/assets/img/edi-bundle-badge.png"
                  alt="Jitterbit EDI Bundle"
                  className="max-w-full h-auto mx-auto"
                  decoding="async"
                />
              </picture>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="button-wrap">
                  <a
                    className="inline-flex items-center justify-center bg-[#f44414] text-white text-center no-underline cursor-pointer transition-all duration-300 text-sm md:text-base font-semibold py-3 px-6 rounded-[3.125rem] hover:bg-[#CB333A] group mt-4"
                    href="https://www.jitterbit.com/wp-content/uploads/Jitterbit-EDI-Bundle-Solution-Sheet.pdf"
                    target="_blank"
                  >
                    Download the Bundle Guide
                    <span className="ml-2 transition-all duration-300 group-hover:ml-4">
                      <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z" fill="white"/>
                      </svg>
                    </span>
                  </a>
                </div>
                
                <div className="button-wrap">
                  <a
                    className="inline-flex items-center justify-center bg-transparent text-[#f44414] text-center no-underline cursor-pointer transition-all duration-300 text-sm md:text-base font-semibold py-3 px-6 rounded-[3.125rem] border-2 border-[#f44414] hover:bg-[#f44414] hover:text-white group mt-4"
                    href="https://www.jitterbit.com/contact-us/"
                    target="_self"
                  >
                    Contact an AI Expert
                    <span className="ml-2 transition-all duration-300 group-hover:ml-4">
                      <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z" fill="#f44414"/>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdiBundleSection;