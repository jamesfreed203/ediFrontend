'use client';

import Image from 'next/image';

const ReportSection = () => {
  return (
    <section className="content-block bg-fff template-free-form reportModule py-16 md:py-20 bg-cover bg-left" style={{ backgroundImage: "url('/assets/img/automation-report-bg.jpeg')" }}>
      <div className="grid-container max-w-[75.625rem] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="module image">
              <img
                width="500"
                height="500"
                src="/assets/img/automation-report.png"
                alt="2026 Jitterbit AI Automation Benchmark Report"
                className="w-full max-w-[500px] mx-auto h-auto"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="inner">
              <div className="module text-editor">
                <h2 className="headline text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b3e51] mb-4">
                  2026 Jitterbit AI Automation Benchmark Report
                </h2>
                <h3 className="subheadline text-2xl md:text-[26px] font-semibold text-[#1b3e51] mb-6">
                  How businesses are tackling agentic transformation
                </h3>
                <div className="text-base md:text-[20px] text-[#1b3e51] leading-relaxed space-y-4">
                  <p>
                    AI agent adoption is progressing at breathtaking speed. But how many does the <em>average</em> business use — and are they delivering value?
                  </p>
                  <p>
                    We surveyed over <strong>1,500 IT decision-makers</strong> to find out how businesses are tackling agentic transformation. Download the 2026 Jitterbit AI Automation Benchmark Report to see what they said about <strong>agents</strong>, <strong>automation</strong>, <strong>challenges</strong>, <strong>ROI</strong> and more.
                  </p>
                </div>
              </div>

              <div className="module buttons mt-8">
                <div className="button-wrap">
                  <a
                    className="inline-flex items-center justify-center bg-[#f44414] text-white text-center no-underline cursor-pointer transition-all duration-300 text-base font-semibold py-3 px-7 rounded-[3.125rem] hover:bg-[#CB333A] group"
                    href="https://www.jitterbit.com/report/2026-ai-automation-benchmark-report/"
                    target="_self"
                  >
                    Get the Report
                    <span className="ml-2 transition-all duration-300 group-hover:ml-4">
                      <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z" fill="white"/>
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

export default ReportSection;