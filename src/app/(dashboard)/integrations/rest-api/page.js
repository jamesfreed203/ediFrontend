'use client';

import {
    ExternalLink,
    Plus,
    RefreshCw,
    KeyRound
} from 'lucide-react';

export default function RestApiPage() {
    const tokens = [];

    return (
        <div>
            {/* Header */}
            <div className="mb-6 text-gray-500">
                <h1 className="text-3xl font-bold">
                    REST API Integration
                </h1>
            </div>

            <div className="bg-white border rounded-xl p-6 text-gray-500">

                {/* Documentation */}
                <div className="mb-6">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                    >
                        Navigate to Postman Documentation
                        <ExternalLink size={16} />
                    </a>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <p className="mb-3">
                        MFT Gateway REST API supports
                        2 methods of authentication.
                    </p>

                    <ul className="list-disc ml-6 space-y-2">
                        <li>
                            <strong>
                                Token-based authentication:
                            </strong>{' '}
                            Create an API token and
                            secret pair to authenticate
                            and obtain auth tokens.
                        </li>

                        <li>
                            <strong>
                                Username-based authentication (legacy):
                            </strong>{' '}
                            Use existing user credentials
                            to authenticate and obtain
                            auth tokens.
                        </li>
                    </ul>
                </div>

                <hr className="mb-6" />

                {/* Create Button */}
                <div className="mb-6">
                    <button className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
                        <Plus size={16} />
                        Create New API Token
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-lg border">

                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="text-left p-4">
                                    Token Name
                                </th>

                                <th className="text-left p-4">
                                    Token ID
                                </th>

                                <th className="text-left p-4">
                                    Access Level
                                </th>

                                <th className="text-left p-4">
                                    Created On
                                </th>

                                <th className="p-4">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {tokens.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="p-10"
                                    >
                                        <div className="text-center">

                                            <KeyRound
                                                size={48}
                                                className="mx-auto mb-4 text-gray-400"
                                            />

                                            <h3 className="text-lg font-semibold mb-2">
                                                You don't have
                                                any API Tokens
                                            </h3>

                                            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
                                                <RefreshCw size={16} />
                                                Reload
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
}