'use client';

import { useState } from 'react';
import PartnerBasicInfo from './PartnerBasicInfo';
import PartnerCertificates from './PartnerCertificates';

import As2SecurityTab from './tabs/As2SecurityTab';
import MdnReceiptTab from './tabs/MdnReceiptTab';
import TransmissionTab from './tabs/TransmissionTab';
import FileStructureTab from './tabs/FileStructureTab';
import OtherOptionsTab from './tabs/OtherOptionsTab';

export default function PartnerForm() {
    const [activeTab, setActiveTab] =
        useState('security');

    return (
        <div className="max-w-6xl text-gray-500">

            <div className="flex justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold">
                        Partners
                    </h1>

                    <p className="text-gray-500">
                        Add New AS2 Partner
                    </p>
                </div>
            </div>

            <div className="bg-white border rounded-xl p-6">

                <PartnerBasicInfo />

                <PartnerCertificates />

                {/* Advanced Options */}

                <div className="border rounded-xl mt-6">

                    <div className="border-b flex flex-wrap">

                        <button
                            onClick={() =>
                                setActiveTab('security')
                            }
                            className={`px-4 py-3 ${
                                activeTab === 'security'
                                    ? 'border-b-2 border-blue-600'
                                    : ''
                            }`}
                        >
                            AS2 Security
                        </button>

                        <button
                            onClick={() =>
                                setActiveTab('mdn')
                            }
                            className={`px-4 py-3 ${
                                activeTab === 'mdn'
                                    ? 'border-b-2 border-blue-600'
                                    : ''
                            }`}
                        >
                            MDN / Receipt
                        </button>

                        <button
                            onClick={() =>
                                setActiveTab(
                                    'transmission'
                                )
                            }
                            className={`px-4 py-3 ${
                                activeTab ===
                                'transmission'
                                    ? 'border-b-2 border-blue-600'
                                    : ''
                            }`}
                        >
                            Transmission
                        </button>

                        <button
                            onClick={() =>
                                setActiveTab(
                                    'files'
                                )
                            }
                            className={`px-4 py-3 ${
                                activeTab ===
                                'files'
                                    ? 'border-b-2 border-blue-600'
                                    : ''
                            }`}
                        >
                            File Structure
                        </button>

                        <button
                            onClick={() =>
                                setActiveTab(
                                    'other'
                                )
                            }
                            className={`px-4 py-3 ${
                                activeTab ===
                                'other'
                                    ? 'border-b-2 border-blue-600'
                                    : ''
                            }`}
                        >
                            Other Options
                        </button>

                    </div>

                    <div className="p-5">

                        {activeTab ===
                            'security' && (
                            <As2SecurityTab />
                        )}

                        {activeTab === 'mdn' && (
                            <MdnReceiptTab />
                        )}

                        {activeTab ===
                            'transmission' && (
                            <TransmissionTab />
                        )}

                        {activeTab ===
                            'files' && (
                            <FileStructureTab />
                        )}

                        {activeTab ===
                            'other' && (
                            <OtherOptionsTab />
                        )}

                    </div>

                </div>

                <div className="mt-6 flex gap-3">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                        Create
                    </button>

                    <button className="border px-6 py-3 rounded-lg">
                        Cancel
                    </button>
                </div>

            </div>

        </div>
    );
}