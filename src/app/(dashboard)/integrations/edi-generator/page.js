'use client';

import { useState } from 'react';
import { Database, KeyRound } from 'lucide-react';

export default function EdiGeneratorPage() {
    const [accepted, setAccepted] = useState(false);

    return (
        <div>
            {/* Header */}
            <div className="mb-6 text-gray-500">
                <h1 className="text-3xl font-bold">
                    EDI Generator
                </h1>
            </div>

            <div className="max-w-4xl bg-white border rounded-xl p-6 text-gray-500">

                {/* EDI Icon */}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">
                        Connect with EDI Generator
                    </h2>
                </div>

                {/* S3 Requirement */}
                <div className="text-center py-6">

                    <Database
                        size={48}
                        className="mx-auto text-blue-600 mb-4"
                    />

                    <h3 className="text-lg font-semibold mb-3">
                        Required S3 Integration
                    </h3>

                    <p className="text-gray-600 mb-6">
                        In order to enable EDI Generator
                        integration, first you need to
                        enable S3 integration for your
                        account.
                    </p>

                </div>

                {/* Warning Box */}
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-5 mb-6">

                    <h4 className="font-semibold mb-3">
                        IMPORTANT!
                    </h4>

                    <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">

                        <li>
                            Save downloaded S3 key pairs
                            in a secure location.
                        </li>

                        <li>
                            Lost credentials cannot be
                            recovered later.
                        </li>

                        <li>
                            AWS does not allow retrieval
                            of secret access keys.
                        </li>

                        <li>
                            Creating new credentials
                            disables old credentials and
                            requires updating EDI
                            Generator configuration.
                        </li>

                    </ul>

                </div>

                {/* Terms */}
                <div className="mb-6">
                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={accepted}
                            onChange={(e) =>
                                setAccepted(
                                    e.target.checked
                                )
                            }
                        />

                        Read and understood terms
                    </label>
                </div>

                {/* Action */}
                <button
                    disabled={!accepted}
                    className={`flex items-center gap-2 px-5 py-3 rounded-lg ${
                        accepted
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    <KeyRound size={18} />
                    Enable S3
                </button>

            </div>
        </div>
    );
}