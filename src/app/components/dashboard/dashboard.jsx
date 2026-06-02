'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Dashboard(){
    const params = useParams();
    const protocol = params.protocol?.toLowerCase();

    return (
        <>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Statistics Dashboard</h1>
                <p className="mt-1 text-gray-500">Statistics on {protocol?.toUpperCase()} Transactions</p>
            </div>

            <div className="mb-6 flex gap-2">
                <Link href="/as2/dashboard">
                    <button className={`px-5 py-2 rounded-lg font-medium pointer ${protocol === 'as2' ? 'bg-blue-600 text-white' : 'bg-white border text-gray-600'}`}>
                        AS2
                    </button>
                </Link>
                <Link href="/sftp/dashboard">
                    <button className={`px-5 py-2 rounded-lg font-medium pointer ${protocol === 'sftp' ? 'bg-blue-600 text-white' : 'bg-white border text-gray-600'}`}>
                        SFTP
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border">
                    <h3 className="text-sm text-gray-500">Total Received Messages</h3>
                    <p className="mt-3 text-3xl font-bold">0</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border">
                    <h3 className="text-sm text-gray-500">Total Sent Messages</h3>
                    <p className="mt-3 text-3xl font-bold">0</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border">
                    <h3 className="text-sm text-gray-500">Total Received MDN</h3>
                    <p className="mt-3 text-3xl font-bold">0</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border">
                    <h3 className="text-sm text-gray-500">Total Sent MDN</h3>
                    <p className="mt-3 text-3xl font-bold">0</p>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border p-6 min-h-[350px]">
                    <h3 className="font-semibold text-lg">
                        Received Messages
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        From: Partner
                    </p>

                    <div className="flex items-center justify-center h-64 text-gray-400">
                        No received messages from partners
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border p-6 min-h-[350px]">
                    <h3 className="font-semibold text-lg">
                        Sent Messages
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        To: Partner
                    </p>

                    <div className="flex items-center justify-center h-64 text-gray-400">
                        No sent messages to partners
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                <div className="bg-white rounded-xl shadow-sm border p-6 min-h-[350px]">
                    <h3 className="font-semibold text-lg">
                    Received Messages
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                    To: Station
                    </p>

                    <div className="flex items-center justify-center h-64 text-gray-400">
                    No received messages to stations
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border p-6 min-h-[350px]">
                    <h3 className="font-semibold text-lg">
                    Sent Messages
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                    From: Station
                    </p>

                    <div className="flex items-center justify-center h-64 text-gray-400">
                    No sent messages from stations
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                <div className="bg-white rounded-xl shadow-sm border p-6 min-h-[350px]">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-lg">
                            Received Messages
                        </h3>

                        <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-white">
                            Interval: 3d
                        </span>
                    </div>

                    <div className="flex items-center justify-center h-64 text-gray-400">
                    No received messages
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border p-6 min-h-[350px]">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-lg">
                            Sent Messages
                        </h3>

                        <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-white">
                            Interval: 3d
                        </span>
                    </div>

                    <div className="flex items-center justify-center h-64 text-gray-400">
                    No sent messages
                    </div>
                </div>
            </div>
        </>
    );
}