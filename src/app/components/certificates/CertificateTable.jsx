'use client';

import {
    Download,
    Trash2,
    Upload,
    Settings
} from 'lucide-react';

export default function CertificateTable({
    certificates,
}) {
    return (
        <div className="bg-white border rounded-xl overflow-hidden text-gray-500">

            <table className="w-full">
                <thead className="bg-gray-50 border-b">
                    <tr>
                        <th className="p-4">
                            <input type="checkbox" />
                        </th>

                        <th className="text-left p-4">
                            Common Name
                        </th>

                        <th className="text-left p-4">
                            Serial Number
                        </th>

                        <th className="text-left p-4">
                            Expire On
                        </th>

                        <th className="text-left p-4">
                            Type
                        </th>

                        <th className="text-left p-4">
                            Belongs To
                        </th>

                        <th className="p-4">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {certificates.map((cert) => (
                        <tr
                            key={cert.id}
                            className="border-b"
                        >
                            <td className="p-4">
                                <input
                                    type="checkbox"
                                />
                            </td>

                            <td className="p-4">
                                {cert.commonName}
                            </td>

                            <td className="p-4">
                                {cert.serialNumber}
                            </td>

                            <td className="p-4">
                                {cert.expireOn}
                            </td>

                            <td className="p-4">
                                <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">
                                    {cert.type}
                                </span>
                            </td>

                            <td className="p-4">
                                {cert.belongsTo}
                            </td>

                            <td className="p-4">
                                <div className="flex gap-2">
                                    <button>
                                        <Download
                                            size={16}
                                        />
                                    </button>

                                    {cert.type ===
                                        'Station' && (
                                        <>
                                            <button>
                                                <Settings
                                                    size={
                                                        16
                                                    }
                                                />
                                            </button>

                                            <button>
                                                <Upload
                                                    size={
                                                        16
                                                    }
                                                />
                                            </button>
                                        </>
                                    )}

                                    <button>
                                        <Trash2
                                            size={16}
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between items-center p-4 bg-gray-50">
                <div className="text-sm text-gray-500">
                    Selected 0 of{' '}
                    {certificates.length}
                    {' '}certificates
                </div>

                <div className="flex gap-2">
                    <button className="border px-3 py-1 rounded">
                        1
                    </button>
                </div>
            </div>

        </div>
    );
}