'use client';

import { useState } from 'react';
import SftpFileStructureTab from './tabs/SftpFileStructureTab';
import SftpNotificationsTab from './tabs/SftpNotificationsTab';
import SftpOtherOptionsTab from './tabs/SftpOtherOptionsTab';

export default function SftpPartnerForm() {
    const [activeTab, setActiveTab] =
        useState('file-structure');

    return (
        <div className="max-w-5xl text-gray-500">

            <div className="bg-white border rounded-xl p-6">

                {/* Basic Info */}

                <div className="mb-5">
                    <label>Name *</label>

                    <input
                        className="w-full border rounded-lg p-3"
                        placeholder="Name"
                    />
                </div>

                <div className="mb-5">
                    <label>SFTP Identifier *</label>

                    <div className="flex">
                        <span className="bg-gray-100 border border-r-0 px-3 flex items-center">
                            shopperon-ecom-
                        </span>

                        <input
                            className="flex-1 border rounded-r-lg p-3"
                            placeholder="identifier"
                        />
                    </div>
                </div>

                <div className="mb-5">
                    <label>
                        Notification Email(s)
                    </label>

                    <input
                        className="w-full border rounded-lg p-3"
                        placeholder="Email"
                    />
                </div>

                {/* Advanced Options */}

                <div className="border rounded-xl mb-6">

                    <div className="border-b flex">

                        <button
                            onClick={() =>
                                setActiveTab(
                                    'file-structure'
                                )
                            }
                            className={`px-4 py-3 ${
                                activeTab ===
                                'file-structure'
                                    ? 'border-b-2 border-blue-600'
                                    : ''
                            }`}
                        >
                            File Structure
                        </button>

                        <button
                            onClick={() =>
                                setActiveTab(
                                    'notifications'
                                )
                            }
                            className={`px-4 py-3 ${
                                activeTab ===
                                'notifications'
                                    ? 'border-b-2 border-blue-600'
                                    : ''
                            }`}
                        >
                            Notifications
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
                            'file-structure' && (
                            <SftpFileStructureTab />
                        )}

                        {activeTab ===
                            'notifications' && (
                            <SftpNotificationsTab />
                        )}

                        {activeTab === 'other' && (
                            <SftpOtherOptionsTab />
                        )}

                    </div>

                </div>

                {/* SFTP Settings */}

                <div className="border rounded-xl p-5">

                    <div className="mb-5">
                        <label>
                            Private Key Type
                        </label>

                        <select className="w-full border rounded-lg p-3">
                            <option>
                                PKCS1
                            </option>

                            <option>
                                PKCS8
                            </option>
                        </select>
                    </div>

                    <label className="flex gap-2 mb-4">
                        <input type="checkbox" />
                        Add password for private key
                    </label>

                    <label className="flex gap-2">
                        <input type="checkbox" />
                        Enable with existing key pair
                    </label>

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