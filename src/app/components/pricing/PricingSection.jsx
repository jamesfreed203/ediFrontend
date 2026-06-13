'use client';

import React from 'react';

export default function PricingSection({ pricingPlans = [] }) {
  const getPeriodText = (billingCycle) => {
    switch(billingCycle) {
      case 'yearly': return 'per year';
      case 'quarterly': return 'per quarter';
      case 'monthly': return 'per month';
      default: return '';
    }
  };

  // Colors matching your CSS palette
  const cardColors = [
    { bg: '#4399fa', hover: '#2e8dfa', text: '#4399fa', name: 'Free' },
    { bg: '#14b8a6', hover: '#0d9488', text: '#14b8a6', name: 'Plus' },
    { bg: '#8b5cf6', hover: '#7c3aed', text: '#8b5cf6', name: 'Standard' },
    { bg: '#f59e0b', hover: '#d97706', text: '#f59e0b', name: 'Business' },
  ];

  // No fallback data - show message if no plans
  if (!pricingPlans || pricingPlans.length === 0) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: 'linear-gradient(45deg, #4f4760, #2c2933)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4" style={{ fontWeight: 400 }}>
              Premium Plans
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto" style={{ lineHeight: 1.5 }}>
              No plans available at the moment. Please check back later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: 'linear-gradient(45deg, #4f4760, #2c2933)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header - matching your .heading-block styles */}
        <div className="text-center mb-16">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4" style={{ fontWeight: 400 }}>
            Premium Plans
          </h1>
          <p className="text-white/80 text-base md:text-lg mx-auto" style={{ lineHeight: 1.5 }}>
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, idx) => {
            const colors = cardColors[idx % cardColors.length];
            const featuresArray = plan.features ? plan.features.split(',') : [];
            const price = plan.price || 0;
            
            return (
              <div
                key={plan.id || idx}
                className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: '#fff', border: '1px solid #e5e5e5' }}
              >
                {/* Colored top section - matching .btn-primary styles */}
                <div style={{ backgroundColor: colors.bg }} className="p-6 text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h5 style={{ color: colors.text }} className="text-xl font-semibold mb-2">
                      {plan.title}
                    </h5>
                    <h2 style={{ color: colors.text }} className="text-5xl font-bold">
                      <span className="text-3xl font-normal">{plan.currency || '$'}</span>
                      {price}
                    </h2>
                    <p style={{ color: colors.text }} className="text-sm mt-2 capitalize">
                      {getPeriodText(plan.billingCycle)}
                    </p>
                  </div>
                </div>

                {/* Features list - matching your .feature-description styles */}
                <div className="p-6 text-center space-y-3 min-h-[180px]">
                  {featuresArray.map((feature, featureIdx) => (
                    <p key={featureIdx} className="text-gray-600 text-sm" style={{ lineHeight: 1.53846 }}>
                      {feature.trim()}
                    </p>
                  ))}
                </div>

                {/* Button - matching your .default-button and .btn-primary styles */}
                <div className="pb-6 px-6">
                  <button
                    style={{ 
                      backgroundColor: colors.bg,
                      borderRadius: '5px',
                      boxShadow: '0 1px 2px #e0e0e0'
                    }}
                    className="w-full text-white py-3 px-4 transition-all duration-300 hover:scale-105 font-medium text-sm uppercase tracking-wide"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.hover;
                      e.currentTarget.style.boxShadow = 'inset 0 3px 5px rgba(0,0,0,.125)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.bg;
                      e.currentTarget.style.boxShadow = '0 1px 2px #e0e0e0';
                    }}
                  >
                    Get Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}