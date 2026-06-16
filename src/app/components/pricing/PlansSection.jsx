'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { getPeriodText, cardColors } from '@/app/models/commonFunctions';

const PlansSection = ({ pricingPlans = [] }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Form validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First name is required')
      .min(2, 'First name must be at least 2 characters')
      .max(50, 'First name must be less than 50 characters'),
    lastName: Yup.string()
      .required('Last name is required')
      .min(2, 'Last name must be at least 2 characters')
      .max(50, 'Last name must be less than 50 characters'),
    companyName: Yup.string()
      .required('Company name is required')
      .min(2, 'Company name must be at least 2 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    phone: Yup.string()
      .required('Phone number is required')
      .min(5, 'Please enter a valid phone number'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[@$!%*?&]/, 'Password must contain at least one special character (@$!%*?&)'),
    confirmPassword: Yup.string()
      .required('Please confirm your password')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        const formData = {
          firstName: values.firstName,
          lastName: values.lastName,
          companyName: values.companyName,
          email: values.email,
          phone: values.phone,
          password: values.password,
          planId: selectedPlan?.id,
          planTitle: selectedPlan?.title,
          planPrice: selectedPlan?.price,
          planCurrency: selectedPlan?.currency || '$',
          billingCycle: selectedPlan?.billingCycle,
        };
        
        const response = await axios.post(
          '/api/register',
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        
        const data = response.data;
        
        setSubmitStatus({ type: 'success', message: data.message });
        formik.resetForm();
        setTimeout(() => {
            closeModal();
        }, 3000);
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitStatus({ type: 'error', message: error.response?.data?.message });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    setSubmitStatus(null);
    formik.resetForm();
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setSubmitStatus(null);
    formik.resetForm();
    document.body.style.overflow = 'unset';
  };

  if (!pricingPlans || pricingPlans.length === 0) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
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
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4" style={{ fontWeight: 400 }}>
              Premium Plans
            </h1>
            <p className="text-white/80 text-base md:text-lg mx-auto" style={{ lineHeight: 1.5 }}>
              Choose the perfect plan for your business needs. All plans include essential features to get you started.
            </p>
          </div>

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

                  <div className="p-6 text-center space-y-3 min-h-[180px]">
                    {featuresArray.map((feature, featureIdx) => (
                      <p key={featureIdx} className="text-gray-600 text-sm" style={{ lineHeight: 1.53846 }}>
                        {feature.trim()}
                      </p>
                    ))}
                  </div>

                  <div className="pb-6 px-6">
                    <button
                      onClick={() => openModal(plan)}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            {/* Background overlay with blur */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-all" />

            {/* Modal panel */}
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Get {selectedPlan?.title} Plan
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Selected Plan Info */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Selected Plan: <span className="font-semibold text-[#f44414]">{selectedPlan?.title}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Price: <span className="font-semibold">{selectedPlan?.currency || '$'}{selectedPlan?.price} {getPeriodText(selectedPlan?.billingCycle)}</span>
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={formik.handleSubmit} className="space-y-4 text-black">
                  {/* First Name and Last Name in same row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#f44414] focus:border-[#f44414] sm:text-sm ${
                          formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="John"
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <p className="mt-1 text-xs text-red-500">{formik.errors.firstName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#f44414] focus:border-[#f44414] sm:text-sm ${
                          formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Doe"
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <p className="mt-1 text-xs text-red-500">{formik.errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                      Company Name *
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.companyName}
                      className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#f44414] focus:border-[#f44414] sm:text-sm ${
                        formik.touched.companyName && formik.errors.companyName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Acme Inc."
                    />
                    {formik.touched.companyName && formik.errors.companyName && (
                      <p className="mt-1 text-xs text-red-500">{formik.errors.companyName}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#f44414] focus:border-[#f44414] sm:text-sm ${
                        formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john.doe@example.com"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
                    )}
                  </div>

                  {/* Phone Field with Country Code */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={formik.values.phone}
                      onChange={(value) => formik.setFieldValue('phone', value)}
                      onBlur={() => formik.setFieldTouched('phone', true)}
                      className={`mt-1 ${
                        formik.touched.phone && formik.errors.phone ? 'phone-input-error' : ''
                      }`}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{formik.errors.phone}</p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password *
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#f44414] focus:border-[#f44414] sm:text-sm ${
                        formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter password"
                    />
                    {formik.touched.password && formik.errors.password && (
                      <p className="mt-1 text-xs text-red-500">{formik.errors.password}</p>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Confirm Password *
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                      className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#f44414] focus:border-[#f44414] sm:text-sm ${
                        formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Confirm password"
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                      <p className="mt-1 text-xs text-red-500">{formik.errors.confirmPassword}</p>
                    )}
                  </div>

                  {/* Password Requirements Hint */}
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>Password must contain:</p>
                    <ul className="list-disc list-inside pl-2">
                      <li>At least 8 characters</li>
                      <li>One uppercase letter</li>
                      <li>One lowercase letter</li>
                      <li>One number</li>
                      <li>One special character (@$!%*?&)</li>
                    </ul>
                  </div>

                  {/* Submit Status */}
                  {submitStatus && (
                    <div className={`p-3 rounded-md ${
                      submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}>
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                  )}

                  {/* Form Actions */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f44414]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-2 text-sm font-medium text-white bg-[#f44414] border border-transparent rounded-md hover:bg-[#CB333A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f44414] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Subscribe Now'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for Phone Input */}
      <style jsx global>{`
        .PhoneInput {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
        }
        .PhoneInputCountry {
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          background: white;
          cursor: pointer;
        }
        .PhoneInputInput {
          flex: 1;
          min-width: 0;
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          outline: none;
        }
        .PhoneInputInput:focus {
          border-color: #f44414;
          ring: 2px solid #f44414;
        }
        .phone-input-error .PhoneInputCountry {
          border-color: #ef4444;
        }
        .phone-input-error .PhoneInputInput {
          border-color: #ef4444;
        }
      `}</style>
    </>
  );
};

export default PlansSection;