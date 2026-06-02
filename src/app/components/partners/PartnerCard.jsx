'use client';

import {
    Trash2,
    Send,
    Settings,
    Mail,
    Inbox,
    Ban,
} from 'lucide-react';

export default function PartnerCard({ partner }) {
    return (
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden text-gray-500">

            {/* Header */}
            <div className="bg-blue-50 p-4 flex justify-between items-center">
                <h3 className="font-semibold truncate">
                    {partner.name}
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
                            {partner.incoming}
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-500">
                            Outgoing
                        </div>

                        <div className="text-2xl font-bold">
                            {partner.outgoing}
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="text-xs text-gray-500 uppercase">
                        AS2 Identifier
                    </div>

                    <div className="font-medium">
                        {partner.identifier}
                    </div>
                </div>

                <div>
                    <div className="text-xs text-gray-500 uppercase">
                        URL
                    </div>

                    <div className="font-medium break-all">
                        {partner.url}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t p-4 flex justify-between">

                <div className="flex gap-2">
                    <button
                        title="Send Message"
                        className="border rounded p-2"
                    >
                        <Send size={16} />
                    </button>

                    <button
                        title="Manage Traffic"
                        className="border rounded p-2"
                    >
                        <Ban size={16} />
                    </button>

                    <button
                        title="Settings"
                        className="border rounded p-2"
                    >
                        <Settings size={16} />
                    </button>

                    <button
                        title="Messages"
                        className="border rounded p-2"
                    >
                        <Mail size={16} />
                    </button>
                </div>

                <button
                    title="Request Test Message"
                    className="border rounded p-2"
                >
                    <Inbox size={16} />
                </button>

            </div>
        </div>
    );
}