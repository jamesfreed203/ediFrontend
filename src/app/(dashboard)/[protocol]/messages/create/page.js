'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function MessageCreatePage() {
    const { protocol } = useParams();

    const isAs2 = protocol === 'as2';

    return (
        <div className="max-w-4xl text-gray-500">
            <div className="bg-white rounded-xl border shadow-sm p-6">

                {/* Protocol Tabs */}
                <div className="flex gap-2 mb-6">
                    <Link href="/as2/messages/create">
                        <button
                            className={`px-4 py-2 rounded-lg ${
                                isAs2
                                    ? 'bg-blue-600 text-white'
                                    : 'border'
                            }`}
                        >
                            AS2
                        </button>
                    </Link>
                    <Link href="/sftp/messages/create">
                        <button
                            className={`px-4 py-2 rounded-lg ${
                                !isAs2
                                    ? 'bg-blue-600 text-white'
                                    : 'border'
                            }`}
                        >
                            SFTP
                        </button>
                    </Link>
                </div>

                <form className="space-y-6">

                    {/* Partner */}
                    <div>
                        <label className="block mb-2 font-medium">
                            {isAs2
                                ? 'AS2 Partner'
                                : 'SFTP Partner'}
                        </label>

                        <select className="w-full border rounded-lg p-3">
                            <option>
                                Select Message Recipient
                            </option>
                        </select>
                    </div>

                    {/* AS2 Only */}
                    {isAs2 && (
                        <>
                            <div>
                                <label className="block mb-2 font-medium">
                                    AS2 Station
                                </label>

                                <select className="w-full border rounded-lg p-3">
                                    <option>
                                        Select Sending Identity
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    className="w-full border rounded-lg p-3"
                                />
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <label className="font-medium">
                                        Temporary Content Type Overrides
                                    </label>

                                    <button
                                        type="button"
                                        className="px-3 py-1 rounded bg-blue-600 text-white"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Upload */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Content
                        </label>

                        <div className="border-2 border-dashed rounded-xl p-10 text-center">
                            Drag files here or browse to upload
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                    >
                        Send
                    </button>

                </form>
            </div>
        </div>
    );
}