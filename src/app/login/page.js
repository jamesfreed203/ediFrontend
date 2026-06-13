'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeOff, Shield, Database, KeyRound, Lock, CheckCircle2 } from 'lucide-react';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">

            {/* Left Section - Branding */}
            <div className="hidden lg:flex w-1/2 bg-white flex-col justify-between p-12 border-r border-gray-100">
                
                {/* Logo */}
                <div className="pt-4">
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">M</span>
                        </div>
                        <span className="text-xl font-semibold text-gray-800">MFT Gateway</span>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="max-w-md mx-auto">
                    <div className="mb-6">
                        <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-6">
                            <Shield size={14} className="text-blue-600" />
                            <span className="text-xs font-medium text-blue-600">Enterprise Grade</span>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Secure File Transfer
                    </h1>
                    <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                        Manage AS2 messaging, SFTP partners, certificates, and integrations from a single platform.
                    </p>

                    <div className="space-y-3">
                        {[
                            'Secure AS2 Messaging',
                            'SFTP Integration',
                            'Certificate Management',
                            'REST API & Webhooks'
                        ].map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-blue-500" />
                                <span className="text-gray-600">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="text-sm text-gray-400">
                    © 2026 MFT Gateway
                </div>
            </div>

            {/* Right Section - Login Form */}
            <div className="flex-1 flex items-center justify-center p-6 md:p-8 lg:p-12">
                <div className="w-full max-w-md">
                    
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex justify-center mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">M</span>
                            </div>
                            <span className="text-lg font-semibold text-gray-800">MFT Gateway</span>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                        
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
                            <p className="text-gray-500 mt-1">Sign in to your account</p>
                        </div>

                        {/* Form */}
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex justify-between items-center mb-1.5">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <Link 
                                        href="/forgot-password" 
                                        className="text-sm text-blue-600 hover:text-blue-700"
                                    >
                                        Forgot?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-2.5 pr-11 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-600">Remember me</span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors"
                            >
                                Sign in
                            </button>
                        </form>

                        {/* Sign up link */}
                        <p className="text-center text-sm text-gray-500 mt-6">
                            Don't have an account?{' '}
                            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                                Contact sales
                            </Link>
                        </p>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-100"></div>
                            </div>
                        </div>

                        {/* Demo Access Note */}
                        <div className="text-center">
                            <p className="text-xs text-gray-400">
                                Demo: admin@mftgateway.com / admin123
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}