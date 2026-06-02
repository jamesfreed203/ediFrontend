'use client';

import { useState } from 'react';

export default function StationForm() {
    const [activeTab, setActiveTab] =
        useState('notifications');

    return (
        <div className="max-w-5xl text-gray-500">

            {/* Header */}
            <div className="flex justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold">
                        Stations
                    </h1>

                    <p className="text-gray-500">
                        Add New AS2 Station
                    </p>
                </div>
            </div>

            <div className="bg-white border rounded-xl p-6">

                {/* Name */}
                <div className="mb-5">
                    <label className="block mb-2 font-medium">
                        Name *
                    </label>

                    <input
                        type="text"
                        className="w-full border rounded-lg p-3"
                        placeholder="Name"
                    />
                </div>

                {/* AS2 Identifier */}
                <div className="mb-5">
                    <label className="block mb-2 font-medium">
                        AS2 Identifier *
                    </label>

                    <input
                        type="text"
                        className="w-full border rounded-lg p-3"
                        placeholder="AS2 Identifier"
                    />
                </div>

                {/* Email */}
                <div className="mb-5">
                    <label className="block mb-2 font-medium">
                        Email *
                    </label>

                    <input
                        type="email"
                        className="w-full border rounded-lg p-3"
                        placeholder="Email"
                    />
                </div>

                {/* Certificates */}
                <div className="border rounded-lg p-4 mb-6">
                    <h3 className="font-semibold mb-4">
                        Certificates
                    </h3>

                    <select className="w-full border rounded-lg p-3">
                        <option>
                            No key pairs available
                        </option>
                    </select>

                    <label className="flex items-center mt-4 gap-2">
                        <input type="checkbox" />

                        Enable TLS/SSL Certificate
                    </label>
                </div>

                {/* Advanced Options */}
                <div className="border rounded-lg">

                    <div className="flex border-b">
                        <button
                            onClick={() =>
                                setActiveTab(
                                    'notifications'
                                )
                            }
                            className={`px-5 py-3 ${
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
                                    'transmission'
                                )
                            }
                            className={`px-5 py-3 ${
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
                                setActiveTab('other')
                            }
                            className={`px-5 py-3 ${
                                activeTab === 'other'
                                    ? 'border-b-2 border-blue-600'
                                    : ''
                            }`}
                        >
                            Other Options
                        </button>
                    </div>

                    <div className="p-5">

                        {activeTab ===
                            'notifications' && (
                            <div className="space-y-3">
                                <label className="flex gap-2">
                                    <input
                                        type="checkbox"
                                    />
                                    Incoming Messages
                                </label>

                                <label className="flex gap-2">
                                    <input
                                        type="checkbox"
                                    />
                                    Outgoing Messages
                                </label>

                                <label className="flex gap-2">
                                    <input
                                        type="checkbox"
                                    />
                                    Message Send Failures
                                </label>
                            </div>
                        )}

                        {activeTab ===
                            'transmission' && (
                            <label className="flex gap-2">
                                <input
                                    type="checkbox"
                                />
                                Large Payload Support
                            </label>
                        )}

                        {activeTab === 'other' && (
                            <>
                                <textarea
                                    className="w-full border rounded-lg p-3 mb-4"
                                    placeholder="Description"
                                />

                                <label className="flex gap-2">
                                    <input
                                        type="checkbox"
                                    />
                                    Set as Default
                                    Station
                                </label>
                            </>
                        )}

                    </div>
                </div>

                {/* Actions */}
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