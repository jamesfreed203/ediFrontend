'use client';

import { useState } from 'react';

export default function WebhooksPage() {
    const [protocol, setProtocol] =
        useState('as2');

    const [settings, setSettings] =
        useState({
            retry: false,
            failureNotification: false,
            payloadSignature: false,
            customHeader: false,
        });

    const [webhooks, setWebhooks] =
        useState([]);

    const handleToggle = (field) => {
        setSettings((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const addWebhook = () => {
        setWebhooks([
            ...webhooks,
            {
                id: Date.now(),
                url: '',
                event: '',
            },
        ]);
    };

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-500">
                    Webhook Integration
                </h1>
            </div>

            <div className="bg-white rounded-xl border p-6 text-gray-500">

                {/* General Config */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4">
                        General Configurations
                    </h2>

                    {/* Tabs */}
                    <div className="border-b mb-6">
                        <div className="flex gap-2">
                            <button
                                onClick={() =>
                                    setProtocol('as2')
                                }
                                className={`px-4 py-2 ${
                                    protocol ===
                                    'as2'
                                        ? 'border-b-2 border-blue-600 text-blue-600'
                                        : ''
                                }`}
                            >
                                AS2
                            </button>

                            <button
                                onClick={() =>
                                    setProtocol(
                                        'sftp'
                                    )
                                }
                                className={`px-4 py-2 ${
                                    protocol ===
                                    'sftp'
                                        ? 'border-b-2 border-blue-600 text-blue-600'
                                        : ''
                                }`}
                            >
                                SFTP
                            </button>
                        </div>
                    </div>

                    {/* Webhook List */}
                    {webhooks.length === 0 ? (
                        <div className="mb-4 text-gray-500">
                            No webhooks configured
                        </div>
                    ) : (
                        <div className="space-y-4 mb-4">
                            {webhooks.map(
                                (webhook) => (
                                    <div
                                        key={
                                            webhook.id
                                        }
                                        className="border rounded-lg p-4"
                                    >
                                        <input
                                            type="text"
                                            placeholder="Webhook URL"
                                            className="w-full border rounded p-2 mb-3"
                                        />

                                        <select className="w-full border rounded p-2">
                                            <option>
                                                Select Event
                                            </option>

                                            <option>
                                                Message Received
                                            </option>

                                            <option>
                                                Message Sent
                                            </option>
                                        </select>
                                    </div>
                                )
                            )}
                        </div>
                    )}

                    <button
                        onClick={addWebhook}
                        className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg"
                    >
                        + Add New Webhook
                    </button>
                </div>

                {/* Advanced Config */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4">
                        Advanced Configurations
                    </h2>

                    <div className="space-y-4">

                        <label className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={
                                    settings.retry
                                }
                                onChange={() =>
                                    handleToggle(
                                        'retry'
                                    )
                                }
                            />

                            Enable Webhook Retry
                        </label>

                        <label className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={
                                    settings.failureNotification
                                }
                                onChange={() =>
                                    handleToggle(
                                        'failureNotification'
                                    )
                                }
                            />

                            Enable Webhook Failure Notification
                        </label>

                        <label className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={
                                    settings.payloadSignature
                                }
                                onChange={() =>
                                    handleToggle(
                                        'payloadSignature'
                                    )
                                }
                            />

                            Generate Signature For Webhook Payload
                        </label>

                        <label className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={
                                    settings.customHeader
                                }
                                onChange={() =>
                                    handleToggle(
                                        'customHeader'
                                    )
                                }
                            />

                            Add Custom Header
                        </label>

                    </div>
                </div>

                {/* Submit */}
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                    Integrate Webhooks
                </button>

            </div>
        </div>
    );
}