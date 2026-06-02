'use client';

import {
    RefreshCw,
    Trash2,
    Filter,
    Search
} from 'lucide-react';

export default function CertificateToolbar() {
    return (
        <div className="flex justify-between items-center bg-white border rounded-lg p-4 mb-4 text-gray-500">

            <div className="flex gap-2">
                <button className="border rounded p-2">
                    <RefreshCw size={16} />
                </button>

                <button className="border rounded p-2">
                    <Trash2 size={16} />
                </button>

                <button className="border rounded p-2">
                    <Filter size={16} />
                </button>
            </div>

            <div className="relative">
                <Search
                    size={16}
                    className="absolute left-3 top-3 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search Certificates"
                    className="pl-10 pr-4 py-2 border rounded-lg w-80"
                />
            </div>

        </div>
    );
}