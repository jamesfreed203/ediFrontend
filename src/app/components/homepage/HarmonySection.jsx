'use client';

import { useState } from 'react';

const HarmonySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: 'By Product' },
    { id: 1, name: 'By Industry' },
    { id: 2, name: 'By Role' },
    { id: 3, name: 'By Use Case' },
  ];

  const tabContent = [
    // By Product
    [
      { href: 'https://www.jitterbit.com/product/ipaas/', title: 'Jitterbit iPaaS' },
      { href: 'https://www.jitterbit.com/product/edi/', title: 'Jitterbit EDI' },
      { href: 'https://www.jitterbit.com/product/api-manager/', title: 'Jitterbit API Manager' },
      { href: 'https://www.jitterbit.com/product/mcp/', title: 'Jitterbit MCP' },
      { href: 'https://www.jitterbit.com/product/app-builder/', title: 'Jitterbit App Builder' },
    ],
    // By Industry
    [
      { href: 'https://www.jitterbit.com/industry/healthcare-life-sciences/', title: 'Healthcare & Life Sciences' },
      { href: 'https://www.jitterbit.com/industry/higher-education/', title: 'Higher Education' },
      { href: 'https://www.jitterbit.com/industry/manufacturing/', title: 'Manufacturing' },
      { href: 'https://www.jitterbit.com/industry/retail/', title: 'Retail' },
      { href: 'https://www.jitterbit.com/industry/transportation-logistics/', title: 'Transportation & Logistics' },
    ],
    // By Role
    [
      { href: 'https://www.jitterbit.com/by-role/it/', title: 'Information Technology' },
      { href: 'https://www.jitterbit.com/by-role/hr/', title: 'Human Resources' },
      { href: 'https://www.jitterbit.com/by-role/customer-experience/', title: 'Customer Experience' },
      { href: 'https://www.jitterbit.com/by-role/commerce-integration/', title: 'Commerce' },
      { href: 'https://www.jitterbit.com/by-role/marketing/', title: 'Marketing' },
    ],
    // By Use Case
    [
      { href: 'https://www.jitterbit.com/use-case/accelerate-the-purchasing-workflow/', title: 'Purchasing Workflow' },
      { href: 'https://www.jitterbit.com/use-case/employee-expense-management/', title: 'Expense Management Automation Solutions' },
      { href: 'https://www.jitterbit.com/use-case/lead-to-order-automation/', title: 'Lead to Order' },
      { href: 'https://www.jitterbit.com/use-case/order-to-cash-automation/', title: 'Order to Cash' },
      { href: 'https://www.jitterbit.com/use-case/order-to-fulfillment-automation/', title: 'Order to Fulfillment' },
    ],
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[75.625rem] mx-auto px-4 sm:px-6">
        {/* Section 1 - Header with Tabs */}
        <div className="mb-16">
          <div className="text-center">
            <div className="bg-white rounded-b-2xl pb-[1px]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b3e51] text-balance mb-8">
                Workflow automation for every business, every system.
              </h2>

              {/* Tabs */}
              <ul className="flex justify-center flex-wrap gap-4 md:gap-8 mt-8 border-b-0" role="tablist">
                {tabs.map((tab) => (
                  <li key={tab.id} role="presentation">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`text-base md:text-lg lg:text-xl font-semibold pb-2 transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'text-[#1b3e51] border-b-4 border-[#f44414]'
                          : 'text-[#1b3e51] hover:text-[#f44414] border-b-2 border-transparent'
                      }`}
                    >
                      {tab.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2 - Icon Grid */}
        <div className="mb-16">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {tabContent[activeTab].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group bg-[#1b3e51] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1b3e51] to-[#f44414] rounded-full"></div>
                    </div>
                    <div className="text-white font-semibold text-sm md:text-base">
                      {item.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3 - Harmony Platform */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b3e51] mb-4">
                  Integration. Automation.{' '}
                  <span className="whitespace-nowrap">App Development.</span>
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b3e51] mb-6">
                  All in complete <span className="text-[#f44414]">Harmony.</span>
                </h2>
                <h3 className="text-lg md:text-xl text-[#1b3e51] font-normal leading-relaxed mt-8">
                  With an advanced layered AI architecture, Jitterbit Harmony provides a modern and secure approach to end-to-end business automation.
                </h3>
              </div>

              <div className="mt-8">
                <a
                  className="inline-flex items-center text-[#f44414] font-semibold text-base md:text-lg hover:text-[#CB333A] transition-colors group"
                  href="https://www.jitterbit.com/harmony/"
                  target="_self"
                >
                  Learn more about Harmony
                  <span className="ml-2 transition-all duration-300 group-hover:ml-4">
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z" fill="#f44414"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <a href="https://www.jitterbit.com/harmony/" className="block">
                <img
                  width="1240"
                  height="820"
                  src="/assets/img/harmony.png"
                  alt="Harmony Platform"
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HarmonySection;