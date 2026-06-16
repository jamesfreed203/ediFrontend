'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validation schema
  const validationSchema = Yup.object({
    subject: Yup.string().required('Subject is required'),
    product: Yup.string().required('Product is required'),
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    email: Yup.string()
      .required('Work email is required')
      .email('Invalid email address')
      .matches(/^(?!.*@(gmail|yahoo|hotmail|outlook)\.)/, 'Please use a corporate email address'),
    organization: Yup.string(),
    phone: Yup.string(),
    subscribe: Yup.boolean(),
    inquiry: Yup.string()
      .required('Inquiry is required')
      .min(10, 'Please provide more details (minimum 10 characters)'),
  });

  const formik = useFormik({
    initialValues: {
      subject: 'Sales and Pricing',
      product: 'MFT Gateway-AS2',
      name: '',
      email: '',
      organization: '',
      phone: '',
      subscribe: false,
      inquiry: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setSubmitStatus(null);
      console.log(values);return;
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...values }),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. We will get back to you soon.' });
          resetForm();
          // Reset phone field separately
          formik.setFieldValue('phone', '');
        } else {
          setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
        }
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const subjectOptions = [
    'Sales and Pricing',
    'Product Information',
    'Custom Licensing',
    'Partnership',
    'Other',
  ];

  const productOptions = [
    'MFT Gateway-AS2',
    'MFT Gateway-AS4',
    'MFT Gateway-SFTP',
    'MFT Gateway with EDI File Processing',
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-6">
              Please fill the form below or reach us directly at{' '}
              <a 
                href="mailto:info@mftgateway.com" 
                className="text-[#f44414] hover:text-[#CB333A] font-semibold no-underline"
              >
                info@mftgateway.com
              </a>
              <br />
              Call us at{' '}
              <a 
                href="tel:+13464449777" 
                className="text-[#f44414] hover:text-[#CB333A] font-semibold no-underline"
                target="_blank"
              >
                +1 346 444 9777
              </a>
            </p>

            {/* Additional Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#f44414] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">123 Business Avenue, Suite 100<br />Dallas, TX 75201, USA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#f44414] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST<br />Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <form onSubmit={formik.handleSubmit} className="space-y-5">
                {/* Subject Dropdown */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f44414] focus:border-transparent"
                  >
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="mt-1 text-xs text-red-500">{formik.errors.subject}</p>
                  )}
                </div>

                {/* Product Dropdown */}
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                    Product
                  </label>
                  <select
                    id="product"
                    name="product"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.product}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f44414] focus:border-transparent"
                  >
                    {productOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {formik.touched.product && formik.errors.product && (
                    <p className="mt-1 text-xs text-red-500">{formik.errors.product}</p>
                  )}
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Type your name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f44414] focus:border-transparent"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-1 text-xs text-red-500">{formik.errors.name}</p>
                  )}
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Type your work email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f44414] focus:border-transparent"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
                  )}
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    placeholder="Type your organization"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.organization}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f44414] focus:border-transparent"
                  />
                  {formik.touched.organization && formik.errors.organization && (
                    <p className="mt-1 text-xs text-red-500">{formik.errors.organization}</p>
                  )}
                </div>

                {/* Phone Number with Country Code */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={formik.values.phone}
                    onChange={(value) => formik.setFieldValue('phone', value)}
                    onBlur={() => formik.setFieldTouched('phone', true)}
                    className={`w-full ${
                      formik.touched.phone && formik.errors.phone ? 'phone-input-error' : ''
                    }`}
                    placeholder="Enter phone number"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{formik.errors.phone}</p>
                  )}
                </div>

                {/* Subscribe Checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    onChange={formik.handleChange}
                    checked={formik.values.subscribe}
                    className="mt-1 w-4 h-4 text-[#f44414] border-gray-300 rounded focus:ring-[#f44414]"
                  />
                  <label htmlFor="subscribe" className="text-sm text-gray-700">
                    Keep me updated about New Releases, Features, and Promotions
                  </label>
                </div>

                {/* Inquiry */}
                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">
                    How Can We Help? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="inquiry"
                    name="inquiry"
                    rows={4}
                    placeholder="Type your inquiry"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.inquiry}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f44414] focus:border-transparent resize-none"
                  />
                  {formik.touched.inquiry && formik.errors.inquiry && (
                    <p className="mt-1 text-xs text-red-500">{formik.errors.inquiry}</p>
                  )}
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <div className={`p-3 rounded-md ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}

                {/* Loading Indicator */}
                {isSubmitting && (
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                    <div className="flex items-center gap-3">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                      <div>
                        <div className="font-semibold text-blue-800 text-sm">Please wait...</div>
                        <p className="text-blue-600 text-xs">We're processing your request</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-[#f44414] text-white font-medium rounded-md hover:bg-[#CB333A] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f44414] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    onClick={() => {formik.resetForm(); setIsSubmitting(false)}}
                    className="px-6 py-2 bg-transparent border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

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
          transition: all 0.2s;
        }
        .PhoneInputCountry:focus-within {
          outline: none;
          ring: 2px solid #f44414;
          border-color: transparent;
        }
        .PhoneInputInput {
          flex: 1;
          min-width: 0;
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          outline: none;
          transition: all 0.2s;
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
    </div>
  );
}