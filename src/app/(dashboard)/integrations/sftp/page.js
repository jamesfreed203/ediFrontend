'use client';

import { useState } from 'react';

export default function SftpIntegrationPage() {
    const [withPassword, setWithPassword] =
        useState(false);

    const [existingKey, setExistingKey] =
        useState(false);

    return (
        <div>
            {/* Header */}
            <div className="mb-6 text-gray-500">
                <h1 className="text-3xl font-bold">
                    SFTP Integration
                </h1>

                <p className="text-gray-500 mt-1">
                    shopperon-ecom
                </p>
            </div>

            <div className="bg-white rounded-xl border p-6 max-w-4xl text-gray-500">

                <h2 className="text-xl font-semibold mb-4">
                    SFTP feature can be used to submit
                    and retrieve files via SFTP
                </h2>

                <p className="text-gray-600 mb-2">
                    MFT Gateway allows SFTP access via
                    username and private-key based
                    authentication.
                </p>

                <p className="text-gray-600 mb-2">
                    We are about to create a new SFTP
                    account and private key for you.
                </p>

                <p className="text-gray-600 mb-6">
                    If you already have a key pair,
                    you can use your existing public
                    key instead.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <strong>Warning:</strong> Do not
                    use "/" in partner/station
                    identifiers to maintain proper
                    SFTP file structure.
                </div>

                {/* Username */}
                <div className="mb-5">
                    <label className="block mb-2 font-medium">
                        SFTP Username
                    </label>

                    <input
                        type="text"
                        placeholder="sftp-username"
                        className="w-full md:w-96 border rounded-lg p-3"
                    />
                </div>

                {/* Key Type */}
                <div className="mb-5">
                    <label className="block mb-2 font-medium">
                        Private Key Type
                    </label>

                    <select className="w-full md:w-96 border rounded-lg p-3">
                        <option>
                            Choose from options
                        </option>

                        <option>
                            RSA
                        </option>

                        <option>
                            ED25519
                        </option>
                    </select>
                </div>

                {/* Password Checkbox */}
                <div className="mb-4">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={withPassword}
                            onChange={(e) =>
                                setWithPassword(
                                    e.target.checked
                                )
                            }
                        />

                        Add password for private key
                    </label>
                </div>

                {withPassword && (
                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder="Private Key Password"
                            className="w-full md:w-96 border rounded-lg p-3"
                        />
                    </div>
                )}

                {/* Existing Key */}
                <div className="mb-6">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={existingKey}
                            onChange={(e) =>
                                setExistingKey(
                                    e.target.checked
                                )
                            }
                        />

                        Enable with existing key pair
                    </label>
                </div>

                {existingKey && (
                    <div className="mb-6">
                        <textarea
                            rows={6}
                            placeholder="Paste Public Key"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>
                )}

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                    Enable SFTP
                </button>

            </div>
        </div>
    );
}