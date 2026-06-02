'use client';

import { useState } from 'react';

import ImportPublicCertificateTab from './tabs/ImportPublicCertificateTab';
import ImportKeystoreTab from './tabs/ImportKeystoreTab';
import GenerateCertificateTab from './tabs/GenerateCertificateTab';

export default function CertificateForm() {
    const [activeTab, setActiveTab] =
        useState('generate');

    return (
        <div className="max-w-5xl">

            <div className="flex justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold">
                        Certificate
                    </h1>

                    <p className="text-gray-500">
                        Add New Certificate
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-xl border">

                <div className="border-b flex">

                    <button
                        onClick={() =>
                            setActiveTab('public')
                        }
                        className={`px-5 py-4 ${
                            activeTab === 'public'
                                ? 'border-b-2 border-blue-600'
                                : ''
                        }`}
                    >
                        Import Public Certificate
                    </button>

                    <button
                        onClick={() =>
                            setActiveTab('keystore')
                        }
                        className={`px-5 py-4 ${
                            activeTab === 'keystore'
                                ? 'border-b-2 border-blue-600'
                                : ''
                        }`}
                    >
                        Import From Keystore
                    </button>

                    <button
                        onClick={() =>
                            setActiveTab('generate')
                        }
                        className={`px-5 py-4 ${
                            activeTab === 'generate'
                                ? 'border-b-2 border-blue-600'
                                : ''
                        }`}
                    >
                        Generate Self Signed Certificate
                    </button>

                </div>

                <div className="p-6">

                    {activeTab === 'public' && (
                        <ImportPublicCertificateTab />
                    )}

                    {activeTab === 'keystore' && (
                        <ImportKeystoreTab />
                    )}

                    {activeTab === 'generate' && (
                        <GenerateCertificateTab />
                    )}

                </div>

            </div>

        </div>
    );
}