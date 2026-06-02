'use client';

import {
    Eye,
    Settings,
    Mail,
    Inbox,
    Trash2
} from 'lucide-react';

export default function StationCard({ station }) {
    return (
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden text-gray-500">

            {/* Header */}
            <div className="flex justify-between items-center bg-blue-50 p-4">
                <h3 className="font-semibold truncate">
                    {station.name}
                </h3>

                <button className="text-red-500">
                    <Trash2 size={18} />
                </button>
            </div>

            {/* Body */}
            <div className="p-4">

                <div className="text-center text-sm text-gray-500 mb-3">
                    Message Count for Today
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-500">
                            Incoming
                        </div>

                        <div className="text-2xl font-bold">
                            {station.incoming}
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-500">
                            Outgoing
                        </div>

                        <div className="text-2xl font-bold">
                            {station.outgoing}
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="text-xs text-gray-500 uppercase">
                        AS2 Identifier
                    </div>

                    <div className="font-medium">
                        {station.identifier}
                    </div>
                </div>

                <div>
                    <div className="text-xs text-gray-500 uppercase">
                        Email
                    </div>

                    <div className="font-medium truncate">
                        {station.email}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t p-4 flex justify-between">
                <div className="flex gap-2">
                    <button className="border rounded p-2">
                        <Eye size={16} />
                    </button>

                    <button className="border rounded p-2">
                        <Settings size={16} />
                    </button>

                    <button className="border rounded p-2">
                        <Mail size={16} />
                    </button>
                </div>

                <button className="border rounded p-2">
                    <Inbox size={16} />
                </button>
            </div>
        </div>
    );
}