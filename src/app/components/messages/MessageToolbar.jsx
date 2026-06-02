'use client';

import {
    RefreshCw,
    Trash2,
    Eye,
    EyeOff,
    Filter,
    Calendar
} from 'lucide-react';

export default function MessageToolbar() {
    return (
        <>
            <div className="mb-4 flex flex-wrap justify-between gap-4 text-gray-500">
                <div className="flex flex-wrap gap-2">
                    <button className="border rounded px-3 py-2">
                        <RefreshCw size={16} />
                    </button>

                    <button
                        disabled
                        className="border rounded px-3 py-2 opacity-50"
                    >
                        <Trash2 size={16} />
                    </button>

                    <button
                        disabled
                        className="border rounded px-3 py-2 opacity-50"
                    >
                        <Eye size={16} />
                    </button>

                    <button
                        disabled
                        className="border rounded px-3 py-2 opacity-50"
                    >
                        <EyeOff size={16} />
                    </button>

                    <button className="border rounded px-3 py-2">
                        <Filter size={16} />
                    </button>

                    <button className="border rounded px-3 py-2">
                        <Calendar size={16} />
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Search messages..."
                    className="w-80 rounded border px-4 py-2"
                />
            </div>
        </>
    );
}