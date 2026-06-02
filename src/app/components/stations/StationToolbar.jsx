'use client';

import { RefreshCw, Search } from 'lucide-react';

export default function StationToolbar() {
    return (
        <div className="flex justify-between items-center bg-white border rounded-lg p-4 text-gray-500">
            <button className="border rounded-lg p-2">
                <RefreshCw size={18} />
            </button>

            <div className="relative">
                <Search
                    size={16}
                    className="absolute left-3 top-3 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 border rounded-lg w-72"
                />
            </div>
        </div>
    );
}